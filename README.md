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

The language switcher retains the original country flags for Kazakh, Russian, English, and Chinese in both its selected state and dropdown, including mobile layouts.

The homepage's existing ship photograph has a lightweight 2.5D sailing effect with subtle water highlights. The motion control can pause it; animations also stop offscreen, in a hidden tab, and for reduced-motion preferences. Mobile movement is deliberately smaller. This effect does not require a video download or backend changes.

## Maps and transportation geography

Contacts uses MapLibre GL JS with a local, green OpenFreeMap style and the unchanged office coordinates. It includes a pulse marker, an address card, recentering, zoom, fullscreen, and a keyless external directions link. The homepage globe uses a local, simplified Natural Earth dataset; regional arcs are explicitly schematic and are sourced from the original service descriptions. Both map modules are loaded only near the viewport and share a separately bundled engine/worker. Particles respect pause, offscreen/tab visibility, and reduced motion. Map UI copy is localized separately so the original translation files remain byte-for-byte unchanged. Data sources and attribution are documented in `public/maps/README.md`.

Map expansion uses a top-layer dialog with focus trapping and Escape-to-close instead of requiring the browser Fullscreen API. The same canvas stays mounted, and both camera sizing and page scrolling are restored on close. This also works inside embedded browsers.
