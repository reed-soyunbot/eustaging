import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-tc-blue">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>
      <p className="mt-4 max-w-md text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-tc-button px-6 py-2.5 text-sm font-medium text-white hover:bg-tc-button-hover transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/get-a-demo"
          className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
        >
          Get a Demo
        </Link>
      </div>
    </div>
  );
}
