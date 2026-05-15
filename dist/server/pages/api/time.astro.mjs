export { renderers } from '../../renderers.mjs';

const GET = ({ request }) => {
  const url = new URL(request.url);
  const tz = url.searchParams.get("tz") ?? "UTC";
  let formatted;
  let error;
  try {
    formatted = (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
      timeZone: tz,
      dateStyle: "full",
      timeStyle: "long"
    });
  } catch {
    error = `Unknown timezone "${tz}". Falling back to UTC.`;
    formatted = (/* @__PURE__ */ new Date()).toUTCString();
  }
  return new Response(
    JSON.stringify({
      utc: (/* @__PURE__ */ new Date()).toISOString(),
      local: formatted,
      timezone: tz,
      ...error ? { error } : {}
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
