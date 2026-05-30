import { getArticle } from "@/lib/support-data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return Response.json({ error: "Article not found" }, { status: 404 });
  }
  return Response.json({ data: article });
}
