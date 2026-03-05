import type { MetadataRoute } from "next";
import {
  getBlogSlugs,
  getPodcastSlugs,
  getIntegrationSlugs,
  getProgramConfigSlugs,
  getTelematicsInsuranceSlugs,
} from "@/lib/content";

const BASE_URL = "https://truckercloud.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/blog",
    "/podcast",
    "/eld",
    "/partners",
    "/product-page",
    "/get-a-demo",
    "/team-page",
    "/security",
    "/career",
    "/linkedin",
    "/privacy-policy",
    "/terms-of-use",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPages = getBlogSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const podcastPages = getPodcastSlugs().map((slug) => ({
    url: `${BASE_URL}/podcast/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const integrationPages = getIntegrationSlugs().map((slug) => ({
    url: `${BASE_URL}/integrations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const programPages = getProgramConfigSlugs().map((slug) => ({
    url: `${BASE_URL}/program/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const telematicsPages = getTelematicsInsuranceSlugs().map((slug) => ({
    url: `${BASE_URL}/telematics-insurance/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...podcastPages,
    ...integrationPages,
    ...programPages,
    ...telematicsPages,
  ];
}
