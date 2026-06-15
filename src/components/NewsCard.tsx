import Link from 'next/link';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import Image from 'next/image';

interface NewsCardProps {
  data: {
    category: string;
    title: string;
    shortdescription?: string;
    description?: string;
    image: string;
    slug: string;
    date: string;
  };
}

const NewsCard = ({ data }: NewsCardProps) => {
  return (
    <article>
      <Link
        title={data.title}
        aria-label={`Read article: ${data.title}`}
        href={`/${data.category}/${data.slug}`}
        className="text-decoration-none"
        style={{
          display: 'block',
          width: '100%',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div
          style={{
            border: 'none',
            width: '100%',
            height: 'auto',
            fontFamily: '"Georgia", serif',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '180px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={data.image}
              alt={`Cover image for ${data.title}`}
              title={data.title}
              width={480}
              height={270}
              loading="lazy"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
          </div>

          <div style={{ padding: '16px 0 0 0' }}>
            <h3
              style={{
                color: '#000',
                fontFamily:
                  'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                fontSize: 'clamp(18px, 2vw, 22px)',
                fontWeight: 400,
                marginBottom: '8px',
                marginTop: '0'
              }}
              className='hover-underline'
            >
              {data.title}
            </h3>

            <p
              style={{
                color: 'rgb(51, 51, 51)',
                fontFamily:
                  'TNYAdobeCaslonPro, "Times New Roman", Times, serif',
                fontSize: 'clamp(14px, 1.5vw, 17px)',
                fontWeight: 400,
                marginBottom: '4px',
              }}
            >
              {data.shortdescription}
            </p>

            <div
              style={{
                fontSize: '10px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <BiCalendar
                size={10}
                style={{ marginRight: '4px', color: '#999' }}
                aria-hidden="true"
              />
              <span
                style={{
                  color: '#c0392b',
                  fontWeight: 500,
                  fontSize: '8px',
                }}
              >
                Published on
              </span>
              <span
                style={{
                  color: '#4d5459ff',
                  marginLeft: '4px',
                  fontSize: '8px',
                }}
              >
                {data.date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;
