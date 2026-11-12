# Test environment

- URL: https://test.gslog.kz
- Frontend listener: 127.0.0.1:8081 (nginx, static production build).
- Host nginx terminates TLS and forwards test.gslog.kz to the frontend listener.
- `/api/` and `/chat/` forward to the existing backend at 127.0.0.1:8009. The existing backend Host header is retained. No backend changes.
- Source: /home/ubuntu/gslog-frontend-test
- Releases: /var/www/gslog-test/releases/<release>
- Active release: /var/www/gslog-test/current
- Host config: /etc/nginx/sites-available/test.gslog.kz
- Frontend config: /etc/nginx/sites-available/gslog-test-frontend
- TLS: /etc/letsencrypt/live/test.gslog.kz (existing certbot timer and reload hook).
- Production gslog.kz remains on its existing source and root.

Build locally with `npm ci && npm run test && npm run lint && npm run build`.
Upload the source excluding node_modules, original, .git, and artifacts. Upload `dist` to a new release directory and atomically update `current` with `ln -sfn`/`mv -T`. Validate `nginx -t` before reloading host configuration. Frontend-only releases require no service restart.

Rollback: point `/var/www/gslog-test/current` at the previous release. Keep backend configuration and database untouched.

The test site declares noindex/nofollow. No credentials or TLS private keys belong in this repository. Form integration must be tested with synthetic empty payloads or mocks; do not send real consultation messages during QA.

## Repeatable publication

`python3 deploy/publish.py` runs tests, lint, and build, transfers the source and an isolated static release, retains the preceding release's immutable JS chunks, and atomically switches the current symlink. It does not modify nginx, backend code, backend settings, or the database. Pass `--control-path` to reuse an already authenticated SSH connection. There are no passwords in the script. Existing source state and prior releases remain available.

The frontend vhost compresses JS/CSS/JSON/GeoJSON and serves `.geojson` with the correct media type under `/maps/`. Apply `deploy/frontend.conf` only to the test frontend vhost; validate nginx and retain a backup before reloading. The mapping engine and worker are lazy chunks, and the globe dataset is served locally. OpenFreeMap serves the office basemap directly to the browser without credentials.

## Consultation SMTP restoration — 2026-11-12

The existing Gmail SMTP credentials were rejected with 535 BadCredentials. With the owner's authorization, only the backend SMTP configuration was changed: `server/core/settings.py` reads `GSLOG_SMTP_USER` and `GSLOG_SMTP_PASSWORD` from `/home/ubuntu/kazLogistics/server/.mail.env` and uses a 10-second SMTP timeout. The dedicated environment file is mode 600 and excluded via that repository's `.git/info/exclude`. Never copy it, the backend settings backup, or any password into this frontend checkout or publish archives.

The owner replaced the Gmail app password using `/home/ubuntu/gslog-mail-setup.py`. The helper hides password input, verifies Gmail authentication without sending email, writes the private file only on success, and restarts `django-app-container`. Authentication was also verified with Django's actual mail connection inside the container. Protected configuration backups are outside both application repositories under `/home/ubuntu/.gslog-mail-backups/`.

Consultation views, serializers, database, recipient addresses, and chat business logic were not changed. The frontend now matches the serializer's required email/name/phone limits. Backend endpoint/template tests use Django's in-memory email backend; a real request sends an administrator notification and a customer acknowledgement, so live mail checks require explicit authorization or the owner's own submission.

With the owner's explicit authorization, one marked technical test request was submitted through the deployed form with `info@gslog.kz` as the customer address. The endpoint completed both existing mail send calls and returned success; the form reset and the flight animation reached its destination. Both messages target `info@gslog.kz`; final inbox/spam-folder receipt is checked by the owner.

## Branded consultation emails — 2026-11-12

The owner subsequently authorized redesign of both email templates. The sources in `deploy/email-templates/email/` replace `api/templates/email/admin_notification.html` and `consultation_email.html` and add shared `base.html` and `request_details.html`. Back up the existing directory under the protected mail-backup area before replacing files; install shared dependencies first, then the two entry templates. Render and test through Django with its in-memory mail backend before restarting `django-app-container` to clear any cached templates. Do not modify SMTP configuration, views, recipient addresses or the database for presentation changes.

Publish the current frontend PNG logo at `https://test.gslog.kz/media/email/logo-header-2026.png` before activating the email templates. Test responsive layouts, escaping of user input, blank comments and the current-year footer. These changes do not send test mail; a new real mail check still needs explicit authorization.

The customer selected the artwork from the production header (`logo_new_3-Csj9INUs.png`) as the canonical logo. Web and email derivatives use versioned URLs to avoid retaining the prior artwork in browser/mail image caches. Keep the previous email logo URL available for messages already sent.
