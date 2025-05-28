import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { v2 as cloudinary } from 'cloudinary';
import { log } from 'node_modules/astro/dist/core/logger/core';

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
  secure: true
});

interface CloudinaryResource {
  secure_url?: string;
  url?: string;
  public_id: string;
}

type ImagenResponse = {
  data: Array<{ url: string; alt: string }>;
  error?: string;
};

export const server = {
  obtenerImagenesNails: defineAction({
    input: z.object({}),
    handler: async () => {
      try {
        const resultado = await cloudinary.api.resources({
          type: 'upload',
          prefix: 'Nails',
          max_results: 100
        });

        console.log('Datos crudos de Cloudinary:', resultado);

        if (!resultado.resources?.length) {
          return [];
        }

        const imagenes = resultado.resources.map(recurso => ({
          url: recurso.secure_url || recurso.url || '',
          alt: recurso.public_id
        }));

        console.log('Imágenes procesadas para enviar:', imagenes);
        return imagenes;

      } catch (error) {
        console.error('Error al obtener las imágenes:', error);
        return [];
      }
    },
  }),
};
