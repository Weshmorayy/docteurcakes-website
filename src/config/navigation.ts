import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Accueil', href: '#' },
  { label: 'Prestations & Soins', href: '#services' },
  { label: 'Galerie & Styles', href: '#portfolio' },
  { label: 'Le Salon', href: '#about' },
  { label: 'Forfaits Beauté', href: '#pricing' },
  { label: 'Avis Clientes', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact & RDV', href: '#contact' },
];

export const footerNavigation = {
  services: [
    { label: 'Knotless & Boho Braids', href: '#services' },
    { label: 'Pose de Perruques & Tissages', href: '#services' },
    { label: 'Onglerie & Pédicure Spa', href: '#services' },
    { label: 'Cils, Microblading & Lip Blush', href: '#services' },
    { label: 'Espace Hommes / Barber', href: '#services' },
    { label: 'Coiffure & Soins Enfants', href: '#services' },
  ],
  company: [
    { label: 'Le Salon de la Diaspora', href: '#about' },
    { label: 'Galerie de Réalisations', href: '#portfolio' },
    { label: 'Témoignages & Avis', href: '#testimonials' },
    { label: 'Forfaits Tout-en-un', href: '#pricing' },
    { label: 'Réservation WhatsApp', href: 'https://wa.me/221771644848' },
  ],
  legal: [
    { label: 'Mentions Légales', href: '/legal/mentions-legales' },
    { label: 'Politique de Confidentialité', href: '/legal/confidentialite' },
  ],
};
