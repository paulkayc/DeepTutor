# Working agreement — The Bridge Help Centre website

This website belongs to The Bridge Help Centre. Its team is not technical and manages the site
through plain-English requests to Claude, plus the online editor (Pages CMS) for everyday content.
Claude handles all design, layout and technical changes. The website files live in the
`bridge-help-centre/` folder of the GitHub repository; run every npm command inside that folder.

## How changes go live
- Netlify builds and publishes the site automatically whenever the `main` branch changes
  (about 2–3 minutes). If a build fails, the previous version stays online.
- Staff also edit content in Pages CMS (https://app.pagescms.org), which saves straight to `main`.
  Always start from the latest `main` (pull first) so their edits are never overwritten.
- Work on a branch and open a pull request; Netlify shows a "Deploy Preview" link on the pull request
  so the team can check the change before merging. Only push straight to `main` if the team asks.

## For every change request
1. **Inspect first.** Read the relevant files (and screenshot the affected pages if the change is visual)
   before editing.
2. **Make the change directly** in the project files. Don't ask the owner to edit code.
3. **Preserve everything else.** Keep existing pages, content, links and features working unless the
   owner asks for them to change. Client text marked `// exact` must stay word for word.
4. **Check the work:** run `npm run build` (in this folder) and confirm it succeeds; for visual changes,
   check the page at phone (390 px) and desktop (1440 px) widths.
5. **Commit, push and open a pull request** (see "How changes go live"), and give the team the
   Deploy Preview link and the pull request link.
6. **Report back in plain English:** what changed and where to see it on the site, plus simple step-by-step
   instructions for anything the team must do themselves (e.g. click "Merge pull request", send a photo).
   Avoid jargon; explain any unavoidable technical term.
7. **Content that lives in the editor** (`src/content/*.json`): prefer telling the team where to change it in
   Pages CMS; if you do edit it, pull first so you start from their latest version.

When a request is ambiguous or would remove content, ask one short question first.
When the owner sends images, crop/optimise them (WebP, sensible size), place them under
`public/images/`, write descriptive alt text, and wire them in through the data files.

## Where things live
- **Editable content (changed by staff through Pages CMS):** `src/content/*.json`
  — events, gallery, about (director, story, vision, mission, team), contact (phone, email, hours,
  address, forms, bank, social), stats, home (top photo). Edit these JSON files for content changes,
  keep their keys unchanged, and keep `cms/.pages.yml` in step if you add or rename a field.
- **Extra pages** (staff page builder): one JSON file per page in `src/content/pages/` (file name = web
  address), rendered by `src/pages/[slug].astro` with `src/components/Blocks.astro`. Home page extra
  sections: `src/content/home-sections.json`. Block types: heading, text, image, imageText, gallery,
  quote, buttons, video (see `components.pageBlocks` in `cms/.pages.yml`). Text is formatted by
  `src/lib/rich-text.js` (escaped; paragraphs, - bullets, **bold**, auto-links). Menus come from
  `src/data/pages.js` (`menu`, `footerLinks`): up to 2 extra pages in the top menu, all in the footer.
- Home page headings/texts (hero, quote, Our Impact heading+photo, director/upcoming/gallery headings):
  `src/content/home-text.json`; pink contact band, footer texts/quick links and page names (menu labels, page
  hero titles/subtitles; addresses fixed): `src/content/site-text.json` (`nav` in site.js reads the labels).
  Read via `src/data/text.js`, where empty values fall back to the original wording.
- Our Services: `src/content/services.json` (editor → "Our Services"); each service keeps a hidden fixed `id`
  (its /programmes/#id link, used by programmes.astro audience links). `src/data/services.js` numbers them.
- `src/data/*.js` read and tidy the JSON (and hold the values, which are not in the editor).
- Colours, logo, website address, navigation: `src/config/site.js`
- Pages: `src/pages/`; shared pieces: `src/components/`; styles: `src/styles/global.css`
- Images: `public/images/` (gallery photos in `public/images/gallery/`)

## Previewing locally
`npm install` once, then `npm run dev` (http://localhost:4321). `npm run build` must pass before any
push; `npx astro check` (with @astrojs/check installed) should report 0 errors.

## Audit notes (keep these working)
- Photos: `tools/optimise-images.mjs` runs before every build (npm `prebuild`). It shrinks photos over
  1600 px / 600 KB, turns sideways phone photos upright and makes the `-640.webp` copies used by
  src/lib/images.js. (`tools/make-image-sizes.py` does the same job by hand.)
- Pages CMS (https://app.pagescms.org) edits the JSON in `src/content/`. Its settings are in
  `cms/.pages.yml`; in the organisation's GitHub repository that file lives at the repository root as
  `.pages.yml`. Staff edits arrive as commits on `main` — pull before changing content files.
- Security headers/CSP are generated at build (security-headers.mjs). If the inline start-up script in
  Base.astro changes, the hash updates automatically; re-run tools/update-vercel-headers.mjs for Vercel.
- External services allowed by the CSP: maps.google.com / www.google.com (map),
  docs.google.com / forms.gle (Get Involved Google Form, site.getInvolvedForm).
  Cloudflare Web Analytics (static.cloudflareinsights.com script, cloudflareinsights.com connect) is
  allowed only while `src/content/settings.json` has an analyticsToken (no cookies, so no consent banner).
- SEO: Base.astro outputs Organization + WebSite JSON-LD (and Event JSON-LD for upcoming programmes on
  Home), optional Google/Bing verification meta tags from settings.json, and `/llms.txt` (a summary for
  AI assistants, built from the content files).
  Adding any other third-party script, font, iframe or form service requires updating security-headers.mjs.
- Forms: `src/lib/forms.js` decides how a form link is shown. Google Forms (docs.google.com, forms.gle)
  are embedded; any other form link (e.g. Lovable) becomes a button that opens it in a new tab.
- Privacy Policy is the centre's own wording (src/pages/privacy.astro). Do not invent policy text.
- Past events hide themselves; the Upcoming section disappears when no future events exist.
- Official domain: https://www.thebridgehelpcentre.org (with www; the bare domain redirects to it). Owner confirmed photo consent for children (30 Oct 2026).
