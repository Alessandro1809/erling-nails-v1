globalThis.process ??= {}; globalThis.process.env ??= {};
import { o as decodeKey } from './chunks/astro/server_C3IG_7V5.mjs';
import './chunks/astro-designed-error-pages_CHgVWoWf.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_abdZVseX.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/dales/Proyectos/dev/erling-nails-v1-main/","cacheDir":"file:///C:/Users/dales/Proyectos/dev/erling-nails-v1-main/node_modules/.astro/","outDir":"file:///C:/Users/dales/Proyectos/dev/erling-nails-v1-main/dist/","srcDir":"file:///C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/","publicDir":"file:///C:/Users/dales/Proyectos/dev/erling-nails-v1-main/public/","buildClientDir":"file:///C:/Users/dales/Proyectos/dev/erling-nails-v1-main/dist/","buildServerDir":"file:///C:/Users/dales/Proyectos/dev/erling-nails-v1-main/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/@astrojs+cloudflare@12.5.3_astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescrip_vvupwus37st7pjytd3glwz4xti/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/NailGallery.BibtYrfd.css"},{"type":"inline","content":"figure[data-astro-cid-zwqamp7h]{will-change:transform,opacity}.gallery-section[data-astro-cid-zwqamp7h] figure[data-astro-cid-zwqamp7h]:hover img[data-astro-cid-zwqamp7h]{transform:scale(1.05)}.gallery-section[data-astro-cid-zwqamp7h] figure[data-astro-cid-zwqamp7h]:hover figcaption[data-astro-cid-zwqamp7h]{transform:translateY(0)}img[data-astro-cid-zwqamp7h]{transition:all .5s cubic-bezier(.4,0,.2,1);will-change:opacity,transform}figcaption[data-astro-cid-zwqamp7h]{transition:transform .3s ease}.animate-pulse[data-astro-cid-zwqamp7h]{transition:opacity .5s cubic-bezier(.4,0,.2,1)}@media (min-width: 768px){.gallery-section[data-astro-cid-zwqamp7h] figure[data-astro-cid-zwqamp7h]:nth-child(3n+1){grid-column:span 1}.gallery-section[data-astro-cid-zwqamp7h] figure[data-astro-cid-zwqamp7h]:nth-child(3n+2){grid-column:span 1}.gallery-section[data-astro-cid-zwqamp7h] figure[data-astro-cid-zwqamp7h]:nth-child(3n){grid-column:span 1}}\n"}],"routeData":{"route":"/nailgallery","isIndex":false,"type":"page","pattern":"^\\/NailGallery\\/?$","segments":[[{"content":"NailGallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/NailGallery.astro","pathname":"/NailGallery","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/NailGallery.BibtYrfd.css"},{"type":"inline","content":".bento-item[data-astro-cid-fbuedaya]{position:relative;overflow:hidden}.bento-item[data-astro-cid-fbuedaya]:before,.bento-item[data-astro-cid-fbuedaya]:after{content:\"\";position:absolute;inset:-2px;background:linear-gradient(90deg,#b40b0b,#d4008e,#b40b0b);background-size:200% 100%;animation:borderGlow 4s linear infinite}.bento-item[data-astro-cid-fbuedaya]:before{filter:blur(8px);opacity:.5}.bento-item[data-astro-cid-fbuedaya]:after{background:none;border:2px solid rgba(253,190,190,.301);border-radius:.375rem;animation:borderPulse 2s ease-in-out infinite}.bento-item[data-astro-cid-fbuedaya]>[data-astro-cid-fbuedaya]{position:relative;z-index:1}@keyframes borderGlow{0%{background-position:0% 0%}to{background-position:200% 0%}}@keyframes borderPulse{0%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.02)}to{opacity:.4;transform:scale(1)}}swiper-container[data-astro-cid-j37ahk33]{width:100%;height:40vh}swiper-slide[data-astro-cid-j37ahk33]{overflow:hidden;width:80%;padding:2rem;text-align:center;border-top-right-radius:1rem;border-bottom-right-radius:1rem;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(6px) saturate(180%);background-color:#e5484b22;-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.2);display:flex;flex-direction:column;justify-content:center;align-items:center}swiper-slide[data-astro-cid-j37ahk33]:before{content:\"\";position:absolute;top:0%;left:0%;width:500px;height:300px;background:#fc000080;border-radius:50%;filter:blur(100px);transform:translate(-50%,-50%);z-index:-1}swiper-slide[data-astro-cid-j37ahk33]:after{content:\"\";position:absolute;top:80%;left:80%;width:200px;height:200px;background:#8d00d47c;border-radius:50%;filter:blur(80px);transform:translate(-50%,-50%);z-index:-1;opacity:.3}swiper-slide[data-astro-cid-j37ahk33]:nth-child(2n){width:70%}swiper-slide[data-astro-cid-j37ahk33]:nth-child(3n){width:70%}.bg-gradient-to-b[data-astro-cid-7jjwk3uy]{background-size:200% 200%;animation:gradientMove 8s ease infinite}@keyframes gradientMove{0%{background-position:0% 0%}50%{background-position:0% 100%}to{background-position:0% 0%}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/pages/NailGallery.astro",{"propagation":"none","containsHead":true}],["C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/.pnpm/@astrojs+cloudflare@12.5.3_astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescrip_vvupwus37st7pjytd3glwz4xti/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/NailGallery@_@astro":"pages/nailgallery.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_gHyKvdHv.mjs","C:/Users/dales/Proyectos/dev/erling-nails-v1-main/node_modules/.pnpm/unstorage@1.15.0/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","C:/Users/dales/Proyectos/dev/erling-nails-v1-main/node_modules/.pnpm/astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_oy6go0by.mjs","C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/components/Quotes.astro?astro&type=script&index=0&lang.ts":"_astro/Quotes.astro_astro_type_script_index_0_lang.DyzmY4zy.js","C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/components/ImageModal":"_astro/ImageModal.DViyMH2f.js","@/components/NeonGradientCard":"_astro/NeonGradientCard.B0TJm-C-.js","C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.sczrZeBi.js","C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/components/Bento.astro?astro&type=script&index=0&lang.ts":"_astro/Bento.astro_astro_type_script_index_0_lang.BvWFWJb3.js","C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/components/MarQueeDemo":"_astro/MarQueeDemo.bp6iRnFW.js","@/components/WordRotate":"_astro/WordRotate.DcnA4KbV.js","@astrojs/react/client.js":"_astro/client.BRu5ZLAo.js","@/components/ParallaxText":"_astro/ParallaxText.CesBu3cg.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","gsap.registerPlugin(ScrollTrigger);function e(){gsap.timeline({scrollTrigger:{trigger:\".bento-section\",start:\"60% 60%\",ease:\"power2.inOut\",end:\"+= 20%\",scrub:1,pin:!0,refreshPriority:1,toggleActions:\"play none none reverse\"}}).to(\".bento-section\",{scale:1.5,opacity:0,height:900,lazy:!0}),gsap.fromTo(\".gallery-section\",{opacity:0,y:200},{opacity:1,x:0,y:0,duration:1,ease:\"power2.inOut\",scrollTrigger:{trigger:\".gallery-section\",start:\"top 200%\",end:\"50% 100%\",scrub:1,toggleActions:\"play none none reverse\"}}),gsap.fromTo(\".opinion-section\",{opacity:0,y:200},{opacity:1,x:0,y:0,duration:1,ease:\"power2.inOut\",scrollTrigger:{trigger:\".opinion-section\",start:\"top 200%\",end:\"100% 100%\",scrub:1,toggleActions:\"play none none reverse\"}})}window.addEventListener(\"load\",e);"],["C:/Users/dales/Proyectos/dev/erling-nails-v1-main/src/components/Bento.astro?astro&type=script&index=0&lang.ts","document.querySelector(\".contact-scroll\")?.addEventListener(\"click\",c=>{c.preventDefault();const t=document.querySelector(\"#contact\");t&&t.scrollIntoView({behavior:\"smooth\",block:\"start\"})});"]],"assets":["/_astro/WorldLogoWhite.BNaniiEv.svg","/_astro/HeroVideo.CLODuevp.webm","/_astro/icon-menu.C-qQLcn8.svg","/_astro/Stellar.D55ZvD5D.svg","/_astro/NailGallery.BibtYrfd.css","/favicon.svg","/fonts/JollyLodger.woff2","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_actions.mjs","/_worker.js/_astro-internal_middleware.mjs","/_astro/client.BRu5ZLAo.js","/_astro/ImageModal.DViyMH2f.js","/_astro/index.CaZlGE7t.js","/_astro/jsx-runtime.CyXy1Ci3.js","/_astro/MarQueeDemo.bp6iRnFW.js","/_astro/NeonGradientCard.B0TJm-C-.js","/_astro/ParallaxText.CesBu3cg.js","/_astro/proxy.Cw6cmMo0.js","/_astro/Quotes.astro_astro_type_script_index_0_lang.DyzmY4zy.js","/_astro/utils.DIn8l0GD.js","/_astro/WordRotate.DcnA4KbV.js","/polyfills/messageChannel.js","/_worker.js/chunks/astro-designed-error-pages_CHgVWoWf.mjs","/_worker.js/chunks/astro_Cuis0apW.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/Contact_BrgNOYyH.mjs","/_worker.js/chunks/index_DV9_eksz.mjs","/_worker.js/chunks/index_xuFYZO0E.mjs","/_worker.js/chunks/noop-middleware_abdZVseX.mjs","/_worker.js/chunks/path_h5kZAkfu.mjs","/_worker.js/chunks/sharp_oy6go0by.mjs","/_worker.js/chunks/_@astro-renderers_CpSW8FoV.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_DKtUvjNC.mjs","/_worker.js/chunks/_astro-internal_actions_BxAuYW9y.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/nailgallery.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/_astro/HeroVideo.CLODuevp.webm","/_worker.js/_astro/icon-menu.C-qQLcn8.svg","/_worker.js/_astro/NailGallery.BibtYrfd.css","/_worker.js/_astro/Stellar.D55ZvD5D.svg","/_worker.js/_astro/WorldLogoWhite.BNaniiEv.svg","/_worker.js/chunks/astro/server_C3IG_7V5.mjs","/_worker.js/pages/_actions/_---path_.astro.mjs"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"GI817wewKPAhigt7OUy4zHHc/GIs1gLMYIKbKxFX47I=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
