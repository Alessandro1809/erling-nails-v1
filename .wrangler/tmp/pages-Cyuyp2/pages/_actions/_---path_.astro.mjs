globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getActionContext } from '../../chunks/index_xuFYZO0E.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CpSW8FoV.mjs';

const POST = async (context) => {
  const { action, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom !== "rpc") {
    return new Response("Not found", { status: 404 });
  }
  const result = await action.handler();
  const serialized = serializeActionResult(result);
  if (serialized.type === "empty") {
    return new Response(null, {
      status: serialized.status
    });
  }
  return new Response(serialized.body, {
    status: serialized.status,
    headers: {
      "Content-Type": serialized.contentType
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
