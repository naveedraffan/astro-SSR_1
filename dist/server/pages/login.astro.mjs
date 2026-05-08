import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_y1XpGNYX.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DGX-KqsD.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.request.method === "POST") {
    const form = await Astro2.request.formData();
    const password = form.get("password");
    if (password === "demo") {
      Astro2.cookies.set("token", "demo-token", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60
        // 1 hour
      });
      const from2 = new URL(Astro2.request.url).searchParams.get("from") ?? "/protected";
      return Astro2.redirect(from2, 302);
    }
  }
  const from = new URL(Astro2.request.url).searchParams.get("from") ?? "/protected";
  const error = Astro2.request.method === "POST" ? 'Incorrect password. Try "demo".' : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login", "data-astro-cid-sgpqyurt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrap" data-astro-cid-sgpqyurt> <h1 data-astro-cid-sgpqyurt>Sign in</h1> <p class="sub" data-astro-cid-sgpqyurt>Demo credentials: any username, password <code data-astro-cid-sgpqyurt>demo</code></p> ${error && renderTemplate`<div class="error" data-astro-cid-sgpqyurt>${error}</div>`} <form method="post"${addAttribute(`/login?from=${encodeURIComponent(from)}`, "action")} data-astro-cid-sgpqyurt> <label data-astro-cid-sgpqyurt>
Username
<input type="text" name="username" placeholder="any value" autocomplete="username" data-astro-cid-sgpqyurt> </label> <label data-astro-cid-sgpqyurt>
Password
<input type="password" name="password" placeholder="demo" autocomplete="current-password" data-astro-cid-sgpqyurt> </label> <button type="submit" data-astro-cid-sgpqyurt>Sign in</button> </form> </div> ` })} `;
}, "/Users/naveedkhan/Downloads/astro-ssr-sample 2/src/pages/login.astro", void 0);

const $$file = "/Users/naveedkhan/Downloads/astro-ssr-sample 2/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
