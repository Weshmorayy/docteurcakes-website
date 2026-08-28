import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/legal/mentions-legales/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/confidentialite/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
