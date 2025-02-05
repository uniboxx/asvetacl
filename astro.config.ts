import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: cloudflare({
    imageService: 'cloudflare',
  }),

  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()],
  },
});
