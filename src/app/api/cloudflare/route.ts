export async function POST(request: Request) {
  const regionInfo = request.cf; // Cloudflare-provided info
  console.log('CF region info:', regionInfo);

  return new Response(JSON.stringify(regionInfo), {
    headers: { 'Content-Type': 'application/json' },
  });
}