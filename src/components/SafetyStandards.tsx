import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface SafetyStandardsProps {
  lang: Language;
}

export const SafetyStandards: React.FC<SafetyStandardsProps> = ({ lang }) => {
  const t = translations[lang];

  const standards = [
    {
      title: t.safe1Title,
      desc: t.safe1Desc,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    },
    {
      title: t.safe2Title,
      desc: t.safe2Desc,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="0"/><path d="M12 6v6l4 2"/></svg>
      )
    },
    {
      title: t.safe3Title,
      desc: t.safe3Desc,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="0"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      )
    }
  ];

  return (
    <section id="safety" style={{ background: '#ECFDF5', padding: '48px 5vw', borderBottom: '1px solid #A7F3D0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ color: '#047857', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            ZERO-HARM CULTURE & COMPLIANCE
          </span>
          <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#064E3B', letterSpacing: '-0.02em', margin: 0 }}>
            {t.safeTitle}
          </h2>
          <p style={{ fontSize: '16px', color: '#047857', maxWidth: '700px', margin: '12px auto 0 auto' }}>
            {t.safeSub}
          </p>
          <div style={{ width: '40px', height: '4px', background: '#059669', margin: '20px auto 0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {standards.map((std, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', borderRadius: '0px', padding: '32px', border: '1px solid #A7F3D0', borderTop: '4px solid #047857', boxShadow: '0 10px 15px -3px rgba(5, 150, 105, 0.08)' }}>
              <div style={{ background: '#ECFDF5', width: '44px', height: '44px', borderRadius: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                {std.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', marginBottom: '12px' }}>
                {std.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#2E7D32', lineHeight: 1.6, margin: 0 }}>
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyStandards;
