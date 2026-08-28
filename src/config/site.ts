import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Studio Artisan & Co',
  shortName: 'StudioArtisan',
  domain: 'mon-entreprise.fr',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mon-entreprise.fr',
  tagline: 'Excellence artisanale & solutions sur-mesure pour vos projets',
  description:
    'Découvrez nos services d’artisanat d’exception et d’accompagnement sur-mesure. Une équipe dédiée à vos projets avec plus de 15 ans de savoir-faire.',
  keywords: [
    'artisanat français',
    'sur-mesure',
    'rénovation de prestige',
    'menuiserie haut de gamme',
    'conception sur mesure',
    'devis gratuit artisan',
    'artisan qualifié',
  ],
  locale: 'fr_FR',
  defaultOgImage: '/images/og-default.jpg',

  contact: {
    phone: '+33123456789',
    phoneDisplay: '01 23 45 67 89',
    email: 'contact@mon-entreprise.fr',
    address: {
      street: '12 Avenue des Métiers d’Art',
      city: 'Paris',
      postalCode: '75008',
      country: 'France',
      countryCode: 'FR',
    },
    openingHours: [
      { days: 'Du Lundi au Vendredi', hours: '08h30 - 19h00' },
      { days: 'Le Samedi', hours: '09h00 - 13h00 (sur rendez-vous)' },
    ],
    googleMapsUrl: 'https://maps.google.com/?q=Paris+France',
  },

  legal: {
    companyName: 'STUDIO ARTISAN & CO SAS',
    legalForm: 'Société par Actions Simplifiée (SAS)',
    capital: '25 000 €',
    siret: '89123456700018',
    rcsCity: 'RCS Paris 891 234 567',
    vatNumber: 'FR 32 891234567',
    directorPublication: 'Jean Dupont',
    hostName: 'Hostinger International Ltd.',
    hostAddress: '61 Lordou Vironos Street, 6023 Larnaca, Chypre',
    hostWebsite: 'https://www.hostinger.fr',
  },

  socials: [
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/company/mon-entreprise',
      label: 'LinkedIn',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/mon_entreprise',
      label: 'Instagram',
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com/monentreprise',
      label: 'Facebook',
    },
  ],

  hero: {
    badge: '★ Savoir-Faire d’Excellence Certifié',
    title: 'Transformez vos espaces avec un savoir-faire',
    titleHighlight: 'd’exception & sur-mesure',
    subtitle:
      'Nous concevons et réalisons des ouvrages haut de gamme, alliant tradition et innovation technique. Devis personnalisé sous 48h.',
    primaryCta: {
      text: 'Demander un devis gratuit',
      href: '#contact',
    },
    secondaryCta: {
      text: 'Découvrir nos réalisations',
      href: '#portfolio',
    },
    trustBadges: {
      rating: '4.9/5',
      reviewCount: '120+ avis clients vérifiés',
      label: 'Garantie décennale & Qualibat',
    },
    heroImage: {
      src: '/images/hero-showcase.webp',
      alt: 'Atelier et réalisations de prestige',
    },
  },

  about: {
    badge: 'Notre Histoire & Philosophie',
    title: 'Plus de 15 années d’engagement pour la perfection',
    subtitle: 'Une passion transmise au service de vos réalisations les plus exigeantes',
    paragraphs: [
      'Fondé avec la volonté de restaurer et magnifier la noblesse des matériaux, notre atelier associe des techniques séculaires aux standards contemporains d’isolation, d’ergonomie et de design.',
      'Chaque projet bénéficie d’un interlocuteur unique, d’une étude 3D préalable rigoureuse et d’un suivi de chantier millimétré pour vous garantir une tranquillité absolue.',
    ],
    stats: [
      { value: '15+', label: 'Années d’expérience', description: 'Sur le terrain' },
      { value: '450+', label: 'Projets livrés', description: 'Sans aucun litige' },
      { value: '99%', label: 'Clients satisfaits', description: 'Recommandation directe' },
      { value: '100%', label: 'Garantie décennale', description: 'Couverture complète' },
    ],
    image: {
      src: '/images/about-craftsman.webp',
      alt: 'Artisan qualifié en plein travail dans l’atelier',
    },
  },

  services: {
    badge: 'Nos Domaines d’Expertise',
    title: 'Des prestations complètes adaptées à vos besoins',
    subtitle: 'De l’étude préliminaire jusqu’à la pose finale et aux finitions soignées',
    items: [
      {
        id: 'conception-sur-mesure',
        title: 'Conception & Modélisation 3D',
        description:
          'Plans détaillés et visualisations réalistes de votre projet avant tout démarrage de fabrication.',
        iconName: 'Layout',
        features: ['Plans d’architecte', 'Rendus 3D photoréalistes', 'Optimisation des volumes'],
        popular: false,
      },
      {
        id: 'fabrication-artisanale',
        title: 'Fabrication Artisanale de Prestige',
        description:
          'Façonnage dans nos ateliers avec des essences nobles et des matériaux durables et certifiés.',
        iconName: 'Hammer',
        features: ['Bois massifs & métaux nobles', 'Finitions manuelles haut de gamme', 'Durabilité certifiée'],
        popular: true,
      },
      {
        id: 'pose-installation',
        title: 'Pose & Installation Soignée',
        description:
          'Intervention par nos compagnons qualifiés avec respect absolu des délais et propreté du chantier.',
        iconName: 'Wrench',
        features: ['Poseurs intégrés', 'Protection intégrale du site', 'Nettoyage systématique'],
        popular: false,
      },
      {
        id: 'renovation-patrimoine',
        title: 'Rénovation & Restauration',
        description:
          'Préservation et mise en valeur du patrimoine existant dans le respect des styles architecturaux.',
        iconName: 'ShieldCheck',
        features: ['Diagnostic technique', 'Respect des normes Bâtiments de France', 'Restauration à l’identique'],
        popular: false,
      },
      {
        id: 'agencement-interieur',
        title: 'Agencement & Menuiserie d’Intérieur',
        description:
          'Dressings, bibliothèques, cuisines d’exception et mobilier intégré sur mesure.',
        iconName: 'Sparkles',
        features: ['Gain d’espace maximal', 'Quincaillerie invisible haut de gamme', 'Éclairages LED intégrés'],
        popular: false,
      },
      {
        id: 'suivi-garantie',
        title: 'Accompagnement & SAV Garanti',
        description:
          'Un suivi personnalisé après la livraison et des garanties décennales solides.',
        iconName: 'Clock',
        features: ['Garantie décennale & biennale', 'Intervention rapide', 'Conseils d’entretien offerts'],
        popular: false,
      },
    ],
  },

  portfolio: {
    badge: 'Portfolio & Réalisations',
    title: 'Découvrez nos derniers chantiers livrés',
    subtitle: 'Une sélection de nos réalisations d’exception pour particuliers et professionnels',
    items: [
      {
        id: 'realisation-1',
        title: 'Rénovation d’un appartement Haussmannien',
        category: 'Agencement intérieur',
        description: 'Menuiseries sur mesure en chêne massif et intégration de rangements invisibles.',
        image: '/images/projects/project-haussmann.webp',
        imageAlt: 'Salon haussmannien avec bibliothèque sur mesure en chêne',
        tags: ['Chêne massif', 'Paris 8e', '2025'],
      },
      {
        id: 'realisation-2',
        title: 'Création d’un escalier suspendu contemporain',
        category: 'Ouvrage d’art',
        description: 'Alliance d’acier thermolaqué et de marches en noyer américain avec garde-corps verre.',
        image: '/images/projects/project-escalier.webp',
        imageAlt: 'Escalier suspendu moderne bois et métal',
        tags: ['Acier & Noyer', 'Versailles', '2025'],
      },
      {
        id: 'realisation-3',
        title: 'Aménagement d’une cuisine d’architecte',
        category: 'Cuisine & Bain',
        description: 'Façades en noyer cannelé, plan de travail en quartz et éclairage d’ambiance discret.',
        image: '/images/projects/project-cuisine.webp',
        imageAlt: 'Cuisine moderne avec îlot central en quartz',
        tags: ['Quartz & Noyer', 'Neuilly-sur-Seine', '2024'],
      },
      {
        id: 'realisation-4',
        title: 'Verrière d’atelier et claustra séparatif',
        category: 'Métallerie fine',
        description: 'Création d’une séparation lumineuse style atelier d’artiste avec vitrage acoustique.',
        image: '/images/projects/project-verriere.webp',
        imageAlt: 'Verrière style atelier séparant salon et bureau',
        tags: ['Verre acoustique', 'Boulogne', '2024'],
      },
    ],
  },

  testimonials: {
    badge: 'Avis Clients',
    title: 'Ce que nos clients disent de notre travail',
    subtitle: 'La satisfaction de nos commanditaires est notre meilleure carte de visite',
    items: [
      {
        id: 'temoignage-1',
        author: 'Marc & Sophie L.',
        role: 'Propriétaires particuliers',
        company: 'Paris 16e',
        content:
          'Une équipe d’une rare méticulosité. Notre bibliothèque sur mesure et nos claustras sont d’une qualité irréprochable. Chantier rendu impeccablement propre.',
        rating: 5,
        date: 'Janvier 2025',
      },
      {
        id: 'temoignage-2',
        author: 'Claire Delorme',
        role: 'Architecte d’intérieur',
        company: 'Cabinet Delorme Design',
        content:
          'Je collabore avec l’équipe sur l’ensemble de mes chantiers exigeants. Le respect des délais et la finesse des finitions sont systématiquement au rendez-vous.',
        rating: 5,
        date: 'Décembre 2024',
      },
      {
        id: 'temoignage-3',
        author: 'Alexandre Meyer',
        role: 'Directeur Général',
        company: 'Hôtel & Spa Le Marais',
        content:
          'Rénovation intégrale de nos espaces d’accueil. Les délais très serrés ont été parfaitement respectés avec un résultat bluffant pour nos clients.',
        rating: 5,
        date: 'Novembre 2024',
      },
    ],
  },

  pricing: {
    badge: 'Transparence & Tarifs',
    title: 'Des formules claires adaptées à chaque échelle',
    subtitle: 'Tous nos tarifs incluent l’étude préliminaire, l’assurance décennale et la garantie SAV',
    items: [
      {
        id: 'formule-conseil',
        name: 'Étude & Conseil 3D',
        price: 'Sur devis',
        period: 'par projet',
        description: 'Idéal pour concevoir votre projet avec plans précis avant de lancer les travaux.',
        features: [
          'Visite sur place & relevé de cotes',
          'Modélisation 3D photoréaliste',
          'Nomenclature des matériaux',
          'Devis estimatif détaillé',
        ],
        ctaText: 'Prendre rendez-vous',
        ctaHref: '#contact',
        isPopular: false,
      },
      {
        id: 'formule-complete',
        name: 'Clé en main (Recommandé)',
        price: 'Sur mesure',
        period: 'fabrication & pose',
        description: 'La prise en charge globale de votre projet, de l’atelier jusqu’au nettoyage de fin de chantier.',
        features: [
          'Toutes les prestations de l’Étude 3D',
          'Fabrication artisanale sur mesure',
          'Livraison & pose par nos équipes',
          'Garantie décennale & SAV prioritaire',
          'Interlocuteur unique dédié',
        ],
        ctaText: 'Demander une étude gratuite',
        ctaHref: '#contact',
        isPopular: true,
      },
      {
        id: 'formule-pro',
        name: 'Partenariat Architectes & Pros',
        price: 'Offre Pro',
        period: 'b2b & chantiers',
        description: 'Solutions techniques et délais réservés aux prescripteurs et professionnels.',
        features: [
          'Tarification professionnelle remisée',
          'Planning d’intervention prioritaire',
          'Intervention en horaires décalés possible',
          'Dossier technique & DOE complet',
        ],
        ctaText: 'Contacter le pôle Pro',
        ctaHref: '#contact',
        isPopular: false,
      },
    ],
  },

  faq: {
    badge: 'Questions Fréquentes',
    title: 'Tout ce que vous devez savoir avant de démarrer',
    subtitle: 'Vous avez une question ? Retrouvez les réponses aux interrogations les plus fréquentes.',
    items: [
      {
        question: 'Comment se déroule la demande de devis ?',
        answer:
          'Vous pouvez remplir notre formulaire en ligne ou nous appeler directement. Après un premier échange téléphonique pour cerner votre besoin, nous convenons d’un rendez-vous sur place pour prendre les mesures et vous remettre une proposition chiffrée détaillée sous 48h.',
      },
      {
        question: 'Vos travaux sont-ils couverts par une garantie ?',
        answer:
          'Absolument. Toutes nos réalisations sont couvertes par une assurance garantie décennale ainsi qu’une assurance responsabilité civile professionnelle souscrites auprès d’un assureur français reconnu. Les attestations vous sont remises avec le devis.',
      },
      {
        question: 'Quels sont les délais moyens de fabrication et d’installation ?',
        answer:
          'Les délais varient selon la complexité et l’envergure de l’ouvrage. Comptez en moyenne 3 à 5 semaines pour des agencements sur mesure en atelier. La date de pose ferme est fixée dès la validation du bon de commande.',
      },
      {
        question: 'Intervenez-vous en dehors de votre zone principale ?',
        answer:
          'Notre zone d’intervention principale couvre toute l’Île-de-France et les départements limitrophes. Pour des projets de prestige ou d’envergure, nous pouvons nous déplacer sur l’ensemble du territoire national.',
      },
      {
        question: 'Proposez-vous des facilités de règlement ?',
        answer:
          'Le paiement s’effectue généralement en plusieurs étapes : un acompte à la commande pour l’approvisionnement des matériaux, un acompte au démarrage de la fabrication, et le solde à la réception définitive et sans réserve du chantier.',
      },
    ],
  },

  contactSection: {
    badge: 'Contactez-Nous',
    title: 'Discutons de votre prochain projet',
    subtitle: 'Remplissez le formulaire ci-dessous ou contactez-nous directement par téléphone.',
    formTitle: 'Demande de devis & étude personnalisée',
    formDescription: 'Réponse garantie en moins de 48 heures ouvrées.',
  },
};
