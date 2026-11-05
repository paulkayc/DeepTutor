/* Forms from Google can be shown inside our pages (the security settings in
   security-headers.mjs allow them). Any other form service (e.g. a Lovable or
   Jotform link) is opened in a new tab instead, because browsers would block
   it inside the page. */
const EMBEDDABLE_HOSTS = new Set(["docs.google.com", "forms.gle"]);

export function canEmbedForm(url) {
  try {
    const u = new URL(String(url || "").trim());
    return u.protocol === "https:" && EMBEDDABLE_HOSTS.has(u.hostname);
  } catch {
    return false;
  }
}

export function formLink(url) {
  const s = String(url || "").trim();
  return /^https?:\/\//i.test(s) ? s : "";
}
