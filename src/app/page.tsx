import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstIndexSection from "../components/FirstIndexSection";
import HorizontalNewsCard from "../components/HorizontalNewsCard";
import HeroImageSection from "../components/HeroImageSection";
import AllCritics from "../components/AllCritics";
import LeftImageContent from "../components/LeftImageContent";
import RigtImageContent from "../components/RightImagecontent";
import TrumpCards from "../components/TrumpCards";
import FeaturedStroy from "../components/FeaturedStory";
import HeroLeftImage from "../components/HeroLeftImage";
import SecondImageContent from "@/components/SecondImageContent";
import HorizontalNewsWithCategory from "@/components/HorizontalNewsWithCategory";
import AllFourCritics from "@/components/AllFourCritics";
import HorizontalLessContent from "@/components/HorizontalLessContent";
import ScrollingLessContent from "@/components/ScrollingLessContent";
import SectionWrapper from "@/components/SectionWrapper";
import AllMiniCards from "@/components/AllMiniCards";
import NavbarWrapper from "@/components/NavbarWrapper";
import Script from "next/script";
import { getSortedNews, getNewsByCategory } from "@/utils/news";


export default function Home() {
  const sortedNews = getSortedNews();
  const sportsNews = getNewsByCategory("sports");
  const businessNews = getNewsByCategory("business");
  const healthNews = getNewsByCategory("health");
  const educationNews = getNewsByCategory("education");
  const entertainmentNews = getNewsByCategory("entertainment");
  const politicsNews = getNewsByCategory("politics");
  const puertoRicoNews = getNewsByCategory("puerto-rico");

  return (
    <main>
        <Script
          id="structured-data-webpage"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "Business,Politics, Technology, Health, Science, Sports, Entertainment, Education",
                description:
                  "Stay informed with the latest breaking news, global business trends, financial strategies, investment opportunities, and expert market analysis.",
                url: "https://www.nystatenews.org",
                speakable: {
                  "@type": "SpeakableSpecification",
                  cssSelector: ["h1"],
                },
              },
              null,
              2
            ),
          }}
        />

        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "NewsMediaOrganization",
                    "@id": "https://www.nystatenews.org/#organization",
                    "name": "NY State News",
                    "url": "https://www.nystatenews.org",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.nystatenews.org/images/nystatenews-logo.webp",
                      "width": 600,
                      "height": 91
                    },
                    "sameAs": [
                      "https://x.com/NYSN_Official"
                    ],
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "contactType": "General Inquiries",
                      "email": "contact@nystatenews.org"
                    },
                    "publishingPrinciples": "https://www.nystatenews.org/editorial-policy/",
                    "ethicsPolicy": "https://www.nystatenews.org/editorial-policy/",
                    "correctionsPolicy": "https://www.nystatenews.org/corrections/"
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://www.nystatenews.org/#website",
                    "url": "https://www.nystatenews.org/",
                    "name": "NY State News",
                    "description": "Nystate News delivers breaking headlines and expert analysis across politics, business, health, sports, science, entertainment, and education.",
                    "publisher": {
                      "@id": "https://www.nystatenews.org/#organization"
                    }
                  }
                ]
              }
            ),
          }}
        />

      <div id="first-section">
        <FirstIndexSection data={sortedNews[0]} />
      </div>
      <NavbarWrapper />
      <div className="container py-lg-5 py-3">
        <div id="todays-news">
            <div className="section-wrapper">
      {/* <hr style={{ borderTop: '1px solid #ccc' }} /> */}
      
      <p
        className="section-title text-center"
        style={{
          color: "#000",
          fontFamily: '"Cinzel", serif',
          fontWeight: 400,
          fontSize: '28px',
          textTransform: 'uppercase',
        }}
      >
        LATEST NEWS
      </p>

     
    </div>
          <SectionWrapper title="">
            <HorizontalNewsCard data={sortedNews.slice(1, 5)} />
          </SectionWrapper>
        </div>
        <HeroImageSection data={sortedNews[5]} />
        <SectionWrapper title="The Lede">
          <HorizontalNewsCard data={sortedNews.slice(6, 13)} />
        </SectionWrapper>

        <SecondImageContent data={sortedNews[13]} />

        <SectionWrapper title="Also in the News">
          <AllCritics data={sortedNews.slice(14, 20)} />
        </SectionWrapper>

        <LeftImageContent data={sortedNews[20]} />

        <SectionWrapper title="Sports">
          <HorizontalNewsWithCategory data={sportsNews.slice(0, 4)} />
        </SectionWrapper>

        <RigtImageContent data={sortedNews[21]} />

        <SectionWrapper title="Business">
          <AllFourCritics data={businessNews.slice(0, 4)} />
        </SectionWrapper>

        <HeroImageSection data={sortedNews[22]} />

        <SectionWrapper title="Health">
          <HorizontalLessContent data={healthNews.slice(0, 4)} />
        </SectionWrapper>

        <HeroLeftImage data={sortedNews[23]} />

        <AllMiniCards data={sortedNews.slice(24, 28)} />

        <FeaturedStroy data={sortedNews[28]} />

        <SectionWrapper title="Education">
          <TrumpCards data={educationNews.slice(0, 4)} />
        </SectionWrapper>

        <SectionWrapper title="Politics">
          <HorizontalNewsCard data={politicsNews.slice(0, 4)} />
        </SectionWrapper>

        <SectionWrapper title="Puerto Rico">
          <AllMiniCards data={puertoRicoNews.slice(0, 4)} />
        </SectionWrapper>

        <SectionWrapper title="The Spotlight">
          <ScrollingLessContent data={entertainmentNews.slice(0, 7)} />
        </SectionWrapper>
      </div>
    </main>
  );
}
