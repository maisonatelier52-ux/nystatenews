import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.nystatenews.org';
  const dataDir = path.join(process.cwd(), 'public', 'data');
  const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json') && file !== 'author.json' && file !== 'authour.json');

  let allArticles: any[] = [];

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    try {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      const articles = JSON.parse(fileData);
      if (Array.isArray(articles)) {
        allArticles = [...allArticles, ...articles];
      }
    } catch (e) {
      console.error(`Error parsing ${file}`, e);
    }
  }

  // Parse dates robustly
  const parseDate = (dateString: string) => {
    if (!dateString) return new Date();
    const cleanDateString = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const parsedDate = new Date(cleanDateString);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
    return new Date();
  };

  allArticles.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  // Limit to latest 50 articles
  const feedArticles = allArticles.slice(0, 50);

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nystate News</title>
    <link>${baseUrl}</link>
    <description>Nystate News delivers breaking headlines and expert analysis across politics, business, health, sports, science, entertainment, and education.</description>
    <language>en</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${feedArticles.map((article: any) => `
      <item>
        <title><![CDATA[${article.title || ''}]]></title>
        <link>${baseUrl}/${article.category}/${article.slug}</link>
        <guid isPermaLink="true">${baseUrl}/${article.category}/${article.slug}</guid>
        <description><![CDATA[${article.shortdescription || article.description || ''}]]></description>
        <pubDate>${parseDate(article.date).toUTCString()}</pubDate>
        ${article.author ? `<author><![CDATA[${article.author}]]></author>` : ''}
        ${article.image ? `<enclosure url="${baseUrl}${article.image}" type="image/webp"/>` : ''}
      </item>
    `).join('')}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
