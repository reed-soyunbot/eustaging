import { readFileSync } from "fs";
import { join } from "path";
import LinkedInFeed from "@/components/LinkedInFeed";

export const dynamic = "force-dynamic";

export default function LinkedInPage() {
  const posts = JSON.parse(
    readFileSync(join(process.cwd(), "data", "linkedin-posts.json"), "utf-8")
  );

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-tc-blue">FEED</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
          LinkedIn Posts
        </h1>
      </div>
      <LinkedInFeed posts={posts} />
    </div>
  );
}
