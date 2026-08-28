import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Glow & Shine',
  shortName: 'Glow & Shine',
  domain: 'glowandshine-dakar.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://glowandshine-dakar.com',
  tagline: 'Le salon de la diaspora — là où la beauté n’a pas de frontières',
  taglineSecondary: 'Un seul endroit pour prendre soin de vous de la tête aux pieds',
  description:
    'Glow & Shine est votre salon de beauté et de coiffure de référence à Ouest-Foire, Dakar. Tresses africaines, knotless braids, onglerie spa, soins capillaires, beauté du regard et espace barbier. Ouvert 7j/7.',
  keywords: [
    'salon de coiffure dakar',
    'glow and shine dakar',
    'knotless braids dakar',
    'boho knotless senegal',
    'tresses africaines dakar',
    'onglerie ouest foire dakar',
    'salon de beaute diaspora dakar',
    'coiffure afro dakar',
    'barbier ouest foire',
    'extensions de cils dakar',
    'microblading dakar',
    'lip blush dakar',
    'pose perruque dakar',
    'soins capillaires dakar',
    'pedicure spa dakar',
  ],
  locale: 'fr_SN',
  defaultOgImage: '/images/brand/logo-dark.jpg',
  logo: {
    transparent: '/images/brand/logo-transparent.png',
    dark: '/images/brand/logo-dark.jpg',
  },

  contact: {
    phone: '+221771644848',
    phoneDisplay: '+221 77 164 48 48',
    whatsappNumber: '221771644848',
    whatsappUrl:
      'https://wa.me/221771644848?text=Bonjour%20Glow%20%26%20Shine%2C%20je%20souhaite%20r%C3%A9server%20un%20rendez-vous%20%C3%A0%20votre%20salon%20d%27Ouest-Foire.',
    email: 'beautymilija@gmail.com',
    address: {
      street: 'Ouest-Foire, près de la VDN & CICES',
      neighborhood: 'Ouest-Foire',
      city: 'Dakar',
      country: 'Sénégal',
      countryCode: 'SN',
    },
    openingHours: [
      { days: 'Du Lundi au Dimanche (7j/7)', hours: '09h00 - 20h00' },
    ],
    googleMapsUrl: 'https://maps.google.com/?q=Ouest-Foire+Dakar+Senegal',
    landmarkNotice: 'Facilement accessible depuis la VDN et la route de l’Aéroport / CICES.',
  },

  legal: {
    companyName: 'GLOW & SHINE BEAUTY AND FASHION',
    legalForm: 'Entreprise Individuelle / SARL',
    siret: 'RCCM SN-DKR-2023-B / NINEA Dakar',
    ninea: 'NINEA Dakar',
    rccm: 'SN-DKR',
    rcsCity: 'Dakar, Sénégal',
    directorPublication: 'Direction Glow & Shine',
    hostName: 'Hostinger International Ltd.',
    hostAddress: '61 Lordou Vironos Street, 6023 Larnaca, Chypre',
    hostWebsite: 'https://www.hostinger.com',
  },

  socials: [
    {
      platform: 'facebook',
      url: 'https://facebook.com/Glowandshine',
      label: 'Facebook (12k+ abonnés)',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/Glowandshine',
      label: 'Instagram',
    },
    {
      platform: 'whatsapp',
      url: 'https://wa.me/221771644848',
      label: 'WhatsApp Direct',
    },
  ],

  hero: {
    badge: 'Le Salon de Référence de la Diaspora à Dakar',
    title: 'Sublimez votre beauté naturelle avec',
    titleHighlight: 'l’élégance Glow & Shine',
    subtitle:
      'Tresses africaines sans douleur, knotless & boho braids, onglerie spa, soins capillaires experts, beauté du regard et espace barbier. Tout votre rituel beauté au même endroit à Ouest-Foire.',
    primaryCta: {
      text: 'Réserver sur WhatsApp',
      href: 'https://wa.me/221771644848?text=Bonjour%20Glow%20%26%20Shine%2C%20je%20souhaite%20r%C3%A9server%20un%20rendez-vous.',
    },
    secondaryCta: {
      text: 'Voir notre carte des soins',
      href: '#services',
    },
    trustBadges: {
      rating: '4.9/5',
      reviewCount: '12 000+ abonnés & clientes comblées',
      label: 'Ouvert 7j/7 à Ouest-Foire',
    },
    heroImage: {
      src: '/images/projects/boho-knotless-braids.jpg',
      alt: 'Boho knotless braids et coiffure de prestige Glow & Shine Dakar',
    },
  },

  about: {
    badge: 'Notre Histoire & Philosophie',
    title: '« Là où la beauté n’a pas de frontières »',
    subtitle: 'L’excellence des rituels capillaires et esthétiques au cœur de Dakar',
    paragraphs: [
      'Né de la passion d’offrir à la diaspora et aux femmes et hommes de Dakar un standard d’excellence sans compromis, Glow & Shine réunit sous un même toit tous les corps de métiers de l’esthétique et de la coiffure.',
      'Que vous recherchiez des Knotless Braids ultra-légères et sans tension, une pose de perruque invisible, un soin profond pour sublimer vos boucles afro, une manucure soignée ou un entretien barbier précis, nos coiffeuses et esthéticiennes passionnées vous accueillent dans un cadre chaleureux et moderne.',
      'Notre engagement : une écoute attentive, des produits de qualité supérieure et un respect absolu de la santé de vos cheveux et de votre peau.',
    ],
    stats: [
      { value: '12K+', label: 'Communauté fidèle', description: 'Sur nos réseaux sociaux' },
      { value: '7j/7', label: 'Ouvert en continu', description: 'De 09h00 à 20h00' },
      { value: '100%', label: 'Sans douleur & doux', description: 'Techniques knotless expertes' },
      { value: '6 en 1', label: 'Espaces dédiés', description: 'Coiffure, ongles, cils, soins, homme, enfant' },
    ],
    image: {
      src: '/images/projects/soins-capillaires-afro.jpg',
      alt: 'Soin capillaire doux et bienveillant chez Glow & Shine Dakar',
    },
  },

  services: {
    badge: 'Nos Prestations & Soins',
    title: 'Un seul endroit pour prendre soin de vous',
    subtitle: 'Découvrez notre gamme complète de prestations pour femmes, hommes et enfants',
    categories: [
      'Tresses & Coiffure',
      'Onglerie & Spa',
      'Beauté du Regard',
      'Soins Capillaires',
      'Espace Hommes',
      'Espace Enfants',
    ],
    items: [
      {
        id: 'knotless-boho-braids',
        category: 'Tresses & Coiffure',
        title: 'Knotless & Boho Knotless Braids',
        description:
          'Tresses sans nœuds à la racine, ultra-légères, sans douleur et protectrices pour votre cuir chevelu. Finition ondulée boho ou lisse.',
        iconName: 'Sparkles',
        features: ['Zéro douleur ni tension', 'Finitions nettes & soignées', 'Pointes bouclées ou droites', 'Tenue longue durée'],
        popular: true,
        priceNote: 'Sur devis selon longueur',
      },
      {
        id: 'braids-vanilles-twists',
        category: 'Tresses & Coiffure',
        title: 'Braids, Vanilles & Adakar Tresses',
        description:
          'Twists soyeux, nattes collées traditionnelles ou stylisées, et tresses artistiques sénégalaises pour un look tendance au quotidien.',
        iconName: 'Scissors',
        features: ['Vanilles sénégalaises', 'Adakar & nattes collées', 'Tracés géométriques parfaits', 'Mèches de haute qualité'],
        popular: false,
        priceNote: 'Selon modèle choisi',
      },
      {
        id: 'pose-perruques-tissages',
        category: 'Tresses & Coiffure',
        title: 'Pose & Soins de Perruques (Lace Wigs) & Tissages',
        description:
          'Customisation de tulle, décoloration des nœuds, pose collée ou sans colle invisible et entretien complet de vos mèches et perruques.',
        iconName: 'Crown',
        features: ['Customisation lace HD', 'Pose invisible & naturelle', 'Lavage & brushing perruque', 'Tissage fermé / ouvert'],
        popular: false,
        priceNote: 'Service express disponible',
      },
      {
        id: 'onglerie-spa-pedicure',
        category: 'Onglerie & Spa',
        title: 'Onglerie, Manucure & Pédicure Spa',
        description:
          'Beauté des mains et des pieds dans notre espace spa. Pose de vernis permanent, capsules, gel, résine et nail art personnalisé.',
        iconName: 'Heart',
        features: ['Pédicure spa relaxante', 'Pose vernis semi-permanent', 'Extensions gel / résine', 'Nail art créatif & strass'],
        popular: true,
        priceNote: 'Soins complets mains & pieds',
      },
      {
        id: 'regard-cils-microblading',
        category: 'Beauté du Regard',
        title: 'Extensions de Cils, Microblading & Lip Blush',
        description:
          'Sublimez les traits de votre visage. Extensions cil à cil, volume russe, restructuration sourcils semi-permanente et teinte des lèvres.',
        iconName: 'Eye',
        features: ['Extensions cil à cil & volume', 'Microblading & Microshading', 'Lip blush effet lèvres mordues', 'Pigments certifiés & sûrs'],
        popular: false,
        priceNote: 'Sur rendez-vous',
      },
      {
        id: 'soins-capillaires-visage',
        category: 'Soins Capillaires',
        title: 'Soins Capillaires Profonds & Soins du Visage',
        description:
          'Traitements hydratants, bains d’huiles précieuses, botox capillaire et soins purifiants visage pour redonner force et éclat.',
        iconName: 'ShieldCheck',
        features: ['Diagnostic cuir chevelu', 'Hydratation intense cheveux texturés', 'Botox & soin réparateur', 'Soin visage coup d’éclat'],
        popular: false,
        priceNote: 'Formules personnalisées',
      },
      {
        id: 'barber-homme',
        category: 'Espace Hommes',
        title: 'Espace Barbier & Soins Hommes',
        description:
          'Coupes tendance, dégradés américains impeccables, traçage et soin de la barbe à l’ancienne, soins du visage et coiffure locks/vanilles.',
        iconName: 'UserCheck',
        features: ['Coupe & dégradé au millimètre', 'Taille de barbe & serviette chaude', 'Soins purifiants visage', 'Locks & nattes homme'],
        popular: false,
        priceNote: 'Avec ou sans rendez-vous',
      },
      {
        id: 'espace-enfants',
        category: 'Espace Enfants',
        title: 'Coiffures & Soins Doux pour Enfants',
        description:
          'Un accueil tout en patience et bienveillance pour les plus jeunes. Tresses sans douleur, nattes protectrices et soins adaptés.',
        iconName: 'Smile',
        features: ['Patience & délicatesse', 'Zéro douleur', 'Accessoires colorés offerts', 'Onglerie douce pour fillettes'],
        popular: false,
        priceNote: 'Tarifs enfants avantageux',
      },
    ],
  },

  portfolio: {
    badge: 'Galerie Réalisations',
    title: 'Nos créations capillaires & esthétiques',
    subtitle: 'Découvrez la finesse des réalisations de notre équipe à Dakar',
    items: [
      {
        id: 'galerie-boho-knotless',
        title: 'Boho Knotless Braids Haute Couture',
        category: 'Tresses & Braids',
        description: 'Tresses sans nœuds fluides avec mèches ondulées légères pour un effet chic et aérien.',
        image: '/images/projects/boho-knotless-braids.jpg',
        imageAlt: 'Boho knotless braids réalisées par Glow and Shine Dakar',
        tags: ['Boho Braids', 'Knotless', 'Dakar Ouest-Foire'],
      },
      {
        id: 'galerie-braids-vanilles',
        title: 'Vanilles Sénégalaises & Long Twists',
        category: 'Coiffure Protectrice',
        description: 'Twists soyeux et brillants, ultra-légers et protecteurs pour la pousse capillaire.',
        image: '/images/projects/braids-vanilles-twists.jpg',
        imageAlt: 'Vanilles et twists sénégalais chez Glow and Shine',
        tags: ['Vanilles', 'Twists', 'Mèches premium'],
      },
      {
        id: 'galerie-box-braids',
        title: 'Box Braids & Chignon Structuré',
        category: 'Coiffure Événement',
        description: 'Tracé impeccable relevé en chignon royal pour mariages, cérémonies et soirées.',
        image: '/images/projects/box-braids-chignon.jpg',
        imageAlt: 'Chignon en tresses box braids Dakar',
        tags: ['Chignon', 'Cérémonie', 'Élégance'],
      },
      {
        id: 'galerie-triangle-parts',
        title: 'Triangle Knotless Braids Géométriques',
        category: 'Design Capillaire',
        description: 'Séparations triangulaires nettes et régulières pour un style moderne et distinctif.',
        image: '/images/projects/triangle-knotless-styling.jpg',
        imageAlt: 'Tracés géométriques triangulaires knotless Dakar',
        tags: ['Triangle Parts', 'Finitions nettes', 'Tresses'],
      },
      {
        id: 'galerie-soins-afro',
        title: 'Rituel Soin Profond & Démêlage Doux',
        category: 'Soins Capillaires',
        description: 'Traitement hydratant et démêlage respectueux des textures crépues, frisées et bouclées.',
        image: '/images/projects/soins-capillaires-afro.jpg',
        imageAlt: 'Soin capillaire hydratant cheveux afro Dakar',
        tags: ['Soins afro', 'Nutrition', 'Sans casse'],
      },
      {
        id: 'galerie-coiffure-prestige',
        title: 'Coiffure & Tressage d’Exception',
        category: 'Haute Coiffure',
        description: 'Couronne tressée avec bijoux capillaires pour sublimer vos grands événements.',
        image: '/images/projects/coiffure-evenementielle.jpg',
        imageAlt: 'Coiffure tressée de cérémonie Glow and Shine',
        tags: ['Bijoux de tête', 'Mariage', 'Prestige'],
      },
    ],
  },

  testimonials: {
    badge: 'Avis Clientes & Diaspora',
    title: 'Ce que disent celles et ceux qui nous font confiance',
    subtitle: 'Des retours chaleureux de nos clientes de Dakar et venues de la diaspora',
    items: [
      {
        id: 'avis-1',
        author: 'Fatou K.',
        role: 'Cliente Diaspora (Paris / Dakar)',
        location: 'Paris & Dakar',
        content:
          'Chaque été quand je rentre à Dakar, Glow & Shine est mon premier arrêt ! Mes Boho Knotless étaient impeccables, légères et sans aucune douleur. L’équipe est ponctuelle et tellement bienveillante.',
        rating: 5,
        date: 'Août 2026',
      },
      {
        id: 'avis-2',
        author: 'Aminata D.',
        role: 'Habitante Ouest-Foire',
        location: 'Ouest-Foire, Dakar',
        content:
          'Un vrai salon tout-en-un ! J’ai fait mes ongles, mes tresses et mon soin visage le même après-midi. Le résultat est juste parfait et l’ambiance est royale.',
        rating: 5,
        date: 'Juillet 2026',
      },
      {
        id: 'avis-3',
        author: 'Cheikh N.',
        role: 'Client Espace Barbier',
        location: 'Almadies, Dakar',
        content:
          'Le coin barbier est top. Dégradé net, rasage précis et serviette chaude. Très pratique d’avoir un salon ouvert 7j/7 avec un vrai professionnalisme.',
        rating: 5,
        date: 'Août 2026',
      },
    ],
  },

  pricing: {
    badge: 'Forfaits & Formules Beauté',
    title: 'Nos packages les plus demandés',
    subtitle: 'Des formules tout compris pour vous chouchouter de la tête aux pieds',
    items: [
      {
        id: 'formule-braids-signature',
        name: 'Forfait Braids & Tresses Signature',
        categoryName: 'Coiffure protectrice',
        price: 'Sur devis',
        period: 'selon longueur',
        description: 'Le savoir-faire signature Glow & Shine : zéro douleur, tracés ultra-nets et tenue prolongée.',
        features: [
          'Diagnostic de votre cuir chevelu',
          'Shampoing & soin démêlant inclus',
          'Knotless, Boho ou Vanilles au choix',
          'Conseils d’entretien & vaporisateur offert',
        ],
        ctaText: 'Réserver ce forfait sur WhatsApp',
        ctaHref:
          'https://wa.me/221771644848?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20le%20Forfait%20Braids%20Signature.',
        isPopular: false,
      },
      {
        id: 'formule-glow-total',
        name: 'Forfait Glow Total (De la tête aux pieds)',
        categoryName: 'Journée Spa Complète',
        price: 'Package Beauté',
        period: 'prestation VIP',
        description: 'La formule reine pour être radieuse : coiffure, ongles, cils et pédicure spa réunis.',
        features: [
          'Coiffure tresses ou pose perruque',
          'Manucure & pose vernis permanent',
          'Pédicure Spa relaxante complète',
          'Pose d’extensions de cils cil à cil',
          'Boisson & accueil VIP dédié',
        ],
        ctaText: 'Prendre rendez-vous VIP',
        ctaHref:
          'https://wa.me/221771644848?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20le%20Forfait%20Glow%20Total.',
        isPopular: true,
      },
      {
        id: 'formule-barber-gentleman',
        name: 'Forfait Gentleman Barber',
        categoryName: 'Espace Homme',
        price: 'Soins Homme',
        period: 'coupe & barbe',
        description: 'Pour les hommes exigeants qui soignent leur style au millimètre.',
        features: [
          'Coupe moderne ou dégradé à blanc',
          'Taille, traçage & huile à barbe',
          'Soin visage vapeur & serviette chaude',
          'Shampoing rafraîchissant & coiffage',
        ],
        ctaText: 'Réserver l’espace Barber',
        ctaHref:
          'https://wa.me/221771644848?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20le%20Forfait%20Gentleman%20Barber.',
        isPopular: false,
      },
    ],
  },

  faq: {
    badge: 'Questions Fréquentes',
    title: 'Tout ce que vous devez savoir avant votre visite',
    subtitle: 'Préparez votre venue chez Glow & Shine en toute sérénité',
    items: [
      {
        question: 'Comment réserver un rendez-vous chez Glow & Shine ?',
        answer:
          'Le moyen le plus rapide et direct est de nous écrire sur WhatsApp au +221 77 164 48 48 ou d’utiliser le formulaire sur ce site. Vous pouvez également nous appeler directement ou venir sur place à Ouest-Foire.',
      },
      {
        question: 'Où se situe exactement le salon à Dakar ?',
        answer:
          'Notre salon est situé à Ouest-Foire, Dakar, dans une zone très facile d’accès depuis la VDN et le rond-point CICES. Vous pouvez nous demander la position GPS exacte sur WhatsApp dès votre confirmation.',
      },
      {
        question: 'Quels sont vos jours et horaires d’ouverture ?',
        answer:
          'Glow & Shine est ouvert 7 jours sur 7, du Lundi au Dimanche, de 09h00 à 20h00 sans interruption. La beauté n’attend pas !',
      },
      {
        question: 'Fournissez-vous les mèches pour les tresses et braids ?',
        answer:
          'Oui, nous disposons d’une large sélection de mèches de qualité supérieure (mèches lisses, ondulées pour boho braids, mèches afro, couleurs variées). Vous pouvez également apporter vos propres mèches si vous avez une préférence particulière.',
      },
      {
        question: 'Combien de temps durent les Knotless Braids et font-elles mal ?',
        answer:
          'Grâce à notre technique sans nœuds, nos coiffeuses travaillent avec une grande douceur sans tirer sur le cuir chevelu. Vous repartez sans mal de tête ! Avec un entretien adéquat (foulard en satin la nuit), vos braids durent entre 4 et 8 semaines.',
      },
      {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer:
          'Nous acceptons les paiements par Wave, Orange Money et espèces sur place.',
      },
    ],
  },

  contactSection: {
    badge: 'Prendre Rendez-vous',
    title: 'Prêt(e) à rayonner avec Glow & Shine ?',
    subtitle: 'Réservez en 1 clic sur WhatsApp ou envoyez-nous votre demande par formulaire.',
    formTitle: 'Demande de rendez-vous ou d’information',
    formDescription: 'Notre équipe vous répond immédiatement pour confirmer votre créneau.',
  },
};
