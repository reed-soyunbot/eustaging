import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTelematicsInsuranceBySlug,
  getTelematicsInsuranceSlugs,
} from "@/lib/content";

export async function generateStaticParams() {
  return getTelematicsInsuranceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getTelematicsInsuranceBySlug(slug);
  if (!page) return {};
  return {
    title: page.h1,
    description: page.paragraphText,
  };
}

export default async function TelematicsInsuranceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getTelematicsInsuranceBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[800px] px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{page.h1}</h1>

      {page.paragraphText && (
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          {page.paragraphText}
        </p>
      )}

      {page.h3 && (
        <section className="mt-10">
          <h3 className="text-2xl font-bold text-white">{page.h3}</h3>
          {page.h3Text && (
            <p className="mt-4 text-gray-400 leading-relaxed">{page.h3Text}</p>
          )}
        </section>
      )}

      {page.whyH3 && (
        <section className="mt-10">
          <h3 className="text-2xl font-bold text-white">{page.whyH3}</h3>
          {page.whyH3Text && (
            <p className="mt-4 text-gray-400 leading-relaxed">{page.whyH3Text}</p>
          )}
        </section>
      )}

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h2 className="text-xl font-bold text-white">Want to learn more about {page.title}?</h2>
        <p className="mt-2 text-gray-400">
          See how TruckerCloud can help you leverage telematics data for better insurance outcomes.
        </p>
        <div className="mt-6">
          <Link
            href="/get-a-demo"
            className="inline-block rounded-full bg-tc-button px-8 py-3 text-base font-medium text-white hover:bg-tc-button-hover transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
