import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';

// Vercel sets VERCEL=1 during build/deploy — use its adapter there.
// Locally / VPS (e.g. Cloudways): Node standalone → dist/server/entry.mjs
const useVercel = process.env.VERCEL === '1';

// https://astro.build/config
export default defineConfig({
  output: 'server', // full SSR (use 'hybrid' to opt pages into SSR selectively)
  adapter: useVercel
    ? vercel()
    : node({ mode: 'standalone' }),
});
