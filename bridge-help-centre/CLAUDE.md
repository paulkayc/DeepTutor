# Working agreement — The Bridge Help Centre website

The site owner is not a programmer and manages this website through plain-English requests.
Claude handles all design, content, image placement and technical changes.

## For every change request
1. **Inspect first.** Read the relevant files (and screenshot the affected pages if the change is visual)
   before editing.
2. **Make the change directly** in the project files. Don't ask the owner to edit code.
3. **Preserve everything else.** Keep existing pages, content, links and features working unless the
   owner asks for them to change. Client text marked `// exact` must stay word for word.
4. **Check the work:** run `npm run build` (in this folder) and confirm it succeeds; for visual changes,
   check the page at phone (390 px) and desktop (1440 px) widths.
5. **Commit and push** to the working branch so the owner can `git pull` the update.
6. **Report back in plain English:** what changed and where to see it on the site, plus simple step-by-step
   instructions for anything the owner must do themselves (e.g. `git pull`, restart `npm run dev`,
   send a photo). Avoid jargon; explain any unavoidable technical term.

When a request is ambiguous or would remove content, ask one short question first.
When the owner sends images, crop/optimise them (WebP, sensible size), place them under
`public/images/`, write descriptive alt text, and wire them in through the data files.

## Where things live
- Contact details, colours, logo, form endpoints, social links: `src/config/site.js`
- Page content: `src/data/*.js` (services, stats, events, gallery, stories, about, home)
- Pages: `src/pages/`; shared pieces: `src/components/`; styles: `src/styles/global.css`
- Images: `public/images/` (gallery photos in `public/images/gallery/`)

## Gotcha
The repository root `.gitignore` ignores every `data/` folder. This folder's `.gitignore`
re-includes `src/data/`. Keep that rule, and check `git status` shows new data files before committing.

## Online preview for the owner
The owner previews the site through a private claude.ai link instead of running it locally:
https://claude.ai/artifact/EHmkxctig8LKz9GzX9CdZx
After each change: `npm run build`, then `python3 tools/make-preview.py dist <scratch folder>`,
then republish that folder to the same artifact URL (index.html as the page, every other file in `files`).

## Audit notes (keep these working)
- New photos: run `python3 tools/make-image-sizes.py` so `-640.webp` copies exist (picked up by src/lib/images.js).
- Security headers/CSP are generated at build (security-headers.mjs). If the inline start-up script in
  Base.astro changes, the hash updates automatically; re-run tools/update-vercel-headers.mjs for Vercel.
- External services allowed by the CSP: formspree.io (forms), maps.google.com / www.google.com (map).
  Adding any other third-party script, font, iframe or form service requires updating security-headers.mjs.
- Privacy Policy is the centre's own wording (src/pages/privacy.astro). Do not invent policy text.
- Past events hide themselves; the Upcoming section disappears when no future events exist.
- Official domain: https://thebridgehelpcentre.org (no www). Owner confirmed photo consent for children (30 Oct 2026).
