# Handover — The Bridge Help Centre website

Everything the team needs to run the website. Keep this file up to date when an account changes.

## The accounts behind the website
| What | Service | What it does |
| --- | --- | --- |
| Website files | GitHub (repository `bridge-help-centre`) | Stores every file; any change on the `main` branch goes live |
| Hosting | Netlify | Builds and publishes the site from GitHub |
| Domain and visitor statistics | Cloudflare | Points www.thebridgehelpcentre.org at Netlify; Web Analytics |
| Everyday editing | Pages CMS (app.pagescms.org) | Simple forms that save to GitHub |
| Search engines | Google Search Console, Bing Webmaster Tools | Search listing and search statistics |
| Bigger changes | Claude (Claude Code) | Plain-English requests; follows CLAUDE.md in this folder |

Domain settings (Cloudflare DNS): CNAME `@` and CNAME `www` → the Netlify site's `.netlify.app`
address, both "DNS only" (grey cloud). Main address: https://www.thebridgehelpcentre.org.

## Everyday editing
See EDITING-GUIDE.md (and the PDF guide). Saving in the editor publishes in about 2–3 minutes.

## Bigger changes with Claude
1. In Claude, open Claude Code (claude.ai/code) and connect the organisation's GitHub account.
2. Allow Claude's GitHub app on the `bridge-help-centre` repository.
3. Start a session with that repository and describe the change in plain English.
4. Claude makes the change, checks it, and opens a pull request with a Netlify preview link.
5. Check the preview, then click **Merge pull request** on GitHub. The site updates in 2–3 minutes.

## If something goes wrong
- A failed update never takes the site down: Netlify keeps the last working version.
- To undo a change: Netlify → Deploys → pick an earlier deploy → **Publish deploy**.
- Every earlier version of every file is kept on GitHub.
