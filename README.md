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

The homepage uses real, locally hosted ship footage from Pexels (provenance and license in `public/media/video/ATTRIBUTION.md`). The desktop loop is 2.9 MB; mobile uses a separate 1 MB version. A lightweight poster appears first; footage loads only near the viewport and plays muted. The control pauses/resumes playback, and offscreen/hidden-tab playback stops. Reduced-motion and data-saver users receive the still image without a video request. Playback failure retains the poster.

## Service hero films

All seven detail pages use `ServiceHero` and the shared `VideoScene` player, also used on the homepage. Headings sit beside the film on desktop and above it on phones. The 16:9 media frame uses `object-fit: contain` for both poster and footage: keep the complete image visible instead of clipping it into a shallow background banner. Original service posters and translations are independent and remain unchanged.

Each service has appropriate real footage: road truck, aircraft taking off, moving freight train, port crane, sailing ship for multimodal transport, low-loader carrying an excavator for oversized transport, and container terminal for depot services. The six additional clips have desktop/mobile MP4s and matching posters in `public/media/services`; per-clip attribution files record their original pages, creators and licenses. Multimodal reuses the existing ship loop. Videos are silent, controlled by the visible pause button, stopped offscreen/in hidden tabs, and skipped for reduced-motion/data-saver users. Only the current page's clip is requested.

## Interactive freight experiences

`src/experience` owns the cargo journey and four-language experience controls, separately from the pinned marketing dictionaries. The cargo journey reuses existing photos, service titles and descriptions. Desktop progress follows normal scrolling through four schematic transport stages; chapter buttons and a skip link to the following company section remain available. Phones and reduced-motion layouts use a normal-height, manually selected scene. This is an illustration of possible transport stages, not a claim that every shipment uses each mode.

The customer requested removal of the 3D container from the cargo journey and the entire “Logistics in detail” container studio. Keep both removed, including their explore-container link. Original container transportation/depot services and posters remain part of the original content. Keep the original service posters before the cargo journey on the homepage.

## Maps and transportation geography

Contacts uses MapLibre GL JS with a local, green OpenFreeMap style and the unchanged office coordinates. It includes a pulse marker, an address card, recentering, zoom, fullscreen, and a keyless external directions link. The homepage globe uses a local, simplified Natural Earth dataset; regional arcs are explicitly schematic and are sourced from the original service descriptions. Both map modules are loaded only near the viewport and share a separately bundled engine/worker. Particles respect pause, offscreen/tab visibility, and reduced motion. Map UI copy is localized separately so the original translation files remain byte-for-byte unchanged. Data sources and attribution are documented in `public/maps/README.md`.

Map expansion uses a top-layer dialog with focus trapping and Escape-to-close instead of requiring the browser Fullscreen API. The same canvas stays mounted, and both camera sizing and page scrolling are restored on close. This also works inside embedded browsers.
