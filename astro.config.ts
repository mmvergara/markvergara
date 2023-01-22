import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://markvergara.vercel.app",
  base: "/",
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      json: true,
    }),
    image(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
