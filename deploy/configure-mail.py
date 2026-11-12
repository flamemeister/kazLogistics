#!/usr/bin/env python3
"""Update Gmail app password without logging it or sending any email."""
import argparse
import getpass
import json
import os
from pathlib import Path
import smtplib
import ssl
import subprocess
import tempfile

MAIL_FILE = Path('/home/ubuntu/kazLogistics/server/.mail.env')

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Only verify saved SMTP authentication; no email is sent.')
    args = parser.parse_args()
    saved = {}
    for line in MAIL_FILE.read_text().splitlines():
        key, separator, value = line.partition('=')
        if separator and key.startswith('GSLOG_SMTP_'):
            saved[key] = json.loads(value)
    username = saved['GSLOG_SMTP_USER']
    password = saved['GSLOG_SMTP_PASSWORD'] if args.check else getpass.getpass('Новый пароль приложения Gmail (ввод скрыт): ').replace(' ', '')
    if not password:
        raise SystemExit('Пустой пароль: настройки не изменены.')
    try:
        with smtplib.SMTP('smtp.gmail.com', 587, timeout=10) as smtp:
            smtp.ehlo()
            smtp.starttls(context=ssl.create_default_context())
            smtp.ehlo()
            smtp.user, smtp.password = username, password
            smtp.auth('LOGIN', smtp.auth_login, initial_response_ok=False)
    except smtplib.SMTPAuthenticationError as exc:
        raise SystemExit(f'Gmail отклонил авторизацию, код {exc.smtp_code}. Настройки не изменены.') from None
    except Exception as exc:
        raise SystemExit(f'Не удалось проверить SMTP ({type(exc).__name__}). Настройки не изменены.') from None
    print('Авторизация Gmail успешна. Письма не отправлялись.')
    if args.check:
        return
    descriptor, temporary = tempfile.mkstemp(dir=MAIL_FILE.parent, prefix='.mail-update-')
    with os.fdopen(descriptor, 'w') as stream:
        stream.write('GSLOG_SMTP_USER=' + json.dumps(username) + '\nGSLOG_SMTP_PASSWORD=' + json.dumps(password) + '\n')
    os.replace(temporary, MAIL_FILE)
    subprocess.run(['sudo', 'docker', 'restart', 'django-app-container'], check=True, stdout=subprocess.DEVNULL, timeout=45)
    print('Пароль сохранён в закрытом файле, бэкенд перезапущен. Можно проверять форму.')

if __name__ == '__main__':
    main()
