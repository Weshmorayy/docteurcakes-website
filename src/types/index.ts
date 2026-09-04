export interface NavItem {
  label: string;
  href: string;
}

export interface CakeCategory {
  id: string;
  title: string;
  unitPrice: string;
  minimumOrder: string;
  startingPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FlavorItem {
  name: string;
  note?: string;
  isPopular?: boolean;
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

  logo: {
    dark: string;
    transparent: string;
  };

  contact: {
    phone: string;
    phoneSecondary?: string;
    phoneDisplay: string;
    phoneDisplaySecondary?: string;
    whatsappNumber: string;
    whatsappUrl: string;
    whatsappChannelUrl: string;
    email: string;
    address: {
      street: string;
      neighborhood: string;
      city: string;
      postalCode: string;
      country: string;
      countryCode: string;
    };
    payments: {
      wave: string;
      mtn: string;
      orange: string;
      notice: string;
    };
    delivery: {
      cocody: string;
      horsCocody: string;
      horsAbidjan: string;
    };
    openingHours: {
      days: string;
      hours: string;
    }[];
  };

  legal: {
    companyName: string;
    legalForm: string;
    capital: string;
    ninea: string;
    rcsCity: string;
    directorPublication: string;
    hostName: string;
    hostAddress: string;
    hostWebsite: string;
  };

  socials: {
    platform: 'facebook' | 'instagram' | 'whatsapp' | 'whatsapp-channel';
    url: string;
    label: string;
  }[];

  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: {
      text: string;
      href: string;
    };
    ctaSecondary: {
      text: string;
      href: string;
    };
    featuredCake: {
      image: string;
      title: string;
      tag: string;
    };
  };

  offers: {
    badge: string;
    title: string;
    subtitle: string;
    categories: CakeCategory[];
  };

  flavors: {
    badge: string;
    title: string;
    subtitle: string;
    list: FlavorItem[];
  };

  orderBuilder: {
    badge: string;
    title: string;
    subtitle: string;
  };

  conditions: {
    badge: string;
    title: string;
    subtitle: string;
  };
}
