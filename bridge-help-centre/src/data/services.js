/* OUR SERVICES — used on Home (cards), Our Programs (full sections), the
   footer, search-engine details and /llms.txt.
   The services are stored in src/content/services.json and changed with the
   online editor (Pages CMS → "Our Services"). The wording is the client's own
   approved text: change it only with their approval.
   Each service keeps a fixed web link (its "id", e.g. /programmes/#counselling),
   hidden in the editor, so links to it keep working when its name changes. */
import data from "../content/services.json" with { type: "json" };

const clean = (v) => (typeof v === "string" ? v.trim() : "");
const slug = (s) => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// Original links for the five original services (used if an id is ever lost).
const legacyIds = {
  "School & Student Development Services": "school-development",
  "Individual and School Counselling services": "counselling",
  "Special Education and Learning Support": "learning-support",
  "Mentorship & Life Skills": "mentorship",
  "Youth And Community empowerment": "community",
};
const icons = new Set(["school", "counselling", "learning", "mentorship", "community", "heart", "respect", "shield", "handshake", "spark", "lock", "eye", "target", "volunteer", "compass", "gift", "user", "calendar"]);

const used = new Set();
/** @type {{ id: string, number: string, name: string, summary: string, icon: string, image: string, imageAlt: string, imageHint: string, bullets: string[] }[]} */
export const services = (data.services || [])
  .filter((s) => clean(s?.name))
  .map((s, i) => {
    const name = clean(s.name);
    let id = slug(clean(s.id)) || legacyIds[name] || slug(name) || `service-${i + 1}`;
    while (used.has(id)) id += "-2";
    used.add(id);
    return {
      id,
      number: String(i + 1).padStart(2, "0"),
      name,
      summary: clean(s.summary),
      icon: icons.has(clean(s.icon)) ? clean(s.icon) : "spark",
      image: clean(s.image),
      imageAlt: clean(s.imageAlt) || `Photo for ${name}`,
      imageHint: `A photo that shows ${name.toLowerCase()} in action.`,
      bullets: (s.bullets || []).map(clean).filter(Boolean),
    };
  });

// Short introduction shown under "Our Services" and on Our Programs (client wording).
export const servicesIntro = clean(data.intro);
