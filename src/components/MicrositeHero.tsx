import Image from "next/image";

interface MicrositeHeroProps {
  partnerName: string;
  widgetUrl: string;
}

export default function MicrositeHero({ partnerName, widgetUrl }: MicrositeHeroProps) {
  return (
    <section className="bg-tc-darkblue py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              {partnerName}
            </h1>
            {widgetUrl && (
              <a
                href={widgetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-tc-button px-8 py-3 text-base font-medium text-white hover:bg-tc-button-hover transition-colors"
              >
                Onboard Your Telematics
              </a>
            )}
            <p className="mt-6 text-sm text-tc-gray-40">
              For support onboarding your telematics account, please contact{" "}
              <a href="mailto:support@truckercloud.com" className="text-tc-blue hover:underline">
                support@truckercloud.com
              </a>{" "}
              or use the chat feature in the bottom right corner.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/section2.png"
              alt="TruckerCloud Platform"
              width={500}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
