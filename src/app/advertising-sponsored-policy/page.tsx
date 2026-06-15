import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Advertising & Sponsored Policy | NY State News",
  description: "Read our advertising and sponsored content policy. Learn how we maintain a strict separation between editorial integrity and commercial advertising.",
  alternates: {
    canonical: "https://www.nystatenews.org/advertising-sponsored-policy",
  },
};

export default function AdvertisingSponsoredPolicyPage() {
  return (
    <>
      <div className="d-none d-lg-block">
        <CategoryNavbar />
      </div>

      <div
        className="bg-white text-dark"
        style={{
          fontFamily: 'Georgia, Times New Roman, serif',
          lineHeight: '1.6',
          padding: '70px 0',
        }}
      >
        <header
          className="text-center border-bottom bg-light"
          style={{ padding: '120px 0 80px' }}
        >
          <div className="mx-auto px-3" style={{ maxWidth: '720px' }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: '1.1',
                marginBottom: '24px',
              }}
            >
              Advertising & Sponsored Policy
            </h1>
          </div>
        </header>

        <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <article className="py-5">
            {/* Core Commitment */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                1. Editorial Independence
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  At NY State News, our primary allegiance is to our readers. We believe that credible journalism requires absolute editorial independence. For this reason, we maintain a strict and unyielding separation between our editorial team and our advertising partners.
                </p>
                <p className="mb-4">
                  Our journalists, editors, and researchers write and publish without any commercial influence. No advertiser, sponsor, or corporate partner has the right to review, edit, or veto any editorial content before or after publication. 
                </p>
                <p>
                  Buying advertising on NY State News does not purchase favorable coverage, nor does it protect a company or individual from critical reporting.
                </p>
              </div>
            </section>

            {/* Sponsored Content & Labelling */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                2. Sponsored Content and Native Advertising
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  We occasionally partner with commercial brands to publish sponsored articles, native advertisements, or promoted features. To ensure our readers are never misled, we follow strict labelling rules:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    <strong>Clear Disclosures:</strong> Any article or section that is funded by a third party will be prominently labeled as <strong>“Sponsored Content”</strong>, <strong>“Paid Promotion”</strong>, or <strong>“Advertorial”</strong> at the top of the page.
                  </li>
                  <li className="mb-3">
                    <strong>Sponsor Identification:</strong> We will clearly display the name and logo of the sponsor responsible for the content, ensuring readers know exactly who funded the publication.
                  </li>
                  <li className="mb-3">
                    <strong>Distinct Visual Cues:</strong> Sponsored content may use slightly different design elements, borders, or background shading to visually differentiate it from standard news articles.
                  </li>
                </ul>
              </div>
            </section>

            {/* Advertising Acceptance Standards */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                3. Advertising Acceptance Standards
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  We reserve the right to refuse or remove any advertisement that we deem harmful to our readers, incompatible with our values, or damaging to our brand. All advertisements displayed on our site must:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    Be honest and truthful, avoiding deceptive or exaggerated claims.
                  </li>
                  <li className="mb-3">
                    Clearly state what product or service is being offered.
                  </li>
                  <li className="mb-3">
                    Respect user experience, avoiding intrusive pop-ups, malware, auto-playing audio, or scripts that severely degrade website performance.
                  </li>
                </ul>
              </div>
            </section>

            {/* Prohibited Advertising Categories */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                4. Prohibited Ad Categories
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  We strictly prohibit advertisements for products, services, or campaigns that fall into the following categories:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    <strong>Illegal Products:</strong> Any product, service, or activity that is illegal under federal or state law.
                  </li>
                  <li className="mb-3">
                    <strong>Deceptive Financial Schemes:</strong> Get-rich-quick schemes, predatory lending, unverified cryptocurrency sales, or fraudulent financial advice.
                  </li>
                  <li className="mb-3">
                    <strong>Harmful Products:</strong> Tobacco, e-cigarettes, unregistered pharmaceuticals, illicit drugs, or weapons.
                  </li>
                  <li className="mb-3">
                    <strong>Hate Speech & Discrimination:</strong> Content that promotes violence, harassment, or discrimination based on race, gender, religion, nationality, disability, or sexual orientation.
                  </li>
                  <li className="mb-3">
                    <strong>Adult Content:</strong> Pornography, sexually explicit services, or highly suggestive imagery.
                  </li>
                </ul>
              </div>
            </section>

            {/* Ad Privacy and Tracking */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                5. Ad Privacy and Tracking
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  We work with third-party ad networks to display programmatic advertisements. These networks may use cookies or device identifiers to personalize ads. We require our partners to respect user privacy settings, including Do Not Track (DNT) signals and state-specific privacy laws.
                </p>
                <p>
                  To learn more about how we manage tracking and data collection, please review our <a href="/privacy-policy" style={{ color: 'black', textDecoration: 'underline' }}>Privacy Policy</a>.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section
              className="text-center pt-5 mt-5"
              style={{ borderTop: '2px solid #000' }}
            >
              <h2
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: 400 }}
              >
                Advertising Inquiries
              </h2>
              <p
                className="mb-4 mx-auto"
                style={{
                  fontSize: '1.125rem',
                  color: '#666',
                  maxWidth: '500px',
                }}
              >
                For questions regarding advertising placement, sponsored partnerships, or our compliance guidelines, please contact our advertising team.
              </p>
              <a
                href="/contact"
                style={{
                  display: 'inline-block',
                  padding: '12px 28px',
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                  border: '2px solid #1a1a1a',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                Get In Touch
              </a>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
