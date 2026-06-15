import CategoryNavbar from '@/components/CategoryNavbar';
import React from 'react';

export default function PrivacyPolicyPage() {
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
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: '1.1',
              }}
            >
              Privacy Policy
            </h1>
            {/* <p className="mt-3 text-muted" style={{ fontSize: '1rem' }}>
              Effective Date: [Insert Date]
            </p> */}
          </div>
        </header>

        <main className="mx-auto px-3" style={{ maxWidth: '720px' }}>
          <article className="py-5">
            {/* Intro */}
            <section className="mb-5">
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Ny Statenews values reader trust. We collect only limited information necessary to operate our
                newsroom, communicate with readers, and improve our journalism. This policy explains what we collect,
                why we collect it, and how we protect it.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Information We Collect
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                  marginBottom: '1.5rem',
                }}
              >
                When you visit our website, basic technical data such as pages viewed, device type, and browser
                information may be collected automatically. This information helps us understand readership patterns and
                improve site performance.
              </p>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                  marginBottom: '1.5rem',
                }}
              >
                If you contact us directly — for tips, corrections, or inquiries — we collect only the information you choose
                to provide, such as your name and email address.
              </p>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                We do not collect unnecessary personal data, and we do not sell or trade user information.
              </p>
            </section>

            {/* How Information Is Used */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                How Information Is Used
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                  marginBottom: '1.5rem',
                }}
              >
                We use the information we collect to keep the website operating smoothly and securely, understand which stories resonate with readers, respond to messages, tips, or correction requests, and provide updates when readers request them.
              </p>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                We do not use personal data for advertising sales, profiling, or promotional targeting.
              </p>
            </section>

            {/* Cookies and Analytics */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Cookies and Analytics
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                  marginBottom: '1.5rem',
                }}
              >
                We use cookies and analytics tools to understand how readers interact with our content. You may disable
                cookies in your browser without affecting access to our reporting.
              </p>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                Third-party analytics services may process anonymized data under their own privacy policies.
              </p>
            </section>

            {/* Your Rights and Choices */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Your Rights and Choices
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                  marginBottom: '1.5rem',
                }}
              >
                Depending on your jurisdiction, you may have rights to access, correct, or request deletion of personal
                data. Requests can be submitted using the contact below.
              </p>
              <div className="d-flex align-items-center mt-3" style={{ fontSize: '1.125rem', color: '#333' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope me-2" viewBox="0 0 16 16" style={{ color: '#2f2f2f' }}>
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <a href="mailto:editorial@nystatenews.org" className="text-dark text-decoration-none fw-bold">
                  editorial@nystatenews.org
                </a>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-5">
              <h2
                className="pb-3 border-bottom mb-4"
                style={{ fontSize: '2rem', fontWeight: 400 }}
              >
                Data Protection
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: '#333',
                  textAlign: 'justify',
                }}
              >
                We take reasonable technical and organizational measures to protect information from unauthorized
                access. Because we limit the data we collect, we also limit exposure and risk.
              </p>
            </section>

            {/* Last Updated */}
            <div className="border-top pt-4 mt-5 text-muted text-center" style={{ fontSize: '1rem', fontStyle: 'italic' }}>
              Last Updated: May 25, 2026
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
