// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/config/site.js";
import securityHeaders from "./security-headers.mjs";

export default defineConfig({
  site: site.url,
  trailingSlash: "ignore",
  build: { format: "directory", inlineStylesheets: "always" },
  integrations: [securityHeaders()],
  vite: { plugins: [tailwindcss()] },
});
