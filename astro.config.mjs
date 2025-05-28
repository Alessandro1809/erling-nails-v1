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
      target: 'esnext'
    },
    ssr: {
      target: 'webworker'
    }
  },
  integrations: [react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/compile'
    },
    // Configuración específica para el servicio compile
    domains: [], // Dominios permitidos para imágenes externas
    remotePatterns: [] // Patrones de URLs remotas permitidas
  }
});