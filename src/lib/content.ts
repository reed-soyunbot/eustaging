import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  BlogPost,
  Integration,
  PodcastEpisode,
  Program,
  ProgramConfig,
  TelematicsInsurance,
} from "./types";

const contentDir = path.join(process.cwd(), "content");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getContentByType<T extends Record<string, any>>(type: string): T[] {
  const dir = path.join(contentDir, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const items = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...data,
      slug: data.slug || filename.replace(/\.md$/, ""),
      body: content,
    } as unknown as T;
  });

  // Filter drafts in production
  const filtered =
    process.env.NODE_ENV === "production"
      ? items.filter((item) => !item.draft)
      : items;

  // Sort by publishedDate descending
  return filtered.sort((a, b) => {
    const dateA = a.publishedDate ? new Date(a.publishedDate).getTime() : 0;
    const dateB = b.publishedDate ? new Date(b.publishedDate).getTime() : 0;
    return dateB - dateA;
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getContentBySlug<T extends Record<string, any>>(
  type: string,
  slug: string
): T | null {
  const dir = path.join(contentDir, type);
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug: data.slug || slug,
    body: content,
  } as unknown as T;
}

function getSlugsForType(type: string): string[] {
  const dir = path.join(contentDir, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

// Blog helpers
export function getAllBlogs(): BlogPost[] {
  return getContentByType<BlogPost>("blog");
}

export function getBlogBySlug(slug: string): BlogPost | null {
  return getContentBySlug<BlogPost>("blog", slug);
}

export function getBlogSlugs(): string[] {
  return getSlugsForType("blog");
}

// Podcast helpers
export function getAllPodcasts(): PodcastEpisode[] {
  return getContentByType<PodcastEpisode>("podcasts");
}

export function getPodcastBySlug(slug: string): PodcastEpisode | null {
  return getContentBySlug<PodcastEpisode>("podcasts", slug);
}

export function getPodcastSlugs(): string[] {
  return getSlugsForType("podcasts");
}

// Integration helpers
export function getAllIntegrations(): Integration[] {
  return getContentByType<Integration>("integrations");
}

export function getIntegrationBySlug(slug: string): Integration | null {
  return getContentBySlug<Integration>("integrations", slug);
}

export function getIntegrationSlugs(): string[] {
  return getSlugsForType("integrations");
}

// Program helpers
export function getAllPrograms(): Program[] {
  return getContentByType<Program>("programs");
}

export function getProgramBySlug(slug: string): Program | null {
  return getContentBySlug<Program>("programs", slug);
}

export function getProgramSlugs(): string[] {
  return getSlugsForType("programs");
}

// Program Config helpers (JSON-based program pages)
export function getAllProgramConfigs(): ProgramConfig[] {
  const dir = path.join(contentDir, "programs-json");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const filePath = path.join(dir, f);
      return JSON.parse(fs.readFileSync(filePath, "utf8")) as ProgramConfig;
    });
}

export function getProgramConfigBySlug(slug: string): ProgramConfig | null {
  const dir = path.join(contentDir, "programs-json");
  const filePath = path.join(dir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as ProgramConfig;
}

export function getProgramConfigSlugs(): string[] {
  const dir = path.join(contentDir, "programs-json");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

// Telematics Insurance helpers
export function getAllTelematicsInsurance(): TelematicsInsurance[] {
  return getContentByType<TelematicsInsurance>("telematics-insurance");
}

export function getTelematicsInsuranceBySlug(
  slug: string
): TelematicsInsurance | null {
  return getContentBySlug<TelematicsInsurance>("telematics-insurance", slug);
}

export function getTelematicsInsuranceSlugs(): string[] {
  return getSlugsForType("telematics-insurance");
}
