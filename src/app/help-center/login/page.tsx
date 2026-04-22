import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign In | TruckerCloud Help Center",
  robots: { index: false, follow: false },
};

export default async function HelpCenterLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="help-center-layout flex min-h-screen items-center justify-center bg-[#0f1928] px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Image
            src="/images/programs/tc-logo.png"
            alt="TruckerCloud"
            width={888}
            height={60}
            className="mx-auto h-8 w-auto"
            priority
          />
          <h1 className="mt-6 text-2xl font-bold text-white">Help Center</h1>
          <p className="mt-2 text-sm text-gray-400">
            Enter your access password to continue.
          </p>
        </div>

        <form action="/api/help-center/login" method="POST" className="space-y-4">
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-tc-blue focus:ring-1 focus:ring-tc-blue"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
              Incorrect password. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-tc-button py-3 text-sm font-semibold text-white transition-colors hover:bg-tc-button-hover"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-600">
          Need access?{" "}
          <a href="mailto:support@truckercloud.com" className="text-tc-blue hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}
