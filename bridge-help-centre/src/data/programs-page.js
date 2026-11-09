/* Our Programs page texts (editor → "Our Programs page"). The programs themselves
   come from "Our Services" (src/data/services.js). Empty values fall back to the
   original wording. */
import data from "../content/programs-page.json" with { type: "json" };

const clean = (v) => (typeof v === "string" ? v.trim() : "");
const pick = (v, fallback) => clean(v) || fallback;
const icons = new Set(["school", "counselling", "learning", "mentorship", "community", "heart", "respect", "shield", "handshake", "spark", "compass", "volunteer", "target", "gift", "user", "calendar"]);
const safeLink = (v) => {
  const l = clean(v);
  return /^(https?:\/\/|\/|#|mailto:|tel:)/i.test(l) ? l : "";
};

const f = data.flyer || {};
const a = data.audience || {};

export const programsPage = {
  flyer: {
    image: clean(f.image),
    imageAlt: clean(f.imageAlt),
    // After this date the flyer gets a "Past program" tag. Empty = no tag.
    date: /^\d{4}-\d{2}-\d{2}/.test(clean(f.date)) ? clean(f.date).slice(0, 10) : "",
  },
  programLabel: pick(data.programLabel, "Program"),
  enquireLabel: pick(data.enquireLabel, "Enquire on WhatsApp"),
  audience: {
    eyebrow: clean(a.eyebrow),
    heading: pick(a.heading, "Who is this for?"),
    cards: (a.cards || [])
      .filter((c) => clean(c?.title))
      .map((c) => ({
        title: clean(c.title),
        icon: icons.has(clean(c.icon)) ? clean(c.icon) : "spark",
        text: clean(c.text),
        href: safeLink(c.link),
        linkLabel: clean(c.linkLabel),
      })),
  },
};
