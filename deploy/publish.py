#!/usr/bin/env python3
"""Publish a frontend-only release; never restart or modify Django."""
import argparse
import datetime
import secrets
import subprocess
import tarfile
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = '/home/ubuntu/gslog-frontend-test'
RELEASES = '/var/www/gslog-test/releases'
CURRENT = '/var/www/gslog-test/current'


def run(args, **kwargs):
    return subprocess.run(args, check=True, **kwargs)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--target', default='ubuntu@78.40.108.108')
    parser.add_argument('--control-path')
    parser.add_argument('--skip-checks', action='store_true', help='Use only after checks passed for the current source.')
    args = parser.parse_args()
    ssh = ['ssh', '-o', 'ConnectTimeout=15']
    if args.control_path:
        ssh += ['-o', 'ControlPath=' + args.control_path]
    ssh += [args.target]
    if not args.skip_checks:
        for task in ['test', 'lint', 'build']:
            run(['npm', 'run', task], cwd=ROOT)
    if not (ROOT / 'dist/index.html').is_file():
        parser.error('dist/index.html is missing')
    release = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ') + '-' + secrets.token_hex(3)
    remote = RELEASES + '/' + release
    with tempfile.TemporaryDirectory(prefix='gslog-publish-') as tmp:
        dist = Path(tmp) / 'dist.tgz'
        with tarfile.open(dist, 'w:gz') as tar:
            for entry in (ROOT / 'dist').iterdir():
                tar.add(entry, arcname=entry.name)
        source = Path(tmp) / 'source.tgz'
        ignored = {'node_modules', 'dist', 'original', 'original-source.tar.gz', '.git', 'artifacts', '.env'}
        with tarfile.open(source, 'w:gz') as tar:
            for entry in ROOT.iterdir():
                if entry.name not in ignored and not entry.name.startswith('.env.'):
                    tar.add(entry, arcname=entry.name)
        with source.open('rb') as stream:
            run(ssh + [f'set -eu; mkdir -p {SOURCE}; tar xzf - -C {SOURCE}'], stdin=stream)
        with dist.open('rb') as stream:
            run(ssh + [f'set -eu; sudo install -d -m 755 {remote}; sudo tar xzf - -C {remote}; sudo chmod -R a+rX {remote}'], stdin=stream)
        # Retain immutable chunks used by browsers still running the preceding release.
        script = f'''set -eu
if [ -d {CURRENT}/assets ]; then sudo cp -a --update=none {CURRENT}/assets/. {remote}/assets/; fi
test -s {remote}/index.html
sudo ln -s {remote} /var/www/gslog-test/.current-{release}
sudo mv -Tf /var/www/gslog-test/.current-{release} {CURRENT}
curl -fsS -o /dev/null http://127.0.0.1:8081/
printf 'RELEASE=%s\\n' {remote}
'''
        run(ssh + [script])
    print('Published https://test.gslog.kz/')


if __name__ == '__main__':
    main()
