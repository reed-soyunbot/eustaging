import Image from "next/image";
import Link from "next/link";
import { getAllPodcasts } from "@/lib/content";

export default function PodcastPage() {
  const episodes = getAllPodcasts();

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-white">Podcast</h1>
      <p className="mt-4 text-lg text-gray-400">
        Conversations about telematics, insurance, and the future of commercial transportation.
      </p>

      <div className="mt-10 space-y-6">
        {episodes.map((ep) => (
          <Link
            key={ep.slug}
            href={`/podcast/${ep.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-shadow hover:shadow-lg md:flex-row"
          >
            {ep.thumbnail && (
              <div className="relative aspect-video w-full shrink-0 md:aspect-[16/10] md:w-[320px]">
                <Image
                  src={ep.thumbnail}
                  alt={ep.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            )}
            <div className="flex flex-col justify-center p-6">
              <h2 className="text-xl font-semibold text-white group-hover:text-tc-blue transition-colors">
                {ep.title}
              </h2>
              {ep.publishedDate && (
                <time className="mt-1 text-sm text-gray-400">
                  {new Date(ep.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              {ep.description && (
                <p className="mt-3 text-sm text-gray-400 line-clamp-3">
                  {ep.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
