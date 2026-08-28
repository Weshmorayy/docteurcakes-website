import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Accueil', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'À Propos', href: '#about' },
  { label: 'Avis', href: '#testimonials' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const footerNavigation = {
  services: [
    { label: 'Conception & 3D', href: '#services' },
    { label: 'Fabrication sur mesure', href: '#services' },
    { label: 'Pose & Agencement', href: '#services' },
    { label: 'Rénovation de prestige', href: '#services' },
  ],
  company: [
    { label: 'Notre savoir-faire', href: '#about' },
    { label: 'Nos réalisations', href: '#portfolio' },
    { label: 'Témoignages clients', href: '#testimonials' },
    { label: 'Tarifs & formules', href: '#pricing' },
  ],
  legal: [
    { label: 'Mentions Légales', href: '/legal/mentions-legales' },
    { label: 'Politique de Confidentialité', href: '/legal/confidentialite' },
  ],
};
