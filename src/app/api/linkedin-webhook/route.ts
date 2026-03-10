import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const POSTS_FILE = join(process.cwd(), "data", "linkedin-posts.json");

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (!secret || secret !== process.env.LINKEDIN_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const rawDate = body.date || body.created_time;
  const date = rawDate
    ? new Date(isNaN(Number(rawDate)) ? rawDate : Number(rawDate) * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const post = {
    heading: (body.heading || body.message || body.text || "").slice(0, 120),
    date,
    image: body.image || body.image_url || "",
    url: body.url || "",
  };

  if (!post.heading || !post.url) {
    return NextResponse.json({ error: "Missing required fields: heading, url" }, { status: 400 });
  }

  const posts = JSON.parse(readFileSync(POSTS_FILE, "utf-8"));
  posts.unshift(post);
  writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));

  return NextResponse.json({ success: true });
}
