import React from 'react';
import { generatePageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';

export const metadata = generatePageMetadata({
  title: 'Mentions Légales | Pâtisserie Docteur Cakes',
  description: 'Mentions légales du site officiel Pâtisserie Docteur Cakes à Abidjan.',
  path: '/legal/mentions-legales',
});

export default function MentionsLegalesPage() {
  const { legal, contact, name } = siteConfig;

  return (
    <div className="py-12 sm:py-20 bg-surface-50 min-h-screen">
      <Container size="md">
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xs border border-surface-200 space-y-6">
          <header className="border-b border-surface-200 pb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-surface-950 font-heading">
              Mentions Légales
            </h1>
            <p className="mt-1 text-surface-500 text-xs sm:text-sm">
              Informations légales du site {name}.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-950 font-heading">
              1. Éditeur du site
            </h2>
            <div className="text-xs sm:text-sm text-surface-700 space-y-1.5">
              <p><strong>Enseigne :</strong> {name}</p>
              <p><strong>Raison sociale :</strong> {legal.companyName}</p>
              <p><strong>Localisation :</strong> {contact.address.street}, {contact.address.neighborhood}, {contact.address.city}, {contact.address.country}</p>
              <p><strong>Contact :</strong> {contact.email} | {contact.phoneDisplay}</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-950 font-heading">
              2. Hébergement
            </h2>
            <div className="text-xs sm:text-sm text-surface-700 space-y-1.5">
              <p><strong>Hébergeur :</strong> {legal.hostName}</p>
              <p><strong>Adresse :</strong> {legal.hostAddress}</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
