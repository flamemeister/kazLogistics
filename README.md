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

## Consultation form

The form matches the existing Django serializer: name up to 100 characters, required email up to 254 characters, and phone normalized from common formatting to a maximum of 15 characters. A request uses the unchanged name/phone/email/comment payload. HTTP 400 field errors are highlighted; network/server failures preserve inputs. Duplicate submissions are blocked while a request is pending.

No airplane or route is displayed before submission. A valid submit opens a full-viewport, top-layer dialog with a detailed airliner following a curved route from A to B. The flight waits short of B during the actual request and reaches its destination only after a successful server response. It automatically closes two seconds after the visual arrival; loading/error states do not auto-close. Errors never show an arrival; reduced-motion users see static state changes. The dialog supports Escape/close, focus containment, and scroll restoration; closing the animation does not cancel or repeat the request. Original success/error marketing wording remains pinned in `src/locales`, with new operation labels localized separately in `src/consultation`.

SMTP credentials previously embedded in the backend settings were rejected by Gmail (535 BadCredentials). SMTP configuration now reads a server-only, mode-600 `.mail.env` file; it and credential backups must never enter this checkout or any archive. The owner updates the app password interactively with `/home/ubuntu/gslog-mail-setup.py` on the server. That helper authenticates without sending email and writes/restarts the backend only after successful Gmail authentication. Live inbox delivery requires a separate authorized submission; QA uses an in-memory mail backend.

The branded customer acknowledgement and administrator notification live in `deploy/email-templates/email`, with a shared table-based layout and request-details partial. These are deployed separately to the existing Django `api/templates/email` directory. Critical presentation uses inline styles; mobile details stack, and user content remains escaped. The footer uses Django's current-year tag (2026 at delivery). The transparent, email-compatible PNG logo is served at the stable `/media/email/logo-white.png` path; retain that asset in future frontend releases. Existing email subjects, recipients and send logic are unchanged.

## Content and visual constraints

Keep the customer's original seven service posters and all four language variants in `public/media/cards`. Display each complete poster without cropping or replacing it with an icon-only card. Use the existing transparent `logo-white.webp` for header and footer, with no opaque logo background. Footer copyright is 2026. Motion is progressive enhancement and must respect reduced-motion preferences. Marketing copy and backend remain unchanged unless explicitly requested.

The language switcher retains the original country flags for Kazakh, Russian, English, and Chinese in both its selected state and dropdown, including mobile layouts.

The homepage uses real, locally hosted ship footage from Pexels (provenance and license in `public/media/video/ATTRIBUTION.md`). The desktop loop is 2.9 MB; mobile uses a separate 1 MB version. A lightweight poster appears first; footage loads only near the viewport and plays muted. The customer requested no pause/play buttons anywhere; video playback stops automatically offscreen or in a hidden tab. Reduced-motion and data-saver users receive the still image without a video request. Playback failure retains the poster.

## Service hero films

All seven detail pages use `ServiceHero` and the shared `VideoScene` player, also used on the homepage. The customer's latest direction is a full-width, first-screen video background with light darkening and the title overlaid, like the earlier photo banners. Use `object-fit: cover` for poster and footage; responsive framing fills the viewport below the header. Do not show pause/play controls or the service sequence counters (e.g. 07 / 07). The Great Steppe Logistics eyebrow is slightly larger for readability. This supersedes the earlier separate, uncropped 16:9 media-panel layout. Original service posters and translations are independent and remain unchanged.

Each service has appropriate real footage: road truck, aircraft taking off, moving freight train, port crane, sailing ship for multimodal transport, low-loader carrying an excavator for oversized transport, and container terminal for depot services. The six additional clips have desktop/mobile MP4s and matching posters in `public/media/services`; per-clip attribution files record their original pages, creators and licenses. Multimodal reuses the existing ship loop. Videos are silent, stopped automatically offscreen/in hidden tabs, and skipped for reduced-motion/data-saver users. Only the current page's clip is requested.

## Interactive freight experiences

`src/experience` owns the cargo journey and four-language experience controls, separately from the pinned marketing dictionaries. The cargo journey reuses existing photos, service titles and descriptions. Desktop progress follows normal scrolling through four schematic transport stages; chapter buttons and a skip link to the following company section remain available. Phones and reduced-motion layouts use a normal-height, manually selected scene. This is an illustration of possible transport stages, not a claim that every shipment uses each mode.

The customer requested removal of the 3D container from the cargo journey and the entire “Logistics in detail” container studio. Keep both removed, including their explore-container link. Original container transportation/depot services and posters remain part of the original content. Keep the original service posters before the cargo journey on the homepage.

## Maps and transportation geography

Contacts uses MapLibre GL JS with a local, green OpenFreeMap style and the unchanged office coordinates. It includes a pulse marker, an address card, recentering, zoom, fullscreen, and a keyless external directions link. The homepage globe uses a local, simplified Natural Earth dataset; regional arcs are explicitly schematic and are sourced from the original service descriptions. Both map modules are loaded only near the viewport and share a separately bundled engine/worker. Particles respect offscreen/tab visibility and reduced motion; the manual pause control is removed as requested. Map UI copy is localized separately so the original translation files remain byte-for-byte unchanged. Data sources and attribution are documented in `public/maps/README.md`.

Map expansion uses a top-layer dialog with focus trapping and Escape-to-close instead of requiring the browser Fullscreen API. The same canvas stays mounted, and both camera sizing and page scrolling are restored on close. This also works inside embedded browsers.
