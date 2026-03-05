import fs from "fs";
import path from "path";

const SOURCE_DIR = path.join(
  process.cwd(),
  "..",
  "truckercloud website",
  "darkprogram"
);
const OUTPUT_DIR = path.join(process.cwd(), "microsites");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const files = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith(".html"));
let extracted = 0;

for (const file of files) {
  const slug = file.replace(".html", "");
  const html = fs.readFileSync(path.join(SOURCE_DIR, file), "utf8");

  // Extract company name from h1
  const nameMatch = html.match(
    /<h1 class="heading-b1[^"]*">([\s\S]*?)<\/h1>/
  );
  const partnerName = nameMatch
    ? nameMatch[1].replace(/<[^>]+>/g, "").trim()
    : slug;

  // Extract widget URL
  const widgetMatch = html.match(
    /href="(https:\/\/[^"]*\.truckercloud\.com\/tcwidget\?apiKey=[^"]*)"/
  );
  const widgetUrl = widgetMatch ? widgetMatch[1] : "";

  // Extract API key from widget URL
  const apiKeyMatch = widgetUrl.match(/apiKey=([^"&]+)/);
  const widgetApiKey = apiKeyMatch ? apiKeyMatch[1] : "";

  // Extract logo - look in the hero section
  const logoMatch = html.match(
    /program-hero-section[\s\S]*?<img[^>]*src="\.\.\/images\/([^"]+)"/
  );
  const logo = logoMatch
    ? `https://cdn.prod.website-files.com/6298f7aa3e05d458fca014c2/${logoMatch[1]}`
    : "";

  // Extract ELD integration names from the grid
  const eldNames: string[] = [];
  const eldRegex =
    /<h3 class="brix---heading-h3-size-10">([\s\S]*?)<\/h3>/g;
  let eldMatch;
  while ((eldMatch = eldRegex.exec(html)) !== null) {
    const name = eldMatch[1].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
    if (name) eldNames.push(name);
  }

  const config = {
    slug,
    partnerName,
    programName: partnerName,
    logo,
    widgetApiKey,
    widgetUrl,
    enabledIntegrations: {
      cameras: [] as string[],
      elds: eldNames,
    },
    sections: {
      hero: true,
      integrationGrid: true,
      onboardingCta: true,
    },
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${slug}.json`),
    JSON.stringify(config, null, 2),
    "utf8"
  );
  extracted++;
  console.log(`Extracted ${slug}: ${partnerName} (${eldNames.length} ELDs)`);
}

console.log(`\nExtracted ${extracted} microsite configs`);
