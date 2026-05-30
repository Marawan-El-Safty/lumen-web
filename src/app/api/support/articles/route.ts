import { articles } from "@/lib/support-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const q = searchParams.get("q")?.trim().toLowerCase();

  let result = articles;
  if (category) result = result.filter((a) => a.category === category);
  if (q) {
    result = result.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.body.toLowerCase().includes(q),
    );
  }
  return Response.json({ data: result, total: result.length });
}
