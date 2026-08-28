import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0C',
    theme_color: '#c59737',
    icons: [
      {
        src: siteConfig.logo.transparent,
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
