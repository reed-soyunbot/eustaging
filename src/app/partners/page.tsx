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

const linesOfBusiness = [
  {
    heading: "Trucking & Freight",
    items: [
      "Long-Haul Trucking",
      "Short-Haul / Local Trucking",
      "Regional Trucking",
      "Owner-Operator",
      "For-Hire Motor Carrier",
      "Private Carrier",
      "Intermodal / Drayage",
      "Container Hauling",
      "Refrigerated (Reefer)",
      "Flatbed",
      "Dry Van",
      "Expedited Freight",
      "Last Mile / First Mile Delivery",
      "Courier / Parcel Delivery",
      "Mail & Postal Contractors",
    ],
  },
  {
    heading: "Construction, Trades & Contractors",
    items: [
      "General Contractors",
      "Artisan Contractors",
      "Plumbers",
      "Electricians",
      "HVAC Contractors",
      "Carpenters",
      "Painters",
      "Roofers",
      "Masonry / Concrete Contractors",
      "Excavation & Grading",
      "Paving / Asphalt Contractors",
      "Utility Contractors",
      "Sign Installation",
      "Street & Road Contractors",
    ],
  },
  {
    heading: "Natural Resources & Heavy Materials",
    items: [
      "Pulpwood / Logging",
      "Sand & Gravel Hauling",
      "Aggregate Haulers",
      "Dirt, Soil & Fill Hauling",
      "Rock / Stone Haulers",
      "Coal Haulers",
      "Ore & Mining Transport",
      "Timber Haulers",
    ],
  },
  {
    heading: "Specialty & High-Hazard Hauling",
    items: [
      "Auto Haulers",
      "Livestock Haulers",
      "Mobile Equipment Transport",
      "Heavy Equipment Hauling",
      "Machinery Movers",
      "Tankers (Non-Hazmat)",
      "Hazmat Haulers",
      "Fuel / Petroleum Transport",
      "Chemical Transport",
    ],
  },
  {
    heading: "Waste, Recycling & Environmental",
    items: [
      "Garbage Haulers",
      "Refuse Collection",
      "Recycling Collection",
      "Roll-Off Container Services",
      "Dumpster Services",
      "Medical Waste Hauling",
      "Environmental Cleanup",
    ],
  },
  {
    heading: "Medical & Human Services Transport",
    items: [
      "Non-Emergency Medical Transportation (NEMT)",
      "Emergency Medical Transportation (EMT / Ambulance)",
      "Paratransit",
      "Dial-A-Ride",
      "Patient Transport Services",
    ],
  },
  {
    heading: "Passenger Transportation",
    items: [
      "Taxi",
      "Rideshare / TNC Fleets",
      "Limousine",
      "Charter Bus",
      "School Bus",
      "Shuttle Services",
      "Church Bus",
      "Senior Transportation",
      "Airport Shuttle",
      "Party Bus",
    ],
  },
  {
    heading: "Service, Repair & Business Use",
    items: [
      "Pest Control",
      "Lawn Care & Landscaping",
      "Tree Trimming & Arborists",
      "Janitorial / Cleaning Services",
      "Pool Service",
      "Appliance Repair",
      "Mobile Repair Services",
      "IT / Cable / Telecom Contractors",
    ],
  },
  {
    heading: "Moving, Storage & Delivery",
    items: [
      "Household Movers",
      "Commercial Movers",
      "Moving & Storage",
      "Furniture Delivery",
      "Appliance Delivery",
      "White-Glove Delivery",
    ],
  },
  {
    heading: "Towing & Roadside",
    items: [
      "Towing (Light, Medium, Heavy Duty)",
      "Roadside Assistance",
      "Wrecker Services",
      "Impound / Storage Yards",
    ],
  },
  {
    heading: "Retail, Wholesale & Distribution",
    items: [
      "Wholesale Distributors",
      "Beverage Distributors",
      "Food Distribution",
      "Vending Services",
      "Convenience Store Delivery",
      "Fuel Oil Dealers",
    ],
  },
  {
    heading: "Business Auto - Non-Trucking Specific",
    items: [
      "Sales Fleets",
      "Service Fleets",
      "Company Cars",
      "Employee-Driven Vehicles",
      "Hired & Non-Owned Auto Fleets",
    ],
  },
  {
    heading: "Other Common Specialty Classes",
    items: [
      "Mobile Food Trucks",
      "Ice Cream Trucks",
      "Armored Car Services",
      "Specialty Paint Vehicles",
      "Funeral Transport / Hearses",
      "Snow Plowing",
    ],
  },
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

      {/* Lines of Business */}
      <div className="mt-20 border-t border-white/10 pt-16">
        <h2 className="text-xl font-bold text-white md:text-2xl">
          We work with the following commercial auto lines of business:
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {linesOfBusiness.map((category) => (
            <div key={category.heading}>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-tc-blue">
                {category.heading}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
