interface CloudinaryResource {
  secure_url?: string;
  url?: string;
  public_id: string;
}

interface CloudinaryListResponse {
  resources: CloudinaryResource[];
}

function parseCloudinaryUrl(url: string) {
  // Formato esperado: cloudinary://api_key:api_secret@cloud_name
  const matches = url.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);
  if (!matches) {
    throw new Error('URL de Cloudinary inválida');
  }
  return {
    apiKey: matches[1],
    apiSecret: matches[2],
    cloudName: matches[3]
  };
}

export async function GET() {
  try {
    const cloudinaryUrl = 'cloudinary://227831484292533:Jay7TIiVYi_pZdSdKA5bFEC5YcY@drwd1wtvt';
    const { apiKey, apiSecret, cloudName } = parseCloudinaryUrl(cloudinaryUrl);

    if (!cloudName || !apiKey || !apiSecret) {
      console.error('Error al parsear la URL de Cloudinary');
      return new Response(
        JSON.stringify({ 
          data: [], 
          error: 'Error en la configuración de Cloudinary' 
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
          }
        }
      );
    }

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?prefix=Nails&max_results=100`,
      {
        headers: {
          Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
          'Cache-Control': 'public, max-age=300'
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
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=300',
            'Vary': 'Accept-Encoding'
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
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
          'Vary': 'Accept-Encoding',
          'ETag': `"${Date.now().toString(36)}"`,
          'Last-Modified': new Date().toUTCString()
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
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      }
    );
  }
} 