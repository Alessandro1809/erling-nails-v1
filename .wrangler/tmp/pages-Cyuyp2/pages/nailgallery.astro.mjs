globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C3IG_7V5.mjs';
import { s as server } from '../chunks/index_DV9_eksz.mjs';
import { j as jsxRuntimeExports, $ as $$Layout, a as $$Contact } from '../chunks/Contact_BrgNOYyH.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_CpSW8FoV.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CpSW8FoV.mjs';
/* empty css                                       */

function ImageModal({ initialImage }) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [currentImage, setCurrentImage] = reactExports.useState(null);
  const [showModal, setShowModal] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (initialImage) {
      handleOpenModal({ url: initialImage, alt: "Diseño de uñas" });
    }
  }, [initialImage]);
  reactExports.useEffect(() => {
    const handleOpenModalEvent = (event) => {
      handleOpenModal({
        url: event.detail.imageUrl,
        alt: event.detail.alt
      });
    };
    window.addEventListener("openModal", handleOpenModalEvent);
    return () => window.removeEventListener("openModal", handleOpenModalEvent);
  }, []);
  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowModal(true);
      });
    });
  };
  const handleClose = () => {
    setShowModal(false);
    window.dispatchEvent(new CustomEvent("closeModal"));
    setTimeout(() => {
      setIsOpen(false);
      setCurrentImage(null);
    }, 300);
  };
  const handleShare = async () => {
    if (!currentImage) return;
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("image", currentImage.url);
      const shareUrl = url.toString();
      if (navigator.share) {
        await navigator.share({
          title: "Erling Nails - Diseño de uñas",
          text: "Mira este hermoso diseño de uñas",
          url: shareUrl
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("¡Enlace copiado al portapapeles!");
      }
    } catch (error) {
      console.error("Error al compartir:", error);
    }
  };
  const handleDownload = async () => {
    if (!currentImage) return;
    try {
      const response = await fetch(currentImage.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `erling-nails-${currentImage.alt.replace(/[^a-z0-9]/gi, "-").toLowerCase()}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar:", error);
    }
  };
  if (!isOpen || !currentImage) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/0 transition-all duration-300 ease-in-out ${showModal ? "bg-black/80" : ""}`,
      onClick: handleClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `relative max-w-7xl w-full transform transition-all duration-300 ease-in-out ${showModal ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95"}`,
          onClick: (e) => e.stopPropagation(),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden bg-white shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: currentImage.url,
                alt: currentImage.alt,
                className: "w-full h-auto max-h-[80vh] object-contain"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-transform duration-300 ${showModal ? "translate-y-0" : "translate-y-full"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    handleShare();
                  },
                  className: "p-2 rounded-full bg-black/20 hover:bg-black/50 transition-colors cursor-pointer",
                  "aria-label": "Compartir imagen",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    handleDownload();
                  },
                  className: "p-2 rounded-full bg-black/20 hover:bg-black/50 transition-colors cursor-pointer",
                  "aria-label": "Descargar imagen",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) })
                }
              )
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleClose,
                className: `absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 ${showModal ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`,
                "aria-label": "Cerrar modal",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
              }
            )
          ] })
        }
      )
    }
  );
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$GeneralGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GeneralGallery;
  const response = await Astro2.callAction(server.obtenerImagenesNails, {});
  const imagenes = Array.isArray(response?.data) ? response.data : [];
  const urlParams = new URL(Astro2.request.url).searchParams;
  urlParams.get("image");
  console.log("Im\xE1genes recibidas:", imagenes);
  return renderTemplate(_a || (_a = __template(["", " <script>\n  console.log('Script iniciado');\n\n  // Funci\xF3n para actualizar la URL sin recargar la p\xE1gina\n  function updateUrlWithImage(imageUrl) {\n    const url = new URL(window.location.href);\n    if (imageUrl) {\n      url.searchParams.set('image', imageUrl);\n    } else {\n      url.searchParams.delete('image');\n    }\n    window.history.replaceState({}, '', url.toString());\n  }\n\n  // Funci\xF3n para abrir el modal\n  function openModal(imageUrl, alt) {\n    updateUrlWithImage(imageUrl);\n    const event = new CustomEvent('openModal', { \n      detail: { imageUrl, alt }\n    });\n    window.dispatchEvent(event);\n  }\n\n  // Funci\xF3n para cerrar el modal y limpiar la URL\n  function closeModal() {\n    updateUrlWithImage(null);\n  }\n\n  // Escuchar el evento de cierre del modal\n  window.addEventListener('closeModal', () => {\n    closeModal();\n  });\n\n  // Tambi\xE9n escuchar el evento de clic fuera del modal\n  window.addEventListener('click', (e) => {\n    const modalBackdrop = document.querySelector('.fixed.inset-0.z-50');\n    if (modalBackdrop && e.target === modalBackdrop) {\n      closeModal();\n    }\n  });\n\n  // Configurar las animaciones y carga de im\xE1genes\n  document.querySelectorAll('figure').forEach((figure, index) => {\n    const img = figure.querySelector('img');\n    if (!img) return;\n\n    // Cuando la imagen se carga\n    img.addEventListener('load', () => {\n      setTimeout(() => {\n        animateImageEntry(figure);\n      }, index * 100);\n    });\n\n    // Agregar el evento click para abrir el modal\n    figure.addEventListener('click', () => {\n      const imageUrl = figure.getAttribute('data-image');\n      const alt = figure.getAttribute('data-alt');\n      if (imageUrl && alt) {\n        console.log('Click en imagen:', imageUrl);\n        openModal(imageUrl, alt);\n      }\n    });\n  });\n\n  // Funci\xF3n para animar la entrada de una imagen\n  function animateImageEntry(figure) {\n    const img = figure.querySelector('img');\n    const placeholder = figure.querySelector('.animate-pulse');\n    \n    if (img && placeholder) {\n      img.classList.remove('opacity-0');\n      setTimeout(() => {\n        placeholder.classList.add('opacity-0');\n        figure.classList.remove('opacity-0', 'translate-y-4');\n      }, 50);\n    }\n  }\n\n  // Observer para la aparici\xF3n progresiva\n  const observer = new IntersectionObserver(\n    (entries) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          const figure = entry.target;\n          const img = figure.querySelector('img');\n          if (img && img.complete) {\n            animateImageEntry(figure);\n          }\n          observer.unobserve(figure);\n        }\n      });\n    },\n    {\n      root: null,\n      rootMargin: '50px',\n      threshold: 0.1\n    }\n  );\n\n  // Observar todas las figuras\n  document.querySelectorAll('figure').forEach(figure => {\n    observer.observe(figure);\n  });\n\n  // Funci\xF3n para manejar la apertura inicial del modal\n  function handleSharedImage() {\n    console.log('Ejecutando handleSharedImage');\n    const urlParams = new URLSearchParams(window.location.search);\n    const sharedImageUrl = urlParams.get('image');\n    console.log('URL compartida encontrada:', sharedImageUrl);\n    \n    if (sharedImageUrl) {\n      const figure = document.querySelector(`figure[data-image=\"${sharedImageUrl}\"]`);\n      console.log('Figura encontrada:', figure);\n      \n      if (figure) {\n        const alt = figure.getAttribute('data-alt') || 'Dise\xF1o de u\xF1as';\n        console.log('Abriendo modal con:', sharedImageUrl, alt);\n        // Peque\xF1o retraso para asegurar que todos los componentes est\xE9n montados\n        setTimeout(() => {\n          openModal(sharedImageUrl, alt);\n        }, 100);\n      }\n    }\n  }\n\n  // Asegurarnos de que el componente ImageModal est\xE9 listo\n  window.addEventListener('load', () => {\n    console.log('Ventana cargada completamente');\n    handleSharedImage();\n  });\n\n  // Tambi\xE9n intentar cuando el DOM est\xE9 listo\n  document.addEventListener('DOMContentLoaded', () => {\n    console.log('DOM Content Loaded');\n    handleSharedImage();\n  });\n<\/script> "], ["", " <script>\n  console.log('Script iniciado');\n\n  // Funci\xF3n para actualizar la URL sin recargar la p\xE1gina\n  function updateUrlWithImage(imageUrl) {\n    const url = new URL(window.location.href);\n    if (imageUrl) {\n      url.searchParams.set('image', imageUrl);\n    } else {\n      url.searchParams.delete('image');\n    }\n    window.history.replaceState({}, '', url.toString());\n  }\n\n  // Funci\xF3n para abrir el modal\n  function openModal(imageUrl, alt) {\n    updateUrlWithImage(imageUrl);\n    const event = new CustomEvent('openModal', { \n      detail: { imageUrl, alt }\n    });\n    window.dispatchEvent(event);\n  }\n\n  // Funci\xF3n para cerrar el modal y limpiar la URL\n  function closeModal() {\n    updateUrlWithImage(null);\n  }\n\n  // Escuchar el evento de cierre del modal\n  window.addEventListener('closeModal', () => {\n    closeModal();\n  });\n\n  // Tambi\xE9n escuchar el evento de clic fuera del modal\n  window.addEventListener('click', (e) => {\n    const modalBackdrop = document.querySelector('.fixed.inset-0.z-50');\n    if (modalBackdrop && e.target === modalBackdrop) {\n      closeModal();\n    }\n  });\n\n  // Configurar las animaciones y carga de im\xE1genes\n  document.querySelectorAll('figure').forEach((figure, index) => {\n    const img = figure.querySelector('img');\n    if (!img) return;\n\n    // Cuando la imagen se carga\n    img.addEventListener('load', () => {\n      setTimeout(() => {\n        animateImageEntry(figure);\n      }, index * 100);\n    });\n\n    // Agregar el evento click para abrir el modal\n    figure.addEventListener('click', () => {\n      const imageUrl = figure.getAttribute('data-image');\n      const alt = figure.getAttribute('data-alt');\n      if (imageUrl && alt) {\n        console.log('Click en imagen:', imageUrl);\n        openModal(imageUrl, alt);\n      }\n    });\n  });\n\n  // Funci\xF3n para animar la entrada de una imagen\n  function animateImageEntry(figure) {\n    const img = figure.querySelector('img');\n    const placeholder = figure.querySelector('.animate-pulse');\n    \n    if (img && placeholder) {\n      img.classList.remove('opacity-0');\n      setTimeout(() => {\n        placeholder.classList.add('opacity-0');\n        figure.classList.remove('opacity-0', 'translate-y-4');\n      }, 50);\n    }\n  }\n\n  // Observer para la aparici\xF3n progresiva\n  const observer = new IntersectionObserver(\n    (entries) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          const figure = entry.target;\n          const img = figure.querySelector('img');\n          if (img && img.complete) {\n            animateImageEntry(figure);\n          }\n          observer.unobserve(figure);\n        }\n      });\n    },\n    {\n      root: null,\n      rootMargin: '50px',\n      threshold: 0.1\n    }\n  );\n\n  // Observar todas las figuras\n  document.querySelectorAll('figure').forEach(figure => {\n    observer.observe(figure);\n  });\n\n  // Funci\xF3n para manejar la apertura inicial del modal\n  function handleSharedImage() {\n    console.log('Ejecutando handleSharedImage');\n    const urlParams = new URLSearchParams(window.location.search);\n    const sharedImageUrl = urlParams.get('image');\n    console.log('URL compartida encontrada:', sharedImageUrl);\n    \n    if (sharedImageUrl) {\n      const figure = document.querySelector(\\`figure[data-image=\"\\${sharedImageUrl}\"]\\`);\n      console.log('Figura encontrada:', figure);\n      \n      if (figure) {\n        const alt = figure.getAttribute('data-alt') || 'Dise\xF1o de u\xF1as';\n        console.log('Abriendo modal con:', sharedImageUrl, alt);\n        // Peque\xF1o retraso para asegurar que todos los componentes est\xE9n montados\n        setTimeout(() => {\n          openModal(sharedImageUrl, alt);\n        }, 100);\n      }\n    }\n  }\n\n  // Asegurarnos de que el componente ImageModal est\xE9 listo\n  window.addEventListener('load', () => {\n    console.log('Ventana cargada completamente');\n    handleSharedImage();\n  });\n\n  // Tambi\xE9n intentar cuando el DOM est\xE9 listo\n  document.addEventListener('DOMContentLoaded', () => {\n    console.log('DOM Content Loaded');\n    handleSharedImage();\n  });\n<\/script> "])), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-zwqamp7h": true }, { "default": async ($$result2) => renderTemplate`${imagenes.length === 0 && renderTemplate`${maybeRenderHead()}<div class="text-gray-500 text-center my-8 p-4 bg-gray-50 rounded-lg" data-astro-cid-zwqamp7h> <p class="font-semibold" data-astro-cid-zwqamp7h>No hay imágenes disponibles</p> <p class="text-sm mt-2" data-astro-cid-zwqamp7h>Asegúrate de tener imágenes en el folder "Nails" de Cloudinary.</p> </div>`}<section aria-label="Galleria de imagenes" class="relative mt-32 z-0 mb-20 md:mt-52" data-astro-cid-zwqamp7h> <header data-astro-cid-zwqamp7h> <h2 class="font-special text-5xl md:text-7xl mb-10" data-astro-cid-zwqamp7h>
Galería completa de
<span class="bg-gradient-to-r from-theme-red to-[#7a00b3] bg-clip-text text-transparent" data-astro-cid-zwqamp7h>diseños</span> </h2> </header> <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10" aria-label="Galería completa de diseños de uñas" id="gallery-grid" data-astro-cid-zwqamp7h> ${imagenes.map((imagen, index) => renderTemplate`<figure class="relative h-96 overflow-hidden rounded-md transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer bg-gray-100 opacity-0 translate-y-4"${addAttribute(imagen.url, "data-image")}${addAttribute(imagen.alt, "data-alt")}${addAttribute(index, "data-index")} data-astro-cid-zwqamp7h> <div class="absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-500" data-astro-cid-zwqamp7h></div> <img class="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500"${addAttribute(`${imagen.url.replace("/upload/", "/upload/w_800,c_scale/")}`, "src")}${addAttribute(imagen.alt.replace("Nails/", ""), "alt")} loading="eager" decoding="async" data-astro-cid-zwqamp7h> <figcaption class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0" data-astro-cid-zwqamp7h> <span class="text-white font-special text-lg" data-astro-cid-zwqamp7h>${imagen.alt.split("/").pop()}</span> </figcaption> </figure>`)} </section> </section> <a href="/" class="fixed bottom-8 right-8 button-red shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50 flex items-center gap-2" aria-label="Volver al inicio" data-astro-cid-zwqamp7h> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-zwqamp7h> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" data-astro-cid-zwqamp7h></path> </svg>
Volver
</a> ${renderComponent($$result2, "ImageModal", ImageModal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/components/ImageModal", "client:component-export": "ImageModal", "data-astro-cid-zwqamp7h": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-zwqamp7h": true })} ` }));
}, "C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/components/GeneralGallery.astro", void 0);

const $$NailGallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "GeneralGallery", $$GeneralGallery, {})}`;
}, "C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/pages/NailGallery.astro", void 0);

const $$file = "C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/pages/NailGallery.astro";
const $$url = "/NailGallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NailGallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
