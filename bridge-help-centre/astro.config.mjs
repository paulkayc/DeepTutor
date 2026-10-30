// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/config/site.js";

export default defineConfig({
  site: site.url,
  trailingSlash: "ignore",
  build: { format: "directory", inlineStylesheets: "always" },
  vite: { plugins: [tailwindcss()] },
});
