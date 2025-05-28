globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from './astro-designed-error-pages_CHgVWoWf.mjs';
import './astro/server_C3IG_7V5.mjs';
import { d as defineAction, o as objectType } from './index_xuFYZO0E.mjs';

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function getActionPath(action) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(action.toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    getActionPath({
      toString() {
        return getActionQueryString(path);
      }
    }),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  return deserializeActionResult({
    type: rawResult.ok ? "data" : "error",
    body: await rawResult.text()
  });
}
toActionProxy();

const server = {
  obtenerImagenesNails: defineAction({
    input: objectType({}),
    handler: async () => {
      try {
        const cloudName = "drwd1wtvt";
        const apiKey = "227831484292533";
        const apiSecret = "Jay7TIiVYi_pZdSdKA5bFEC5YcY";
        const timestamp = Math.floor(Date.now() / 1e3);
        const signature = await generateSignature(timestamp, apiSecret);
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?prefix=Nails&max_results=100`,
          {
            headers: {
              Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
            }
          }
        );
        if (!response.ok) {
          throw new Error(`Error en la API de Cloudinary: ${response.statusText}`);
        }
        const resultado = await response.json();
        if (!resultado.resources?.length) {
          return [];
        }
        const imagenes = resultado.resources.map((recurso) => ({
          url: recurso.secure_url || recurso.url || "",
          alt: recurso.public_id
        }));
        return imagenes;
      } catch (error) {
        console.error("Error al obtener las imágenes:", error);
        return [];
      }
    }
  })
};
async function generateSignature(timestamp, apiSecret) {
  const encoder = new TextEncoder();
  const data = encoder.encode(`timestamp=${timestamp}${apiSecret}`);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

export { server as s };
