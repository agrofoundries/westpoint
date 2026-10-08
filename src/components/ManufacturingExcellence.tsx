import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface ManufacturingExcellenceProps {
  lang: Language;
}

export const ManufacturingExcellence: React.FC<ManufacturingExcellenceProps> = ({ lang }) => {
  const t = translations[lang];

  const features = [
    {
      title: t.mfg1Title,
      desc: t.mfg1Desc,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="0"/><path d="M12 6v6l4 2"/></svg>
      )
    },
    {
      title: t.mfg2Title,
      desc: t.mfg2Desc,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      )
    },
    {
      title: t.mfg3Title,
      desc: t.mfg3Desc,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      )
    }
  ];

  return (
    <section id="manufacturing" style={{ background: '#0F291E', color: '#FFFFFF', padding: '64px 5vw' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#34D399', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              INDUSTRY 4.0 metal FOUNDRY
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 16px 0', lineHeight: 1.15 }}>
              {t.mfgTitle}
            </h2>
            <p style={{ fontSize: '16px', color: '#A7F3D0', lineHeight: 1.6, marginBottom: '32px' }}>
              {t.mfgSub}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', background: '#0B3B24', padding: '20px', border: '1px solid #059669', borderLeft: '4px solid #34D399' }}>
                  <div style={{ background: '#042F2E', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {feat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                      {feat.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#ECFDF5', lineHeight: 1.5, margin: 0, opacity: 0.9 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ overflow: 'hidden', border: '1px solid #059669' }}>
              <img
                src="/images/prod_railway_track_plates.jpg"
                alt="Automated Rail Foundry Facility"
                style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(11, 59, 36, 0.95)',
              border: '1px solid #34D399',
              padding: '10px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
              <span style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Electric Induction Furnace Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellence;
