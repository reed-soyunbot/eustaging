import Image from "next/image";
import HubSpotForm from "@/components/HubSpotForm";

const benefits = [
  {
    icon: "/images/demo-warning.png",
    title: "Rapid FNOL alerts & claims processing",
    description:
      "Access ELD data and accident details within minutes to accelerate claims processing.",
  },
  {
    icon: "/images/demo-costs.png",
    title: "Cost control",
    description:
      "Reduce legal escalations and claims expenses through verified tracking data.",
  },
  {
    icon: "/images/demo-monitor.png",
    title: "Full fleet visibility",
    description:
      "Monitor vehicles, driver behavior, and incidents from a centralized system.",
  },
];

const testimonials = [
  {
    quote:
      "TruckerCloud instantly tells me who deserves high fives and where our opportunities are.",
    name: "Jeffrey Marks",
    title: "CPCU, ARM-E, CPL, Transportation Program Manager",
  },
  {
    quote:
      "Through their network of 40+ telematics providers, TruckerCloud has streamlined our usage-based insurance solutions.",
    name: "Paul Brocklebank",
    title: "CPCU, President and CEO, Canal Insurance Company",
  },
  {
    quote:
      "The logic is easy to understand and explain to drivers. Even more so, with very little analysis the data almost instantly tells me who deserves high fives.",
    name: "Andy Standefer",
    title: "Director of Safety, Fleenor Bros Enterprises Inc",
  },
];

export default function GetADemoPage() {
  return (
    <div>
      {/* Hero with form */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Transform the way you view fleet risk
            </h1>
            <p className="mt-4 text-gray-400">
              TruckerCloud is a telematics data aggregator consolidating
              commercial auto risk data. The platform helps insurers underwrite
              policies more effectively, reduce claims expenses, and enhance
              safety operations.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="mt-1 text-tc-blue">&#10003;</span>
                Instant FNOL alerts to accelerate claims processing
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="mt-1 text-tc-blue">&#10003;</span>
                Automated risk scoring for precise premium calculations
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="mt-1 text-tc-blue">&#10003;</span>
                Real-time, ready-to-use dashboards enabling faster
                decision-making
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="mt-1 text-tc-blue">&#10003;</span>
                Scalable dashboard infrastructure supporting business growth
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <HubSpotForm />
          </div>
        </div>
      </section>

      {/* Chart image */}
      <section className="mx-auto max-w-[1200px] px-6 py-8">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/demo-chart.jpg"
            alt="Fleet risk analytics chart"
            width={1200}
            height={600}
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
          Prevent costly claims with our fleet tracking software
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                <Image
                  src={b.icon}
                  alt={b.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-gray-300 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-500">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
