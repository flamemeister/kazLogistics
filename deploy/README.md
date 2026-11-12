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
