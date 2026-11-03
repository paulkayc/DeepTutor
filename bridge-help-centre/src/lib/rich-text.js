/* Turns the plain text staff type in the editor into safe HTML:
   - a blank line starts a new paragraph
   - lines starting with "- " or "• " become a bullet list
   - **words** become bold
   - web addresses (https://…) and email addresses become links
   Everything else is escaped, so typed text can never break the page. */
const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function inline(text) {
  let out = escape(text);
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\bhttps?:\/\/[^\s<]+[^\s<.,;:!?)"']/g, (url) =>
    `<a class="link" href="${url}" target="_blank" rel="noopener">${url.replace(/^https?:\/\/(www\.)?/, "")}</a>`);
  out = out.replace(/(^|[\s(])([\w.+-]+@[\w-]+\.[\w.-]*\w)/g, (_, pre, email) => `${pre}<a class="link" href="mailto:${email}">${email}</a>`);
  return out;
}

export function richText(text) {
  if (typeof text !== "string" || !text.trim()) return "";
  return text
    .replace(/\r\n?/g, "\n")
    .trim()
    .split(/\n\s*\n/)
    .map((block) => {
      const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
      if (lines.length && lines.every((l) => /^[-•*]\s+/.test(l))) {
        return `<ul class="list-disc space-y-2 pl-6">${lines.map((l) => `<li>${inline(l.replace(/^[-•*]\s+/, ""))}</li>`).join("")}</ul>`;
      }
      return `<p>${lines.map(inline).join("<br>")}</p>`;
    })
    .join("");
}

/* Only allow safe link types in buttons. */
export function safeHref(link) {
  const l = typeof link === "string" ? link.trim() : "";
  if (/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(l)) return l;
  if (/^www\./i.test(l)) return "https://" + l;
  return "";
}
export const isExternal = (href) => /^https?:\/\//i.test(href) && !/^https?:\/\/(www\.)?thebridgehelpcentre\.org/i.test(href);
