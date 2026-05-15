export { renderers } from '../../renderers.mjs';

const GET = ({ request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") ?? "World";
  return new Response(
    JSON.stringify({
      message: `Hello, ${name}!`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      method: request.method
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
