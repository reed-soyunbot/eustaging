"use client";

import { useEffect, useRef } from "react";

interface BuzzSproutPlayerProps {
  embedUrl: string;
}

export default function BuzzSproutPlayer({ embedUrl }: BuzzSproutPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedUrl || !containerRef.current) return;

    // Extract container ID from URL if present, or use a default
    const match = embedUrl.match(/container_id=([^&]+)/);
    const containerId = match ? match[1] : "buzzsprout-small-player";

    // Create the target div
    const targetDiv = document.createElement("div");
    targetDiv.id = containerId;
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(targetDiv);

    // Load the script
    const script = document.createElement("script");
    script.src = embedUrl;
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [embedUrl]);

  return <div ref={containerRef} className="w-full" />;
}
