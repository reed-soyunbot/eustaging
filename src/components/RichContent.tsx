"use client";

import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

interface RichContentProps {
  html: string;
  className?: string;
}

export default function RichContent({ html, className = "" }: RichContentProps) {
  if (!html) return null;

  const clean = DOMPurify.sanitize(html, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling", "loading"],
  });

  return <div className={`rich-content ${className}`}>{parse(clean)}</div>;
}
