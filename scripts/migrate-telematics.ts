import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

const SOURCE_CSV = path.join(
  process.cwd(),
  "..",
  "truckercloud website",
  "TruckerCloud Telematics Insurances.csv"
);
const OUTPUT_DIR = path.join(process.cwd(), "content", "telematics-insurance");

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

const csvContent = fs.readFileSync(SOURCE_CSV, "utf8");
const records = parse(csvContent, { columns: true, skip_empty_lines: true });

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

let migrated = 0;
let skipped = 0;

for (const row of records) {
  const archived = row["Archived"]?.trim().toLowerCase() === "true";
  const draft = row["Draft"]?.trim().toLowerCase() === "true";
  if (archived || draft) {
    skipped++;
    continue;
  }

  const slug = row["Slug"]?.trim();
  if (!slug) {
    skipped++;
    continue;
  }

  const title = row["Title Case Keyword"]?.trim() || "";
  const h1 = row["H1"]?.trim() || "";
  const paragraphText = row["Paragraph Text"]?.trim() || "";
  const h3 = row["H3"]?.trim() || "";
  const h3Text = row["H3 Text"]?.trim() || "";
  const whyH3 = row["Why is H3"]?.trim() || "";
  const whyH3Text = row["H3 Text Why"]?.trim() || "";

  const frontmatter = [
    "---",
    `title: ${escapeYaml(title)}`,
    `slug: ${slug}`,
    `h1: ${escapeYaml(h1)}`,
    `paragraphText: ${escapeYaml(paragraphText)}`,
    `h3: ${escapeYaml(h3)}`,
    `h3Text: ${escapeYaml(h3Text)}`,
    `whyH3: ${escapeYaml(whyH3)}`,
    `whyH3Text: ${escapeYaml(whyH3Text)}`,
    "---",
  ].join("\n");

  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${slug}.md`),
    `${frontmatter}\n`,
    "utf8"
  );
  migrated++;
}

console.log(
  `Telematics insurance migration complete: ${migrated} migrated, ${skipped} skipped`
);
