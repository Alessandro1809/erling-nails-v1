// Polyfills mínimos necesarios
globalThis.process = {
  env: {},
  version: 'v16.0.0',
  versions: {},
  platform: 'browser'
};

// Polyfill mínimo para MessageChannel
globalThis.MessageChannel = class MessageChannel {
  constructor() {
    this.port1 = this.port2 = { postMessage() {} };
  }
};

// Importar el worker de Astro directamente
export { default } from './dist/_worker.js'; 