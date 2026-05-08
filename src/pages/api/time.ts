import type { APIRoute } from 'astro';

/**
 * GET /api/time
 * Returns the current server time in the requested timezone.
 * Example: /api/time?tz=America/New_York
 */
export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  const tz = url.searchParams.get('tz') ?? 'UTC';

  let formatted: string;
  let error: string | undefined;

  try {
    formatted = new Date().toLocaleString('en-US', {
      timeZone: tz,
      dateStyle: 'full',
      timeStyle: 'long',
    });
  } catch {
    error = `Unknown timezone "${tz}". Falling back to UTC.`;
    formatted = new Date().toUTCString();
  }

  return new Response(
    JSON.stringify({
      utc: new Date().toISOString(),
      local: formatted,
      timezone: tz,
      ...(error ? { error } : {}),
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
