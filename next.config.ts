import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "uploads-ssl.webflow.com",
      },
    ],
  },
  async redirects() {
    return [
      // Webflow URL parity: /blogs → /blog
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      // Strip .html extensions
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/podcast.html",
        destination: "/podcast",
        permanent: true,
      },
      {
        source: "/eld.html",
        destination: "/eld",
        permanent: true,
      },
      {
        source: "/partners.html",
        destination: "/partners",
        permanent: true,
      },
      {
        source: "/product-page.html",
        destination: "/product-page",
        permanent: true,
      },
      {
        source: "/get-a-demo.html",
        destination: "/get-a-demo",
        permanent: true,
      },
      {
        source: "/team-page.html",
        destination: "/team-page",
        permanent: true,
      },
      {
        source: "/security.html",
        destination: "/security",
        permanent: true,
      },
      {
        source: "/career.html",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/privacy-policy.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-use.html",
        destination: "/terms-of-use",
        permanent: true,
      },
      {
        source: "/linkedin.html",
        destination: "/linkedin",
        permanent: true,
      },
      // JustDrive / Nico aliases → canonical justdrive-with-nico page
      {
        source: "/program/justdrive",
        destination: "/program/justdrive-with-nico",
        permanent: true,
      },
      {
        source: "/programs/justdrive",
        destination: "/program/justdrive-with-nico",
        permanent: true,
      },
// Redirect /programs/ (plural) to /program/ (singular)
      {
        source: "/programs/:slug",
        destination: "/program/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
