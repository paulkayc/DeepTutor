# Putting the website online with Netlify

Everything the build needs is already set up in `netlify.toml` (build command, output folder,
Node.js 24, the www → thebridgehelpcentre.org redirect). Security headers are created by the build.

## 1. Create the Netlify site (one time)
1. Go to https://app.netlify.com/signup and choose **Sign up with GitHub** (use the GitHub account
   that owns `paulkayc/DeepTutor`).
2. Click **Add new site → Import an existing project → GitHub**. Allow Netlify to see the
   `DeepTutor` repository when GitHub asks.
3. Pick **paulkayc/DeepTutor** and fill in:
   - **Branch to deploy:** `claude/bold-clarke-g3jnxm`
   - **Base directory:** `bridge-help-centre`
   - Leave build command and publish directory as Netlify fills them in
     (`npm run build` and `bridge-help-centre/dist`).
4. Click **Deploy**. After 1–2 minutes you get a temporary address like
   `something.netlify.app`. Open it and check the site.

## 2. Connect thebridgehelpcentre.org (domain registered at Cloudflare)
Cloudflare-registered domains must keep Cloudflare DNS, so do NOT change nameservers.

**In Netlify**
1. Your site → **Domain management → Add a domain** → `thebridgehelpcentre.org` → **Verify**.
   If Netlify says the domain is already registered, choose **Add domain** anyway.
2. Netlify also adds `www.thebridgehelpcentre.org`. Note your Netlify address (e.g. `something.netlify.app`).
3. Make `thebridgehelpcentre.org` the **Primary domain** (⋯ menu next to it → Set as primary domain).

**In Cloudflare** (dash.cloudflare.com → click `thebridgehelpcentre.org` → **DNS → Records**)
1. Delete any existing **A**, **AAAA** or **CNAME** records named `@`/`thebridgehelpcentre.org` or `www`
   (e.g. Cloudflare "parking" records). Leave MX/TXT email records alone.
2. **Add record:** Type `CNAME`, Name `@`, Target `something.netlify.app`, **Proxy status: DNS only (grey cloud)**, Save.
3. **Add record:** Type `CNAME`, Name `www`, Target `something.netlify.app`, **Proxy status: DNS only (grey cloud)**, Save.

The grey cloud ("DNS only") matters: with the orange cloud on, Netlify cannot create the
site's security certificate.

**Back in Netlify**
4. Domain management shows both domains as verified within minutes (allow up to a few hours).
5. **HTTPS → Verify DNS configuration → Provision certificate.** When it says
   "Your site has HTTPS enabled", https://thebridgehelpcentre.org is live.

## 3. After it is live
- Open https://thebridgehelpcentre.org on your phone and click through every page.
- Submit the Google Form once and check **Responses** in Google Forms.
- Tap the WhatsApp, phone, email, map and social buttons.
- Free check of real-visitor speed later: https://pagespeed.web.dev

Every change pushed to the branch is published automatically by Netlify.
