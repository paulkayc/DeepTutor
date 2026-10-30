import { site } from "../config/site.js";

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", site.url).href}\n`, {
    headers: { "Content-Type": "text/plain" },
  });
}
