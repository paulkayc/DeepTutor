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

## 2. Connect thebridgehelpcentre.org
1. In the Netlify site: **Domain management → Add a domain** → type `thebridgehelpcentre.org` → **Verify → Add domain**.
   Netlify also adds `www.thebridgehelpcentre.org` automatically.
2. Netlify then shows how to point the domain. Choose ONE:
   - **Easiest: use Netlify DNS.** Netlify shows 4 "name servers" (like `dns1.p01.nsone.net`).
     Log in where you bought the domain, find **Nameservers**, choose **custom**, and paste those 4.
   - **Or keep your current DNS** and add these records where you bought the domain
     (use the exact values Netlify shows you):
     - Type **A**, name `@`, value Netlify's load-balancer IP (shown by Netlify, currently `75.2.60.5`)
     - Type **CNAME**, name `www`, value your `something.netlify.app` address
3. Wait (usually minutes, up to 24–48 hours). Netlify then switches on **HTTPS** automatically
   (Domain management → HTTPS shows "Your site has HTTPS enabled").
4. Make sure `thebridgehelpcentre.org` (without www) is the **Primary domain**.

## 3. After it is live
- Open https://thebridgehelpcentre.org on your phone and click through every page.
- Submit the Google Form once and check **Responses** in Google Forms.
- Tap the WhatsApp, phone, email, map and social buttons.
- Free check of real-visitor speed later: https://pagespeed.web.dev

Every change pushed to the branch is published automatically by Netlify.
