import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ownership & Funding | NY State News",
  description: "Learn about the ownership structure, funding model, and editorial independence safeguards of NY State News.",
  alternates: {
    canonical: "https://www.nystatenews.org/ownership-funding",
  },
};

export default function OwnershipFundingPage() {
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
              Ownership & Funding
            </h1>
          </div>
        </header>

        <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <article className="py-5">
            {/* Ownership */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                1. Ownership Structure
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
                  NY State News is owned and operated by <strong>NY State News Media Group LLC</strong>, an independent digital publishing company headquartered in New York. 
                </p>
                <p className="mb-4">
                  We are a privately held entity, founded with the belief that accessible, consolidated, and objective news is crucial for public awareness. We are not owned, operated, or controlled by any government body, state agency, political party, or advocacy group. 
                </p>
                <p>
                  Our management team consists of media professionals who oversee the daily business operations separately from the newsroom staff.
                </p>
              </div>
            </section>

            {/* Funding Model */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                2. Our Funding Model
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
                  To keep our platform sustainable and compensate our editorial team, we generate revenue through several commercial channels:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    <strong>Digital Display Advertising:</strong> Programmatic display ads served via third-party ad networks. These are automatically displayed to users based on generic criteria and placement models.
                  </li>
                  <li className="mb-3">
                    <strong>Sponsored content:</strong> Clearly marked commercial articles or features funded by third-party brands. These sponsorships always comply with our strict <a href="/advertising-sponsored-policy" style={{ color: 'black', textDecoration: 'underline' }}>Advertising & Sponsored Policy</a>.
                  </li>
                  <li className="mb-3">
                    <strong>Reader Support:</strong> Optional micro-donations and subscriptions from readers who support independent journalism.
                  </li>
                </ul>
              </div>
            </section>

            {/* Editorial Safeguards */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                3. Editorial Independence Safeguards
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
                  Financial contributions, advertisements, and partnerships are essential to keep NY State News running. However, they carry absolutely no influence over what stories we cover, how we report them, or the editorial opinions we publish.
                </p>
                <p className="mb-4">
                  Our editors and writers work in a siloed newsroom environment. They do not know which advertisers have active campaigns on our site, and they are prohibited from taking instructions or suggestions from corporate sponsors.
                </p>
                <p>
                  Should any reporting concern our parent company, our investors, or our major advertisers, we will disclose that relationship clearly in the body of the article to ensure absolute transparency.
                </p>
              </div>
            </section>

            {/* Transparency & Governance */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                4. Corporate Transparency
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
                  We are committed to operating in plain sight. We publish corporate structure changes, legal filings, and ownership updates on this page as they occur.
                </p>
                <p>
                  For any corporate inquiries, partnership proposals, or legal requests regarding our publishing entity, please reach out to us via our <a href="/contact" style={{ color: 'black', textDecoration: 'underline' }}>Contact Us</a> page or email <strong>corporate@nystatenews.org</strong>.
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
                General Corporate Contact
              </h2>
              <p
                className="mb-4 mx-auto"
                style={{
                  fontSize: '1.125rem',
                  color: '#666',
                  maxWidth: '500px',
                }}
              >
                For business, investment, or legal inquiries regarding NY State News Media Group LLC, please contact us.
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
                Contact Corporate
              </a>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
