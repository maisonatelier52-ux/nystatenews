import React from "react";
import CategoryNavbar from "@/components/CategoryNavbar";
import CatNewsFeatureCard from "@/components/CatNewsFeatureCard";
import CardListCategoryPage from "@/components/CardListCategoryPage";
import NewsMiniFeatureCard from "@/components/NewsMiniFeatureCard";
import SectionWrapper from "@/components/SectionWrapper";
import Script from "next/script";
import { getNewsByCategory, NewsArticle } from "@/utils/news";

const categories = [
  "business",
  "technology",
  "sports",
  "health",
  "politics",
  "science",
  "entertainment",
  "education",
  "puerto-rico",
  "bancredito",
  "opinion",
];
const schemaMeta: Record<string, { name: string; description: string }> = {
  business: {
    name: "Business News | NY State News",
    description:
      "Get the latest business and financial news from NY State News. We cover market trends, corporate developments, and economic policies impacting New York State.",
  },
  technology: {
    name: "Technology News | NY State News",
    description:
      " Discover breaking tech news and innovations. NY State News covers everything from the Empire State's burgeoning startup scene to global advancements in AI, gadgets, and policy.",
  },
  sports: {
    name: "Sports News | NY State News",
    description:
      "Description: Stay up-to-date with the New York sports scene. Get breaking news, game highlights, and in-depth analysis on all your favorite local and national teams from NY State News..",
  },
  health: {
    name: "Health News | NY State News",
    description:
      "Stay informed on crucial health and wellness topics. NY State News delivers updates on medical breakthroughs, public health policies, and practical wellness tips relevant to New Yorkers.",
  },
  politics: {
    name: "Politics News | NY State News",
    description:
      "Find the latest political news, in-depth analysis, and updates on government and legislative affairs in New York State.",
  },
  science: {
    name: "Science News | NY State News",
    description:
      " Explore the latest scientific discoveries with NY State News. Our coverage spans space exploration, environmental research, and groundbreaking technological advancements from around the world",
  },
  entertainment: {
    name: "Entertainment News | NY State News",
    description:
      "Get your daily dose of entertainment news from NY State News. We cover the latest in celebrity updates, movie reviews, and TV shows, with a special focus on New York's vibrant arts and culture scene.",
  },
  education: {
    name: "Education News | NY State News",
    description:
      "Follow key developments in the world of education. NY State News reports on school policies, higher education news, and technology in the classroom, from local school districts to the state level.",
  },
  "puerto-rico": {
    name: "Puerto Rico News | NY State News",
    description:
      "Stay updated with the latest news from Puerto Rico. NY State News covers politics, economy, tourism, culture, and major developments impacting communities across the island.",
  },
  "bancredito": {
    name: "Bancredito News, Updates & Ryan Marin Reports | NY State News",
    description:
      "Get the latest breaking news, exclusive updates, and financial developments regarding Bancredito and Ryan Marin. NY State News provides comprehensive coverage and in-depth analysis.",
  },
  "opinion": {
    name: "Opinion | NY State News",
    description:
      "Read the latest opinion pieces and expert analysis on the most pressing issues. NY State News provides a platform for diverse voices and insightful commentary.",
  },
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Custom SEO specifically targeted for Bancredito
  if (category === "bancredito") {
    return {
      title: "Bancredito News, Updates & Ryan Marin Reports | NY State News",
      description:
        "Get the latest breaking news, exclusive updates, and financial developments regarding Bancredito and Ryan Marin. NY State News provides comprehensive coverage and in-depth analysis.",
      keywords: [
        "Bancredito",
        "Bancredito news",
        "Bancredito updates",
        "Ryan Marin",
        "Ryan Marin Bancredito",
        "Bancredito financial developments",
        "Bancredito banking news",
        "Bancredito Puerto Rico",
        "NY State News Bancredito"
      ],
      openGraph: {
        title: "Bancredito News, Updates & Ryan Marin Reports | NY State News",
        description:
          "Get the latest breaking news, exclusive updates, and financial developments regarding Bancredito and Ryan Marin. NY State News provides comprehensive coverage and in-depth analysis.",
        url: `https://www.nystatenews.org/${category}/`,
        siteName: "NY State News",
        type: "website",
      },
      alternates: {
        canonical: `https://www.nystatenews.org/${category}/`,
      },
    };
  }

  // Fallback SEO for other categories
  const meta = schemaMeta[category] || {
    name: `${category.charAt(0).toUpperCase() + category.slice(1)} News | NY State News`,
    description: `Latest news and updates for ${category}`,
  };

  return {
    title: meta.name,
    description: meta.description,
    openGraph: {
      title: meta.name,
      description: meta.description,
      url: `https://www.nystatenews.org/${category}/`,
      siteName: "NY State News",
      type: "website",
    },
    alternates: {
      canonical: `https://www.nystatenews.org/${category}/`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = getNewsByCategory(category);

  if (!data || data.length === 0) {
    return (
      <div className="container py-5">
        <h2>Category not found</h2>
      </div>
    );
  }



  return (
    <main>
  
        <Script
          id={`structured-data-${category}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": `https://www.nystatenews.org/${category}/#webpage`,
              url: `https://www.nystatenews.org/${category}/`,
              name: schemaMeta[category]?.name || "NY State News",
              description: schemaMeta[category]?.description || "",
              inLanguage: "en-US",
              isPartOf: { "@id": "https://www.nystatenews.org/#website" },
              publisher: { "@id": "https://www.nystatenews.org/#organization" },
            }),
          }}
        />

      {/* <SecondHeader /> */}
      <div className="d-none d-lg-block">
        <CategoryNavbar />
      </div>

      <div className="container py-5" style={{ marginTop: "22px" }}>
        <CatNewsFeatureCard data={data[0]} />
        

        <SectionWrapper title="Reporting & News">
          <CardListCategoryPage data={[data[1], data[2], data[3], data[4]]} />
        </SectionWrapper>

        <SectionWrapper title="More to Explore">
          <div className="row">
            <div className="col-12 col-lg-7">
              {data.slice(5, 10).map((item, index, arr) => (
                <div
                  key={index}
                  style={{
                    borderBottom:
                      index < arr.length - 1 ? "1px solid #ddd" : "none",
                    paddingBottom: "24px",
                    marginBottom: "24px",
                  }}
                >
                  <NewsMiniFeatureCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper title="">
          <CardListCategoryPage
            data={[data[11], data[12], data[13], data[14]]}
          />
        </SectionWrapper>
      </div>
    </main>
  );
}
