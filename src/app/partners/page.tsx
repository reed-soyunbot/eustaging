import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: "Crum & Forster", logo: "/images/partners/Crum--Forster-Insurance.png" },
  { name: "Great West Casualty Company", logo: "/images/partners/Great-West-Casualty-Company.png" },
  { name: "Canal Insurance", logo: "/images/partners/Canal-Insurance.png" },
  { name: "Skyward Specialty Insurance", logo: "/images/partners/Skyward-Specialty-Insurance.png" },
  { name: "Northland Insurance", logo: "/images/partners/NL-logo.jpg" },
  { name: "SPG Insurance Solutions", logo: "/images/partners/SPG-Insurance-Solutions.png" },
  { name: "Transportation Insurance Experts", logo: "/images/partners/Transportation-Insurance.png" },
  { name: "Clearfork", logo: "/images/partners/Clearfork.png" },
  { name: "Kinsale Capital Group", logo: "/images/partners/Kinsale.png" },
  { name: "SPS", logo: "/images/partners/SPS.png" },
  { name: "Swamp Fox Agency", logo: "/images/partners/SwampFox-Web-Graphics-300x80-1.png" },
  { name: "Amcom", logo: "/images/partners/images.png" },
  { name: "RLI Transportation", logo: "/images/partners/RLI_Transportation_2016_rgb.jpg" },
  { name: "Wholesure", logo: "/images/partners/Wholesure.png" },
  { name: "Cable Insurance Company", logo: "/images/partners/Cable-Insurance-Logo.png" },
  { name: "Paramount", logo: "/images/partners/Paramount.png" },
  { name: "Ten Four Truck Insurance", logo: "/images/partners/Ten-Four.png" },
  { name: "QEO Insurance Group", logo: "/images/partners/qeo_logo.png" },
  { name: "Blue Ridge Insurance Services", logo: "/images/partners/Blue-Ridge.png" },
  { name: "Sentry", logo: "/images/partners/logo-sentry.svg" },
  { name: "BSRI", logo: "/images/partners/BSRI.png" },
  { name: "RPS", logo: "/images/partners/RPS-Logo-Monogram.jpg" },
];

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-tc-blue">
          OUR PARTNERS
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          TruckerCloud is proud to be trusted by{" "}
          <span className="text-tc-blue">leading commercial auto insurers</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-gray-400">
          We collaborate with high-impact companies to drive data-driven innovation in
          the commercial auto insurance space.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center rounded-xl bg-white p-6"
            style={{ minHeight: "120px" }}
          >
            <div className="relative h-16 w-full">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="250px"
              />
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center rounded-xl border-2 border-tc-blue/30 bg-tc-blue/5 p-6" style={{ minHeight: "120px" }}>
          <p className="text-lg font-semibold text-white">And more!</p>
        </div>
      </div>
    </div>
  );
}
