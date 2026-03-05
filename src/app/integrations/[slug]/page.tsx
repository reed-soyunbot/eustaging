import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getIntegrationBySlug, getIntegrationSlugs } from "@/lib/content";
import RichContent from "@/components/RichContent";

export async function generateStaticParams() {
  return getIntegrationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);
  if (!integration) return {};
  return {
    title: `Connect ${integration.eldName} to TruckerCloud`,
    description: integration.eldDescription,
  };
}

export default async function IntegrationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);

  if (!integration) {
    notFound();
  }

  const capabilities = [
    { key: "location", label: "Location", enabled: integration.capabilities.location },
    { key: "vehicle", label: "Vehicle", enabled: integration.capabilities.vehicle },
    { key: "hos", label: "Hours of Service", enabled: integration.capabilities.hos },
    { key: "driver", label: "Driver", enabled: integration.capabilities.driver },
    { key: "safetyEvents", label: "Safety Events", enabled: integration.capabilities.safetyEvents },
    { key: "historicalLocation", label: "Historical Location", enabled: integration.capabilities.historicalLocation },
  ];

  return (
    <div className="mx-auto max-w-[800px] px-6 py-16">
      <Link
        href="/eld"
        className="mb-6 inline-flex items-center gap-1 text-sm text-tc-blue hover:underline"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to ELD & Cameras
      </Link>

      <div className="flex items-center gap-4">
        {integration.eldLogo && (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={integration.eldLogo}
              alt={integration.eldName}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{integration.eldName}</h1>
          <p className="mt-1 text-sm text-gray-400">{integration.spoilerText}</p>
        </div>
      </div>

      {integration.eldDescription && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white">What is {integration.eldName}?</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">{integration.eldDescription}</p>
        </div>
      )}

      {integration.integrationDescription && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white">{integration.integrationDescription}</h2>
        </div>
      )}

      {/* Capabilities */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-white">Capabilities</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div
              key={cap.key}
              className={`flex items-center gap-3 rounded-lg p-3 ${
                cap.enabled
                  ? "bg-tc-blue/10 text-tc-blue"
                  : "bg-white/5 text-gray-500"
              }`}
            >
              <span className="text-lg">{cap.enabled ? "\u2713" : "\u2717"}</span>
              <span className="text-sm font-medium">{cap.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Body content (excerpts) */}
      {integration.body && (
        <div className="mt-10">
          <RichContent html={integration.body} />
        </div>
      )}

      <div className="mt-12 text-center">
        <Link
          href="/get-a-demo"
          className="inline-block rounded-full bg-tc-button px-8 py-3 text-base font-medium text-white hover:bg-tc-button-hover transition-colors"
        >
          Get Started with {integration.eldName}
        </Link>
      </div>
    </div>
  );
}
