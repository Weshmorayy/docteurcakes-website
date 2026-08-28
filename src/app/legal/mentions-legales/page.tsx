import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { generatePageMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = generatePageMetadata({
  title: 'Mentions Légales',
  description: `Mentions légales et informations juridiques de ${siteConfig.legal.companyName}.`,
  path: '/legal/mentions-legales',
});

export default function MentionsLegalesPage() {
  const { legal, contact } = siteConfig;

  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container size="md">
        <div className="space-y-8">
          <header className="border-b border-surface-200 pb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-surface-950 font-heading">
              Mentions Légales
            </h1>
            <p className="mt-2 text-surface-500 text-sm">
              Informations légales et mentions obligatoires du site officiel Glow & Shine.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-surface-950">
              1. Présentation de l’établissement
            </h2>
            <div className="text-sm sm:text-base text-surface-700 space-y-2">
              <p><strong>Enseigne :</strong> {siteConfig.name}</p>
              <p><strong>Raison sociale :</strong> {legal.companyName}</p>
              <p><strong>Forme juridique :</strong> {legal.legalForm}</p>
              <p><strong>Localisation :</strong> {contact.address.street}, {contact.address.neighborhood}, {contact.address.city}, {contact.address.country}</p>
              <p><strong>Immatriculation :</strong> {legal.siret}</p>
              <p><strong>Registre de Commerce :</strong> {legal.rcsCity}</p>
              <p><strong>Responsable de la publication :</strong> {legal.directorPublication}</p>
              <p><strong>Contact :</strong> {contact.email} | {contact.phoneDisplay}</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-surface-950">
              2. Hébergement du site
            </h2>
            <div className="text-sm sm:text-base text-surface-700 space-y-2">
              <p>Le site est hébergé par :</p>
              <p><strong>Hébergeur :</strong> {legal.hostName}</p>
              <p><strong>Adresse :</strong> {legal.hostAddress}</p>
              <p><strong>Site web :</strong> <a href={legal.hostWebsite} target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">{legal.hostWebsite}</a></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-surface-950">
              3. Propriété intellectuelle
            </h2>
            <p className="text-sm sm:text-base text-surface-700 leading-relaxed">
              L’ensemble de ce site (logo, textes, visuels, identité de marque) est protégé par le droit de la propriété intellectuelle. Toute reproduction totale ou partielle sans autorisation expresse de {legal.companyName} est strictement interdite.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
