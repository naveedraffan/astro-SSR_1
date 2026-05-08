import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',          // full SSR mode (use 'hybrid' to opt pages into SSR selectively)
  adapter: node({
    mode: 'standalone',      // produces a self-contained Node.js server in dist/
  }),
});
