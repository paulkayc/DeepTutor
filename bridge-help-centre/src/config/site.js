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

   ===================================================================== */

export const site = {
  name: "The Bridge Help Centre",
  // Corporate Affairs Commission (CAC) registration number.
  rcNumber: "9403557",
  shortDescription:
    "A social enterprise for child and youth development in Nigeria.",

  // The website's official address (used for search engines, the sitemap and
  // social-sharing previews). A SITE_URL environment variable can override it.
  url: (typeof process !== "undefined" && process.env.SITE_URL) || "https://thebridgehelpcentre.org",

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
  phone: {
    display: "0902 643 3052",
    international: "+2349026433052",
  },
  email: "thebridgehelpcenter@gmail.com",
  whatsappNumber: "2349026433052", // digits only, no "+" — used for wa.me links

  hoursText: "Mon – Fri: 10am – 4pm | Sat: By appointment | Sun: Closed",
  hours: [
    { days: "Mon – Fri", time: "10am – 4pm" },
    { days: "Sat", time: "By appointment" },
    { days: "Sun", time: "Closed" },
  ],

  // Office address (Contact page, map and search engines).
  address: "No 80 Aba Road, Umuahia, Abia State",
  addressParts: { street: "No 80 Aba Road", city: "Umuahia", state: "Abia State" },

  // Google Maps embed URL. To change it: in Google Maps, Share → Embed a map →
  // copy only the address inside src="…". Leave "" to show a placeholder box.
  mapEmbedUrl: "https://maps.google.com/maps?q=" + encodeURIComponent("80 Aba Road, Umuahia, Abia State, Nigeria") + "&z=16&output=embed",
  // Opens the address in Google Maps (directions on phones).
  mapLink: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("80 Aba Road, Umuahia, Abia State, Nigeria"),

  // Get Involved page: the centre's Google Form.
  //  - getInvolvedForm: the link to the form (opens in a new tab).
  //  - getInvolvedFormEmbed: optional. For the most reliable in-page form, paste
  //    the embed link here: in Google Forms press Send → the < > tab → copy only
  //    the address inside src="…" (it ends in "embedded=true").
  getInvolvedForm: "https://forms.gle/5ctH4N3UdYXbgnY66",
  getInvolvedFormEmbed: "https://docs.google.com/forms/d/e/1FAIpQLSeIDAADKzeF57skvIZfJ3sfbqfLy13afaBx3uevB8TQVN6CnQ/viewform?embedded=true",

  // Bank details for supporters (shown on the Get Involved page).
  // Set supportDetails: null to hide the block.
  supportDetails: {
    accountName: "The Bridge Help Center Ltd/Gte",
    accountNumber: "0149917444",
    bank: "Sterling Bank",
  },

  // Social media links (add a line to show another icon).
  social: [
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/share/1HhiWFayto/" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/thebridgehelpcentre_" },
  ],

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

