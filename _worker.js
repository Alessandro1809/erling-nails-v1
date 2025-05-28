// Polyfills mínimos necesarios
globalThis.process = {
  env: {},
  version: 'v16.0.0',
  versions: {},
  platform: 'browser'
};

// Importar el worker de Astro directamente
export { default } from './dist/_worker.js'; 