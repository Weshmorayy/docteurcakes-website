export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'github' | 'youtube' | 'whatsapp';
  url: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    countryCode: string;
  };
  openingHours: {
    days: string;
    hours: string;
  }[];
  googleMapsUrl?: string;
  emergencyPhone?: string;
}

export interface LegalInfo {
  companyName: string;
  legalForm: string; // e.g. "SAS", "SARL", "Auto-entrepreneur"
  capital?: string; // e.g. "10 000 €"
  siret: string;
  rcsCity: string;
  vatNumber?: string;
  directorPublication: string;
  hostName: string;
  hostAddress: string;
  hostWebsite: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
  link?: string;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar?: string;
  date?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  keywords: string[];
  locale: string;
  defaultOgImage: string;
  
  contact: ContactInfo;
  legal: LegalInfo;
  socials: SocialLink[];
  
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
    trustBadges: {
      rating: string;
      reviewCount: string;
      label: string;
    };
    heroImage: {
      src: string;
      alt: string;
    };
  };

  about: {
    badge: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    stats: StatItem[];
    image: {
      src: string;
      alt: string;
    };
  };

  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };

  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };

  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };

  pricing?: {
    badge: string;
    title: string;
    subtitle: string;
    items: PricingPlan[];
  };

  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };

  contactSection: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formDescription: string;
  };
}
