interface IntegrationGridProps {
  integrations: string[];
}

export default function IntegrationGrid({ integrations }: IntegrationGridProps) {
  if (integrations.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-white">
          Supported ELD & Camera Providers
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {integrations.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <h3 className="text-sm font-medium text-white">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
