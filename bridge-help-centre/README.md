# The Bridge Help Centre — website

A fast, accessible static website built with [Astro](https://astro.build) and Tailwind CSS.
Every page works without JavaScript, and all the text, photos and contact details you will
want to change live in a few plain data files. You never need to edit the layout code.

## Run it on your computer

You need [Node.js](https://nodejs.org) 18.20 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321. Run `npm run build` to create the finished site in `dist/`.

## Put it online (one step)

- **Netlify:** "Add new site → Import from Git", choose this folder as the base directory. The
  settings in `netlify.toml` are picked up automatically.
- **Vercel:** "Add New Project", set the root directory to `bridge-help-centre`. Vercel detects Astro.

## Where everything lives

| What | File |
| --- | --- |
| Phone, email, WhatsApp, hours, address, map, brand colours, logo, form endpoints, social links, bank details | `src/config/site.js` |
| The five services (names, bullets, photos) | `src/data/services.js` |
| Statistics | `src/data/stats.js` |
| Upcoming programmes | `src/data/events.js` |
| Gallery | `src/data/gallery.js` + `public/images/gallery/` |
| Success stories | `src/data/stories.js` |
| Director, story, vision, values, team, milestones | `src/data/about.js` |
| Home page hero and intro photos | `src/data/home.js` |

The top of `src/config/site.js` lists every placeholder and the file it lives in. Placeholder text
always sits in square brackets (for example `[Add vision statement]`) and shows in grey italics on
the site, so it's easy to spot anything that still needs filling in.

## Common tasks

### Replace the logo
The logo is already in place at `public/images/logo.webp` (with a `logo.png` copy). The client's
original artwork is kept as `public/images/logo-original.jpg`. To change it:
1. Save the new logo in `public/images/`. A file with a transparent background works best.
2. In `src/config/site.js`, set `logo` to its path and `logoWidth` / `logoHeight` to its size in pixels.
3. Replace `public/favicon-48.png` and `public/apple-touch-icon.png` (180 × 180) with square
   versions of the logo mark, and `public/og-image.jpg` with a 1200 × 630 px image. The
   og-image is what people see when the site is shared on WhatsApp or social media.

### Add photos
Put the image in `public/images/` (sub-folders are fine) and set the matching `image`, `photo` or
`src` field to its path, for example `image: "/images/programmes/counselling.jpg"`. The dashed
placeholder is swapped for the photo automatically. Tips:
- Save photos as **.webp** (or a well-compressed .jpg) at the recommended size shown in each placeholder.
- Write a short `alt` description of what the photo shows. Screen-reader users rely on it.
- Only use photos of children with the right consent. For stories, change names where needed.

### Add an upcoming programme
In `src/data/events.js`, copy one `{ … }` block, paste it into the list and change the title, date
(`"YYYY-MM-DD"`), location, description and image. The "Register Interest" WhatsApp message is
created for you. The next upcoming programme with slideshow images is featured on the Home page.

### Add a gallery image
Put the photo in `public/images/gallery/`. Then fill in one line in `src/data/gallery.js`:

```js
{ src: "/images/gallery/outreach-lagos.webp", alt: "Students at a school outreach in Lagos", caption: "School outreach", category: "School Outreach" },
```

The Home page ("Moments from Our Work") shows the first 8 images.

### Update the statistics
In `src/data/stats.js`, replace `"[NUMBER]"` with a number (e.g. `1200`) and update `statsNote`.
The numbers count up gently on screen, except for visitors who have turned on reduced motion.

### Connect the forms
The Contact, Get Involved and newsletter forms send to any service that accepts a normal HTML form
post. To use [Formspree](https://formspree.io) (free tier):
1. Sign up with **thebridgehelpcenter@gmail.com** and create a form for each one.
2. Copy each endpoint (e.g. `https://formspree.io/f/abcdwxyz`) into `forms` in `src/config/site.js`.

Until an endpoint is set, a submitted form shows a friendly message that points people to WhatsApp
and email, so nobody's message is silently lost. Web3Forms and Getform work the same way.

### Show bank details for supporters
Fill in `supportDetails` in `src/config/site.js`, for example
`{ bank: "…", accountName: "…", accountNumber: "…" }`. The block appears on the Get Involved page.
While `supportDetails` is `null`, the block stays hidden.

### Add the map
In Google Maps, go to Share → Embed a map, copy the address inside `src="…"`, and paste it into
`mapEmbedUrl` in `src/config/site.js`.

## Accessibility and performance notes
- Colours: baby blue `#89CFF0`, magenta `#EC268F`, near-black `#111827` and white. Small magenta text
  (eyebrow labels, dates) uses a slightly deeper shade of the same magenta, so it meets the WCAG AA
  4.5:1 contrast ratio on white.
- Manrope is self-hosted (from the `@fontsource` package) and preloaded, so the site doesn't wait
  on a request to Google Fonts before showing text.
- The hero headline shrinks on small phones so that each sentence stays on one line.

## Before going live (checklist)
1. **Website address:** set `url` in `src/config/site.js` to the real domain (or set a `SITE_URL`
   environment variable on the host). It is used for search engines and sharing previews.
2. **Forms:** create Formspree forms (or similar) and paste the two endpoints into `forms` in
   `src/config/site.js`. Until then the forms show a WhatsApp/email fallback instead of sending.
3. **Privacy:** replace the interim text in `src/pages/privacy.astro` with the centre's own policy,
   then set `privacyPolicyReady: true` in `src/config/site.js`.

## Maintenance tools
- `python3 tools/make-image-sizes.py`: after adding photos, creates lighter 640px copies that
  phones use automatically.
- Security headers (Content-Security-Policy etc.) are written to `dist/_headers` by every build
  (`security-headers.mjs`). Netlify and Cloudflare Pages apply this automatically. For Vercel, run
  `node tools/update-vercel-headers.mjs` after building when the build warns that vercel.json is out of date.
- `python3 tools/make-preview.py dist <folder>`: makes the flat copy used for the online preview link.
- Type check (optional): `npm install --no-save @astrojs/check typescript` then `npx astro check`.
