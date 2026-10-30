/* =====================================================================
   SITE CONFIGURATION — The Bridge Help Centre
   ---------------------------------------------------------------------
   This is the main file to edit. Contact details, colours, the logo,
   form services and social links all live here. Page text that changes
   often (services, statistics, events, gallery, stories…)
   lives in the files inside  src/data/ .

   PLACEHOLDER INDEX — everything the client still needs to supply
   ---------------------------------------------------------------------
   Logo ........................ site.logo (below)            → public/images/logo.webp (done)
   Favicon ..................... public/favicon-48.png + apple-touch-icon.png (done)
   Open Graph (social) image ... site.ogImage (below)          → public/og-image.png
   Hero photo .................. src/data/home.js  heroImage   → public/images/hero.jpg
   Intro photo ................. src/data/home.js  introImage
   Director photo .............. src/data/about.js director.photo
   Our Story text + photo ...... src/data/about.js story
   Vision statement ............ src/data/about.js vision
   Values (editable) ........... src/data/about.js values
   Team cards (optional) ....... src/data/about.js team
   Milestones .................. src/data/about.js milestones
   Programme photos (5) ........ src/data/services.js  image
   Statistics .................. src/data/stats.js
   Success stories ............. src/data/stories.js
   Upcoming programmes ......... src/data/events.js
   Gallery (12 images) ......... src/data/gallery.js          → public/images/gallery/
   Office address .............. site.address (below) (done)
   Map ......................... site.mapEmbedUrl (below) (done)
   Form endpoints .............. site.forms (below)
   Bank / payment details ...... site.supportDetails (below) (done)
   Social media links .......... site.social (below) (done)
   Website address ............. site.url (below)
   ===================================================================== */

export const site = {
  name: "The Bridge Help Centre",
  shortDescription:
    "A social enterprise for child and youth development in Nigeria.",

  // [PLACEHOLDER] Replace with the real domain once it is bought (used for
  // the sitemap, canonical links and social sharing previews).
  url: "https://www.thebridgehelpcentre.org",

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
  logoWidth: 457,
  logoHeight: 264,

  // [PLACEHOLDER] 1200 × 630 px image shown when the site is shared on
  // WhatsApp, Facebook, LinkedIn etc.
  ogImage: "/og-image.png",

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

  // [PLACEHOLDER] Google Maps embed URL. In Google Maps: Share → Embed a map →
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
    // Optional newsletter (Formspree, Mailchimp embedded form action, Buttondown…).
    newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID",
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

  privacyPolicyUrl: "/privacy",
};

/* ---- Navigation (order matters) ------------------------------------- */
export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Programmes", href: "/programmes" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact" },
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
