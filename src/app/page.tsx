import Image from "next/image";
import Link from "next/link";
import HubSpotForm from "@/components/HubSpotForm";
import HeroAnimation from "@/components/HeroAnimation";

const testimonials = [
  {
    quote:
      '"TruckerCloud instantly tells me who deserves high fives and where our opportunities are, making it easy to understand and explain to drivers, which has transformed how we approach driver coaching and safety management."',
    author: "Jeffrey Marks",
    role: "CPCU, ARM-E, CPL, Transportation Program Manager",
  },
  {
    quote:
      '"Through their network of 40+ telematics providers, TruckerCloud has streamlined our usage-based insurance solutions, creating a critical foundation that accelerates our strategic growth and enables us to expand both our customer base and product offerings."',
    author: "Paul Brocklebank",
    role: "CPCU, President and CEO, Canal Insurance Company",
  },
  {
    quote:
      '"Every platform I have used over the last 15 years seems to focus on event-based coaching. What I appreciate the most about the data presented to me in this format is the clear logic, and focus on frequency. The logic is easy to understand and explain to drivers."',
    author: "Andy Standefer",
    role: "Director of Safety, Fleenor Bros Enterprises Inc",
  },
];

const stats = [
  {
    stat: "90%",
    description:
      "TruckerCloud's compatible with more than 90% of commercial vehicles on the road.",
  },
  {
    stat: "<30d",
    description:
      "Insurance companies launch new telematics program in under 30 days.",
  },
  {
    stat: "10%",
    description: "Reduce cost of claims by 10% or more.",
  },
  {
    stat: "20%",
    description:
      "Telematics lowers combined ratios by 20% when used effectively across underwriting, loss control, and claims.",
  },
  {
    stat: "5m",
    description:
      "On average, fleets successfully onboard themselves into the TruckerCloud platform within 5 minutes.",
  },
  {
    stat: "120+",
    description: "Integrations with 120+ ELDs and Cameras.",
  },
];

const benefits = [
  { icon: "/images/Lock.png", text: "Improve Safety without adding complexity" },
  { icon: "/images/Database.png", text: "Simplify risk management with all of your data in one place" },
  { icon: "/images/ClockClockwise.png", text: "Streamline decision making with out-of-box and real-time" },
  { icon: "/images/WarningCircle.png", text: "Use real-time data to identify potential crash alerts" },
  { icon: "/images/TrendUp.png", text: "Designed to grow with your business no matter your experience with telematics" },
];

const ourWay = [
  "Data-driven unit counts and premium capture",
  "Comprehensive, data-backed",
  "Accurate, automated mileage reporting",
  "Behavior-driven insights",
  "Immediate First Notice of Loss",
];

const oldWay = [
  "Missing VINs due to lack of visibility",
  "Fragmented underwriting variables",
  "Manual mileage and IFTA reporting",
  "No insights into driving behavior",
  "Average time to report a claim: 13 days",
];

const features = [
  {
    icon: "/images/p1.png",
    title: "Heartbeat Monitor",
    subtitle: "Stay informed in real-time",
  },
  {
    icon: "/images/p2.png",
    title: "Mileage Reporter",
    subtitle: "Track mileage automatically by geographic zone",
  },
  {
    icon: "/images/p3.png",
    title: "First Notice of Loss (FNOL)",
    subtitle: "Get Crash Details in Minutes",
  },
  {
    icon: "/images/p4.png",
    title: "Behavioral Analytics",
    subtitle: "Understand driving behavior",
  },
  {
    icon: "/images/p5.png",
    title: "Real-Time and Historical Data",
    subtitle: "90+ days of enriched historical data",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              The Smartest Turnkey Telematics Solution for{" "}
              <span className="text-tc-blue">Commercial Auto Insurance</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Lower your loss ratio with telematics insights delivered at scale.
            </p>
            <div className="mt-8">
              <Link
                href="/get-a-demo"
                className="inline-block rounded-full bg-tc-button px-8 py-3 text-base font-medium text-white hover:bg-tc-button-hover transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[550px]">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Why Insurers Choose TruckerCloud */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Why Insurers <span className="text-tc-blue">Choose</span> TruckerCloud
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.stat}
                className="flex items-center gap-5 rounded-xl border border-tc-blue/30 bg-tc-blue/5 px-6 py-5 text-left"
              >
                <p className="shrink-0 text-4xl font-bold text-tc-blue md:text-5xl">
                  {item.stat}
                </p>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/get-a-demo"
              className="inline-block rounded-full bg-tc-button px-8 py-3 text-base font-medium text-white hover:bg-tc-button-hover transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            It&apos;s worked for <span className="text-tc-blue">them</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left"
              >
                <p className="text-sm leading-relaxed text-gray-300">{t.quote}</p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Leading Insurers <span className="text-tc-blue">Choose</span> TruckerCloud
            </h2>
            <div className="mt-8">
              <Image
                src="/images/partners/web-banner.png"
                alt="Crum & Forster, Canal Insurance, Great West Casualty, Fundamental Underwriters, Amwins, Northland Insurance"
                width={2212}
                height={95}
                className="mx-auto hidden w-full max-w-[1100px] md:block"
              />
              <Image
                src="/images/partners/mobile-banner.png"
                alt="Partner logos"
                width={1114}
                height={249}
                className="mx-auto w-full max-w-[500px] md:hidden"
              />
            </div>
            <div className="mt-6">
              <p className="text-base text-gray-300">
                Programs covering{" "}
                <Link href="/partners" className="text-tc-blue hover:underline transition-colors">Trucking &amp; Freight</Link>
                {" · "}
                <Link href="/partners" className="text-tc-blue hover:underline transition-colors">Construction &amp; Trades</Link>
                {" · "}
                <Link href="/partners" className="text-tc-blue hover:underline transition-colors">Natural Resources</Link>
                {" · "}
                <Link href="/partners" className="text-tc-blue hover:underline transition-colors">Specialty Hauling</Link>
                {" · "}
                <Link href="/partners" className="text-tc-blue hover:underline transition-colors">Passenger Transportation</Link>
                {" · "}
                <Link href="/partners" className="text-tc-blue font-medium hover:underline transition-colors">and more →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            TruckerCloud Revolutionizes How Insurers Understand{" "}
            <span className="text-tc-blue">Risk</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            TruckerCloud provides you with unified insights enabling you to provide
            precise underwriting, optimized premiums, and proactive risk mitigation.
          </p>
          <div className="mt-10 space-y-4">
            {benefits.map((b) => (
              <div
                key={b.text}
                className="mx-auto flex max-w-2xl items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left"
              >
                <Image src={b.icon} alt="" width={24} height={24} className="shrink-0" />
                <p className="font-medium text-white">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Why we&apos;re better
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            You Need Risk Intelligence
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-tc-blue bg-tc-blue/5 p-8 text-left">
              <h3 className="text-center text-lg font-bold uppercase tracking-wide text-tc-blue">
                our way
              </h3>
              <p className="mt-2 text-center text-sm text-gray-400">
                Using data to drive new operating norms
              </p>
              <div className="mt-6 space-y-3">
                {ourWay.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Image src="/images/log2.png" alt="" width={20} height={20} className="mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left">
              <h3 className="text-center text-lg font-bold uppercase tracking-wide text-gray-500">
                the old way
              </h3>
              <p className="mt-2 text-center text-sm text-gray-500">
                Traditional Paradigms significantly lack data
              </p>
              <div className="mt-6 space-y-3">
                {oldWay.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Image src="/images/log1.png" alt="" width={20} height={20} className="mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Score Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            WHAT WE PROVIDE
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            TruckerCloud&apos;s Risk Score
          </h2>
          <div className="mt-10">
            <Image
              src="/images/section2.png"
              alt="TruckerCloud Risk Score"
              width={2059}
              height={600}
              className="mx-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            how we do it
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            All your telematics data in one platform.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.slice(0, 3).map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <Image src={f.icon} alt={f.title} width={80} height={80} className="mx-auto" />
                <h3 className="mt-4 font-semibold text-tc-blue">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{f.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {features.slice(3).map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <Image src={f.icon} alt={f.title} width={80} height={80} className="mx-auto" />
                <h3 className="mt-4 font-semibold text-tc-blue">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{f.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HubSpot Form Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[600px] px-6">
          <HubSpotForm />
        </div>
      </section>
    </>
  );
}
