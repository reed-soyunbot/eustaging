import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  getProgramConfigBySlug,
  getProgramConfigSlugs,
} from "@/lib/content";
import { PROVIDER_LOGOS } from "@/lib/provider-logos";

export async function generateStaticParams() {
  return getProgramConfigSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramConfigBySlug(slug);
  if (!program) return {};
  return {
    title: `${program.partnerName} | TruckerCloud`,
    description: `${program.partnerName} telematics onboarding powered by TruckerCloud.`,
  };
}

function ProviderCard({ name, note }: { name: string; note?: string }) {
  const logo = PROVIDER_LOGOS[name];
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white px-[22px] py-[20px] text-center shadow-[0_2px_7px_0_rgba(20,20,43,0.06)]">
      <div className="flex h-[56px] w-40 mx-auto items-center justify-center">
        {logo ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={logo}
            alt={name}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="text-sm text-[#828282]">{name}</span>
        )}
      </div>
      <p className="mt-[10px] font-[Inter,sans-serif] text-sm leading-snug text-[#828282]">
        {name}
      </p>
      {note && (
        <p className="mt-[6px] font-[Inter,sans-serif] text-xs leading-snug text-[#aaa] italic">
          *{note}
        </p>
      )}
    </div>
  );
}

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramConfigBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="program-standalone min-h-screen bg-[#0f1928]">
      {/* TC Logo Banner - dark navy */}
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

      {/* Hero Section - white background */}
      {program.bilingualHero ? (
        <section className="relative overflow-hidden bg-white pb-16 pt-10">
          <div className="mx-auto max-w-[1200px] px-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* Left: English */}
              <div className="flex flex-col md:border-r md:border-gray-200 md:pr-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.bilingualHero.left.logo}
                  alt={program.bilingualHero.left.title}
                  className="mb-8 h-14 w-auto max-w-[280px] object-contain object-left"
                />
                <h2 className="mb-4 font-[Inter,sans-serif] text-xl font-bold text-[#333]">
                  {program.bilingualHero.left.title}
                </h2>
                <p className="mb-6 font-[Inter,sans-serif] text-base leading-relaxed text-[#333]">
                  {program.bilingualHero.left.body}
                </p>
                <div className="mb-6 flex items-start gap-3">
                  <Image
                    src="/images/programs/support-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="mt-1 shrink-0"
                  />
                  <p className="font-[Inter,sans-serif] text-sm leading-relaxed text-[#333]">
                    {program.bilingualHero.left.supportText.split("support@truckercloud.com")[0]}
                    <a href="mailto:support@truckercloud.com" className="text-[#3898ec] underline">
                      support@truckercloud.com
                    </a>
                    {program.bilingualHero.left.supportText.split("support@truckercloud.com")[1] ?? ""}
                  </p>
                </div>
                <a
                  href={program.bilingualHero.left.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-fit rounded-full bg-[#44a3db] px-8 py-3 font-[Inter,sans-serif] text-sm font-bold text-white transition-colors hover:bg-[#35a4e8]"
                >
                  {program.bilingualHero.left.ctaText}
                </a>
              </div>
              {/* Right: French */}
              <div className="flex flex-col md:pl-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.bilingualHero.right.logo}
                  alt={program.bilingualHero.right.title}
                  className="mb-8 h-14 w-auto max-w-[280px] object-contain object-left"
                />
                <h2 className="mb-4 font-[Inter,sans-serif] text-xl font-bold text-[#333]">
                  {program.bilingualHero.right.title}
                </h2>
                <p className="mb-6 font-[Inter,sans-serif] text-base leading-relaxed text-[#333]">
                  {program.bilingualHero.right.body}
                </p>
                <div className="mb-6 flex items-start gap-3">
                  <Image
                    src="/images/programs/support-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="mt-1 shrink-0"
                  />
                  <p className="font-[Inter,sans-serif] text-sm leading-relaxed text-[#333]">
                    {program.bilingualHero.right.supportText.split("support@truckercloud.com")[0]}
                    <a href="mailto:support@truckercloud.com" className="text-[#3898ec] underline">
                      support@truckercloud.com
                    </a>
                    {program.bilingualHero.right.supportText.split("support@truckercloud.com")[1] ?? ""}
                  </p>
                </div>
                <a
                  href={program.bilingualHero.right.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-fit rounded-full bg-[#44a3db] px-8 py-3 font-[Inter,sans-serif] text-sm font-bold text-white transition-colors hover:bg-[#35a4e8]"
                >
                  {program.bilingualHero.right.ctaText}
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative overflow-hidden bg-white pb-16 pt-10">
          <div className="mx-auto max-w-[1200px] px-10">
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
              {/* Left: Partner Info */}
              <div>
                {program.partnerLogo && (
                  <div className={`relative mb-8 w-full ${
                    program.slug === 'futuristic'
                      ? 'h-32 max-w-[400px]'
                      : program.slug === 'nta'
                      ? 'h-24 max-w-[320px]'
                      : program.slug === 'gwcc'
                      ? 'h-80 max-w-[1000px]'
                      : program.slug === 'tumi'
                      ? 'h-36 max-w-[360px]'
                      : program.slug === 'dot-shield'
                      ? 'h-32 max-w-[400px]'
                      : 'h-28 max-w-[360px]'
                  }`}>
                    <Image
                      src={program.partnerLogo}
                      alt={program.partnerName}
                      fill
                      className="object-contain object-left"
                      sizes={program.slug === 'futuristic' ? '400px' : program.slug === 'nta' ? '320px' : program.slug === 'gwcc' ? '1000px' : program.slug === 'tumi' ? '360px' : program.slug === 'dot-shield' ? '400px' : '360px'}
                    />
                  </div>
                )}

                {program.heroHeadline && (
                  <h1 className="mb-4 font-[Inter,sans-serif] text-2xl font-bold text-[#333]">
                    {program.heroHeadlineHighlight
                      ? (() => {
                          const { text, color } = program.heroHeadlineHighlight!;
                          const idx = program.heroHeadline!.indexOf(text);
                          if (idx === -1) return program.heroHeadline;
                          return (
                            <>
                              <span style={{ color }}>{program.heroHeadline!.slice(0, idx + text.length)}</span>
                              {program.heroHeadline!.slice(idx + text.length)}
                            </>
                          );
                        })()
                      : program.heroHeadline}
                  </h1>
                )}

                {program.heroText && (
                  <div className="mb-6 font-[Inter,sans-serif] text-base leading-relaxed text-[#333]">
                    <p>{program.heroText}</p>
                    {program.heroBullets && program.heroBullets.length > 0 && (
                      <ul className="my-3 ml-6 list-disc space-y-1">
                        {program.heroBullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {program.heroClosingText && (
                      <p className="mt-3">{program.heroClosingText}</p>
                    )}
                  </div>
                )}

                {/* Support Text */}
                <div className="mb-6 flex items-start gap-3">
                  <Image
                    src="/images/programs/support-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="mt-1 shrink-0"
                  />
                  <p className="font-[Inter,sans-serif] text-sm leading-relaxed text-[#333]">
                    For support onboarding your telematics account, please
                    contact{" "}
                    <a
                      href="mailto:support@truckercloud.com"
                      className="text-[#3898ec] underline"
                    >
                      support@truckercloud.com
                    </a>{" "}
                    or use the chat feature in the bottom right corner.
                  </p>
                </div>

                {program.extraSupportEmail && (
                  <div className="mb-6 flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 shrink-0"
                    >
                      <path
                        d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
                        fill="#44a3db"
                      />
                      <path
                        d="M10 14l-2.5-2.5 1.41-1.41L10 11.17l4.59-4.58L16 8l-6 6z"
                        fill="white"
                      />
                    </svg>
                    <p className="font-[Inter,sans-serif] text-sm leading-relaxed text-[#333]">
                      {program.extraSupportLabel || "For questions about the mutual benefits of sharing telematics data, please reach out to"}{" "}
                      <a
                        href={`mailto:${program.extraSupportEmail}`}
                        className="text-[#3898ec] underline"
                      >
                        {program.extraSupportEmail}
                      </a>
                      {program.extraSupportPhone && (
                        <> or call {program.extraSupportPhone}</>
                      )}
                    </p>
                  </div>
                )}

                {/* CTA Buttons */}
                {program.widgetUrl && (
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={program.widgetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-[#44a3db] px-8 py-3 font-[Inter,sans-serif] text-sm font-bold text-white transition-colors hover:bg-[#35a4e8]"
                    >
                      Onboard Your Telematics
                    </a>
                    {program.showDataPrivacyButton && (
                      <a
                        href="/driver-data-faq"
                        className="inline-block rounded-full border border-[#44a3db] bg-white px-8 py-3 font-[Inter,sans-serif] text-sm font-bold text-[#44a3db] transition-colors hover:bg-[#f0f9ff]"
                      >
                        Curious about Data Privacy?
                      </a>
                    )}
                  </div>
                )}

                {program.heroCTANote && (
                  <p className="mt-4 font-[Inter,sans-serif] text-sm leading-relaxed text-[#555]">
                    {program.heroCTANoteLink
                      ? (() => {
                          const { text, href } = program.heroCTANoteLink!;
                          const idx = program.heroCTANote!.indexOf(text);
                          if (idx === -1) return program.heroCTANote;
                          return (
                            <>
                              {program.heroCTANote!.slice(0, idx)}
                              <a href={href} className="text-[#3898ec] underline">{text}</a>
                              {program.heroCTANote!.slice(idx + text.length)}
                            </>
                          );
                        })()
                      : program.heroCTANote}
                  </p>
                )}
              </div>

              {/* Right: Hero Image */}
              <div className="hidden md:block">
                <Image
                  src="/images/programs/frame-516.png"
                  alt="TruckerCloud Platform"
                  width={614}
                  height={500}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Subsidy Section */}
      {program.subsidy && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[700px] px-6 text-center">
            <h2 className="mb-8 font-[Inter,sans-serif] text-2xl font-normal text-[#333]">
              Crum &amp; Forster is offering a monthly{" "}
              <strong>subsidy</strong> for sharing telematics data
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-gray-200 p-6 text-left">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <circle cx="12" cy="12" r="10" stroke="#44a3db" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" fill="#44a3db" />
                  <line x1="12" y1="2" x2="12" y2="6" stroke="#44a3db" strokeWidth="1.5" />
                  <line x1="12" y1="18" x2="12" y2="22" stroke="#44a3db" strokeWidth="1.5" />
                  <line x1="2" y1="12" x2="6" y2="12" stroke="#44a3db" strokeWidth="1.5" />
                  <line x1="18" y1="12" x2="22" y2="12" stroke="#44a3db" strokeWidth="1.5" />
                </svg>
                <p className="font-[Inter,sans-serif] text-xl font-bold text-[#333]">
                  ${program.subsidy.eldAmount} per vehicle
                </p>
                <p className="mt-1 font-[Inter,sans-serif] text-sm text-[#555]">
                  per month for sharing <strong>ELD Data.</strong>
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 text-left">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="#44a3db"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="12" cy="9" r="2.5" stroke="#44a3db" strokeWidth="1.5" />
                </svg>
                <p className="font-[Inter,sans-serif] text-xl font-bold text-[#333]">
                  ${program.subsidy.cameraAmount} per vehicle
                </p>
                <p className="mt-1 font-[Inter,sans-serif] text-sm text-[#555]">
                  per month for sharing <strong>Camera Data.</strong>
                </p>
              </div>
            </div>
            <p className="mt-8 font-[Inter,sans-serif] text-xs leading-relaxed text-[#888] italic">
              {program.subsidy.disclaimer}
            </p>
          </div>
        </section>
      )}

      {/* Eligible Cameras */}
      {program.cameras.length > 0 && (
        <>
          <section className="px-10 pb-0 pt-[100px] md:px-20 lg:px-[150px]">
            <h1 className="mb-0 text-center font-[Inter,sans-serif] text-[25px] font-bold leading-[30px] text-white md:text-[30px]">
              <span className="text-[#44a3db]">{program.cameraSectionTitle || "Eligible Cameras"}</span>
            </h1>
          </section>
          <div className="grid grid-cols-1 gap-5 px-0 pt-10 sm:grid-cols-2 md:grid-cols-3 md:px-[30px] lg:grid-cols-4 lg:px-[100px] xl:px-[100px]">
            {program.cameras.map((name) => (
              <ProviderCard key={name} name={name} />
            ))}
          </div>
        </>
      )}

      {/* Eligible ELDs */}
      {program.elds.length > 0 && (
        <>
          <section className="px-10 pb-0 pt-[100px] md:px-20 lg:px-[150px]">
            <h1 className="mb-0 text-center font-[Inter,sans-serif] text-[25px] font-bold leading-[30px] text-white md:text-[30px]">
              <span className="text-[#44a3db]">{program.eldSectionTitle || "Eligible ELDs"}</span>
            </h1>
          </section>
          <div className="grid grid-cols-1 gap-5 px-0 pt-10 sm:grid-cols-2 md:grid-cols-3 md:px-[30px] lg:grid-cols-4 lg:px-[100px] xl:px-[100px]">
            {program.elds.map((name) => (
              <ProviderCard key={name} name={name} note={program.providerNotes?.[name]} />
            ))}
          </div>
        </>
      )}

      {/* Provider Section Note */}
      {program.providerSectionNote && (
        <section className="px-10 pb-0 pt-10 md:px-20 lg:px-[150px]">
          <p className="text-center font-[Inter,sans-serif] text-sm text-gray-400">
            {program.providerSectionNote}
          </p>
        </section>
      )}

      {/* FAQ Section */}
      {program.faqItems && program.faqItems.length > 0 && (
        <section className="mx-auto max-w-[900px] px-6 py-16">
          <h2 id="faq" className="mb-10 text-center font-[Inter,sans-serif] text-2xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {program.faqItems.map((item, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-6">
                <h3 className="mb-3 font-[Inter,sans-serif] text-base font-bold text-[#44a3db]">
                  {item.question}
                </h3>
                <div className="space-y-2 font-[Inter,sans-serif] text-sm leading-relaxed text-gray-300">
                  {item.parts.map((part, j) =>
                    Array.isArray(part) ? (
                      <ul key={j} className="ml-5 list-disc space-y-1">
                        {part.map((bullet, k) => (
                          <li key={k}>{renderBold(bullet)}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j}>{renderBold(part)}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      {program.widgetUrl && program.ctaCount > 1 && !program.bilingualHero && (
        <section className="py-16">
          <div className="mx-auto max-w-[940px] px-6">
            {program.bottomCTAHeading ? (
              <>
                <h2 className="mb-6 text-center font-[Inter,sans-serif] text-xl font-bold text-white">
                  {program.bottomCTAHeading}
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={program.widgetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-[#44a3db] px-8 py-3 font-[Inter,sans-serif] text-sm font-semibold text-white transition-colors hover:bg-[#35a4e8]"
                  >
                    Onboard Your Telematics
                  </a>
                  {program.showDataPrivacyButton && (
                    <a
                      href="/driver-data-faq"
                      className="inline-block rounded-full border border-[#44a3db] bg-white px-8 py-3 font-[Inter,sans-serif] text-sm font-semibold text-[#44a3db] transition-colors hover:bg-[#f0f9ff]"
                    >
                      Curious about Data Privacy?
                    </a>
                  )}
                </div>
                {program.bottomSupportHeading && (
                  <p className="mt-8 text-center font-[Inter,sans-serif] text-sm font-semibold text-white">
                    {program.bottomSupportHeading}
                  </p>
                )}
                {program.extraSupportEmail && (
                  <div className="mt-4 flex items-start gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 shrink-0">
                      <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" fill="#44a3db"/>
                      <path d="M10 14l-2.5-2.5 1.41-1.41L10 11.17l4.59-4.58L16 8l-6 6z" fill="white"/>
                    </svg>
                    <p className="font-[Inter,sans-serif] text-sm leading-relaxed text-[#555]">
                      {program.extraSupportLabel || "For questions about the mutual benefits of sharing telematics data, please reach out to"}{" "}
                      <a href={`mailto:${program.extraSupportEmail}`} className="text-[#3898ec] underline">
                        {program.extraSupportEmail}
                      </a>.
                    </p>
                  </div>
                )}
                <div className="mt-4 flex items-start gap-3">
                  <Image src="/images/programs/support-icon.svg" alt="" width={24} height={24} className="mt-1 shrink-0" />
                  <p className="font-[Inter,sans-serif] text-sm leading-relaxed text-[#555]">
                    For technical support during onboarding, please reach out to{" "}
                    <a href="mailto:support@truckercloud.com" className="text-[#3898ec] underline">
                      support@truckercloud.com
                    </a>{" "}
                    - or use the chat feature in the bottom right corner.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/programs/support-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="mt-1 shrink-0"
                  />
                  <p className="font-[Inter,sans-serif] text-sm leading-relaxed text-[#555]">
                    For support onboarding your telematics account, please contact{" "}
                    <a
                      href="mailto:support@truckercloud.com"
                      className="text-[#3898ec] underline"
                    >
                      support@truckercloud.com
                    </a>{" "}
                    or use the chat feature in the bottom right corner.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href={program.widgetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-[#44a3db] px-8 py-3 font-[Inter,sans-serif] text-sm font-semibold text-white transition-colors hover:bg-[#35a4e8]"
                  >
                    Onboard Your Telematics
                  </a>
                  {program.showDataPrivacyButton && (
                    <a
                      href="/driver-data-faq"
                      className="inline-block rounded-full border border-[#44a3db] bg-white px-8 py-3 font-[Inter,sans-serif] text-sm font-semibold text-[#44a3db] transition-colors hover:bg-[#f0f9ff]"
                    >
                      Curious about Data Privacy?
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#0f1928]">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Top row: logo + nav */}
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
          {/* Bottom row: copyright + social */}
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
