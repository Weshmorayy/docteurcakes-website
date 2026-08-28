import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { generatePageMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = generatePageMetadata({
  title: 'Politique de Confidentialité (RGPD)',
  description: `Politique de confidentialité et protection des données personnelles de ${siteConfig.name}.`,
  path: '/legal/confidentialite',
});

export default function ConfidentialitePage() {
  const { legal, contact } = siteConfig;

  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-surface-950">
      <Container size="md">
        <div className="space-y-8">
          <header className="border-b border-surface-200 dark:border-surface-800 pb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-surface-900 dark:text-white">
              Politique de Confidentialité
            </h1>
            <p className="mt-2 text-surface-500 text-sm">
              Protection et gestion de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white">
              1. Responsable du traitement des données
            </h2>
            <p className="text-sm sm:text-base text-surface-600 dark:text-surface-300 leading-relaxed">
              Le responsable du traitement des données à caractère personnel collectées sur ce site est la société {legal.companyName}, dont le siège social est situé au {contact.address.street}, {contact.address.postalCode} {contact.address.city}. Contact : {contact.email}.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white">
              2. Données collectées et finalités
            </h2>
            <p className="text-sm sm:text-base text-surface-600 dark:text-surface-300 leading-relaxed">
              Nous collectons uniquement les données transmises volontairement via le formulaire de contact (nom, adresse email, numéro de téléphone, description du besoin). Ces informations sont exclusivement utilisées pour traiter vos demandes d’informations ou de devis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white">
              3. Vos droits
            </h2>
            <p className="text-sm sm:text-base text-surface-600 dark:text-surface-300 leading-relaxed">
              Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement et de portabilité de vos données. Pour exercer ce droit, contactez-nous à : <a href={`mailto:${contact.email}`} className="text-brand-600 underline font-medium">{contact.email}</a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
