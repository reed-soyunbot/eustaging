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
      { time: "5 PM", detail: "Open-bar Happy Hour" },
      { time: "7:30 PM", detail: "Dinner at Iberian Pig" },
    ],
  },
  {
    day: "Tuesday",
    items: [
      { time: "8 AM", detail: "Breakfast in pre-event space adjacent to event hall" },
      { time: "9 AM", detail: "Roundtable Summit in event hall" },
      { time: "12 PM", detail: "Lunch provided on site at rooftop restaurant" },
      { time: "2 PM", detail: "Roundtable Summit in event hall" },
      { time: "5 PM", detail: "Happy Hour at Pin's Mechanical in the Gulch" },
    ],
  },
  {
    day: "Wednesday",
    items: [{ time: "11 AM", detail: "Check-Out & Departures" }],
  },
];

export default function EventsSummitPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background image with dark blue overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/nashville-skyline.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1928] via-[#0f1928]/90 to-[#0f1928]/80" />

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
  );
}

