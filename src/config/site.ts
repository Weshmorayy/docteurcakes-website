import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Pâtisserie Docteur Cakes — Gâteaux sur Mesure à Abidjan',
  shortName: 'Docteur Cakes',
  domain: 'docteurcakes.ci',
  url: 'https://docteurcakes.ci',
  tagline: 'Créateur de gâteaux d’anniversaire, wedding cakes et douceurs personnalisées',
  description:
    'Pâtisserie artisanale à Abidjan (Cocody). Gâteaux à la crème dès 3 500 F la part, gâteaux en pâte à sucre et wedding cakes sur mesure. Commande directe sur WhatsApp et livraison Abidjan & intérieur.',
  keywords: [
    'docteur cakes',
    'patisserie docteur cakes',
    'gateau anniversaire abidjan',
    'wedding cake abidjan',
    'cake design abidjan',
    'gateau pate a sucre abidjan',
    'patisserie cocody',
    'gateau bapteme abidjan',
    'commande gateau whatsapp abidjan',
  ],
  locale: 'fr_CI',
  defaultOgImage: '/images/cakes/wedding-cake-royal-4-etages.jpg',

  logo: {
    dark: '/images/brand/logo.png',
    transparent: '/images/brand/logo.png',
  },

  contact: {
    phone: '+2250749911390',
    phoneSecondary: '+2250789906293',
    phoneDisplay: '+225 07 49 91 13 90',
    phoneDisplaySecondary: '+225 07 89 90 62 93',
    whatsappNumber: '+2250749911390',
    whatsappUrl:
      'https://wa.me/2250749911390?text=Bonjour%20Docteur%20Cakes%2C%20je%20souhaite%20commander%20un%20g%C3%A2teau%20personnalis%C3%A9.',
    whatsappChannelUrl: 'https://whatsapp.com/channel/0029VbCOIAnJf05fOwaVu80w',
    email: 'docteurcakes73@gmail.com',
    address: {
      street: 'Rue G30, 188',
      neighborhood: 'Cocody',
      city: 'Abidjan',
      postalCode: '00225',
      country: 'Côte d’Ivoire',
      countryCode: 'CI',
    },
    payments: {
      wave: '+225 07 49 91 13 90',
      mtn: '+225 05 84 22 49 49',
      orange: '+225 07 89 90 62 93',
      notice: 'Pour valider votre commande en cuisine, le versement d’un acompte est requis (non remboursable).',
    },
    delivery: {
      cocody: '15 000 F',
      horsCocody: '25 000 F',
      horsAbidjan: '40 000 F',
    },
    openingHours: [
      {
        days: 'Commandes & Ateliers 7j/7',
        hours: '08h00 - 20h00',
      },
    ],
  },

  legal: {
    companyName: 'Pâtisserie Docteur Cakes SARL',
    legalForm: 'Entreprise Individuelle / SARL',
    capital: '1 000 000 FCFA',
    ninea: 'CI-ABJ-2022-A-11390',
    rcsCity: 'Abidjan',
    directorPublication: 'Direction Docteur Cakes',
    hostName: 'Vercel Inc.',
    hostAddress: '440 N Barranca Ave #4133, Covina, CA 91723',
    hostWebsite: 'https://vercel.com',
  },

  socials: [
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/Docteurcackes/',
      label: 'Facebook (57K Abonnés)',
    },
    {
      platform: 'whatsapp-channel',
      url: 'https://whatsapp.com/channel/0029VbCOIAnJf05fOwaVu80w',
      label: 'Chaîne WhatsApp Officielle',
    },
    {
      platform: 'whatsapp',
      url: 'https://wa.me/2250749911390',
      label: 'WhatsApp Direct (+225 07 49 91 13 90)',
    },
  ],

  hero: {
    badge: 'Atelier Pâtisserie & Cake Design · Cocody, Abidjan',
    title: 'Vos gâteaux de fête sur mesure,',
    titleHighlight: 'conçus avec passion',
    subtitle:
      'Gâteaux d’anniversaire légers à la crème, créations personnalisées en pâte à sucre et pièces montées de mariage. Choisissez vos parfums et commandez directement sur WhatsApp.',
    ctaPrimary: {
      text: 'Composer mon gâteau & Tarifs',
      href: '#simulateur',
    },
    ctaSecondary: {
      text: 'Voir les parfums disponibles',
      href: '#parfums',
    },
    featuredCake: {
      image: '/images/cakes/wedding-cake-royal-4-etages.jpg',
      title: 'Pièce montée mariage 4 étages',
      tag: 'Wedding Cake Prestige',
    },
  },

  offers: {
    badge: 'Nos Tarifs Clairs & Transparents',
    title: 'Tarifs à la part pour vos événements',
    subtitle: 'Des prix fixes sans surprise. Minimum de commande selon le type de finition.',
    categories: [
      {
        id: 'creme',
        title: 'Gâteau Anniversaire à la Crème',
        unitPrice: '3 500 F',
        minimumOrder: 'Minimum 5 parts',
        startingPrice: 'Dès 17 500 FCFA',
        description: 'Crème fouettée onctueuse, génoise moelleuse et pochage élégant.',
        features: [
          'À partir de 5 parts (17 500 F)',
          'Choix de 1 ou 2 parfums au choix',
          'Décoration personnalisée simple incluse',
          'Bougies et message offerts',
        ],
        popular: false,
      },
      {
        id: 'pate-sucre',
        title: 'Gâteau Thématique Pâte à Sucre',
        unitPrice: '4 000 F',
        minimumOrder: 'Minimum 10 parts',
        startingPrice: 'Dès 40 000 FCFA',
        description: 'Modelages thématiques, châteaux féeriques, dessins animés et figurines sculptées.',
        features: [
          'À partir de 10 parts (40 000 F)',
          'Design 100% sur mesure selon votre thème',
          'Idéal anniversaires enfants & baptêmes',
          'Finition nette et détails soignés',
        ],
        popular: true,
      },
      {
        id: 'wedding-cake',
        title: 'Wedding Cake & Grands Événements',
        unitPrice: '4 000 F à 8 000 F',
        minimumOrder: 'Minimum 35 parts (70 pers.)',
        startingPrice: 'Dès 140 000 FCFA',
        description: 'Pièces montées spectaculaires à étages avec fleurs, dorures et perles comestibles.',
        features: [
          'Dès 35 parts (140 000 F pour 70 personnes)',
          'Structure multi-étages renforcée',
          'Fleurs fraîches ou fleurs en sucre',
          'Assistance à la découpe sur demande',
        ],
        popular: false,
      },
    ],
  },

  flavors: {
    badge: 'La Palette des Saveurs',
    title: '13 parfums gourmands au choix',
    subtitle: 'Associez vos parfums préférés pour une génoise et un fourrage équilibrés.',
    list: [
      { name: 'Fruits rouges', isPopular: true },
      { name: 'Caramel beurre salé', isPopular: true },
      { name: 'Chocolat intense', isPopular: true },
      { name: 'Vanille de Madagascar', isPopular: false },
      { name: 'Oreo & Cream', isPopular: true },
      { name: 'Citron meringué', isPopular: false },
      { name: 'Menthe fraîche', isPopular: false },
      { name: 'Moka Café', isPopular: false },
      { name: 'Pomme cannelle', isPopular: false },
      { name: 'Crème Toffee Muscade', note: 'Signature', isPopular: true },
      { name: 'Baileys gourmand', note: 'Spécial adultes', isPopular: true },
      { name: 'Cerelac régressif', note: 'Coup de cœur', isPopular: true },
      { name: 'Fraise fraîche', note: 'Selon saison', isPopular: false },
      { name: 'Spéculoos croquant', isPopular: true },
    ],
  },

  orderBuilder: {
    badge: 'Calculateur Instantané',
    title: 'Estimez votre gâteau en 3 clics',
    subtitle: 'Sélectionnez votre type de gâteau, le nombre de parts et préparez votre message WhatsApp.',
  },

  conditions: {
    badge: 'Infos Pratiques',
    title: 'Modalités de commande, acompte & livraisons',
    subtitle: 'Tout ce qu’il faut savoir pour passer votre commande en toute tranquillité.',
  },
};
