interface CloudinaryResource {
  secure_url?: string;
  url?: string;
  public_id: string;
}

interface CloudinaryListResponse {
  resources: CloudinaryResource[];
}

export async function GET() {
  try {
    const cloudName = import.meta.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = import.meta.env.CLOUDINARY_API_KEY;
    const apiSecret = import.meta.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      console.error('Faltan variables de entorno de Cloudinary');
      return new Response(
        JSON.stringify({ 
          data: [], 
          error: 'Faltan credenciales de Cloudinary' 
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

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
      return new Response(
        JSON.stringify({ 
          data: [],
          error: 'No se encontraron imágenes' 
        }),
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    const imagenes = resultado.resources.map((recurso: CloudinaryResource) => ({
      url: recurso.secure_url || recurso.url || '',
      alt: recurso.public_id
    }));

    return new Response(
      JSON.stringify({ data: imagenes }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
    return new Response(
      JSON.stringify({ 
        data: [], 
        error: 'Error al procesar la solicitud' 
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 