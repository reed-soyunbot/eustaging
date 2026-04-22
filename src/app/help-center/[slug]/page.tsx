import { notFound } from "next/navigation";
import Link from "next/link";
import { getHelpArticle, getHelpSlugs } from "@/lib/help-center-content";
import RichContent from "@/components/RichContent";

export async function generateStaticParams() {
  return getHelpSlugs().map((slug) => ({ slug }));
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) notFound();

  return (
    <main className="mx-auto max-w-[800px] px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/help-center" className="hover:text-tc-blue transition-colors">
          Help Center
        </Link>
        <span>/</span>
        <span className="text-gray-400">{article.category}</span>
        <span>/</span>
        <span className="text-white">{article.title}</span>
      </nav>

      {/* Article header */}
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-tc-blue">
          {article.category}
        </p>
        <h1 className="text-3xl font-bold text-white md:text-4xl">{article.title}</h1>
        {article.description && (
          <p className="mt-3 text-lg text-gray-400">{article.description}</p>
        )}
      </div>

      {/* Article body */}
      <article className="help-article">
        <RichContent html={article.content} />
      </article>

      {/* Back link */}
      <div className="mt-12 border-t border-white/10 pt-8">
        <Link
          href="/help-center"
          className="text-sm text-tc-blue hover:underline transition-colors"
        >
          ← Back to Help Center
        </Link>
      </div>
    </main>
  );
}
