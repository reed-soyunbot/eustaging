import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center | TruckerCloud",
  description: "TruckerCloud Help Center — guides and documentation for insurance partners.",
  robots: { index: false, follow: false },
};

export default function HelpCenterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="help-center-layout min-h-screen bg-[#0f1928]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0f1928]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link href="/help-center">
            <Image
              src="/images/programs/tc-logo.png"
              alt="TruckerCloud"
              width={888}
              height={60}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-tc-blue">
              Help Center
            </span>
            <form action="/api/help-center/logout" method="POST">
              <button
                type="submit"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
