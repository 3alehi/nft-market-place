import nftData from '../../data/nft.json'
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const response = limit
    ? nftData.slice(0, parseInt(limit))
    : nftData;
  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}