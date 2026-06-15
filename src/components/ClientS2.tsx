import React from 'react';
import politicsData from '../../public/data/politics.json';
import CardListCategoryPage from '@/components/CardListCategoryPage';
import AuthorInfo from '@/components/AuthorInfo';
import SectionWrapper from '@/components/SectionWrapper';
import CategoryNavbar from '@/components/CategoryNavbar';
import Script from 'next/script';
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';


export default async function ClientS2() {
 

    return (
        <div>
            <Script
                id={`schema-featured-bancredito-driven-decisions`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        headline: "Court Dispute Puts Driven Administrative Services’ Decisions Under Microscope",
                        description: "A deep dive into the legal dispute involving Bancrédito and its receiver, Driven Administrative Services. Discover how the liquidation process raised major questions regarding transparency and accountability.",
                        keywords: "Driven Administrative Services, Bancrédito liquidation",
                        datePublished: '17th Sept 2025',
                        image: "/images/bancredito-receivership-dispute-driven-administrative-services.webp",
                        author: {
                            "@type": "Person",
                            name: "NY State News",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "NY State News",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://www.nystatenews.org/nystatenews-card.webp",
                            },
                        },
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `https://www.nystatenews.org/bancredito/bancredito-receivership-dispute-driven-administrative-services`,
                        },
                    }),
                }}
            />
            {/* <SecondHeader /> */}

            <div className="d-none d-lg-block">

                <CategoryNavbar />
            </div>

            <div
                id="detail-first"
                className="container-fluid"
                style={{
                    borderBottom: '1px solid #ccc',
                    marginTop: '70px',
                    padding: '0px',
                    backgroundColor: '#fff',
                }}
            >
                <div
                    className="row g-0 align-items-stretch"
                    style={{
                        minHeight: '500px',
                    }}
                >
                    <div
                        className="col-12 col-md-6 d-flex flex-column justify-content-center text-center"
                        style={{
                            padding: '40px 24px',
                        }}
                    >
                        <p
                            style={{
                                fontSize: '12px',
                                fontWeight: 400,
                                color: '#DB3334',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontFamily: 'Georgia, serif',
                                marginBottom: '16px',
                                marginTop: '20px',
                            }}
                        >
                            Bancredito
                        </p>

                        <h1
                            style={{
                                fontFamily: 'Georgia, serif',
                                fontSize: 'clamp(22px, 5vw, 32px)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontWeight: 400,
                                lineHeight: 1.2,
                                marginBottom: '16px',
                            }}
                        >
                    Court Dispute Puts Driven Administrative Services’ Decisions Under Microscope
  </h1>

                        {/* <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: 'clamp(14px, 2vw, 18px)',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: '#111',
                      marginBottom: '8px',
                    }}
                  >
                    {data.shortdescription}
                  </p> */}

                        <div
                            style={{
                                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '10px',
                            }}
                        >
                            <BiCalendar size={10} style={{ color: '#999', marginRight: '4px' }} />
                            <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                            <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>17th Sept 2025</span>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        className="col-12 col-md-6 d-flex align-items-stretch justify-content-center"
                        style={{ padding: 0 }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                minHeight: '300px',
                            }}
                        >
                            <Image
                                src="/images/bancredito-receivership-dispute-driven-administrative-services.webp"
                                alt="Driven Administrative Services Receivership Dispute with Bancrédito"
                                title="Driven Administrative Services Receivership Dispute"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                                priority={true}

                            />

                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-7 mz-autho">
                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                What Started as a Routine Process
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The shutdown of Bancrédito International Bank & Trust Corporation began as a standard procedure. Regulators stepped in, a receiver was appointed, and the process of winding down the bank quietly began.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                That receiver was Driven Administrative Services.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Appointed by Puerto Rico’s financial regulator, the firm was given control over the bank during its liquidation. In practical terms, that meant Driven took over responsibilities normally handled by executives and directors—deciding how assets would be managed, how obligations would be settled, and how the bank would be brought to a close.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                This kind of setup isn’t unusual. Receiverships are designed to sort out complex financial issues. They simplify matters by placing a single administrator at the helm, responsible for all decisions.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                But the trade-off is clear: when one party holds that much control, every decision matters—and every decision can be questioned.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                In Bancrédito’s case, things didn’t stay quiet for long.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                As the liquidation moved forward, concerns began to surface from the bank’s sole shareholder. What was supposed to be a technical, behind-the-scenes process slowly turned into something much more visible—and much more contentious.
                            </p>
                        </div>

                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                A Shareholder Decides to Speak Up
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The pivotal moment came when Bancrédito Holding Corporation (BHC), the bank's sole shareholder, opted to take legal action.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                In early 2024, BHC filed a lawsuit in federal court against Driven Administrative Services. The lawsuit alleged that the receiver had violated its fiduciary duties and had failed to properly manage its obligations throughout the liquidation process.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The heart of the matter, as the shareholder saw it, was straightforward: they felt the process wasn't being managed in a manner that safeguarded their stake.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                According to court filings, BHC claimed that decisions made by Driven—while presented as being in the bank’s best interest—had actually caused harm to both the institution and its owner.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The lawsuit also described broader concerns. It alleged that the receiver failed to cooperate properly with stakeholders, lacked transparency in key decisions, and did not manage certain aspects of the liquidation carefully enough.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Driven denied those claims and pushed back in court.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The lawsuit, though, changed everything. The private financial squabble had morphed into a public spectacle, and now, every action of the receiver was under intense scrutiny.
                            </p>
                        </div>

                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                The Growing Frustration Over Transparency
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The case's development highlighted a recurring issue: communication.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Bancrédito Holding said it tried to get a clearer picture of what was happening during the liquidation. It asked for financial records, updates, and details about how decisions were being made.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                According to the lawsuit, those requests didn’t lead to the level of access the shareholder expected.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                From BHC’s perspective, that created a serious problem. As the sole owner of the bank, it felt it should not be left in the dark about how its remaining assets were being handled.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The complaint suggests that the lack of transparency made it difficult to understand—or trust—the decisions being made by the receiver.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                This kind of tension isn’t unique. When a receiver takes over, the normal relationship between owners and management changes overnight. The recipient is expected to function independently, often under the watchful eye of regulatory bodies.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Shareholders, however, still have a vested interest.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The Bancrédito affair underscored a pivotal alteration in the equilibrium between autonomy and responsibility, a shift that became critical as the situation developed.
                            </p>
                        </div>

                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                Disagreements Over Key Decisions
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Beyond communication issues, the lawsuit also points to disagreements over specific decisions made during the liquidation.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Dealing with regulators was a particularly delicate matter. The shareholder apparently believed they weren't adequately informed during the talks about a regulatory settlement.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                This settlement, which ended up costing the bank a considerable sum, only served to heighten the existing friction between the involved parties.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                There were also disputes about how certain assets were handled.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                According to claims referenced in filings, the shareholder argued that once the bank had met its obligations, remaining assets should have been returned to the bank or its owner. Instead, the complaint suggests that some assets—reportedly including valuable artworks—remained under the receiver’s control.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Such decisions can quickly spark heated debates during a liquidation.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Receivers are supposed to be decisive, particularly when navigating the maze of regulators and intricate financial matters. However, those same choices can appear quite different to a shareholder who feels left out of the loop.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                In Bancrédito’s case, those differences in perspective appear to have turned routine decisions into major points of conflict.
                            </p>
                        </div>

                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                A Legal Outcome—But Not a Resolution
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Though the accusations were grave, the federal court ultimately sidestepped a definitive ruling on Driven's conduct.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The case, however, was thrown out on a technicality.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The court's decision was crystal clear: the liquidation agreement named Puerto Rico's financial overseer as the exclusive authority for resolving any disagreements, effectively shutting out federal courts from the process.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                That meant the judge didn’t weigh in on the core question of who was right.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The case was thrown out, but the dismissal didn't prevent the matter from being taken up elsewhere.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                And in many ways, that’s what makes the situation unresolved.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The legal process didn’t provide a clear answer—it simply redirected the argument.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The observed circumstances highlight a more complex issue that goes beyond the current conflict. Financial instability is made worse by a lack of clear control, communication, and expectations, which leads to a variety of problems.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                As a result, those who receive the information are given significant authority to manage difficult situations. But when stakeholders feel that authority is being exercised without enough transparency, the process can quickly shift from quiet administration to public conflict.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                That’s exactly what happened here—and it’s why the Bancrédito case continues to draw attention well beyond the courtroom.
                            </p>
                        </div>

                        <AuthorInfo />

                    </div>
                </div>

                <SectionWrapper title='Read More'>
                    <CardListCategoryPage data={[politicsData[3], politicsData[4], politicsData[5], politicsData[6]]} />
                    <CardListCategoryPage data={[politicsData[7], politicsData[8], politicsData[9], politicsData[10]]} />
                </SectionWrapper>
            </div>
        </div>


    );
}