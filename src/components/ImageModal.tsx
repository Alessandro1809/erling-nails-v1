import { useState, useEffect } from 'react';

interface ImageModalProps {
  initialImage?: string | null;
}

export function ImageModal({ initialImage }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ url: string; alt: string } | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (initialImage) {
      handleOpenModal({ url: initialImage, alt: 'Diseño de uñas' });
    }
  }, [initialImage]);

  useEffect(() => {
    const handleOpenModalEvent = (event: CustomEvent<{ imageUrl: string; alt: string }>) => {
      handleOpenModal({
        url: event.detail.imageUrl,
        alt: event.detail.alt
      });
    };

    window.addEventListener('openModal', handleOpenModalEvent as EventListener);
    return () => window.removeEventListener('openModal', handleOpenModalEvent as EventListener);
  }, []);

  const handleOpenModal = (image: { url: string; alt: string }) => {
    setCurrentImage(image);
    setIsOpen(true);
    // Usar requestAnimationFrame para asegurar una animación fluida
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowModal(true);
      });
    });
  };

  const handleClose = () => {
    setShowModal(false);
    // Emitir el evento de cierre
    window.dispatchEvent(new CustomEvent('closeModal'));
    // Esperar a que termine la animación antes de cerrar
    setTimeout(() => {
      setIsOpen(false);
      setCurrentImage(null);
    }, 300);
  };

  const handleShare = async () => {
    if (!currentImage) return;
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('image', currentImage.url);
      const shareUrl = url.toString();

      if (navigator.share) {
        await navigator.share({
          title: 'Erling Nails - Diseño de uñas',
          text: 'Mira este hermoso diseño de uñas',
          url: shareUrl
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert('¡Enlace copiado al portapapeles!');
      }
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  const handleDownload = async () => {
    if (!currentImage) return;
    try {
      const response = await fetch(currentImage.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `erling-nails-${currentImage.alt.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al descargar:', error);
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/0 transition-all duration-300 ease-in-out ${
        showModal ? 'bg-black/80' : ''
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative max-w-7xl w-full transform transition-all duration-300 ease-in-out ${
          showModal ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative rounded-xl overflow-hidden bg-white shadow-2xl">
          <img 
            src={currentImage.url} 
            alt={currentImage.alt} 
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          
          <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-transform duration-300 ${
            showModal ? 'translate-y-0' : 'translate-y-full'
          }`}>
            <div className="flex items-center justify-end">
              
              <div className="flex gap-4">
                <button
                  onClick={e => { e.stopPropagation(); handleShare(); }}
                  className="p-2 rounded-full bg-black/20 hover:bg-black/50 transition-colors cursor-pointer"
                  aria-label="Compartir imagen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
                <button
                  onClick={e => { e.stopPropagation(); handleDownload(); }}
                  className="p-2 rounded-full bg-black/20 hover:bg-black/50 transition-colors cursor-pointer"
                  aria-label="Descargar imagen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            className={`absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 ${
              showModal ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            aria-label="Cerrar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 