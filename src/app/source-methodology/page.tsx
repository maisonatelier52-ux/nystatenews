import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Source Methodology | NY State News",
  description: "Learn about the data sources, automated extraction systems, and editorial guidelines NY State News uses to provide reliable and objective news synthesis.",
  alternates: {
    canonical: "https://www.nystatenews.org/source-methodology",
  },
};

export default function SourceMethodologyPage() {
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
              Source Methodology
            </h1>
          </div>
        </header>

        <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <article className="py-5">
            {/* Core Philosophy */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Our Gathering Philosophy
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
                  At NY State News, our goal is to deliver a clear, consolidated view of key stories in politics, business, health, and beyond. Rather than operating purely as a traditional wire service, we utilize a hybrid model that combines automated data aggregation with thorough human editorial oversight. 
                </p>
                <p>
                  This document outlines our process for acquiring information, how our technology works, and the editorial safeguards we employ to ensure our reports are reliable, fair, and legally compliant.
                </p>
              </div>
            </section>

            {/* Data Acquisition & Sources */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                1. Where We Get Our Information
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
                  We rely on a wide range of public and professional sources to build our news feed:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    <strong>Syndicated Feeds:</strong> Standard RSS and Atom feeds from verified press agencies, local news outlets, and national broadcasters.
                  </li>
                  <li className="mb-3">
                    <strong>Official Announcements:</strong> Press releases, transcripts, and briefing documents from state houses, government bodies, and corporate news rooms.
                  </li>
                  <li className="mb-3">
                    <strong>Public Records & Legal Repositories:</strong> Regulatory filings, court dockets, legislative databases, and academic research papers.
                  </li>
                  <li className="mb-3">
                    <strong>Direct Submissions:</strong> Materials shared by industry experts, corporate representatives, and civic organizations through our secure contact channels.
                  </li>
                </ul>
              </div>
            </section>

            {/* Automated Extraction & Scraping */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                2. Automated Extraction and Aggregation
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
                  Our system checks our source list at regular intervals to capture new alerts. To do this responsibly, our scraping infrastructure is built around three core protocols:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    <strong>Respecting Robots.txt:</strong> We respect all instruction policies defined in websites' <code>robots.txt</code> files, never accessing paths that are restricted.
                  </li>
                  <li className="mb-3">
                    <strong>Rate Limiting:</strong> To prevent server overload, our crawlers limit request frequency. We pace calls to avoid impacting the speed or availability of source servers.
                  </li>
                  <li className="mb-3">
                    <strong>Deduplication and Parsing:</strong> Once raw text is extracted, our system parses dates, categories, and titles. It clusters similar stories, filtering out spam or identical reports so editors can work from unique content pools.
                  </li>
                </ul>
              </div>
            </section>

            {/* Editorial Review & Integrity */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                3. Editorial Integrity and Curation
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
                  Automation is only the first step. No story is published on NY State News solely by an algorithm. Every aggregated draft goes to our editorial desk for verification and writing:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    <strong>Fact Verification:</strong> Our editors crosscheck quotes and figures against secondary sources. If a claim cannot be verified independently, it is excluded or explicitly marked as unconfirmed.
                  </li>
                  <li className="mb-3">
                    <strong>Synthesis and Original Writing:</strong> Instead of copy-pasting, we synthesize the information, rewriting articles for clarity, conciseness, and neutrality. We focus on providing the context our readers need.
                  </li>
                  <li className="mb-3">
                    <strong>Attribution:</strong> We always credit the primary source of the original reporting (e.g., specific journalists, news agencies, or official records) within the body of our articles.
                  </li>
                  <li className="mb-3">
                    <strong>Compliance:</strong> We operate under standard fair use guidelines, ensuring our condensed reports do not infringe on copyrighted material.
                  </li>
                </ul>
              </div>
            </section>

            {/* Corrections & Accountability */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                4. Corrections & Accountability
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
                  We strive for complete accuracy, but if an error occurs, we fix it quickly. We follow a strict corrections policy where any modified data is transparently noted at the top of the article.
                </p>
                <p>
                  To request a correction or report a source issue, please visit our <a href="/corrections" style={{ color: 'black', textDecoration: 'underline' }}>Corrections Policy</a> or contact our team directly through our <a href="/contact" style={{ color: 'black', textDecoration: 'underline' }}>Contact Us</a> page.
                </p>
              </div>
            </section>

            {/* Publisher Footer */}
            <section
              className="text-center pt-5 mt-5"
              style={{ borderTop: '2px solid #000' }}
            >
              <h2
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: 400 }}
              >
                Need to Reach Our Editorial Desk?
              </h2>
              <p
                className="mb-4 mx-auto"
                style={{
                  fontSize: '1.125rem',
                  color: '#666',
                  maxWidth: '500px',
                }}
              >
                For questions, licensing details, or feedback about our scraping standards, feel free to get in touch.
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
                Contact Us
              </a>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
