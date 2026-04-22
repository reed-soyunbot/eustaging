import Link from "next/link";
import { getHelpArticlesByCategory } from "@/lib/help-center-content";

const CATEGORY_ORDER = [
  "Getting Started",
  "Onboarding",
  "ELDs & Cameras",
  "Billing",
  "API & Integrations",
  "General",
];

export default function HelpCenterPage() {
  const byCategory = getHelpArticlesByCategory();

  const sortedCategories = Object.keys(byCategory).sort(
    (a, b) =>
      (CATEGORY_ORDER.indexOf(a) === -1 ? 99 : CATEGORY_ORDER.indexOf(a)) -
      (CATEGORY_ORDER.indexOf(b) === -1 ? 99 : CATEGORY_ORDER.indexOf(b))
  );

  return (
    <main className="mx-auto max-w-[1000px] px-6 py-12">
      {/* Hero */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-tc-blue">
          Documentation
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white">How can we help?</h1>
        <p className="mx-auto mt-3 max-w-lg text-gray-400">
          Guides, walkthroughs, and reference docs for TruckerCloud insurance partners.
        </p>
      </div>

      {/* Articles by category */}
      <div className="space-y-10">
        {sortedCategories.map((category) => (
          <section key={category}>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-tc-blue">
              {category}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {byCategory[category].map((article) => (
                <Link
                  key={article.slug}
                  href={`/help-center/${article.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-tc-blue/40 hover:bg-white/10"
                >
                  <h3 className="font-semibold text-white group-hover:text-tc-blue transition-colors">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="mt-1 text-sm text-gray-400">{article.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-gray-300">Can&apos;t find what you&apos;re looking for?</p>
        <a
          href="mailto:support@truckercloud.com"
          className="mt-3 inline-block rounded-full bg-tc-button px-6 py-2.5 text-sm font-medium text-white hover:bg-tc-button-hover transition-colors"
        >
          Contact Support
        </a>
      </div>
    </main>
  );
}
