# VentureChords (PWA-ready)

This repository contains a beginner-friendly chord progression tool. This branch adds/updates files to make the app installable as a standalone PWA and wires up automated Workbox-based service worker generation.

## What changed / was added
- index.html and 404.html: manifest link is absolute (`/manifest.json`) and a service-worker registration snippet registers `/sw.js`.
- manifest.json: `start_url` and `scope` set to `/`. PNG fallbacks added to `icons`.
- Workbox automation: config and a node script to generate a production service worker that precaches your built assets.
- Placeholder PNG icons are recommended (replace them with designed icons if you have them).
- README includes local run/test instructions and notes about icons &amp; caching.

## Install and build (recommended)
1. Install dependencies (adds workbox-build as a dev dependency):
```
npm install
npm install --save-dev workbox-build
```

2. Build the project as usual (your existing build process). For users without a special build step, you can serve the repository root for testing.

3. Generate the service worker (this uses a node script that calls workbox-build):
```
npm run generate-sw
```

4. Serve locally on localhost (HTTPS not required for localhost SW):
```
# Example using serve:
npm install -g serve
serve -s .
# or
npx http-server -c-1 .
```

5. Open Chrome and check DevTools -&gt; Application:
- Manifest: verify `start_url`, `display` and icons.
- Service Workers: confirm registration and that it is controlling the page.
- Run Lighthouse (Audits) to see PWA checklist and score.

## Notes / recommendations
- PNG icons: Chrome/Lighthouse prefers raster PNG icons sized 192x192 and 512x512 to consider the app installable. Replace `/icon-192.png` and `/icon-512.png` with your designed PNGs.
- Automated SW (Workbox): This setup generates a SW that precaches built assets including hashed filenames. If your build emits hashed filenames, run the generation step after each build so the SW precache list is up-to-date.
- Hosting: Production must be served over HTTPS (GitHub Pages, Netlify, Vercel all OK). Localhost is treated as secure for testing.

## Want me to do more?
I can:
- Replace placeholder PNGs with nicer icons (if you provide images).
- Split Workbox automation into a separate PR if you prefer smaller diffs.
