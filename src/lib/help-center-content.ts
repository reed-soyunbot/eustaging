import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/help-center");

export interface HelpArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  order: number;
  content: string;
}

export function getHelpSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getHelpArticle(slug: string): HelpArticle | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    category: data.category ?? "General",
    order: data.order ?? 99,
    content,
  };
}

export function getAllHelpArticles(): HelpArticle[] {
  return getHelpSlugs()
    .map((slug) => getHelpArticle(slug))
    .filter((a): a is HelpArticle => a !== null)
    .sort((a, b) => a.order - b.order);
}

export function getHelpArticlesByCategory(): Record<string, HelpArticle[]> {
  const articles = getAllHelpArticles();
  return articles.reduce<Record<string, HelpArticle[]>>((acc, article) => {
    if (!acc[article.category]) acc[article.category] = [];
    acc[article.category].push(article);
    return acc;
  }, {});
}
