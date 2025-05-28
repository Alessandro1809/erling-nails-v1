// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/favicon.svg",
    "/fonts/JollyLodger.woff2"
  ]
};

// node_modules/.pnpm/wrangler@4.17.0_@cloudflare+workers-types@4.20250528.0/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\dales\\Proyectos\\dev\\erling-nails-v1-main\\.wrangler\\tmp\\pages-RxfkXP\\bundledWorker-0.4925075964411818.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\dales\\Proyectos\\dev\\erling-nails-v1-main\\node_modules\\.pnpm\\wrangler@4.17.0_@cloudflare+workers-types@4.20250528.0\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\dales\\Proyectos\\dev\\erling-nails-v1-main\\.wrangler\\tmp\\pages-RxfkXP\\bundledWorker-0.4925075964411818.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=aazvoxklc2g.js.map
