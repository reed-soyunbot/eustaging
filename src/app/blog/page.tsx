"use client";

import { useState } from "react";
import Card from "@/components/Card";
import ContentGrid from "@/components/ContentGrid";
import type { BlogPost } from "@/lib/types";

// This will be populated at build time via a server component wrapper
// For now, use a client component with data fetching
import { useEffect } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => {});
  }, []);

  const categories = ["all", ...new Set(posts.map((p) => p.category).filter(Boolean))];
  const filtered = activeCategory === "all" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-white">Blog</h1>
      <p className="mt-4 text-lg text-gray-400">
        Insights on telematics, insurance technology, and fleet management.
      </p>

      {/* Category Tabs */}
      {categories.length > 1 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-tc-button text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      )}

      <div className="mt-10">
        <ContentGrid columns={3}>
          {filtered.map((post) => (
            <Card
              key={post.slug}
              title={post.title}
              summary={post.summary}
              thumbnail={post.thumbnail}
              category={post.category}
              date={post.publishedDate}
              href={`/blog/${post.slug}`}
            />
          ))}
        </ContentGrid>
      </div>
    </div>
  );
}
