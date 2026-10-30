import { site, nav } from "../config/site.js";

export function GET() {
  const paths = [...nav.map((n) => n.href), "/privacy"];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site.url).href}</loc></url>`).join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml" } },
  );
}
