interface OnboardingCTAProps {
  partnerName: string;
  widgetUrl: string;
}

export default function OnboardingCTA({ partnerName, widgetUrl }: OnboardingCTAProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <h2 className="text-2xl font-bold text-white">
          Ready to connect your telematics?
        </h2>
        <p className="mt-4 text-gray-400">
          Start sharing your telematics data with {partnerName} today.
        </p>
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
      </div>
    </section>
  );
}
