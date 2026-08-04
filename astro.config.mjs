// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://apriantoz.github.io',
  base: '/sski',
  vite: {
    plugins: [tailwindcss()]
  }
});