/* Small progressive enhancements. Every page is fully readable and every
   contact link works without this file. */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---- Sticky header border on scroll -------------------------------- */
const header = document.querySelector("[data-header]");
if (header) {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---- Mobile menu (modal <dialog>: traps focus, closes on Escape) ---- */
const menu = document.querySelector("[data-menu]");
const menuOpen = document.querySelector("[data-menu-open]");
if (menu && menuOpen) {
  menuOpen.addEventListener("click", () => {
    menu.showModal();
    menuOpen.setAttribute("aria-expanded", "true");
  });
  menu.querySelector("[data-menu-close]")?.addEventListener("click", () => menu.close());
  menu.addEventListener("close", () => {
    menuOpen.setAttribute("aria-expanded", "false");
    menuOpen.focus();
  });
  menu.addEventListener("click", (e) => { if (e.target === menu) menu.close(); });
  window.matchMedia("(min-width: 82rem)").addEventListener("change", (e) => { if (e.matches && menu.open) menu.close(); });
}

/* ---- Fade-and-rise on scroll + counters ---------------------------- */
const animateCount = (el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  if (!Number.isFinite(target) || reduceMotion) return;
  const start = performance.now();
  const duration = 2200;
  const step = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased).toLocaleString("en-NG") + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      $$("[data-count]", entry.target).forEach(animateCount);
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  $$(".reveal").forEach((el) => io.observe(el));
} else {
  $$(".reveal").forEach((el) => el.classList.add("is-visible"));
}

/* ---- Floating buttons step aside for the footer, CTA bands and form
        submit rows so they never cover links or buttons ---------------- */
const floating = document.querySelector("[data-floating]");
if (floating && "IntersectionObserver" in window) {
  const visible = new Set();
  const fio = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
    const hide = visible.size > 0;
    floating.classList.toggle("is-hidden", hide);
    $$("a", floating).forEach((a) => (hide ? a.setAttribute("tabindex", "-1") : a.removeAttribute("tabindex")));
  }, { rootMargin: "0px 0px -0px 0px", threshold: 0 });
  $$("[data-hide-floats]").forEach((el) => fio.observe(el));
}

/* ---- Gallery: filters + lightbox ------------------------------------ */
$$("[data-gallery]").forEach((gallery) => {
  const items = $$(".gallery-item", gallery);
  const dialog = gallery.querySelector("[data-lightbox]");
  const stage = gallery.querySelector("[data-lightbox-stage]");
  const caption = gallery.querySelector("[data-lightbox-caption]");
  const counter = gallery.querySelector("[data-lightbox-counter]");
  const status = gallery.querySelector("[data-gallery-status]");
  let current = 0;
  let opener = null;

  const visibleItems = () => items.filter((li) => !li.hidden);

  const show = (index) => {
    const list = visibleItems();
    if (!list.length) return;
    current = (index + list.length) % list.length;
    const btn = list[current].querySelector("[data-lightbox-index]");
    const media = btn.firstElementChild.cloneNode(true);
    media.classList.remove("pointer-events-none");
    const img = media.querySelector("img");
    if (img) { img.loading = "eager"; img.sizes = "min(64rem, 100vw)"; }
    stage.replaceChildren(media);
    caption.textContent = btn.dataset.caption || "";
    counter.textContent = `Image ${current + 1} of ${list.length}`;
  };

  $$("[data-lightbox-index]", gallery).forEach((btn) => {
    btn.addEventListener("click", () => {
      opener = btn;
      show(visibleItems().indexOf(btn.closest(".gallery-item")));
      dialog.showModal();
    });
  });
  gallery.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => show(current - 1));
  gallery.querySelector("[data-lightbox-next]")?.addEventListener("click", () => show(current + 1));
  gallery.querySelector("[data-lightbox-close]")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); show(current - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); show(current + 1); }
  });
  dialog?.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  dialog?.addEventListener("close", () => opener?.focus());

  $$("[data-filter]", gallery).forEach((chip, _, chips) => {
    chip.addEventListener("click", () => {
      const f = chip.dataset.filter;
      chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      items.forEach((li) => { li.hidden = f !== "all" && li.dataset.category !== f; li.classList.add("is-visible"); });
      if (status) status.textContent = `Showing ${visibleItems().length} ${f === "all" ? "" : f + " "}images`;
    });
  });
});

/* ---- Programme slideshow: crossfades every 6s; pauses on hover/focus,
        off-screen, or via the pause button; still for reduced motion ---- */
$$("[data-slideshow]").forEach((show) => {
  const slides = $$("[data-slide]", show);
  if (slides.length < 2) return;
  const dots = $$("[data-slide-dot]", show);
  const toggle = show.querySelector("[data-slideshow-toggle]");
  let current = 0;
  let timer = null;
  let userPaused = reduceMotion;
  let hovering = false;
  let onScreen = false;

  const go = (i) => {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      const on = n === current;
      s.classList.toggle("is-active", on);
      s.setAttribute("aria-hidden", String(!on));
      s.querySelectorAll("a").forEach((a) => (on ? a.removeAttribute("tabindex") : a.setAttribute("tabindex", "-1")));
      // Once the slideshow is near the screen, load the shown and next images.
      if (onScreen && (on || n === (current + 1) % slides.length)) s.querySelector("img").loading = "eager";
    });
    dots.forEach((d, n) => (n === current ? d.setAttribute("aria-current", "true") : d.removeAttribute("aria-current")));
  };
  const update = () => {
    clearInterval(timer);
    timer = !userPaused && !hovering && onScreen ? setInterval(() => go(current + 1), 6000) : null;
    if (toggle) {
      toggle.setAttribute("aria-label", userPaused ? "Play slideshow" : "Pause slideshow");
      toggle.querySelector("[data-icon-pause]").hidden = userPaused;
      toggle.querySelector("[data-icon-play]").hidden = !userPaused;
    }
  };
  dots.forEach((d) => d.addEventListener("click", () => { go(Number(d.dataset.slideDot)); update(); }));
  toggle?.addEventListener("click", () => { userPaused = !userPaused; update(); });
  show.addEventListener("mouseenter", () => { hovering = true; update(); });
  show.addEventListener("mouseleave", () => { hovering = false; update(); });
  show.addEventListener("focusin", () => { hovering = true; update(); });
  show.addEventListener("focusout", () => { hovering = false; update(); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; if (onScreen) go(current); update(); }, { threshold: 0.25 }).observe(show);
  }
  go(0);
  update();
});

/* ---- Tabs (educational materials) ---------------------------------- */
$$("[data-tabs]").forEach((wrap) => {
  const tabs = $$("[role=tab]", wrap);
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      panel.hidden = !on;
      if (on) $$(".reveal", panel).forEach((el) => el.classList.add("is-visible"));
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (e) => {
      const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
      if (e.key in map) { e.preventDefault(); select(tabs[(map[e.key] + tabs.length) % tabs.length], true); }
    });
  });
  select(tabs[0]);
});

/* ---- Past programmes: hide them in the visitor's browser once their
        date has passed, even if the site hasn't been rebuilt ---------- */
const today = new Date().toISOString().slice(0, 10);
$$("[data-event-date]").forEach((el) => {
  if (el.dataset.eventDate >= today) return;
  (el.closest("li") || el).remove();
});
const upcomingSection = document.querySelector("[data-upcoming-section]");
if (upcomingSection && !upcomingSection.querySelector("[data-event-date]")) upcomingSection.remove();

/* ---- Contact map: load the Google map only when asked --------------- */
$$("[data-map]").forEach((box) => {
  box.querySelector("[data-map-load]")?.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.src = box.dataset.map;
    frame.title = box.dataset.mapTitle;
    frame.className = "absolute inset-0 h-full w-full border-0";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    frame.allowFullscreen = true;
    box.append(frame);
    box.querySelector("[data-map-placeholder]").setAttribute("aria-hidden", "true");
    frame.focus();
  });
});

/* ---- Copy buttons (e.g. bank account number) ----------------------- */
$$("[data-copy]").forEach((btn) => {
  const label = btn.querySelector("[data-copy-label]");
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      label.textContent = "Copied";
    } catch {
      const src = btn.parentElement.querySelector("[data-copy-source]");
      if (src) { const r = document.createRange(); r.selectNodeContents(src); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); }
      label.textContent = "Selected — press copy";
    }
    setTimeout(() => (label.textContent = "Copy"), 2500);
  });
});

/* ---- Forms: accessible validation + async submit -------------------- */
$$("[data-form]").forEach((form) => {
  const summary = form.querySelector("[data-form-summary]");
  const fields = $$("input:not([type=hidden]):not([name=_gotcha]), select, textarea", form);

  const messageFor = (field) => {
    const label = form.querySelector(`label[for="${field.id}"]`)?.firstChild?.textContent?.trim() || "This field";
    if (field.validity.valueMissing)
      return field.tagName === "SELECT" ? `Please choose an option for “${label}”.` : `Please enter your ${label.toLowerCase()}.`;
    if (field.validity.typeMismatch && field.type === "email") return "Please enter a valid email address, like name@example.com.";
    if (field.type === "tel" && field.value && !/^[+\d][\d\s()-]{6,}$/.test(field.value)) return "Please enter a valid phone number, like 0803 123 4567.";
    return "";
  };
  const check = (field) => {
    const msg = messageFor(field);
    const err = document.getElementById(`${field.id}-error`);
    if (err) err.textContent = msg;
    field.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  };
  fields.forEach((f) => f.addEventListener("blur", () => { if (f.value || f.getAttribute("aria-invalid")) check(f); }));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const invalid = fields.filter((f) => !check(f));
    if (invalid.length) {
      summary.textContent = `Please check ${invalid.length} field${invalid.length > 1 ? "s" : ""} and try again.`;
      invalid[0].focus();
      return;
    }
    summary.textContent = "";
    const email = form.querySelector("input[type=email]");
    const replyTo = form.querySelector("[data-replyto]");
    if (email && replyTo) replyTo.value = email.value;

    const ok = form.closest("section, div").querySelector(`[data-form-success="${form.id}"]`) || document.querySelector(`[data-form-success="${form.id}"]`);
    const fail = document.querySelector(`[data-form-failure="${form.id}"]`);
    const button = form.querySelector("[data-submit]");
    const showResult = (el) => { form.hidden = true; el.classList.remove("hidden"); el.focus(); };

    if (form.dataset.unconfigured) {
      console.warn("Form endpoint not configured yet — set it in src/config/site.js (forms).");
      showResult(fail);
      return;
    }
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    try {
      const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      showResult(res.ok ? ok : fail);
    } catch {
      showResult(fail);
    } finally {
      button.disabled = false;
      button.removeAttribute("aria-busy");
    }
  });
});
