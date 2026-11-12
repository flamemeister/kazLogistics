# Great Steppe Logistics — test frontend

A separate React/Vite frontend for test.gslog.kz, preserving the original four translation dictionaries (Kazakh, Russian, English, Chinese) and the existing Django backend.

## Development

```
npm ci
npm run dev
npm run test
npm run lint
npm run build
```

`src/app` owns routing and language configuration. `src/pages` composes pages, `src/ui` contains shared layout and accessible controls, `src/data/services.js` defines the seven directions, and `src/lib/api.js` owns API transport. All backend requests are relative to the current origin. Deployment routing is documented in `deploy/README.md`.

The original marketing copy is retained verbatim in `src/locales`. Tests pin its original file hashes. Photos are responsive WebP versions of existing assets; Manrope is self-hosted under its OFL license. No TLS keys are required for builds. Service routes are lazy-loaded. The test domain is excluded from indexing.

Production gslog.kz and the backend are independent of this checkout.

## Content and visual constraints

Keep the customer's original seven service posters and all four language variants in `public/media/cards`. Display each complete poster without cropping or replacing it with an icon-only card. Use the existing transparent `logo-white.webp` for header and footer, with no opaque logo background. Footer copyright is 2026. Motion is progressive enhancement and must respect reduced-motion preferences. Marketing copy and backend remain unchanged unless explicitly requested.
