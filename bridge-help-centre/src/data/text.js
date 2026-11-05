/* Headings and short texts staff edit in the online editor:
   - src/content/home-text.json → "Home page text"
   - src/content/site-text.json → "Footer and contact band"
   Any box left empty falls back to the original wording below, so the site
   never shows an empty heading or button. */
import home from "../content/home-text.json" with { type: "json" };
import site from "../content/site-text.json" with { type: "json" };

const clean = (v) => (typeof v === "string" ? v.trim() : "");
const pick = (value, fallback) => clean(value) || fallback;
const safeLink = (v, fallback) => {
  const l = clean(v);
  return /^(https?:\/\/|\/|#|mailto:|tel:)/i.test(l) ? l : fallback;
};

const h = home.hero || {};
export const homeText = {
  hero: {
    line1Bold: pick(h.line1Bold, "Guiding Lives"),
    line1Italic: pick(h.line1Italic, "today,"),
    line2Bold: pick(h.line2Bold, "Building futures"),
    line2Italic: pick(h.line2Italic, "tomorrow."),
    paragraph1: clean(h.paragraph1),
    paragraph2: clean(h.paragraph2),
    buttonLabel: pick(h.buttonLabel, "Explore Our Programmes"),
    buttonLink: safeLink(h.buttonLink, "/programmes/"),
  },
  servicesHeading: pick(home.servicesHeading, "Our Services"),
  quote: { text: clean(home.quote?.text), author: clean(home.quote?.author) },
  impact: {
    heading: pick(home.impact?.heading, "Our Impact"),
    image: clean(home.impact?.image),
    imageAlt: clean(home.impact?.imageAlt),
  },
  directorHeading: pick(home.directorHeading, "Meet the Director"),
  upcomingHeading: pick(home.upcomingHeading, "Upcoming Programmes"),
  galleryHeading: pick(home.galleryHeading, "Moments from Our Work"),
};

const c = site.cta || {};
export const ctaText = {
  heading: pick(c.heading, "Let's walk this journey together"),
  whatsappLabel: pick(c.whatsappLabel, "Chat on WhatsApp"),
  emailLabel: pick(c.emailLabel, "Email Us"),
  callLabel: pick(c.callLabel, "Or call us:"),
};

const f = site.footer || {};
const year = String(new Date().getFullYear());
export const footerText = {
  quickLinksHeading: pick(f.quickLinksHeading, "Quick links"),
  // Empty list = list the menu pages automatically.
  quickLinks: (f.quickLinks || [])
    .map((l) => ({ label: clean(l?.label), href: safeLink(l?.link, "") }))
    .filter((l) => l.label && l.href),
  servicesHeading: pick(f.servicesHeading, "Our services"),
  contactHeading: pick(f.contactHeading, "Contact"),
  followHeading: pick(f.followHeading, "Follow us"),
  registrationText: clean(f.registrationText),
  copyrightText: pick(f.copyrightText, "© {year} The Bridge Help Centre. All rights reserved.").replace(/\{year\}/g, year),
  privacyLabel: pick(f.privacyLabel, "Privacy Policy"),
};
