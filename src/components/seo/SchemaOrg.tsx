import { siteConfig } from '@/config/site';

interface SchemaOrgProps {
  type?: 'LocalBusiness' | 'Organization' | 'ProfessionalService';
}

export function SchemaOrg({ type = 'LocalBusiness' }: SchemaOrgProps) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legal.companyName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    openingHoursSpecification: siteConfig.contact.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '19:00',
    })),
    sameAs: siteConfig.socials.map((s) => s.url),
    priceRange: '€€€',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteConfig.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {siteConfig.faq.items.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
