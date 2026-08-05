/* // @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://apriantoz.github.io',
  base: '/sski',
  vite: {
    plugins: [tailwindcss()]
  }
}); */

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deteksi apakah sedang di-build oleh Netlify via import.meta.env
const isNetlify = import.meta.env.NETLIFY === 'true';

// https://astro.build/config
export default defineConfig({
  site: isNetlify ? 'https://sski-demo.netlify.app' : 'https://apriantoz.github.io',
  base: isNetlify ? '/' : '/sski',
  vite: {
    plugins: [tailwindcss()]
  }
});