# Astro SSR Sample

A minimal [Astro](https://astro.build) starter project demonstrating **server-side rendering** (SSR) with the `@astrojs/node` adapter, using **Yarn** as the package manager.

## Quick start

```bash
# 1. Install dependencies
yarn install

# 2. Start the dev server (http://localhost:4321)
yarn dev

# 3. Build for production
yarn build

# 4. Run the production server
node dist/server/entry.mjs
```

## Project structure

```
src/
├── layouts/
│   └── Layout.astro          # Shared HTML shell
├── pages/
│   ├── index.astro           # Home — shows server render time & user-agent
│   ├── ssr-demo.astro        # Interactive SSR demo (query params, server data)
│   ├── protected.astro       # Auth-guarded page (server-side cookie check)
│   ├── login.astro           # Login form (POST handler sets cookie)
│   └── api/
│       ├── hello.ts          # GET /api/hello?name=…
│       ├── time.ts           # GET /api/time?tz=America/New_York
│       └── echo.ts           # POST /api/echo  (echoes JSON body)
public/
└── favicon.svg
```

## Key concepts demonstrated

| Feature | Where |
|---------|-------|
| Reading request headers | `src/pages/index.astro` |
| URL search params server-side | `src/pages/ssr-demo.astro` |
| Server-side redirect (302) | `src/pages/protected.astro` |
| Cookie read & write | `src/pages/protected.astro`, `src/pages/login.astro` |
| POST form handler | `src/pages/login.astro` |
| JSON API routes | `src/pages/api/` |

## Auth demo

Visit `/protected` — you'll be redirected to `/login`.  
Log in with password **`demo`** to set a session cookie and access the page.

## Environment variables

Copy `.env.example` to `.env` and adjust as needed:

```
PORT=4321
API_SECRET=your_secret_here
```

## Switching to hybrid mode

To pre-render most pages statically and only SSR specific ones, change `output` in `astro.config.mjs`:

```js
export default defineConfig({
  output: 'hybrid',   // ← was 'server'
  adapter: node({ mode: 'standalone' }),
});
```

Then add `export const prerender = false` to any page you want server-rendered.

## Deploying

The `@astrojs/node` adapter in `standalone` mode produces a self-contained Node.js server at `dist/server/entry.mjs`. Run it with:

```bash
node dist/server/entry.mjs
```

For container deployments, set `HOST=0.0.0.0` and `PORT=<port>` as environment variables.
