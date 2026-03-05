import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

const SOURCE_CSV = path.join(
  process.cwd(),
  "..",
  "truckercloud website",
  "TruckerCloud Integrations.csv"
);
const OUTPUT_DIR = path.join(process.cwd(), "content", "integrations");

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

// Dedup by base slug — strip trailing -N suffix, keep first occurrence
const seen = new Map<string, boolean>();

let migrated = 0;
let skipped = 0;

for (const row of records) {
  const archived = row["Archived"]?.trim().toLowerCase() === "true";
  const draft = row["Draft"]?.trim().toLowerCase() === "true";
  if (archived || draft) {
    skipped++;
    continue;
  }

  const rawSlug = row["URL"]?.trim();
  if (!rawSlug) {
    skipped++;
    continue;
  }

  // Dedup: strip trailing -N (where N is a number) to get base slug
  const baseSlug = rawSlug.replace(/-\d+$/, "");

  if (seen.has(baseSlug)) {
    skipped++;
    continue;
  }
  seen.set(baseSlug, true);

  // Extract ELD name from header column
  const headerCol =
    row['Header - How to Connect "ELD name" to your platform'] || "";
  // Header format: "Apollo ELD API Documentation" or similar
  const eldName = row['What is "ELD name"'] || headerCol.replace(/ API Documentation$/i, "").trim();

  const spoilerText =
    row[
      'Paragraph - Spoiler Alert: You don\'t need any documentation to connect with "eld name"'
    ] || "";
  const eldDescription = row['Paragraph - What is "ELD name"'] || "";
  const eldLogo = row["Keyword 1 Image"] || "";
  const integrationDescription =
    row["How does TruckerCloud integrate them?"] || "";

  const locationExcerpt = row["Location Excerpt"]?.trim() || "";
  const vehicleExcerpt = row["Vehicle Excerpt"]?.trim() || "";
  const hosExcerpt = row["HOS Excerpt"]?.trim() || "";
  const driverExcerpt = row["Driver Excerpt"]?.trim() || "";
  const safetyExcerpt = row["Safety Events Excerpt"]?.trim() || "";
  const historicalExcerpt = row["Historical Location Excerpt"]?.trim() || "";

  const frontmatter = [
    "---",
    `title: ${escapeYaml(headerCol)}`,
    `slug: ${baseSlug}`,
    `eldName: ${escapeYaml(eldName)}`,
    `eldDescription: ${escapeYaml(eldDescription)}`,
    `eldLogo: ${escapeYaml(eldLogo)}`,
    `spoilerText: ${escapeYaml(spoilerText)}`,
    `integrationDescription: ${escapeYaml(integrationDescription)}`,
    `capabilities:`,
    `  location: ${!!locationExcerpt}`,
    `  vehicle: ${!!vehicleExcerpt}`,
    `  hos: ${!!hosExcerpt}`,
    `  driver: ${!!driverExcerpt}`,
    `  safetyEvents: ${!!safetyExcerpt}`,
    `  historicalLocation: ${!!historicalExcerpt}`,
    "---",
  ].join("\n");

  // Store excerpts in the body for the detail page
  const bodyParts: string[] = [];
  if (locationExcerpt) bodyParts.push(`## Location\n${locationExcerpt}`);
  if (vehicleExcerpt) bodyParts.push(`## Vehicle\n${vehicleExcerpt}`);
  if (hosExcerpt) bodyParts.push(`## Hours of Service\n${hosExcerpt}`);
  if (driverExcerpt) bodyParts.push(`## Driver\n${driverExcerpt}`);
  if (safetyExcerpt) bodyParts.push(`## Safety Events\n${safetyExcerpt}`);
  if (historicalExcerpt)
    bodyParts.push(`## Historical Location\n${historicalExcerpt}`);

  const fileContent = `${frontmatter}\n${bodyParts.join("\n\n")}`;
  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${baseSlug}.md`),
    fileContent,
    "utf8"
  );
  migrated++;
}

console.log(
  `Integration migration complete: ${migrated} migrated, ${skipped} skipped`
);
