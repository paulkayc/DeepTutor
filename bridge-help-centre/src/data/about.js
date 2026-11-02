/* About Us content (and the Director section on the Home page).
   The director, Our Story, vision, mission and team are stored in
   src/content/about.json, which the online editor (Pages CMS → "About Us")
   changes. The values below are only edited here. */
import data from "../content/about.json" with { type: "json" };

const clean = (v) => (typeof v === "string" ? v.trim() : "");
/** @param {unknown[] | undefined} list @returns {string[]} */
const paras = (list) => (list || []).map(clean).filter(Boolean);

export const director = {
  name: clean(data.director?.name),
  photo: clean(data.director?.photo),
  photoAlt: clean(data.director?.photoAlt),
  bio: paras(data.director?.bio),
};

export const story = {
  image: clean(data.story?.image),
  imageAlt: clean(data.story?.imageAlt),
  paragraphs: paras(data.story?.paragraphs),
};

export const vision = clean(data.vision);
export const mission = clean(data.mission);

/* EDITABLE starting points — rename, rewrite or delete freely. */
export const values = [
  { name: "Compassion", text: "We listen first and treat every young person with warmth and care.", icon: "heart" },
  { name: "Respect", text: "We honour each child's voice, background and pace of growth.", icon: "respect" },
  { name: "Integrity", text: "We are honest, keep our word and protect the trust families give us.", icon: "shield" },
  { name: "Collaboration", text: "We work hand in hand with parents, schools, communities and government.", icon: "handshake" },
  { name: "Empowerment", text: "We help young people find their own strength, voice and direction.", icon: "spark" },
  { name: "Safety", text: "We keep every space we create safe, confidential and child-centred.", icon: "lock" },
];

/* Team cards (from about.json). An empty list hides the "Our Team" section. */
export const team = (data.team || [])
  .filter((m) => clean(m.name))
  .map((m) => ({
    name: clean(m.name),
    role: clean(m.role),
    profession: clean(m.profession) || undefined,
    photo: clean(m.photo),
    photoAlt: clean(m.photoAlt) || undefined,
  }));
