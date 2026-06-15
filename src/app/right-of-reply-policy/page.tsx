import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Right of Reply Policy | NY State News",
  description: "Read our Right of Reply Policy. Learn how individuals and organizations criticized in our reporting can submit responses or statements.",
  alternates: {
    canonical: "https://www.nystatenews.org/right-of-reply-policy",
  },
};

export default function RightOfReplyPolicyPage() {
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
              Right of Reply Policy
            </h1>
          </div>
        </header>

        <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <article className="py-5">
            {/* Philosophy */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Our Commitment to Fairness
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
                  At NY State News, we are committed to accuracy, fairness, and transparency in all our reporting. We recognize that journalism has a profound impact, and we strive to present balanced accounts of public events, debates, and controversies. 
                </p>
                <p>
                  As part of this commitment, we guarantee a Right of Reply to individuals, companies, or organizations that are subject to criticism, allegations of wrongdoing, or negative assertions within our articles.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                1. Who Qualifies for a Right of Reply?
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
                  A Right of Reply is generally granted to any person or entity that meets the following criteria:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    <strong>Directly Named or Identified:</strong> You must be explicitly named or clearly identifiable in the published article.
                  </li>
                  <li className="mb-3">
                    <strong>Subject to Negative Allegations:</strong> The article must contain serious allegations, criticism, or statements that could negatively impact your reputation, business, or personal standing.
                  </li>
                  <li className="mb-3">
                    <strong>Factually Challenged Claims:</strong> You wish to correct factual errors, present your side of the story, or provide context that was missing from the initial coverage.
                  </li>
                </ul>
              </div>
            </section>

            {/* Submission Process */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                2. How to Submit a Request
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
                  If you wish to invoke your Right of Reply, please send an official email to <strong>editorial@nystatenews.org</strong> with the subject line <strong>“Right of Reply Request: [Article Title]”</strong>. Your submission must include:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    A link to the specific article in question.
                  </li>
                  <li className="mb-3">
                    A precise description of the claims, quotes, or statements you dispute.
                  </li>
                  <li className="mb-3">
                    Your proposed reply statement (we recommend keeping statements under 400 words to ensure prompt publication).
                  </li>
                  <li className="mb-3">
                    Any documentation, public records, or factual evidence supporting your response.
                  </li>
                </ul>
              </div>
            </section>

            {/* Curation Standards */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                3. Editorial Standards for Replies
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
                  To maintain the integrity of our publication, we require all reply statements to adhere to standard guidelines. We reserve the right to reject, edit, or return a statement for revision if it:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    Contains libelous, defamatory, or abusive language.
                  </li>
                  <li className="mb-3">
                    Introduces topics completely unrelated to the original article.
                  </li>
                  <li className="mb-3">
                    Promotes commercial products, services, or websites (unless directly related to correcting a business accusation).
                  </li>
                  <li className="mb-3">
                    Is demonstrably untruthful or misleading.
                  </li>
                </ul>
              </div>
            </section>

            {/* Publication Format */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                4. How Replies are Published
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
                  Once a reply is reviewed and approved, our editorial team will update the original article as quickly as possible. The reply is typically integrated in one of the following ways:
                </p>
                <ul className="mb-4">
                  <li className="mb-3">
                    <strong>Text Update:</strong> Direct integration of your response statement within the relevant section of the article, clearly introducing it as your official statement.
                  </li>
                  <li className="mb-3">
                    <strong>Editor’s Note:</strong> A highlighted disclaimer at the top or bottom of the page linking to or quoting your response.
                  </li>
                  <li className="mb-3">
                    <strong>Separate Update:</strong> For complex or developing investigations, we may publish a follow-up story dedicated to presenting the new statement and counter-arguments.
                  </li>
                </ul>
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
                Editorial Desk Contact
              </h2>
              <p
                className="mb-4 mx-auto"
                style={{
                  fontSize: '1.125rem',
                  color: '#666',
                  maxWidth: '500px',
                }}
              >
                For editorial inquiries, corrections requests, or right of reply submissions, please contact our team.
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
                Contact Editors
              </a>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
