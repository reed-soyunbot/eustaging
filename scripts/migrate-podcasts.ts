import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

const SOURCE_DIR = path.join(process.cwd(), "..", "truckercloud website");
const NEWER_CSV = path.join(SOURCE_DIR, "TruckerCloud Podcast.csv");
const OLDER_CSV = path.join(SOURCE_DIR, "TruckerCloud Podcasts.csv");
const OUTPUT_DIR = path.join(process.cwd(), "content", "podcasts");

function escapeYaml(str: string): string {
  if (!str) return '""';
  if (
    str.includes(":") ||
    str.includes("#") ||
    str.includes('"') ||
    str.includes("'") ||
    str.includes("\n") ||
    str.startsWith(" ") ||
    str.startsWith("[") ||
    str.startsWith("{")
  ) {
    return `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return str;
}

function parseDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toISOString();
  } catch {
    return "";
  }
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const seen = new Map<string, boolean>();
let migrated = 0;
let skipped = 0;

// Process newer CSV first (has Create date)
for (const csvPath of [NEWER_CSV, OLDER_CSV]) {
  const csvContent = fs.readFileSync(csvPath, "utf8");
  const records = parse(csvContent, { columns: true, skip_empty_lines: true });

  for (const row of records) {
    const archived = row["Archived"]?.trim().toLowerCase() === "true";
    const draft = row["Draft"]?.trim().toLowerCase() === "true";
    if (archived || draft) {
      skipped++;
      continue;
    }

    const slug = row["Slug"]?.trim();
    if (!slug || seen.has(slug)) {
      skipped++;
      continue;
    }
    seen.set(slug, true);

    const title = row["Episode Title"]?.trim() || "";
    const description = row["Episode Description"]?.trim() || "";
    const thumbnail = row["Episode Thumbnail"]?.trim() || "";
    const videoLink = row["Episode Video Link"]?.trim() || "";
    const buzzsproutEmbed = row["BuzzSprout Link"]?.trim() || "";
    // Newer CSV has "Create date", older uses "Published On"
    const publishedDate = parseDate(
      row["Create date"]?.trim() || row["Published On"]?.trim()
    );

    const frontmatter = [
      "---",
      `title: ${escapeYaml(title)}`,
      `slug: ${slug}`,
      `description: ${escapeYaml(description)}`,
      `thumbnail: ${escapeYaml(thumbnail)}`,
      `videoLink: ${escapeYaml(videoLink)}`,
      `buzzsproutEmbed: ${escapeYaml(buzzsproutEmbed)}`,
      `publishedDate: ${escapeYaml(publishedDate)}`,
      "---",
    ].join("\n");

    fs.writeFileSync(
      path.join(OUTPUT_DIR, `${slug}.md`),
      `${frontmatter}\n`,
      "utf8"
    );
    migrated++;
  }
}

console.log(
  `Podcast migration complete: ${migrated} migrated, ${skipped} skipped`
);
