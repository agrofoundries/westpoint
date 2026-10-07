import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface DigitalSolutionsProps {
  lang: Language;
}

export const DigitalSolutions: React.FC<DigitalSolutionsProps> = ({ lang }) => {
  const t = translations[lang];

  const solutions = [
    {
      title: t.digi1Title,
      desc: t.digi1Desc,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><rect x="10" y="8" width="4" height="4"/></svg>
      )
    },
    {
      title: t.digi2Title,
      desc: t.digi2Desc,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      )
    },
    {
      title: t.digi3Title,
      desc: t.digi3Desc,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="0"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      )
    }
  ];

  return (
    <section id="digital" style={{ background: '#064E3B', color: '#FFFFFF', padding: '64px 5vw', borderBottom: '1px solid #0F291E' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#34D399', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            SMART DISPATCH & CUSTOMER PORTAL
          </span>
          <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
            {t.digiTitle}
          </h2>
          <p style={{ fontSize: '16px', color: '#A7F3D0', maxWidth: '700px', margin: '12px auto 0 auto' }}>
            {t.digiSub}
          </p>
          <div style={{ width: '40px', height: '4px', background: '#34D399', margin: '20px auto 0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {solutions.map((sol, idx) => (
            <div key={idx} style={{ background: '#0B3B24', padding: '32px', border: '1px solid #059669', borderTop: '4px solid #34D399' }}>
              <div style={{ background: '#042F2E', border: '1px solid #34D399', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                {sol.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                {sol.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#ECFDF5', lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                {sol.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;
