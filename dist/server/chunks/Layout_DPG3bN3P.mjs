import { e as createAstro, f as createComponent, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate } from './astro/server_Dea09CxC.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://otk-dev-nodejs-213-1215.cloudwaysstagingapps.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "An Astro SSR sample project" } = Astro2.props;
  const canonical = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title} · Astro SSR</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <header data-astro-cid-sckkx6r4> <a class="logo" href="/" data-astro-cid-sckkx6r4>⚡ Astro SSR</a> <nav data-astro-cid-sckkx6r4> <a href="/" data-astro-cid-sckkx6r4>Home</a> <a href="/ssr-demo" data-astro-cid-sckkx6r4>SSR Demo</a> <a href="/protected" data-astro-cid-sckkx6r4>Protected</a> <a href="/api/hello" data-astro-cid-sckkx6r4>API</a> </nav> </header> <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer data-astro-cid-sckkx6r4>
Built with <a href="https://astro.build" style="color: var(--accent-light)" data-astro-cid-sckkx6r4>Astro</a> · SSR
</footer> </body></html>`;
}, "/Users/naveedkhan/Downloads/astro-ssr-sample 2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
