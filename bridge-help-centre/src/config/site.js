/* =====================================================================
   SITE CONFIGURATION — The Bridge Help Centre
   ---------------------------------------------------------------------
   This is the main file to edit. Contact details, colours, the logo,
   form services and social links all live here. Page text that changes
   often (services, statistics, events, gallery…)
   lives in the files inside  src/data/ .

   WHERE THINGS LIVE
   ---------------------------------------------------------------------
   Logo, contact details, address, map, forms, bank details,
   social links, website address ......... this file
   Home page photos ......................... src/data/home.js
   Director, story, vision, mission, values,
   team ..................................... src/data/about.js
   Services / programmes (+ photos) ......... src/data/services.js
   Impact numbers ........................... src/data/stats.js
   Upcoming programme (+ slideshow) ......... src/data/events.js
   Gallery photos ........................... src/data/gallery.js
   Images ................................... public/images/

   EASY EDITING: contact details, opening hours, address, forms, bank details
   and social links are stored in src/content/contact.json, which the online
   editor (Pages CMS) changes. Everything else stays in this file.
   ===================================================================== */

import contact from "../content/contact.json" with { type: "json" };
import settings from "../content/settings.json" with { type: "json" };

const clean = (v) => (typeof v === "string" ? v.trim() : "");
// "0902 643 3052" → "2349026433052" (Nigerian numbers written with a leading 0).
const intlDigits = (display) => {
  const d = clean(display).replace(/\D/g, "");
  return d.startsWith("0") ? "234" + d.slice(1) : d;
};
const phoneDigits = intlDigits(contact.phone);
const hours = (contact.hours || []).filter((h) => clean(h.days) || clean(h.time));
const addr = contact.address || {};
const addressText = [addr.street, addr.city, addr.state].map(clean).filter(Boolean).join(", ");
// Google Maps finds the place more reliably without a leading "No".
const mapQuery = addressText.replace(/^No\.?\s+/i, "") + ", Nigeria";
const bank = contact.bank || {};
const socialIcons = { facebook: "facebook", instagram: "instagram", x: "x", twitter: "x", linkedin: "linkedin", whatsapp: "whatsapp" };

export const site = {
  name: "The Bridge Help Centre",
  // Other ways people write the name (helps search engines and AI assistants).
  alternateNames: ["The Bridge Help Center", "Bridge Help Centre", "The Bridge Help Centre Umuahia"],
  slogan: "Guiding lives, building futures",
  // Corporate Affairs Commission (CAC) registration number.
  rcNumber: "9403557",
  shortDescription:
    "A social enterprise for child and youth development in Nigeria.",

  // The website's official address (used for search engines, the sitemap and
  // social-sharing previews). A SITE_URL environment variable can override it.
  url: (typeof process !== "undefined" && process.env.SITE_URL) || "https://www.thebridgehelpcentre.org",

  // ---- Brand colours (used everywhere through CSS variables) ----------
  colors: {
    white: "#FFFFFF",
    babyBlue: "#89CFF0", // dominant brand colour
    magenta: "#EC268F", // warm accent — buttons, highlights, labels
    ink: "#111827", // near-black text
  },

  // ---- Logo -----------------------------------------------------------
  // The logo file lives in /public/images/. To change it, replace the file
  // (transparent PNG/WebP/SVG works best) and update the path and its pixel
  // size below. Set logo: "" to show the dashed "LOGO" placeholder instead.
  // The client's original artwork is kept at /public/images/logo-original.jpg.
  logo: "/images/logo.webp",
  logoSmall: "/images/logo-sm.webp", // smaller copy for the header
  logoWidth: 457,
  logoHeight: 264,

  // 1200 × 630 px image shown when the site is shared on WhatsApp, Facebook etc.
  ogImage: "/og-image.jpg",

  // ---- Contact --------------------------------------------------------
  // (from src/content/contact.json)
  phone: {
    display: clean(contact.phone),
    international: "+" + phoneDigits,
  },
  email: clean(contact.email),
  whatsappNumber: phoneDigits, // digits only, no "+" — used for wa.me links

  hoursText: hours.map((h) => `${clean(h.days)}: ${clean(h.time)}`).join(" | "),
  hours: hours.map((h) => ({ days: clean(h.days), time: clean(h.time) })),

  // Office address (Contact page, map and search engines).
  address: addressText,
  addressParts: { street: clean(addr.street), city: clean(addr.city), state: clean(addr.state) },

  // Google Maps embed URL. To change it: in Google Maps, Share → Embed a map →
  // copy only the address inside src="…". Leave "" to show a placeholder box.
  mapEmbedUrl: "https://maps.google.com/maps?q=" + encodeURIComponent(mapQuery) + "&z=16&output=embed",
  // Opens the address in Google Maps (directions on phones).
  mapLink: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapQuery),

  // Get Involved page: the centre's Google Form.
  //  - getInvolvedForm: the link to the form (opens in a new tab).
  //  - getInvolvedFormEmbed: optional. For the most reliable in-page form, paste
  //    the embed link here: in Google Forms press Send → the < > tab → copy only
  //    the address inside src="…" (it ends in "embedded=true").
  getInvolvedForm: clean(contact.getInvolvedForm),
  getInvolvedFormEmbed: clean(contact.getInvolvedFormEmbed),

  // Bank details for supporters (shown on the Get Involved page).
  // Set supportDetails: null to hide the block.
  // (from src/content/contact.json; hidden when the account number is empty)
  supportDetails: clean(bank.accountNumber)
    ? { accountName: clean(bank.accountName), accountNumber: clean(bank.accountNumber), bank: clean(bank.bank) }
    : null,

  // Social media links (add a line to show another icon).
  // (from src/content/contact.json — Facebook, Instagram, X, LinkedIn and WhatsApp have icons)
  social: (contact.social || [])
    .filter((s) => clean(s.url))
    .map((s) => ({ name: clean(s.name), icon: socialIcons[clean(s.name).toLowerCase()] || "arrow", url: clean(s.url) })),

  // Visitor statistics and search-engine verification (src/content/settings.json,
  // online editor → "Website settings"). Empty values switch each one off.
  //  - analyticsToken: Cloudflare Web Analytics token (no cookies, no personal data).
  //  - googleVerification / bingVerification: the code from a "HTML tag" check.
  analyticsToken: clean(settings.analyticsToken).replace(/[^A-Za-z0-9_-]/g, ""),
  googleVerification: clean(settings.googleVerification),
  bingVerification: clean(settings.bingVerification),

  privacyPolicyUrl: "/privacy/",
  // Set to true once the full privacy policy text has been added (the page is
  // hidden from search engines until then).
  privacyPolicyReady: true,
};

/* ---- Navigation (order matters) ------------------------------------- */
export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Our Programmes", href: "/programmes/" },
  { label: "Get Involved", href: "/get-involved/" },
  { label: "Contact Us", href: "/contact/" },
];

/* ---- Link helpers --------------------------------------------------- */
export const whatsappLink = (message) =>
  `https://wa.me/${site.whatsappNumber}` +
  (message ? `?text=${encodeURIComponent(message)}` : "");

export const emailLink = (subject) =>
  `mailto:${site.email}` + (subject ? `?subject=${encodeURIComponent(subject)}` : "");

export const telLink = `tel:${site.phone.international}`;

