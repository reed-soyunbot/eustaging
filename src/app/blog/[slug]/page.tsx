import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogBySlug, getBlogSlugs } from "@/lib/content";
import RichContent from "@/components/RichContent";

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: post.thumbnail,
    datePublished: post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TruckerCloud",
    },
  };

  return (
    <article className="mx-auto max-w-[800px] px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {post.thumbnail && (
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mb-6 flex items-center gap-3 text-sm text-gray-500">
        {post.category && (
          <span className="rounded-full bg-tc-lblue-05 px-3 py-1 font-medium text-tc-blue">
            {post.category}
          </span>
        )}
        {post.publishedDate && (
          <time>
            {new Date(post.publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
        {post.author && <span>by {post.author}</span>}
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{post.title}</h1>

      {post.summary && (
        <p className="mt-4 text-lg text-gray-400">{post.summary}</p>
      )}

      <div className="mt-10">
        <RichContent html={post.body} />
      </div>
    </article>
  );
}
