# Putting the website online (GitHub + Netlify)

The project is ready to deploy. Everything Netlify needs is already in `netlify.toml`:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output (publish) folder | `dist` |
| Node.js version | 24 |
| Base directory | *(leave empty)* |

No secret keys or passwords are needed. Security headers and the sitemap are created by the build.

## A. Put the project in a new private GitHub repository (GitHub Desktop)
1. **Unzip the website.** Right-click `bridge-help-centre.zip` → **Extract All…** → choose your
   **Documents** folder → **Extract**. You now have `Documents\bridge-help-centre`.
2. **Install GitHub Desktop** from https://desktop.github.com and open it.
   Click **Sign in to GitHub.com** and log in (create a free GitHub account first if needed).
3. **Turn the folder into a repository.** In GitHub Desktop: **File → Add local repository…** →
   **Choose…** → select `Documents\bridge-help-centre` → **Add repository**.
   It will say *"This directory does not appear to be a Git repository"* → click
   **create a repository** → leave the name as `bridge-help-centre`, leave
   **Git ignore** as *None* (the project already has one) → **Create repository**.
4. **Upload it privately.** Click **Publish repository** (top bar). Make sure
   **Keep this code private** is ticked → **Publish repository**.
5. **Check it.** On https://github.com click your profile picture → **Your repositories** →
   `bridge-help-centre`. It should show a 🔒 **Private** label and folders like `src`, `public`.

## B. Create the Netlify site
1. Go to https://app.netlify.com/signup → **Sign up with GitHub**.
2. **Add new site → Import an existing project → GitHub.** When GitHub asks which
   repositories Netlify may see, choose **Only select repositories → bridge-help-centre** → **Install**.
3. Pick **bridge-help-centre**. Check: Branch **main**, Base directory **empty**,
   Build command `npm run build`, Publish directory `dist`. Click **Deploy**.
4. After 1–2 minutes you get a temporary address like `something.netlify.app`. Open it and look around.

## C. Connect thebridgehelpcentre.org (domain at Cloudflare)
Cloudflare-registered domains must keep Cloudflare DNS, so do NOT change nameservers.

**In Netlify:** Domain management → **Add a domain** → `thebridgehelpcentre.org` → Verify → Add.
Then ⋯ next to **www.thebridgehelpcentre.org** → **Set as primary domain**.

**In Cloudflare** (dash.cloudflare.com → `thebridgehelpcentre.org` → **DNS → Records**):
1. Delete existing **A / AAAA / CNAME** records named `@` (thebridgehelpcentre.org) or `www`.
   Leave **MX** and **TXT** (email) records alone.
2. **Add record:** CNAME, Name `@`, Target `something.netlify.app`, Proxy status **DNS only (grey cloud)**.
3. **Add record:** CNAME, Name `www`, Target `something.netlify.app`, Proxy status **DNS only (grey cloud)**.

**Back in Netlify:** Domain management → **HTTPS → Verify DNS configuration → Provision certificate**.
When it says "Your site has HTTPS enabled", https://www.thebridgehelpcentre.org is live.

## D. After it is live
- Click through every page on your phone.
- Submit the Google Form (Get Involved and the event registration); check **Responses** in Google Forms.
- Tap WhatsApp, phone, email, map, Facebook and Instagram.
- From now on, every change saved to GitHub goes live automatically within ~2 minutes.
