// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cerratec-cerrajeros.netlify.app/', // TODO: Replace with actual domain
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});