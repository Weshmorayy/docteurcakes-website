import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Accueil', href: '#' },
  { label: 'Tarifs & Offres', href: '#tarifs' },
  { label: 'Parfums', href: '#parfums' },
  { label: 'Simulateur', href: '#simulateur' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Livraison & Acompte', href: '#infos' },
];

export const footerNavigation = {
  products: [
    { label: 'Gâteaux à la crème (dès 17 500 F)', href: '#tarifs' },
    { label: 'Gâteaux pâte à sucre (dès 40 000 F)', href: '#tarifs' },
    { label: 'Wedding Cakes (dès 140 000 F)', href: '#tarifs' },
    { label: 'Guide des 13 parfums', href: '#parfums' },
  ],
  info: [
    { label: 'Calculateur WhatsApp', href: '#simulateur' },
    { label: 'Modalités de livraison Abidjan', href: '#infos' },
    { label: 'Moyens de paiement (Wave, Orange, MTN)', href: '#infos' },
    { label: 'Page Facebook (57K fans)', href: 'https://facebook.com/Docteurcakes' },
  ],
  legal: [
    { label: 'Mentions Légales', href: '/legal/mentions-legales' },
    { label: 'Politique de Confidentialité', href: '/legal/confidentialite' },
  ],
};
