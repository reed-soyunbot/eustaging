import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

const SOURCE_CSV = path.join(
  process.cwd(),
  "..",
  "truckercloud website",
  "TruckerCloud Blog Posts.csv"
);
const OUTPUT_DIR = path.join(process.cwd(), "content", "blog");

// Placeholder detection: known test authors and Latin lorem ipsum phrases
const PLACEHOLDER_AUTHORS = new Set([
  "devin-ferry",
  "ofelia-bashirian",
  "marvin-schneider",
]);
const LOREM_PHRASES = [
  "Quo sit voluptas",
  "Vel enim iusto",
  "Tenetur quo laudantium",
  "Lorem ipsum",
  "dolor sit amet",
  "consectetur adipiscing",
];

function isPlaceholder(row: Record<string, string>): boolean {
  if (PLACEHOLDER_AUTHORS.has(row["Author"]?.trim())) return true;
  const body = row["Post Body"] || "";
  const summary = row["Post Summary"] || "";
  const text = body + summary;
  return LOREM_PHRASES.some((phrase) =>
    text.toLowerCase().includes(phrase.toLowerCase())
  );
}

function parseDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toISOString();
  } catch {
    return "";
  }
}

function escapeYaml(str: string): string {
  if (!str) return '""';
  // If contains special chars, wrap in double quotes and escape internal quotes
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

const csvContent = fs.readFileSync(SOURCE_CSV, "utf8");
const records = parse(csvContent, { columns: true, skip_empty_lines: true });

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

let migrated = 0;
let skipped = 0;

for (const row of records) {
  const archived = row["Archived"]?.trim().toLowerCase() === "true";
  if (archived) {
    skipped++;
    continue;
  }

  if (isPlaceholder(row)) {
    skipped++;
    continue;
  }

  const slug = row["Slug"]?.trim();
  if (!slug) {
    skipped++;
    continue;
  }

  const title = row["Name"]?.trim() || "";
  const summary = row["Post Summary"]?.trim() || "";
  const thumbnail = row["Thumbnail image"]?.trim() || "";
  const author = row["Author"]?.trim() || "";
  const category = row["Category"]?.trim() || "";
  const featured = row["Featured?"]?.trim().toLowerCase() === "true";
  const publishedDate = parseDate(row["Published Date"]?.trim());
  const draft = row["Draft"]?.trim().toLowerCase() === "true";
  const body = row["Post Body"] || "";

  const frontmatter = [
    "---",
    `title: ${escapeYaml(title)}`,
    `slug: ${slug}`,
    `summary: ${escapeYaml(summary)}`,
    `thumbnail: ${escapeYaml(thumbnail)}`,
    `author: ${author}`,
    `category: ${category}`,
    `featured: ${featured}`,
    `publishedDate: ${escapeYaml(publishedDate)}`,
    `draft: ${draft}`,
    "---",
  ].join("\n");

  const fileContent = `${frontmatter}\n${body}`;
  fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.md`), fileContent, "utf8");
  migrated++;
}

console.log(`Blog migration complete: ${migrated} migrated, ${skipped} skipped`);
