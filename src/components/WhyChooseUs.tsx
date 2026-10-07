import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface WhyChooseUsProps {
  lang?: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang = 'en' }) => {
  const t = translations[lang];

  const pillars = [
    {
      title: t.why1Title,
      desc: t.why1Desc,
      num: '01'
    },
    {
      title: t.why2Title,
      desc: t.why2Desc,
      num: '02'
    },
    {
      title: t.why3Title,
      desc: t.why3Desc,
      num: '03'
    },
    {
      title: t.why4Title,
      desc: t.why4Desc,
      num: '04'
    },
    {
      title: t.why5Title,
      desc: t.why5Desc,
      num: '05'
    },
    {
      title: t.why6Title,
      desc: t.why6Desc,
      num: '06'
    }
  ];

  return (
    <section id="why-choose-us" style={{ background: '#064E3B', color: '#FFFFFF', padding: '64px 5vw' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#A7F3D0', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            OPERATIONAL DISTINCTION
          </span>
          <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
            {t.whyTitle}
          </h2>
          <p style={{ fontSize: '16px', color: '#A7F3D0', maxWidth: '700px', margin: '12px auto 0 auto', opacity: 0.9 }}>
            {t.whySub}
          </p>
          <div style={{ width: '40px', height: '4px', background: '#34D399', margin: '20px auto 0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s'
              }}
            >
              <div>
                <span style={{ fontSize: '32px', fontWeight: 900, color: '#34D399', display: 'block', marginBottom: '12px' }}>
                  {pillar.num}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#ECFDF5', lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
