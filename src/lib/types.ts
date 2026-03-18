export interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  thumbnail: string;
  author: string;
  category: string;
  featured: boolean;
  publishedDate: string;
  draft: boolean;
  body: string;
}

export interface Integration {
  title: string;
  slug: string;
  eldName: string;
  eldDescription: string;
  eldLogo: string;
  spoilerText: string;
  integrationDescription: string;
  capabilities: {
    location: boolean;
    vehicle: boolean;
    hos: boolean;
    driver: boolean;
    safetyEvents: boolean;
    historicalLocation: boolean;
  };
  body: string;
}

export interface PodcastEpisode {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  videoLink: string;
  buzzsproutEmbed: string;
  publishedDate: string;
}

export interface Program {
  companyName: string;
  programName: string;
  slug: string;
  logo: string;
  link: string;
  body: string;
}

export interface TelematicsInsurance {
  title: string;
  slug: string;
  h1: string;
  paragraphText: string;
  h3: string;
  h3Text: string;
  whyH3: string;
  whyH3Text: string;
}

export interface ProgramConfig {
  slug: string;
  partnerName: string;
  partnerLogo: string;
  widgetUrl: string;
  heroText: string;
  heroBullets?: string[];
  heroClosingText?: string;
  supportText: string;
  extraSupportEmail: string;
  extraSupportPhone?: string;
  howItWorks: string[];
  cameras: string[];
  elds: string[];
  ctaCount: number;
  showDataPrivacyButton?: boolean;
  subsidy?: {
    eldAmount: number;
    cameraAmount: number;
    disclaimer: string;
  };
}

export interface MicrositeConfig {
  slug: string;
  partnerName: string;
  programName: string;
  logo: string;
  widgetApiKey: string;
  enabledIntegrations: {
    cameras: string[];
    elds: string[];
  };
  sections: Record<string, boolean>;
}
