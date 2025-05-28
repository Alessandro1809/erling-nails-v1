var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import { r as renderers } from "./chunks/_@astro-renderers_CpSW8FoV.mjs";
import { a as actions } from "./chunks/_astro-internal_actions_BxAuYW9y.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_DKtUvjNC.mjs";
import { manifest } from "./manifest_Dz_YBjrO.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name(() => import("./pages/_image.astro.mjs"), "_page0");
var _page1 = /* @__PURE__ */ __name(() => import("./pages/_actions/_---path_.astro.mjs"), "_page1");
var _page2 = /* @__PURE__ */ __name(() => import("./pages/nailgallery.astro.mjs"), "_page2");
var _page3 = /* @__PURE__ */ __name(() => import("./pages/index.astro.mjs"), "_page3");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/@astrojs+cloudflare@12.5.3_astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescrip_vvupwus37st7pjytd3glwz4xti/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
  ["node_modules/.pnpm/astro@5.5.3_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.8.2/node_modules/astro/dist/actions/runtime/route.js", _page1],
  ["src/pages/NailGallery.astro", _page2],
  ["src/pages/index.astro", _page3]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions,
  middleware: /* @__PURE__ */ __name(() => import("./_astro-internal_middleware.mjs"), "middleware")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.4925075964411818.mjs.map
