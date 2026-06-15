import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Legal | NY State News",
  description: "Read the official legal, copyright information, and legal overview for NY State News.",
  alternates: {
    canonical: "https://www.nystatenews.org/legal",
  },
};

export default function LegalPage() {
  return (
    <>
      <div className="d-none d-lg-block">
        <CategoryNavbar />
      </div>

      <div
        className="bg-white text-dark"
        style={{
          fontFamily: 'Georgia, Times New Roman, serif',
          lineHeight: '1.7',
          padding: '70px 0',
        }}
      >
        <header
          className="text-center border-bottom bg-light"
          style={{ padding: '120px 0 80px' }}
        >
          <div className="mx-auto px-3" style={{ maxWidth: '800px' }}>
            <h1
              id="legal-notice-heading"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: '1.1',
                marginBottom: '24px',
              }}
            >
              Legal
            </h1>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#555',
                fontStyle: 'italic',
                maxWidth: '650px',
                margin: '0 auto',
              }}
            >
              Overview of legal and compliance topics relevant to NY State News publishing, reader use, and formal requests.
            </p>
          </div>
        </header>

        <main className="mx-auto px-3" style={{ maxWidth: '800px' }}>
          <article className="py-5">
            {/* Overview */}
            <section className="mb-5" id="legal-overview">
              <div
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  This page provides a plain-language overview of legal and compliance topics relevant to NY State News's publishing, reader use of site content, complaints, permissions, and formal requests.
                </p>
                <p className="mb-4">
                  The website is owned and operated by the legal entity <strong>NY State News Media Group LLC</strong>. By accessing or using our services, you acknowledge the guidelines and policies detailed below.
                </p>
              </div>
            </section>

            {/* Informational Use */}
            <section className="mb-5" id="informational-use">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '1.75rem', fontWeight: 400 }}
              >
                Informational Use of NY State News Content
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  NY State News publishes journalism, analysis, and explanatory material for informational purposes. Articles are edited to newsroom standards, but they should not be treated as legal, financial, tax, medical, or other professional advice tailored to an individual reader's situation.
                </p>
                <p className="mb-4">
                  Where a story touches legal, regulatory, or financial matters, NY State News aims to use precise sourcing and bounded language rather than sweeping implication. Readers remain responsible for seeking professional advice when they need it.
                </p>
              </div>
            </section>

            {/* Copyright, quotation, and reuse */}
            <section className="mb-5" id="copyright-and-reuse">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '1.75rem', fontWeight: 400 }}
              >
                Copyright, Quotation, and Reuse
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  Readers may link to NY State News reporting and may quote brief excerpts with clear attribution where applicable law permits. Republishing full articles, bulk reproduction, commercial reuse, scraping for republication, or systematic copying requires permission unless a separate license or legal exception applies.
                </p>
                <p className="mb-4">
                  If you want to syndicate, reproduce, translate, archive commercially, or otherwise reuse substantial NY State News content, contact the newsroom before doing so.
                </p>
              </div>
            </section>

            {/* Complaints */}
            <section className="mb-5" id="complaints-handling">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '1.75rem', fontWeight: 400 }}
              >
                Complaints About Accuracy, Rights, or Fairness
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  If you believe a NY State News article contains a material factual error, omits critical context, infringes rights, or raises a serious legal concern, contact the newsroom promptly with the specific URL, the exact material at issue, the basis for your concern, and supporting documentation where available.
                </p>
                <p className="mb-4">
                  Different complaints may be handled under different newsroom processes. A factual dispute may be reviewed under the corrections or right-of-reply process, while a copyright, privacy, or other rights complaint may require separate review.
                </p>
              </div>
            </section>

            {/* What to include */}
            <section className="mb-5" id="request-requirements">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '1.75rem', fontWeight: 400 }}
              >
                What to Include in a Formal Request
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  color: '#333',
                }}
              >
                <p className="mb-4">
                  To help our team investigate and respond efficiently, please ensure all formal requests or copyright claims include:
                </p>
                <ul className="mb-4" style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li className="mb-2">The URL or headline of the content at issue.</li>
                  <li className="mb-2">A clear description of the statement, image, video, or other material you are challenging.</li>
                  <li className="mb-2">The legal or factual basis for the request, including supporting documents where relevant.</li>
                  <li className="mb-2">Your name, organization if applicable, and a reliable contact method for follow-up.</li>
                  <li className="mb-2">If you are acting on behalf of someone else, a brief statement of your authority to do so.</li>
                </ul>
              </div>
            </section>

            {/* Removal & restriction */}
            <section className="mb-5" id="removal-requests">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '1.75rem', fontWeight: 400 }}
              >
                Removal, Restriction, and Update Requests
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  NY State News reviews serious requests for correction, clarification, update, removal, or restricted display. Submission of a request does not by itself guarantee removal of accurate reporting or immediate depublication.
                </p>
                <p className="mb-4">
                  Our standard is to evaluate the request against the public record, editorial standards, applicable law, and the public interest. In some cases, the appropriate response may be a correction, clarification, update note, or follow-up article rather than removal.
                </p>
              </div>
            </section>

            {/* Third-party material */}
            <section className="mb-5" id="third-party-links">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '1.75rem', fontWeight: 400 }}
              >
                Links to Third-Party Material
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  NY State News may link to third-party sites, official records, social platforms, public databases, and outside documents for sourcing and reader context. Those third-party properties are governed by their own terms, policies, and accuracy practices.
                </p>
                <p className="mb-4">
                  A link to a third-party source does not necessarily mean NY State News endorses every statement or policy on that external site.
                </p>
              </div>
            </section>

            {/* Formal notices & requests */}
            <section className="mb-5" id="formal-notices">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '1.75rem', fontWeight: 400 }}
              >
                Formal Notices and Requests
              </h2>
              <div
                style={{
                  fontSize: '1.125rem',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                <p className="mb-4">
                  For legal , permissions questions, rights complaints, or formal requests related to published content, contact the newsroom directly so the request can be routed to the appropriate reviewer.
                </p>
                <p className="mb-4">
                  At the time of this update, NY State News handles public-facing legal and policy correspondence through the published newsroom contact channels and forms on this site. We do not maintain dedicated physical mailing points or individual public legal email addresses on this page to prevent automated harvesting.
                </p>
              </div>
            </section>

            {/* Legal Contact */}
            <section
              className="text-center pt-5 mt-5"
              style={{ borderTop: '2px solid #000' }}
              id="legal-contact-section"
            >
              <h2
                className="mb-3"
                style={{ fontSize: '1.5rem', fontWeight: 400 }}
              >
                Newsroom Contact
              </h2>
              <p
                className="mb-4 mx-auto"
                style={{
                  fontSize: '1.125rem',
                  color: '#666',
                  maxWidth: '500px',
                }}
              >
                For official inquiries, copyright matters, or permissions requests, please contact our team through the standard newsroom channel.
              </p>
              <a
                href="/contact"
                id="contact-legal-button"
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
                Contact Newsroom
              </a>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
