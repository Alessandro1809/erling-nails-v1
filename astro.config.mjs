// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  experimental: {
    session: true
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ['url', 'crypto', 'querystring', 'fs', 'path', 'stream', 'http', 'https']
      }
    }
  },
  integrations: [react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});