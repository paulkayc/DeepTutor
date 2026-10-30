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

   STILL NEEDED BEFORE LAUNCH: real website address (url), form
   endpoints (forms), privacy policy text (src/pages/privacy.astro).
   ===================================================================== */

export const site = {
  name: "The Bridge Help Centre",
  shortDescription:
    "A social enterprise for child and youth development in Nigeria.",

  // The website's public address, used for search engines (sitemap, canonical
  // links) and social-sharing previews. BEFORE LAUNCH: set it to the real
  // domain, or set a SITE_URL environment variable on the host (Netlify's own
  // URL is used automatically if neither is set).
  url: (typeof process !== "undefined" && (process.env.SITE_URL || process.env.URL)) || "https://www.thebridgehelpcentre.org",

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

  // ---- Forms ----------------------------------------------------------
  // CONFIGURATION VALUE: create a free form at https://formspree.io
  // (sending to thebridgehelpcenter@gmail.com) and paste its endpoint here,
  // e.g. "https://formspree.io/f/abcdwxyz". Any service that accepts a normal
  // HTML POST (Formspree, Web3Forms, Getform…) will work.
  forms: {
    contactEndpoint: "https://formspree.io/f/YOUR_CONTACT_FORM_ID",
    getInvolvedEndpoint: "https://formspree.io/f/YOUR_GET_INVOLVED_FORM_ID",
  },

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
  privacyPolicyReady: false,
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

/** True when a form endpoint still contains the YOUR_… placeholder. */
export const isPlaceholderEndpoint = (url) => !url || url.includes("YOUR_");
