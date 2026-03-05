import { NextResponse } from "next/server";
import { getAllBlogs } from "@/lib/content";

export async function GET() {
  const posts = getAllBlogs();
  // Strip body for listing API to reduce payload
  const listing = posts.map(({ body, ...rest }) => rest);
  return NextResponse.json(listing);
}
