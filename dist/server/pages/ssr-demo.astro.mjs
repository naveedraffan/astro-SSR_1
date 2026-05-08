import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_y1XpGNYX.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DGX-KqsD.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$SsrDemo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SsrDemo;
  const url = new URL(Astro2.request.url);
  const name = url.searchParams.get("name") ?? "World";
  const count = Number(url.searchParams.get("count") ?? 5);
  async function fetchItems(n) {
    return Array.from({ length: Math.min(n, 20) }, (_, i) => ({
      id: i + 1,
      label: `Server item #${i + 1}`,
      ts: new Date(Date.now() - i * 6e4).toISOString()
    }));
  }
  const items = await fetchItems(count);
  const renderedAt = (/* @__PURE__ */ new Date()).toUTCString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SSR Demo", "description": "Demonstrates SSR features: query params, server data fetch", "data-astro-cid-42xbbb5f": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-42xbbb5f>SSR Demo</h1> <p class="sub" data-astro-cid-42xbbb5f>
Try changing the URL: <code data-astro-cid-42xbbb5f>?name=Alice&amp;count=8</code> </p> <div class="greeting" data-astro-cid-42xbbb5f>
Hello, <strong data-astro-cid-42xbbb5f>${name}</strong>! Here are ${items.length} server-fetched items.
<span class="ts" data-astro-cid-42xbbb5f>Rendered at ${renderedAt}</span> </div> <form class="controls" method="get" data-astro-cid-42xbbb5f> <label data-astro-cid-42xbbb5f>
Name
<input name="name"${addAttribute(name, "value")} placeholder="Your name" data-astro-cid-42xbbb5f> </label> <label data-astro-cid-42xbbb5f>
Count
<input name="count" type="number" min="1" max="20"${addAttribute(count, "value")} data-astro-cid-42xbbb5f> </label> <button type="submit" data-astro-cid-42xbbb5f>Reload</button> </form> <table data-astro-cid-42xbbb5f> <thead data-astro-cid-42xbbb5f> <tr data-astro-cid-42xbbb5f><th data-astro-cid-42xbbb5f>#</th><th data-astro-cid-42xbbb5f>Label</th><th data-astro-cid-42xbbb5f>Timestamp</th></tr> </thead> <tbody data-astro-cid-42xbbb5f> ${items.map((item) => renderTemplate`<tr data-astro-cid-42xbbb5f> <td data-astro-cid-42xbbb5f>${item.id}</td> <td data-astro-cid-42xbbb5f>${item.label}</td> <td class="mono" data-astro-cid-42xbbb5f>${item.ts}</td> </tr>`)} </tbody> </table> ` })} `;
}, "/Users/naveedkhan/Downloads/astro-ssr-sample 2/src/pages/ssr-demo.astro", void 0);

const $$file = "/Users/naveedkhan/Downloads/astro-ssr-sample 2/src/pages/ssr-demo.astro";
const $$url = "/ssr-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SsrDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
