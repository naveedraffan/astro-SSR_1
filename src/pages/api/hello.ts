import type { APIRoute } from 'astro';

/**
 * GET /api/hello
 * A simple JSON endpoint to prove API routes work in SSR mode.
 */
export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') ?? 'World';

  return new Response(
    JSON.stringify({
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
      method: request.method,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
