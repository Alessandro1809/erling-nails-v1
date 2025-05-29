import type { ImageResponse } from './gallery.types';

export async function fetchGalleryImages(url: URL): Promise<ImageResponse> {
  try {
    const response = await fetch(new URL('/api/images', url).href);
    return await response.json() as ImageResponse;
  } catch (error) {
    console.error('Error fetching images:', error);
    return { data: [], error: 'Error loading images' };
  }
}

export function updateUrlWithImage(imageUrl: string | null): void {
  const url = new URL(window.location.href);
  if (imageUrl) {
    url.searchParams.set('image', imageUrl);
  } else {
    url.searchParams.delete('image');
  }
  window.history.replaceState({}, '', url.toString());
}

export function animateImageEntry(figure: HTMLElement): void {
  const img = figure.querySelector('img');
  const placeholder = figure.querySelector('.animate-pulse');
  
  if (img && placeholder) {
    img.classList.remove('opacity-0');
    setTimeout(() => {
      placeholder.classList.add('opacity-0');
      figure.classList.remove('opacity-0', 'translate-y-4');
    }, 50);
  }
}

export function createIntersectionObserver(callback: (entries: IntersectionObserverEntry[]) => void): IntersectionObserver {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  });
}

export function handleSharedImage(imageUrl: string | null, openModalCallback: (url: string, alt: string) => void): void {
  if (!imageUrl) return;
  
  const figure = document.querySelector(`figure[data-image="${imageUrl}"]`);
  if (figure) {
    const alt = figure.getAttribute('data-alt') || 'Nail design';
    setTimeout(() => {
      openModalCallback(imageUrl, alt);
    }, 100);
  }
} 