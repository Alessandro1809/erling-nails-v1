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
    ssr: {
      target: 'webworker'
    }
  },
  integrations: [react()],
  image: {
    service: {
      entrypoint: '@astrojs/cloudflare/image-endpoint'
    },
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com'
      }
    ]
  }
});