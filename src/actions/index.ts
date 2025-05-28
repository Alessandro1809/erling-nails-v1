import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

type ImagenResponse = {
  data: Array<{ url: string; alt: string }>;
  error?: string;
};

interface CloudinaryResource {
  secure_url?: string;
  url?: string;
  public_id: string;
}

interface CloudinaryListResponse {
  resources: CloudinaryResource[];
}

export const server = {
  obtenerImagenesNails: defineAction({
    input: z.object({}),
    handler: async () => {
      try {
        const cloudName = import.meta.env.CLOUDINARY_CLOUD_NAME;
        const apiKey = import.meta.env.CLOUDINARY_API_KEY;
        const apiSecret = import.meta.env.CLOUDINARY_API_SECRET;

        // Crear la firma para la autenticación
        const timestamp = Math.floor(Date.now() / 1000);
        const signature = await generateSignature(timestamp, apiSecret);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?prefix=Nails&max_results=100`,
          {
            headers: {
              Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error en la API de Cloudinary: ${response.statusText}`);
        }

        const resultado: CloudinaryListResponse = await response.json();

        if (!resultado.resources?.length) {
          return [];
        }

        const imagenes = resultado.resources.map((recurso: CloudinaryResource) => ({
          url: recurso.secure_url || recurso.url || '',
          alt: recurso.public_id
        }));

        return imagenes;

      } catch (error) {
        console.error('Error al obtener las imágenes:', error);
        return [];
      }
    },
  }),
};

async function generateSignature(timestamp: number, apiSecret: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(`timestamp=${timestamp}${apiSecret}`);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}
