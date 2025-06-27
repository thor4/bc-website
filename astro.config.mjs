// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://thor4.github.io',
  base: '/bc-website',
  vite: {
    plugins: [tailwindcss()]
  }
});