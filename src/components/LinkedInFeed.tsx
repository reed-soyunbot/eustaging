"use client";

import Image from "next/image";
import { useState } from "react";

interface Post {
  heading: string;
  date: string;
  image: string;
  url: string;
}

const POSTS_PER_PAGE = 12;

export default function LinkedInFeed({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <div className="mt-12 space-y-6">
        {currentPosts.map((post) => (
          <a
            key={post.url + post.date}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-shadow hover:shadow-lg md:flex-row"
          >
            {post.image && (
              <div className="relative aspect-video w-full shrink-0 md:aspect-[16/10] md:w-[320px]">
                {post.image.startsWith("http") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.image} alt="" className="h-full w-full object-cover" />
                ) : (
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                )}
              </div>
            )}
            <div className="flex flex-col justify-center p-6">
              <h2 className="text-lg font-semibold text-white group-hover:text-tc-blue transition-colors">
                {post.heading}
              </h2>
              <time className="mt-2 text-sm text-gray-500">{post.date}</time>
              <span className="mt-2 text-sm text-tc-blue">LinkedIn Post</span>
            </div>
          </a>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setPage((p) => Math.max(1, p - 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={page === 1}
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-400">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => {
              setPage((p) => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={page === totalPages}
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
