import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dea09CxC.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DPG3bN3P.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://otk-dev-nodejs-213-1215.cloudwaysstagingapps.com");
const $$Protected = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Protected;
  const token = Astro2.cookies.get("token")?.value;
  const isAuthenticated = token === "demo-token";
  if (!isAuthenticated) {
    return Astro2.redirect("/login?from=/protected", 302);
  }
  const user = { name: "Demo User", email: "demo@example.com", role: "admin" };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Protected Page", "data-astro-cid-5v2fggm2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-5v2fggm2>🔒 Protected Page</h1> <p class="sub" data-astro-cid-5v2fggm2>You are authenticated. This content is only rendered server-side for valid sessions.</p> <div class="profile" data-astro-cid-5v2fggm2> <div class="avatar" data-astro-cid-5v2fggm2>${user.name[0]}</div> <div data-astro-cid-5v2fggm2> <div class="name" data-astro-cid-5v2fggm2>${user.name}</div> <div class="email" data-astro-cid-5v2fggm2>${user.email}</div> <span class="badge" data-astro-cid-5v2fggm2>${user.role}</span> </div> </div> <div class="note" data-astro-cid-5v2fggm2> <strong data-astro-cid-5v2fggm2>How it works:</strong> The Astro frontmatter on this page reads the
<code data-astro-cid-5v2fggm2>token</code> cookie via <code data-astro-cid-5v2fggm2>Astro.cookies</code>. If it's missing or
    invalid, the server issues a <code data-astro-cid-5v2fggm2>302 Redirect</code> to <code data-astro-cid-5v2fggm2>/login</code>
before any HTML is ever sent to the browser.
</div> ` })} `;
}, "/Users/naveedkhan/Downloads/astro-ssr-sample 2/src/pages/protected.astro", void 0);

const $$file = "/Users/naveedkhan/Downloads/astro-ssr-sample 2/src/pages/protected.astro";
const $$url = "/protected";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Protected,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
