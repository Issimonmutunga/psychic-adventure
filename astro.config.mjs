import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://psychic-adventure.vercel.app",
  integrations: [sitemap()],
});