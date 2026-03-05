import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

const SOURCE_CSV = path.join(
  process.cwd(),
  "..",
  "truckercloud website",
  "TruckerCloud Programs.csv"
);
const OUTPUT_DIR = path.join(process.cwd(), "content", "programs");

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

  const companyName = row["Company Name"]?.trim() || "";
  const programName = row["Program Name"]?.trim() || "";
  const logo = row["Company Logo"]?.trim() || "";
  const link = row["Link"]?.trim() || "";
  const body = row["Info"] || "";

  const frontmatter = [
    "---",
    `companyName: ${escapeYaml(companyName)}`,
    `programName: ${escapeYaml(programName)}`,
    `slug: ${slug}`,
    `logo: ${escapeYaml(logo)}`,
    `link: ${escapeYaml(link)}`,
    "---",
  ].join("\n");

  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${slug}.md`),
    `${frontmatter}\n${body}`,
    "utf8"
  );
  migrated++;
}

console.log(
  `Programs migration complete: ${migrated} migrated, ${skipped} skipped`
);
