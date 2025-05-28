// Polyfills para módulos de Node
import { Buffer } from 'node:buffer';
import process from 'node:process';

// Configurar el entorno global
globalThis.Buffer = Buffer;
globalThis.process = process;

// Exportar el worker
export { default } from './dist/_worker.js'; 