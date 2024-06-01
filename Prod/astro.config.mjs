import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://drigonfusion.netlify.app',
  integrations: [sitemap(), tailwind({
    applyBaseStyles: false
  }), react()],
  output: 'server',
  adapter: netlify({
    imageCDN: false,
    // cacheOnDemandPages: true,
  })
});