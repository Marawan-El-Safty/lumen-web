import { categories } from "@/lib/support-data";

export async function GET() {
  return Response.json({ data: categories });
}
