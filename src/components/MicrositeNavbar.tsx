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
        <Link
          href="/help-center"
          className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
        >
          Help Center
        </Link>
      </nav>
    </div>
  );
}
