import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/Group.png"
              alt="TruckerCloud"
              width={174}
              height={40}
            />
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/product-page" className="text-sm text-gray-400 hover:text-white transition-colors">
              Product
            </Link>
            <Link href="/partners" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/podcast" className="text-sm text-gray-400 hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="/career" className="text-sm text-gray-400 hover:text-white transition-colors">
              Careers
            </Link>
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-gray-500">
            Copyright {new Date().getFullYear()} TruckerCloud{" "}
            <Link href="/privacy-policy" className="text-tc-blue hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms-of-use" className="text-tc-blue hover:underline">
              Terms of Use
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/truckercloud" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/images/1.png" alt="X (Twitter)" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/company/truckercloud/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/images/3.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://www.facebook.com/TruckerCloud/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/images/2.png" alt="Facebook" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
