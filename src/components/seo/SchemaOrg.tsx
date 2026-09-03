import React from 'react';
import { siteConfig } from '@/config/site';

export function SchemaOrg() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: '3500 FCFA - 140000 FCFA',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.neighborhood,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.359952,
      longitude: -4.008256,
    },
    openingHoursSpecification: siteConfig.contact.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '20:00',
    })),
    sameAs: siteConfig.socials.map((s) => s.url),
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo.transparent}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      availableLanguage: ['French'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
