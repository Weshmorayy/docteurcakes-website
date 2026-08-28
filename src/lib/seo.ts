import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface PageMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  image,
  path = '',
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.tagline}`;
  const pageDescription = description || siteConfig.description;
  const pageUrl = `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
  const pageImage = image ? (image.startsWith('http') ? image : `${siteConfig.url}${image}`) : `${siteConfig.url}${siteConfig.defaultOgImage}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.shortName,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
