import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_y1XpGNYX.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DGX-KqsD.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const userAgent = Astro2.request.headers.get("user-agent") ?? "unknown";
  const renderedAt = (/* @__PURE__ */ new Date()).toUTCString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Astro <span class="accent" data-astro-cid-j7pv25f6>SSR</span> Sample</h1> <p class="subtitle" data-astro-cid-j7pv25f6>
A minimal starter showing server-side rendering with the
<code data-astro-cid-j7pv25f6>@astrojs/node</code> adapter and <strong data-astro-cid-j7pv25f6>Yarn</strong>.
</p> </section> <div class="cards" data-astro-cid-j7pv25f6> <div class="card" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>⚡ Server-rendered</h2> <p data-astro-cid-j7pv25f6>This page is rendered on the server on every request — no static HTML is pre-built.</p> <p class="meta" data-astro-cid-j7pv25f6>Rendered at: <code data-astro-cid-j7pv25f6>${renderedAt}</code></p> </div> <div class="card" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>🌐 Your User-Agent</h2> <p data-astro-cid-j7pv25f6>Read from the live HTTP request — impossible in a static site:</p> <p class="meta" data-astro-cid-j7pv25f6><code data-astro-cid-j7pv25f6>${userAgent.slice(0, 80)}${userAgent.length > 80 ? "\u2026" : ""}</code></p> </div> <div class="card" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>🔌 API Routes</h2> <p data-astro-cid-j7pv25f6>
Full server-side API routes live in <code data-astro-cid-j7pv25f6>src/pages/api/</code>.
        Try <a href="/api/hello" data-astro-cid-j7pv25f6>/api/hello</a> or <a href="/api/time" data-astro-cid-j7pv25f6>/api/time</a>.
</p> </div> <div class="card" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>🔒 Auth Guard</h2> <p data-astro-cid-j7pv25f6> <a href="/protected" data-astro-cid-j7pv25f6>/protected</a> demonstrates a simple server-side
        auth check using cookies/headers — redirects unauthenticated users.
</p> </div> </div> ` })} `;
}, "/Users/naveedkhan/Downloads/astro-ssr-sample 2/src/pages/index.astro", void 0);

const $$file = "/Users/naveedkhan/Downloads/astro-ssr-sample 2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
