#!/usr/bin/env python3
"""Promote a checked production build with atomic releases and nginx rollback."""
import argparse
import datetime
import hashlib
import json
from pathlib import Path
import secrets
import subprocess
import tarfile
import tempfile

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--target', default='ubuntu@78.40.108.108')
    parser.add_argument('--control-path', required=True)
    args = parser.parse_args()
    ssh = ['ssh', '-o', 'ConnectTimeout=15', '-o', 'ServerAliveInterval=15', '-o', 'ControlPath=' + args.control_path, args.target]
    def remote(script):
        return subprocess.check_output(ssh + ['python3 -'], input=script, text=True)
    html = (ROOT/'dist/index.html').read_text()
    if 'noindex' in html or 'index, follow' not in html:
        parser.error('Run npm run build for production first')
    if subprocess.check_output(['git', 'status', '--porcelain'], cwd=ROOT, text=True).strip():
        parser.error('Commit the reviewed source before promotion')
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip()
    release = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ') + '-' + commit[:8] + '-' + secrets.token_hex(2)
    directory = '/var/www/gslog-production/releases/' + release
    backup = '/home/ubuntu/.gslog-production-backups/' + release
    files = {str(p.relative_to(ROOT/'dist')): hashlib.sha256(p.read_bytes()).hexdigest() for p in (ROOT/'dist').rglob('*') if p.is_file()}
    manifest = repr(json.dumps(files))
    setup = f'''
import json,hashlib,subprocess
from pathlib import Path
manifest=json.loads({manifest})
current=Path('/var/www/gslog-production/current')
base=current.resolve() if current.exists() else Path('/var/www/gslog-test/current').resolve()
subprocess.run(['sudo','install','-d','-m','755','{directory}'],check=True)
subprocess.run(['sudo','cp','-a',str(base)+'/.','{directory}/'],check=True)
missing=[]
for name,digest in manifest.items():
 p=base/name
 if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest()!=digest:missing.append(name)
print(json.dumps(missing))
'''
    changed = json.loads(remote(setup))
    with tempfile.TemporaryDirectory(prefix='gslog-production-') as temp:
        archive = Path(temp)/'delta.tgz'
        with tarfile.open(archive,'w:gz') as tar:
            for name in changed:
                tar.add(ROOT/'dist'/name,arcname=name)
        with archive.open('rb') as stream:
            subprocess.run(ssh + [f'sudo tar xzf - -C {directory}'],stdin=stream,check=True)
    configuration = repr((ROOT/'deploy/production.conf').read_text())
    activate = f'''
import hashlib,json,os,subprocess
from pathlib import Path
manifest=json.loads({manifest})
release=Path('{directory}')
for name,digest in manifest.items():
 assert hashlib.sha256((release/name).read_bytes()).hexdigest()==digest, name
old_assets=Path('/var/www/html/assets')
if old_assets.exists():subprocess.run(['sudo','cp','-a','--update=none',str(old_assets)+'/.',str(release/'assets')+'/'],check=True)
subprocess.run(['sudo','chmod','-R','a+rX',str(release)],check=True)
backup=Path('{backup}');backup.mkdir(parents=True,mode=0o700);os.chmod(backup.parent,0o700)
conf=Path('/etc/nginx/sites-available/gslog.kz')
(backup/'nginx.conf').write_bytes(conf.read_bytes())
current=Path('/var/www/gslog-production/current')
previous=os.readlink(current) if current.is_symlink() else None
(backup/'state.json').write_text(json.dumps({{'previous_release':previous,'production_commit':'{commit}','production_release':'{directory}'}}))
staged=backup/'production.conf';staged.write_text({configuration})
subprocess.run(['sudo','ln','-s','{directory}','/var/www/gslog-production/.current-{release}'],check=True)
subprocess.run(['sudo','mv','-Tf','/var/www/gslog-production/.current-{release}',str(current)],check=True)
try:
 subprocess.run(['sudo','install','-m','644',str(staged),str(conf)],check=True)
 subprocess.run(['sudo','nginx','-t'],check=True)
 subprocess.run(['sudo','systemctl','reload','nginx'],check=True)
 response=subprocess.check_output(['curl','-fsS','--resolve','gslog.kz:443:127.0.0.1','https://gslog.kz/'],text=True)
 assert 'index, follow' in response and 'noindex' not in response
except Exception:
 subprocess.run(['sudo','install','-m','644',str(backup/'nginx.conf'),str(conf)],check=True)
 if previous:
  subprocess.run(['sudo','ln','-s',previous,'/var/www/gslog-production/.rollback-{release}'],check=True)
  subprocess.run(['sudo','mv','-Tf','/var/www/gslog-production/.rollback-{release}',str(current)],check=True)
 subprocess.run(['sudo','nginx','-t'],check=True)
 subprocess.run(['sudo','systemctl','reload','nginx'],check=True)
 raise
print('PRODUCTION_RELEASE={directory}')
print('ROLLBACK_BACKUP={backup}')
print('COMMIT={commit}')
'''
    print(remote(activate))


if __name__ == '__main__':
    main()
