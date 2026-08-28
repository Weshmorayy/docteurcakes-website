import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { generatePageMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = generatePageMetadata({
  title: 'Mentions Légales',
  description: `Mentions légales et informations juridiques obligatoires de la société ${siteConfig.legal.companyName}.`,
  path: '/legal/mentions-legales',
});

export default function MentionsLegalesPage() {
  const { legal, contact } = siteConfig;

  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-surface-950">
      <Container size="md">
        <div className="space-y-8">
          <header className="border-b border-surface-200 dark:border-surface-800 pb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-surface-900 dark:text-white">
              Mentions Légales
            </h1>
            <p className="mt-2 text-surface-500 text-sm">
              Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique (L.C.E.N.).
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white">
              1. Présentation de la société
            </h2>
            <div className="text-sm sm:text-base text-surface-600 dark:text-surface-300 space-y-2">
              <p><strong>Raison sociale :</strong> {legal.companyName}</p>
              <p><strong>Forme juridique :</strong> {legal.legalForm}</p>
              {legal.capital && <p><strong>Capital social :</strong> {legal.capital}</p>}
              <p><strong>Siège social :</strong> {contact.address.street}, {contact.address.postalCode} {contact.address.city}, {contact.address.country}</p>
              <p><strong>Numéro SIRET :</strong> {legal.siret}</p>
              <p><strong>Immatriculation :</strong> {legal.rcsCity}</p>
              {legal.vatNumber && <p><strong>Numéro de TVA intracommunautaire :</strong> {legal.vatNumber}</p>}
              <p><strong>Directeur de la publication :</strong> {legal.directorPublication}</p>
              <p><strong>Contact :</strong> {contact.email} | {contact.phoneDisplay}</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white">
              2. Hébergement du site
            </h2>
            <div className="text-sm sm:text-base text-surface-600 dark:text-surface-300 space-y-2">
              <p>Le site est hébergé par la société :</p>
              <p><strong>Hébergeur :</strong> {legal.hostName}</p>
              <p><strong>Adresse :</strong> {legal.hostAddress}</p>
              <p><strong>Site web :</strong> <a href={legal.hostWebsite} target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">{legal.hostWebsite}</a></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white">
              3. Propriété intellectuelle
            </h2>
            <p className="text-sm sm:text-base text-surface-600 dark:text-surface-300 leading-relaxed">
              L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
