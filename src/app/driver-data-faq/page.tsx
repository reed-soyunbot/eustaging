import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Driver Data FAQ | TruckerCloud",
  description: "Learn how TruckerCloud collects, uses, and protects driver data.",
};

export default function DriverDataFaqPage() {
  return (
    <div className="program-standalone min-h-screen bg-[#0f1928]">
      {/* TC Logo Banner */}
      <section className="bg-[#0f1928] py-[30px] pl-[30px] md:py-[40px] md:pl-[60px] lg:py-[50px] lg:pl-[100px]">
        <Image
          src="/images/programs/tc-logo.png"
          alt="TruckerCloud"
          width={888}
          height={60}
          className="h-auto w-[40%] max-w-[15%] sm:max-w-[20%] md:max-w-[15%]"
          priority
        />
      </section>

      {/* Hero */}
      <section className="bg-[#0f1928] px-10 pb-16 pt-4 md:px-20 lg:px-[150px]">
        <div className="mx-auto max-w-[800px]">
          <p className="font-[Inter,sans-serif] text-xs font-bold uppercase tracking-widest text-[#44a3db]">
            Data &amp; Privacy
          </p>
          <h1 className="mt-3 font-[Inter,sans-serif] text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Driver Data FAQ
          </h1>
          <p className="mt-4 max-w-[560px] font-[Inter,sans-serif] text-lg leading-relaxed text-gray-400">
            Plain-language answers to how TruckerCloud handles driver data — what we collect, why we collect it, and how it&apos;s protected.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white px-10 pb-24 md:px-20 lg:px-[150px]">
        <div className="mx-auto max-w-[800px] space-y-14">

          {/* Q1 */}
          <div className="border-t-2 border-gray-100 pt-12">
            <h2 className="font-[Inter,sans-serif] text-2xl font-bold text-[#44a3db]">
              What driver data does TruckerCloud collect?
            </h2>
            <p className="mt-4 font-[Inter,sans-serif] text-base leading-relaxed text-[#333]">
              TruckerCloud pulls driver data from the fleet&apos;s telematics service provider (TSP)
              through their API. The fields available in our system include:
            </p>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="font-[Inter,sans-serif] text-sm font-bold uppercase tracking-wide text-[#44a3db]">Typically populated</p>
                <p className="mt-2 font-[Inter,sans-serif] text-base font-medium text-[#333]">
                  First Name, Last Name, ELD Driver ID, Status (active/deactivated)
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="font-[Inter,sans-serif] text-sm font-bold uppercase tracking-wide text-[#aaa]">Rarely populated</p>
                <p className="mt-2 font-[Inter,sans-serif] text-base font-medium text-[#333]">
                  Middle Name, License Number, License State/Class/Expiry, Phone Number, Email, Address
                </p>
              </div>
            </div>
            <p className="mt-5 font-[Inter,sans-serif] text-base leading-relaxed text-[#333]">
              In practice, the vast majority of driver records contain only the driver&apos;s name,
              their ELD driver ID, and their active/deactivated status. The remaining fields are
              part of the TSP&apos;s data schema but are rarely populated by the fleet or the provider.
            </p>
          </div>

          {/* Q2 */}
          <div className="border-t-2 border-gray-100 pt-12">
            <h2 className="font-[Inter,sans-serif] text-2xl font-bold text-[#44a3db]">
              How is driver data used?
            </h2>
            <p className="mt-4 font-[Inter,sans-serif] text-base leading-relaxed text-[#333]">
              Driver data serves three specific purposes within the TruckerCloud platform:
            </p>
            <div className="mt-6 space-y-6">
              <div className="flex gap-5">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#44a3db]" />
                <div>
                  <p className="font-[Inter,sans-serif] text-base font-bold text-[#222]">
                    Driver-to-mileage association
                  </p>
                  <p className="mt-2 font-[Inter,sans-serif] text-base leading-relaxed text-[#444]">
                    The ELD driver ID is the link between a driver and their miles driven. Without
                    this data, it is not possible to attribute mileage to individual drivers.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#44a3db]" />
                <div>
                  <p className="font-[Inter,sans-serif] text-base font-bold text-[#222]">
                    Safety event and collision reporting
                  </p>
                  <p className="mt-2 font-[Inter,sans-serif] text-base leading-relaxed text-[#444]">
                    Safety events (hard braking, speeding, etc.) and collision reports reference
                    the driver involved. The driver endpoint provides the identity context needed
                    for claims investigation and loss control analysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#44a3db]" />
                <div>
                  <p className="font-[Inter,sans-serif] text-base font-bold text-[#222]">
                    Vehicle assignments
                  </p>
                  <p className="mt-2 font-[Inter,sans-serif] text-base leading-relaxed text-[#444]">
                    Drivers are associated with specific vehicles through the TSP platform, enabling
                    insurers to understand who is operating which assets and when.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Q3 */}
          <div className="border-t-2 border-gray-100 pt-12">
            <h2 className="font-[Inter,sans-serif] text-2xl font-bold text-[#44a3db]">
              How is driver data protected?
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex gap-5">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#44a3db]" />
                <div>
                  <p className="font-[Inter,sans-serif] text-base font-bold text-[#222]">
                    SOC 2 Compliance
                  </p>
                  <p className="mt-2 font-[Inter,sans-serif] text-base leading-relaxed text-[#444]">
                    TruckerCloud maintains SOC 2 compliance. Full details on our security posture,
                    certifications, and policies can be made available at request.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#44a3db]" />
                <div>
                  <p className="font-[Inter,sans-serif] text-base font-bold text-[#222]">
                    Insurer isolation
                  </p>
                  <p className="mt-2 font-[Inter,sans-serif] text-base leading-relaxed text-[#444]">
                    Driver data is never shared across insurers. Each insurer only has access to
                    data for fleets within their own program.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#44a3db]" />
                <div>
                  <p className="font-[Inter,sans-serif] text-base font-bold text-[#222]">
                    No external distribution
                  </p>
                  <p className="mt-2 font-[Inter,sans-serif] text-base leading-relaxed text-[#444]">
                    Driver data is not shared with any third parties outside of the insurer relationship.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#44a3db]" />
                <div>
                  <p className="font-[Inter,sans-serif] text-base font-bold text-[#222]">
                    De-identification requirement
                  </p>
                  <p className="mt-2 font-[Inter,sans-serif] text-base leading-relaxed text-[#444]">
                    If data is ever used outside of the direct insurer-fleet relationship (e.g., for
                    aggregate analytics or research), it undergoes full de-identification and anonymization.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#44a3db]" />
                <div>
                  <p className="font-[Inter,sans-serif] text-base font-bold text-[#222]">
                    Consent-based sharing
                  </p>
                  <p className="mt-2 font-[Inter,sans-serif] text-base leading-relaxed text-[#444]">
                    Fleets explicitly authorize data sharing with their insurer during the TruckerCloud
                    onboarding process. No data flows without fleet consent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Q4 */}
          <div className="border-t-2 border-gray-100 pt-12">
            <h2 className="font-[Inter,sans-serif] text-2xl font-bold text-[#44a3db]">
              Can driver data collection be disabled?
            </h2>
            <p className="mt-4 font-[Inter,sans-serif] text-base leading-relaxed text-[#333]">
              Yes. TruckerCloud maintains per-insurer and per-fleet configuration controls. If a
              fleet or insurer requires that driver data not be collected, we can disable driver
              data calls for that fleet in our system. This is a simple configuration change on
              our end.
            </p>
          </div>

          {/* Support */}
          <div className="border-t-2 border-gray-100 pt-10">
            <p className="font-[Inter,sans-serif] text-base text-[#555]">
              Questions? Reach out to{" "}
              <a href="mailto:support@truckercloud.com" className="font-semibold text-[#3898ec] underline">
                support@truckercloud.com
              </a>
              .
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#0f1928]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
            <Image
              src="/images/programs/tc-footer-logo.png"
              alt="TruckerCloud"
              width={174}
              height={40}
              className="h-auto w-[174px]"
            />
            <nav className="flex gap-6 font-[Inter,sans-serif] text-sm text-white">
              <a href="/" className="hover:text-[#44a3db]">Product</a>
              <a href="/partners" className="hover:text-[#44a3db]">About</a>
              <a href="/podcast" className="hover:text-[#44a3db]">Resources</a>
              <a href="/career" className="hover:text-[#44a3db]">Careers</a>
            </nav>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 md:flex-row">
            <p className="font-[Inter,sans-serif] text-xs text-gray-400">
              Copyright {new Date().getFullYear()} TruckerCloud{" "}
              <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a>{" "}
              |{" "}
              <a href="/terms-of-use" className="underline hover:text-white">Terms of Use</a>
            </p>
            <div className="flex gap-3">
              <a href="https://x.com/truckercloud" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/truckercloud/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/TruckerCloud/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
