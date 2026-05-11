export const metadata = {
  title: "TruckerCloud Roundtable Summit",
  description: "Join TruckerCloud for an in-person summit in Nashville, TN — May 18–19.",
};

const agenda = [
  {
    day: "Monday",
    items: [
      { time: null, detail: "Optional Golf at local course" },
      { time: "4 PM", detail: "Hotel check-in" },
      { time: "5 PM", detail: "Open-bar Happy Hour on the Rooftop" },
      { time: "7:30 PM", detail: "Dinner at Iberian Pig" },
    ],
  },
  {
    day: "Tuesday",
    items: [
      { time: "8 AM", detail: "Breakfast in pre-event space adjacent to event hall" },
      { time: "9 AM", detail: "Roundtable Summit in event hall" },
      { time: "12 PM", detail: "Lunch provided on the Lawn (adjacent to meeting room)" },
      { time: "1 PM", detail: "A Regulator's Perspective on Commercial Auto — Zach Crandall, TN Dept. of Insurance" },
      { time: "2 PM", detail: "Roundtable Summit in event hall" },
      { time: "5 PM", detail: "Happy Hour at Pin's Mechanical in the Gulch" },
    ],
  },
  {
    day: "Wednesday",
    items: [{ time: "11 AM", detail: "Check-Out & Departures" }],
  },
];

type SocialSession = {
  type: "social";
  time: string;
  title: string;
  note: string;
};

type RegularSession = {
  type: "session";
  time: string;
  title: string;
  subtitle: string;
  description: string;
  topics?: string[];
};

type AgendaItem = SocialSession | RegularSession;

const tuesdayAgenda: AgendaItem[] = [
  {
    type: "social",
    time: "8:00 AM",
    title: "Hot Breakfast Provided",
    note: "Pre-event space · Informal networking",
  },
  {
    type: "session",
    time: "9:00 AM",
    title: "Welcome & State of Commercial Auto Telematics",
    subtitle: "15 min with Spencer Mitchell (TruckerCloud)",
    description: "",
  },
  {
    type: "session",
    time: "9:15 AM",
    title: "Data Science & Actuarial: Building a Score the Industry Can Actually File",
    subtitle:
      "60 min · Presentation + Panel + Q&A with Simone Castelli (TruckerCloud) and Geoff Werner (Werner Advisory)",
    description:
      "A deep dive on turning telematics data into a risk score that actuaries trust and regulators approve — covering the v3 file-able score, cross-TSP normalization, and actuarial auditability.",
    topics: [
      "v3 File-able Score",
      "Cross-TSP Normalization",
      "Behavioral vs. Event Scoring",
      "Data Confidence Methodology",
      "Loss Experience Correlation",
    ],
  },
  {
    type: "session",
    time: "10:15 AM",
    title: "Product Roadmap",
    subtitle:
      "60 min · Presentation + Interactive Feedback with Spencer Mitchell (TruckerCloud)",
    description:
      "Where TruckerCloud has been and where it's going — followed by a structured audience feedback session. 20 minutes of presentation, 40 minutes of listening.",
    topics: ["2025 Recap", "2026 Roadmap", "Alert Monitoring", "TSP Expansion", "Live Feature Prioritization"],
  },
  {
    type: "session",
    time: "11:15 AM",
    title: "Underwriting with TruckerCloud Masterclass",
    subtitle: "45 min · Training Session + Q&A with Tiana Schowe & Sam McNearney (TruckerCloud)",
    description:
      "A hands-on underwriting training session led by Tiana Schowe and Sam McNearney using mock underwriting guidelines — covering how to apply TruckerCloud data in real underwriting workflows.",
  },
  {
    type: "social",
    time: "12:00 PM",
    title: "Lunch",
    note: "The Lawn · Adjacent to the meeting room · Catered, closed to the public",
  },
  {
    type: "session",
    time: "1:00 PM",
    title: "A Regulator's Perspective on Commercial Auto Insurance",
    subtitle: "60 min · Conversation with Zach Crandall, Tennessee Department of Insurance",
    description:
      "An open conversation with Zach Crandall, Deputy Commissioner at the Tennessee Department of Insurance, on the state of the commercial auto insurance market — covering rate trends, regulatory priorities, and how data and technology fit into the future of the space.",
    topics: [
      "Market Conditions",
      "Rate & Filing Environment",
      "Telematics & Regulatory Outlook",
      "Loss Cost Trends",
      "Regulatory Priorities",
    ],
  },
  {
    type: "session",
    time: "2:00 PM",
    title: "Inside the Cab: What Telematics Vendors Are Actually Delivering to Your Insureds",
    subtitle:
      "60 min · Vendor Panel + Moderated Discussion + Insurer Feedback with Netradyne, Motive, and Samsara",
    description:
      "Three leading TSPs walk through the in-cab reality, the full data universe being captured, and what commercial auto insurers most commonly get wrong. Includes dedicated time for insurers to give direct feedback to vendors.",
    topics: [
      "Installation & Adoption",
      "Driver Experience",
      "Underutilized Data",
      "Video & AI Event Detection",
      "ELDs as Insurance-Grade Data",
      "Insurer Feedback Forum",
    ],
  },
  {
    type: "session",
    time: "3:00 PM",
    title: "From the Scene to Settlement: How Telematics Is Reshaping Commercial Auto Claims",
    subtitle: "60 min · Moderated Panel + Q&A with Triton / RC Services and Primacy Risk",
    description:
      "Practitioner-led session on how telematics is being used in claims workflows today — from FNOL through settlement — and what the ideal integration looks like.",
    topics: [
      "FNOL Acceleration",
      "Dashcam & Video Evidence",
      "Nuclear Verdicts",
      "Fraud Detection",
      "Alert Monitoring",
      "Subrogation Support",
    ],
  },
  {
    type: "session",
    time: "4:00 PM",
    title: "Closing Remarks",
    subtitle: "15 min with Spencer Mitchell (TruckerCloud)",
    description: "",
  },
  {
    type: "social",
    time: "5:00 PM",
    title: "Happy Hour — Hosted by TruckerCloud",
    note: "Rooftop · Canopy by Hilton · Food, drinks, and continued conversation",
  },
];

export default function EventsSummitPage() {
  return (
    <>
    <div className="relative min-h-screen">
      {/* Background image with dark blue overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/nashville-skyline.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1928]/70 via-[#0f1928]/80 to-[#0a1320]" />

      <div className="relative mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">

          {/* Left column — event info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-tc-blue">
              TruckerCloud Roundtable Summit
            </p>

            <div className="mt-6">
              <p className="text-tc-blue font-bold text-lg">Date:</p>
              <p className="text-2xl font-bold text-white md:text-3xl whitespace-nowrap">
                Monday, May 18 – Tuesday, May 19
              </p>
            </div>

            <div className="mt-6">
              <p className="text-tc-blue font-bold text-lg">Location:</p>
              <p className="text-2xl font-bold text-white md:text-3xl leading-snug">
                Canopy by Hilton<br />
                920 Division Street<br />
                Nashville, TN 37203
              </p>
            </div>

            <p className="mt-8 text-gray-400 leading-relaxed">
              We&apos;re building the future of telematics in commercial auto insurance at TruckerCloud,
              and we&apos;d like you to be at the center of it. In service of that vision, we&apos;re
              formalizing a mechanism for market and product education, as well as customer feedback and
              engagement. This in-person summit is an opportunity for our customers to learn from subject
              matter experts, share their experiences with our platform, and enjoy themselves alongside
              their peers.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://buytickets.at/truckercloud/2013467"
                className="rounded-full bg-tc-button px-7 py-3 text-sm font-semibold text-white hover:bg-tc-button-hover transition-colors"
              >
                Reserve Your Spot
              </a>
              <a
                href="https://www.hilton.com/en/attend-my-event/bnaglpy-truck-d2fc65c3-4a8c-4227-bd60-b83c1ab3a92c/"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:border-white transition-colors"
              >
                Book Your Rooms
              </a>
            </div>
          </div>

          {/* Right column — agenda */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-tc-blue">
              Agenda Outline:
            </p>

            <div className="mt-6 space-y-4">
              {agenda.map((section) => (
                <div
                  key={section.day}
                  className="rounded-xl border border-tc-blue/30 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-bold text-white">{section.day}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-300">
                        <span className="text-gray-500">•</span>
                        <span>
                          {item.time && (
                            <span className="font-bold text-white">{item.time}:</span>
                          )}{" "}
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-gray-400">
              Questions? Email Reed at{" "}
              <a
                href="mailto:reed@truckercloud.com"
                className="text-tc-blue hover:underline"
              >
                reed@truckercloud.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Full Tuesday Agenda */}
    <section className="bg-[#0a1320] px-6 pb-16 pt-2 md:pb-24 md:pt-4">
      <div className="mx-auto max-w-[860px]">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-tc-blue">
          Tuesday, May 19, 2026
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-white">Full Agenda</h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
          {tuesdayAgenda.map((item, i) => {
            const isEven = i % 2 === 0;
            const rowBg = isEven ? "bg-[#0c1b2a]" : "bg-[#0a1320]";

            if (item.type === "social") {
              return (
                <div
                  key={i}
                  className={`${rowBg} grid grid-cols-[80px_1fr] gap-x-6 px-6 py-4 border-b border-white/10 last:border-b-0`}
                >
                  <span className="pt-0.5 text-sm font-bold text-tc-blue">{item.time}</span>
                  <div>
                    <p className="font-bold text-white leading-snug">{item.title}</p>
                    <p className="mt-1 text-xs text-gray-400">{item.note}</p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={i}
                className={`${rowBg} grid grid-cols-[80px_1fr] gap-x-6 px-6 py-6 border-b border-white/10 last:border-b-0`}
              >
                <span className="pt-0.5 text-sm font-bold text-tc-blue">{item.time}</span>
                <div>
                  <p className="font-bold text-white leading-snug">{item.title}</p>
                  <p className="mt-1 text-xs text-gray-400">{item.subtitle}</p>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">{item.description}</p>
                  {item.topics && item.topics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full bg-tc-blue/15 px-3 py-0.5 text-xs font-medium text-tc-blue"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}

