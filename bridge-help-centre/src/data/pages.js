/* EXTRA PAGES made by staff in the online editor (Pages CMS → "Extra pages").
   Each page is one JSON file in src/content/pages/. The file name becomes the
   web address: holiday-camp.json → www.thebridgehelpcentre.org/holiday-camp/
   Pages switched off with "Show this page on the website" are not built. */
import { nav } from "../config/site.js";

const files = import.meta.glob("../content/pages/*.json", { eager: true, import: "default" });

// Addresses already used by the website's own pages and files.
const reserved = new Set(["about", "programs", "get-involved", "contact", "privacy", "404", "llms", "sitemap", "robots", "images", "fonts", "_astro", "index"]);
const clean = (v) => (typeof v === "string" ? v.trim() : "");

/** @typedef {{ slug: string, href: string, title: string, description: string, subtitle: string,
      image: string, imageAlt: string, showInMenu: boolean, menuLabel: string, blocks: any[] }} ExtraPage */

/** @type {ExtraPage[]} */
export const pages = Object.entries(files)
  .map(([file, data]) => {
    let slug = file.split("/").pop().replace(/(\.json)+$/i, "").toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
    if (!slug || reserved.has(slug)) slug = `${slug || "page"}-page`;
    return { data: /** @type {any} */ (data) || {}, slug };
  })
  .filter(({ data }) => data.published !== false && clean(data.title))
  .map(({ data, slug }) => ({
    slug,
    href: `/${slug}/`,
    title: clean(data.title),
    description: clean(data.description),
    subtitle: clean(data.subtitle),
    image: clean(data.image),
    imageAlt: clean(data.imageAlt),
    showInMenu: data.showInMenu === true,
    menuLabel: clean(data.menuLabel) || clean(data.title),
    blocks: Array.isArray(data.blocks) ? data.blocks : [],
  }))
  .sort((a, b) => a.title.localeCompare(b.title));

// Top menu: the site's own pages, with up to 2 extra pages before "Contact Us".
const MAX_MENU_EXTRAS = 2;
const extras = pages.filter((p) => p.showInMenu).slice(0, MAX_MENU_EXTRAS).map((p) => ({ label: p.menuLabel, href: p.href }));
const contactIndex = nav.findIndex((n) => n.href === "/contact/");
export const menu = contactIndex >= 0
  ? [...nav.slice(0, contactIndex), ...extras, ...nav.slice(contactIndex)]
  : [...nav, ...extras];

// Footer "Quick links": the menu plus every other published extra page.
export const footerLinks = [...menu, ...pages.filter((p) => !menu.some((m) => m.href === p.href)).map((p) => ({ label: p.menuLabel, href: p.href }))];
