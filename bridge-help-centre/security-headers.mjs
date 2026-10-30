/* Security headers for the live website.
   At the end of every build this writes dist/_headers (read by Netlify and
   Cloudflare Pages) with a Content-Security-Policy that allows only this
   site's own files, the inline start-up script (by its hash), the Google map
   on the Contact page and the form service (Formspree). vercel.json carries
   the same rules for Vercel; the build warns if it falls out of date. */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

function inlineScriptHashes(dir) {
  const hashes = new Set();
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".html")) {
      for (const [, attrs, body] of fs.readFileSync(p, "utf8").matchAll(/<script((?![^>]*\bsrc=)[^>]*)>([\s\S]*?)<\/script>/g)) {
        if (!attrs.includes("ld+json")) hashes.add(`'sha256-${crypto.createHash("sha256").update(body).digest("base64")}'`);
      }
    }
  });
  walk(dir);
  return [...hashes];
}

export function buildCsp(hashes) {
  return [
    "default-src 'self'",
    `script-src 'self' ${hashes.join(" ")}`.trim(),
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self' data:",
    "connect-src 'self' https://formspree.io",
    "form-action 'self' https://formspree.io",
    "frame-src https://maps.google.com https://www.google.com https://docs.google.com https://forms.gle",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

export const commonHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "DENY",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Cross-Origin-Opener-Policy": "same-origin",
};

export default function securityHeaders() {
  return {
    name: "security-headers",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        const out = new URL(".", dir).pathname;
        const csp = buildCsp(inlineScriptHashes(out));
        const lines = ["/*", `  Content-Security-Policy: ${csp}`, ...Object.entries(commonHeaders).map(([k, v]) => `  ${k}: ${v}`),
          "", "/_astro/*", "  Cache-Control: public, max-age=31536000, immutable",
          "", "/images/*", "  Cache-Control: public, max-age=604800, stale-while-revalidate=86400", ""];
        fs.writeFileSync(path.join(out, "_headers"), lines.join("\n"));
        const vercel = path.resolve("vercel.json");
        if (fs.existsSync(vercel) && !fs.readFileSync(vercel, "utf8").includes(csp)) {
          logger.warn("vercel.json security headers are out of date — run: node tools/update-vercel-headers.mjs");
        }
        logger.info("wrote _headers with security headers");
      },
    },
  };
}
