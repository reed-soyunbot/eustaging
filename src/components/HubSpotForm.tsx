"use client";

import { useEffect, useRef } from "react";

interface HubSpotFormProps {
  portalId?: string;
  formId?: string;
  region?: string;
}

export default function HubSpotForm({
  portalId = "8758171",
  formId = "bd7fd6fb-a89c-4580-b81e-52dcf3d0e713",
  region = "na1",
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${containerRef.current.id}`,
          onFormReady: (form: HTMLFormElement) => {
            const button = form.querySelector<HTMLElement>(".hs-button");
            if (button) {
              button.style.setProperty("background-color", "#44a3db", "important");
              button.style.setProperty("border-color", "#44a3db", "important");
            }
          },
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [portalId, formId, region]);

  return <div id="hubspot-form-container" ref={containerRef} />;
}

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target?: string;
          onFormReady?: (form: HTMLFormElement) => void;
        }) => void;
      };
    };
  }
}
