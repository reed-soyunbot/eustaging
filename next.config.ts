import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  distDir: 'build',
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
      {
        protocol: "https",
        hostname: "media.licdn.com",
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
      // Old Webflow blog post URLs → /blog
      {
        source: "/post/:slug*",
        destination: "/blog",
        permanent: true,
      },
      // /demo → /get-a-demo
      {
        source: "/demo",
        destination: "/get-a-demo",
        permanent: true,
      },
      // /product → /product-page
      {
        source: "/product",
        destination: "/product-page",
        permanent: true,
      },
      // /thank-you → home
      {
        source: "/thank-you",
        destination: "/",
        permanent: true,
      },
      // /blog/articles → /blog
      {
        source: "/blog/articles",
        destination: "/blog",
        permanent: true,
      },
      // Old Webflow podcast episode URLs → /podcast
      {
        source: "/podcast-2/:slug*",
        destination: "/podcast",
        permanent: true,
      },
      // Old Webflow integration detail pages → /integrations
      {
        source: "/integrations/:slug*",
        destination: "/integrations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
