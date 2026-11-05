/* /llms.txt — a plain-text summary of the organisation for AI assistants
   (ChatGPT, Claude, Perplexity, Gemini…). Built from the same content as the
   pages, so it stays up to date when staff edit the site. */
import { site, nav } from "../config/site.js";
import { services } from "../data/services.js";
import { vision, mission, director } from "../data/about.js";
import { events } from "../data/events.js";
import { pages } from "../data/pages.js";

export function GET() {
  const url = (p) => new URL(p, site.url).href;
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.shortDescription} Based in ${site.addressParts.city}, ${site.addressParts.state}, Nigeria. Registered with the Corporate Affairs Commission (RC Number: ${site.rcNumber}). Motto: "${site.slogan}".`,
    "",
    `Also written as: ${site.alternateNames.join(", ")}.`,
    "",
    "## What we do",
    ...services.map((s) => `- **${s.name}**: ${s.summary} (${url(`/programmes/#${s.id}`)})`),
    "",
    "## Vision",
    vision,
    "",
    "## Mission",
    mission,
    "",
    ...(director.name ? ["## Leadership", `- ${director.name}, Director`, ""] : []),
    ...(upcoming.length ? ["## Upcoming programs", ...upcoming.map((e) => `- ${e.date}${e.time ? " " + e.time : ""}: ${e.title}${e.location ? " (" + e.location + ")" : ""}${e.price ? ", " + e.price : ""}`), ""] : []),
    "## Contact",
    `- Phone / WhatsApp: ${site.phone.display} (${site.phone.international})`,
    `- Email: ${site.email}`,
    `- Address: ${site.address}, Nigeria`,
    `- Opening hours: ${site.hoursText}`,
    ...site.social.map((s) => `- ${s.name}: ${s.url}`),
    "",
    "## Pages",
    ...nav.map((n) => `- [${n.label}](${url(n.href)})`),
    ...pages.map((p) => `- [${p.title}](${url(p.href)})${p.description ? ": " + p.description : ""}`),
    ...(site.privacyPolicyReady ? [`- [Privacy Policy](${url(site.privacyPolicyUrl)})`] : []),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
