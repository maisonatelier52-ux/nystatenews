import { MetadataRoute } from 'next';
import businessData from '../../public/data/business.json';
import technologyData from '../../public/data/technology.json';
import sportsData from '../../public/data/sports.json';
import healthData from '../../public/data/health.json';
import politicsData from '../../public/data/politics.json';
import scienceData from '../../public/data/science.json';
import entertainmentData from '../../public/data/entertainment.json';
import educationData from '../../public/data/education.json';
import puertoRicoData from '../../public/data/puerto-rico.json';
import bancreditoData from '../../public/data/bancredito.json';

export const dynamic = 'force-static';

const allData = [
  { category: 'business', data: businessData },
  { category: 'technology', data: technologyData },
  { category: 'sports', data: sportsData },
  { category: 'health', data: healthData },
  { category: 'politics', data: politicsData },
  { category: 'science', data: scienceData },
  { category: 'entertainment', data: entertainmentData },
  { category: 'education', data: educationData },
  { category: 'puerto-rico', data: puertoRicoData },
  { category: 'bancredito', data: bancreditoData },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nystatenews.org';

  // Base routes
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...allData.map(({ category }) => ({
      url: `${baseUrl}/${category}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      // Boost the Bancredito priority specifically for SEO
      priority: category === 'bancredito' ? 1 : 0.8,
    })),
  ];

  // Article routes
  const articleRoutes = allData.flatMap(({ category, data }) =>
    data.map((article: any) => ({
      url: `${baseUrl}/${category}/${article.slug}`,
      lastModified: !isNaN(new Date(article.date || '').getTime()) ? new Date(article.date) : new Date(),
      changeFrequency: 'weekly' as const,
      // Deep boost for bancredito individual articles
      priority: category === 'bancredito' ? 0.9 : 0.6,
    }))
  );

  return [...routes, ...articleRoutes];
}
