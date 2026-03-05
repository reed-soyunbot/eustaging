import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "TruckerCloud instantly tells me who deserves high fives and where our opportunities are.",
    name: "Jeffrey Marks",
    title: "CPCU, ARM-E, CPL, Transportation Program Manager",
    photo: "/images/1.png",
  },
  {
    quote:
      "Through their network of 40+ telematics providers, TruckerCloud has streamlined our usage-based insurance solutions.",
    name: "Paul Brocklebank",
    title: "CPCU, President and CEO, Canal Insurance Company",
    photo: "/images/2.png",
  },
  {
    quote:
      "The logic is easy to understand and explain to drivers. Even more so, with very little analysis the data almost instantly tells me who deserves high fives.",
    name: "Andy Standefer",
    title: "Director of Safety, Fleenor Bros Enterprises Inc",
    photo: "/images/3.png",
  },
];

export default function ProductPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 text-center md:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Fleet Telematics Solutions Built for Commercial Auto Insurance
        </h1>
        <p className="mt-4 text-xl font-semibold text-tc-blue md:text-2xl">
          Underwrite Smarter. Price Risk Right. No Guesswork.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-gray-400">
          TruckerCloud connects to 120+ ELD and camera systems to unify
          commercial fleet data, delivering the insights your underwriting and
          claims teams need to price risk, reduce losses, and act faster.
        </p>
        <div className="mt-8">
          <Link
            href="/get-a-demo"
            className="inline-block rounded-full bg-tc-button px-8 py-3 text-base font-medium text-white hover:bg-tc-button-hover transition-colors"
          >
            Schedule Your Demo
          </Link>
        </div>
      </section>

      {/* Telematics Insurance Tools That Drive Real Results */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
          Telematics Insurance Tools That Drive Real Results
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/product-group-27467.png"
              alt="Telematics tool 1"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/product-group-27468.png"
              alt="Telematics tool 2"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/product-group-27469.png"
              alt="Telematics tool 3"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/product-group-27470.png"
              alt="Telematics tool 4"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* How Our Fleet Vehicle Insurance Solution Works */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
          How Our Fleet Vehicle Insurance Solution Works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Book a demo to explore how TruckerCloud helps you build and scale
          smarter insurance telematics programs
        </p>
        <div className="mt-10 flex justify-center">
          {/* Desktop: line image */}
          <div className="relative hidden w-full max-w-[900px] md:block">
            <Image
              src="/images/product-line.png"
              alt="How it works"
              width={900}
              height={400}
              className="w-full object-contain"
            />
          </div>
          {/* Mobile: mobile image */}
          <div className="relative w-full max-w-[400px] md:hidden">
            <Image
              src="/images/product-mobile.png"
              alt="How it works"
              width={400}
              height={600}
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Fleet Telematics Features That Matter to Insurers */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
          Fleet Telematics Features That Matter to Insurers
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/product-group-27447.png"
              alt="Feature 1"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/product-group-27448.png"
              alt="Feature 2"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/product-group-27449.png"
              alt="Feature 3"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/product-group-27450.png"
              alt="Feature 4"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/product-group-27451.png"
              alt="Feature 5"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Leading Insurers Choose TruckerCloud */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Leading Insurers Choose TruckerCloud
        </h2>
        <div className="mt-8">
          <Image
            src="/images/partners/web-banner.png"
            alt="Partner logos"
            width={1000}
            height={100}
            className="mx-auto hidden w-full max-w-[900px] object-contain md:block"
          />
          <Image
            src="/images/partners/mobile-banner.png"
            alt="Partner logos"
            width={400}
            height={300}
            className="mx-auto w-full max-w-[400px] object-contain md:hidden"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
          It&apos;s worked for them
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-gray-300 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 text-center md:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          See the Future of Telematics and Usage-Based Auto Insurance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Book a demo to explore how TruckerCloud helps you build and scale
          smarter insurance telematics programs
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/get-a-demo"
            className="inline-block rounded-full bg-tc-button px-8 py-3 text-base font-medium text-white hover:bg-tc-button-hover transition-colors"
          >
            Schedule Your Demo
          </Link>
          <Link
            href="/partners"
            className="inline-block rounded-full border border-white/20 px-8 py-3 text-base font-medium text-white hover:bg-white/5 transition-colors"
          >
            Explore Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}
