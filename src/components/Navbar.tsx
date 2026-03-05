"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = {
  resources: [
    { label: "Podcast", href: "/podcast" },
    { label: "LinkedIn", href: "/linkedin" },
    { label: "Blog", href: "/blog" },
  ],
  about: [
    { label: "Partners", href: "/partners" },
    { label: "ELD and Cameras", href: "/eld" },
    { label: "Team", href: "/team-page" },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div id="site-navbar" className="sticky top-0 z-50 bg-tc-darkblue/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-[1200px] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/Group.png"
              alt="TruckerCloud"
              width={174}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-white hover:text-tc-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/product-page"
              className="rounded-lg px-4 py-2 text-sm font-medium text-white hover:text-tc-blue transition-colors"
            >
              Product
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white hover:text-tc-blue transition-colors">
                Resources
                <svg
                  className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="absolute left-0 top-full w-48 pt-2">
                <div className="rounded-lg bg-[#1a2a3d] py-2 shadow-lg ring-1 ring-white/10">
                  {navLinks.resources.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white hover:text-tc-blue transition-colors">
                About
                <svg
                  className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute left-0 top-full w-48 pt-2">
                <div className="rounded-lg bg-[#1a2a3d] py-2 shadow-lg ring-1 ring-white/10">
                  {navLinks.about.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                </div>
              )}
            </div>

            <div className="ml-4 flex items-center gap-3">
              <Link
                href="/get-a-demo"
                className="rounded-full bg-tc-button px-5 py-2.5 text-sm font-medium text-white hover:bg-tc-button-hover transition-colors"
              >
                Get a Demo
              </Link>
              <a
                href="https://docs.truckercloud.com/password?redirect=/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Login
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-lg p-2 text-white hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
            <div className="flex flex-col gap-1">
              <Link href="/" className="rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/product-page" className="rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                Product
              </Link>

              <div className="py-1">
                <p className="px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Resources</p>
                {navLinks.resources.map((link) => (
                  <Link key={link.href} href={link.href} className="block rounded-lg px-6 py-2 text-sm text-gray-300 hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="py-1">
                <p className="px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gray-400">About</p>
                {navLinks.about.map((link) => (
                  <Link key={link.href} href={link.href} className="block rounded-lg px-6 py-2 text-sm text-gray-300 hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Link href="/get-a-demo" className="rounded-full bg-tc-button px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-tc-button-hover" onClick={() => setMobileOpen(false)}>
                  Get a Demo
                </Link>
                <a href="https://docs.truckercloud.com/password?redirect=/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white/10">
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
