import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  summary?: string;
  thumbnail?: string;
  category?: string;
  date?: string;
  href: string;
}

export default function Card({ title, summary, thumbnail, category, date, href }: CardProps) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-shadow hover:shadow-lg">
      {thumbnail && (
        <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        {(category || date) && (
          <div className="mb-2 flex items-center gap-3 text-xs text-gray-500">
            {category && (
              <span className="rounded-full bg-tc-lblue-05 px-2.5 py-0.5 font-medium text-tc-blue">
                {category}
              </span>
            )}
            {date && <time>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>}
          </div>
        )}
        <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-tc-blue transition-colors">
          {title}
        </h3>
        {summary && (
          <p className="mt-2 text-sm text-gray-400 line-clamp-3">{summary}</p>
        )}
      </div>
    </Link>
  );
}
