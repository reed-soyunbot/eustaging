import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPodcastBySlug, getPodcastSlugs } from "@/lib/content";
import BuzzSproutPlayer from "@/components/BuzzSproutPlayer";

export async function generateStaticParams() {
  return getPodcastSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const episode = getPodcastBySlug(slug);
  if (!episode) return {};
  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      images: episode.thumbnail ? [episode.thumbnail] : [],
    },
  };
}

export default async function PodcastDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = getPodcastBySlug(slug);

  if (!episode) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[800px] px-6 py-16">
      {episode.thumbnail && (
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {episode.title}
      </h1>

      {episode.publishedDate && (
        <time className="mt-2 block text-sm text-gray-400">
          {new Date(episode.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      )}

      {episode.description && (
        <p className="mt-6 text-lg leading-relaxed text-gray-400">
          {episode.description}
        </p>
      )}

      {/* Video Embed */}
      {episode.videoLink && (
        <div className="mt-8 aspect-video overflow-hidden rounded-xl">
          <iframe
            src={episode.videoLink.replace("watch?v=", "embed/")}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Podcast Player */}
      {episode.buzzsproutEmbed && (
        <div className="mt-8">
          <BuzzSproutPlayer embedUrl={episode.buzzsproutEmbed} />
        </div>
      )}
    </div>
  );
}
