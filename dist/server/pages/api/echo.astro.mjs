export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  let body;
  const ct = request.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) {
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
  } else {
    body = await request.text();
  }
  return new Response(
    JSON.stringify({
      echo: body,
      receivedAt: (/* @__PURE__ */ new Date()).toISOString(),
      headers: Object.fromEntries(request.headers)
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
