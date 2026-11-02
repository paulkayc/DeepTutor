/* UPCOMING PROGRAMMES
   ---------------------------------------------------------------------
   The events themselves are stored in src/content/events.json, which the
   online editor (Pages CMS → "Upcoming programmes") changes. This file only
   tidies them up for the pages.
   date is "YYYY-MM-DD". The next upcoming event that has slides is featured
   on the Home page; past events hide themselves.
   --------------------------------------------------------------------- */
import data from "../content/events.json" with { type: "json" };

const clean = (v) => (typeof v === "string" ? v.trim() : "");
const opt = (v) => clean(v) || undefined;

/** @typedef {{ title: string, subtitle?: string, date: string, time?: string, location?: string,
      price?: string, speaker?: string, registerForm: string, registerFormEmbed: string,
      description: string, image: string, imageRatio?: string,
      slides: { src: string, alt: string }[], speakerBio: string[] }} BridgeEvent */

/** @type {BridgeEvent[]} */
export const events = (data.events || [])
  .filter((e) => clean(e.title) && /^\d{4}-\d{2}-\d{2}/.test(clean(e.date)))
  .map((e) => ({
    title: clean(e.title),
    subtitle: opt(e.subtitle),
    date: clean(e.date).slice(0, 10),
    time: opt(e.time),
    location: opt(e.location),
    price: opt(e.price),
    speaker: opt(e.speaker),
    registerForm: clean(e.registerForm),
    registerFormEmbed: clean(e.registerFormEmbed),
    description: clean(e.description),
    image: clean(e.image),
    imageRatio: opt(e.imageRatio),
    slides: (e.slides || []).filter((s) => clean(s?.src)).map((s) => ({ src: clean(s.src), alt: clean(s.alt) })),
    speakerBio: (e.speakerBio || []).map(clean).filter(Boolean),
  }));
