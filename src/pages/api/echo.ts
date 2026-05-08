import type { APIRoute } from 'astro';

/**
 * POST /api/echo
 * Echoes back whatever JSON body you send — useful for testing fetch() calls.
 */
export const POST: APIRoute = async ({ request }) => {
  let body: unknown;

  const ct = request.headers.get('content-type') ?? '';
  if (ct.includes('application/json')) {
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else {
    body = await request.text();
  }

  return new Response(
    JSON.stringify({
      echo: body,
      receivedAt: new Date().toISOString(),
      headers: Object.fromEntries(request.headers),
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
