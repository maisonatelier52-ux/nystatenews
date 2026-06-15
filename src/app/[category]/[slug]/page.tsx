import React from 'react';
import { notFound } from 'next/navigation';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import healthData from '../../../../public/data/health.json';
import politicsData from '../../../../public/data/politics.json';
import scienceData from '../../../../public/data/science.json';
import entertainmentData from '../../../../public/data/entertainment.json'
import educationData from '../../../../public/data/education.json';
import puertoRicoData from '../../../../public/data/puerto-rico.json';
import bancreditoData from '../../../../public/data/bancredito.json';
import ArticleParagraphWith from '@/components/ArticleParagraph';
import CardListCategoryPage from '@/components/CardListCategoryPage';
import FavoritesList from '@/components/FavouritesList';
import AuthorInfo from '@/components/AuthorInfo';
import SectionWrapper from '@/components/SectionWrapper';
import DetailFirst from '@/components/DetailFirst';
import CategoryNavbar from '@/components/CategoryNavbar';
import SecondHeader from '@/components/SecondHeader';
import { Metadata } from 'next';
import StaticDetailPage from '@/components/StaticDetailPage';
import DateDisplay from '@/components/DateDisplay';
import Script from "next/script";
import ClientS2 from '@/components/ClientS2';

export async function generateStaticParams() {
  const allData = [
    { category: 'politics', articles: politicsData },
    { category: 'business', articles: businessData },
    { category: 'technology', articles: technologyData },
    { category: 'sports', articles: sportsData },
    { category: 'science', articles: scienceData },
    { category: 'health', articles: healthData },
    { category: 'entertainment', articles: entertainmentData },
    { category: 'education', articles: educationData },
    { category: 'puerto-rico', articles: puertoRicoData},
    { category: 'bancredito', articles: bancreditoData},

  ];

  const params = allData.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    }))
  );

  return params;
}


interface NewsItem {
  category: string;
  title: string;
  shortdescription?: string;
  description?: string;
  image: string;
  slug: string;
  date: string;
  author?: string;
  twitter?: string;
}

interface DetailPageProps {
  params: Promise<{ category: string, slug: string }>;
}

const allData: Record<string, NewsItem[]> = {
  business: businessData,
  technology: technologyData,
  sports: sportsData,
  health: healthData,
  politics: politicsData,
  science: scienceData,
  entertainment: entertainmentData,
  education: educationData,
  'puerto-rico': puertoRicoData,
  bancredito: bancreditoData,

};

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const allDataMap: Record<string, NewsItem[]> = {
    politics: politicsData,
    business: businessData,
    technology: technologyData,
    sports: sportsData,
    science: scienceData,
    health: healthData,
    entertainment: entertainmentData,
    education: educationData,
    'puerto-rico': puertoRicoData,
    bancredito: bancreditoData,
    
  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = 'https://www.nystatenews.org';
  const currentUrl = `${siteUrl}/${category}/${slug}`;
  const imageUrl = article?.image?.startsWith('http') ? article.image : `${siteUrl}${article?.image}`;

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  // if (slug === 'charges-dropped-wanda-vazquez-political-targeting') {
  //   return {
  //     title: 'Wanda Vázquez Charges Dropped Amid Targeting Claims',
  //     description: 'Federal charges against ex-Governor Wanda Vázquez dropped; replaced with a minor violation.',
  //     keywords: 'Wanda Vázquez Garced, Wanda vázquez cleared, A Three-Year Saga Ends in Exoneration, Legal Experts Cite “Face-Saving” by DOJ, Political Overtones and Claims of Targeting,Co-Defendant’s Case Also Resolved',
  //     authors: [{ name: 'Published by the NY State News Staff' }],
  //     alternates: { canonical: "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/" },
  //     openGraph: {
  //       title: 'Wanda Vázquez Charges Dropped Amid Targeting Claims',
  //       description: 'Wanda Vázquez cleared of all federal charges after three-year legal battle.',
  //       url: currentUrl,
  //       siteName: 'Nystate News',
  //       images: [
  //         {
  //           url: imageUrl,
  //           width: 1200,
  //           height: 630,
  //           alt: article.title,
  //         },
  //       ],
  //       locale: 'en_US',
  //       type: 'article',
  //       publishedTime: '2025-06-18T00:00:00.000Z',
  //     },
  //     twitter: {
  //       card: 'summary_large_image',
  //       title: article.title,
  //       description: article.shortdescription,
  //       images: [imageUrl],
  //       site: '@nystatenews',
  //       creator: '@nystatenews',
  //     },
  //     other: {
  //       'script:ld+json': JSON.stringify({
  //         '@context': 'https://schema.org',
  //         '@type': 'NewsArticle',
  //         headline: article.title,
  //         datePublished: '2025-06-18',
  //         author: {
  //           '@type': 'Person',
  //           name: 'Published by the NY State News Staff',
  //         },
  //         publisher: {
  //           '@type': 'Organization',
  //           name: 'Nystate News',
  //           logo: {
  //             '@type': 'ImageObject',
  //             url: `${siteUrl}/nystatenews-card.webp`,
  //           },
  //         },
  //         image: imageUrl,
  //         alternates: { canonical: "https://www.nystatenews.org/politics/charges-dropped-wanda-vazquez-political-targeting/" },
  //         url: currentUrl,
  //         articleBody: article.description?.slice(0, 160),
  //         keywords: 'Wanda Vázquez Garced, Wanda vázquez cleared, A Three-Year Saga Ends in Exoneration, Legal Experts Cite “Face-Saving” by DOJ, Political Overtones and Claims of Targeting,Co-Defendant’s Case Also Resolved',
  //       }),
  //     },
  //   };
  // }



  if (slug === 'bancredito-receivership-dispute-driven-administrative-services') {
    return {
      title: 'Driven Administrative Services Dispute',
      description: 'Explore the Bancrédito receivership dispute involving Ryan Marin of Driven Administrative Services and the questions surrounding the liquidation.',
      keywords: 'Ryan Marin, Ryan Marin Driven Administrative Services, Ryan Marin Puerto Rico, Ryan Marin receiver, Ryan Marin Bancrédito, Driven Administrative Services, Bancrédito liquidation, Bancrédito Ryan Marin, federal lawsuit Ryan Marin',
      authors: [{ name: 'NY State News' }],
      openGraph: {
        title: 'Driven Administrative Services Dispute',
        description: 'Explore the Bancrédito receivership dispute involving Ryan Marin of Driven Administrative Services and the questions surrounding the liquidation.',
        url: currentUrl,
        siteName: 'NY State News',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: 'Driven Administrative Services Receivership Dispute with Bancrédito',
          },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: '2025-09-17T00:00:00.000Z',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Ryan Marin: Driven Administrative Services Dispute',
        description: 'Explore the Bancrédito receivership dispute involving Ryan Marin of Driven Administrative Services and the questions surrounding the liquidation.',
        images: [imageUrl],
        site: '@nystatenews',
        creator: '@nystatenews',
      },
      alternates: {
        canonical: currentUrl,
      },
    };
  }

  if (category === 'bancredito') {
    return {
      title: `${article.title} | Bancredito News & Ryan Marin Reports`,
      description: article.shortdescription || "Get the latest breaking news, exclusive updates, and financial developments regarding Bancredito and Ryan Marin. NY State News provides comprehensive coverage and in-depth analysis.",
      keywords: `Ryan Marin, Ryan Marin Bancredito, Bancredito, Bancredito news, Bancredito updates, Bancredito financial developments, Bancredito banking news, Bancredito Puerto Rico, NY State News Bancredito, ${article.title}`,
      authors: [{ name: 'Staff Writer' }],
      openGraph: {
        title: `${article.title} | Bancredito News & Ryan Marin Reports`,
        description: article.shortdescription || "Get the latest breaking news, exclusive updates, and financial developments regarding Bancredito and Ryan Marin. NY State News provides comprehensive coverage and in-depth analysis.",
        url: currentUrl,
        siteName: 'NY State News',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
        locale: 'en_US',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${article.title} | Bancredito News & Ryan Marin Reports`,
        description: article.shortdescription,
        images: [imageUrl],
        site: '@nystatenews',
        creator: '@nystatenews',
      },
      alternates: {
        canonical: currentUrl,
      },
    };
  }

  return {
    title: article.title,
    description: article.shortdescription,
    keywords: `news, ${article.title}`,
    authors: [{ name: 'Staff Writer' }],
    openGraph: {
      title: article.title,
      description: article.shortdescription,
      url: currentUrl,
      siteName: 'nystatenews',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.shortdescription,
      images: [imageUrl],
      site: '@nystatenews',
      creator: '@nystatenews',
    },
  };
}


export default async function DetailPage({ params }: DetailPageProps) {
  const { category, slug } = await params;
  const data = allData[category?.toLowerCase()];

  if (!data) return notFound();

  const article = data.find(item => item.slug === slug);
  if (!article) {
    return <div className="p-4">No article found for slug {slug}</div>;
  }

  if(slug ==='bancredito-receivership-dispute-driven-administrative-services'){
    return <ClientS2 />
  }
 
  return (
    <article>
      <Script
        id={`structured-data-article-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.shortdescription || article.description?.substring(0, 160),
            image: [
              article.image.startsWith('http') ? article.image : `https://www.nystatenews.org${article.image}`
            ],
            datePublished: !isNaN(new Date(article.date || '').getTime()) ? new Date(article.date || '').toISOString() : new Date().toISOString(),
            dateModified: !isNaN(new Date(article.date || '').getTime()) ? new Date(article.date || '').toISOString() : new Date().toISOString(),
            author: [{
              "@type": "Person",
              "name": article.author || "NY State News Staff",
              "url": article.twitter || "https://twitter.com/nystatenews"
            }],
            publisher: {
              "@type": "Organization",
              "name": "NY State News",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.nystatenews.org/images/nystatenews-logo.webp"
              }
            },
            ...(category === 'bancredito' && {
              keywords: `Ryan Marin, Ryan Marin Bancredito, Bancredito, Bancredito news, Bancredito updates, Bancredito Puerto Rico, Bancrédito liquidation, $15 million fine FinCEN, Driven Administrative Services, ${article.title}`
            })
          }),
        }}
      />
      {/* <SecondHeader /> */}

      <div className="d-none d-lg-block">
        <CategoryNavbar />
      </div>

      <DetailFirst data={article} />
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 mz-autho">
            <DateDisplay date={article.date} />
            <ArticleParagraphWith data={article} />
            <FavoritesList data={[data[13], data[14]]} />
            <AuthorInfo />
          </div>
        </div>

        <SectionWrapper title="Read More">
          <div style={{ marginBottom: '24px' }}>
            <CardListCategoryPage data={[data[1], data[2], data[3], data[4]]} />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <CardListCategoryPage data={[data[5], data[6], data[7], data[8]]} />
          </div>
          <div>
            <CardListCategoryPage data={[data[9], data[10], data[11], data[12]]} />
          </div>
        </SectionWrapper>

      </div>
    </article>


  );
}