import { BRAND_URL } from '@/constants/brand';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: BRAND_URL + '/sitemap.xml',
  };
}
