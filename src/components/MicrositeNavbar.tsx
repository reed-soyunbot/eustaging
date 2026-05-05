import Link from "next/link";
import Image from "next/image";

interface MicrositeNavbarProps {
  partnerName: string;
  logo?: string;
}

export default function MicrositeNavbar({ partnerName, logo }: MicrositeNavbarProps) {
  return (
    <div className="border-b border-white/10 bg-tc-darkblue/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/Group.png"
              alt="TruckerCloud"
              width={140}
              height={32}
            />
          </Link>
          <span className="text-white/30">|</span>
          {logo ? (
            <Image
              src={logo}
              alt={partnerName}
              width={120}
              height={32}
              className="object-contain"
            />
          ) : (
            <span className="text-sm font-semibold text-white">{partnerName}</span>
          )}
        </div>
        <a
          href="https://docs.truckercloud.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
        >
          API Docs
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5h5v5M19 5L10 14M5 7v12h12" />
          </svg>
        </a>
      </nav>
    </div>
  );
}
