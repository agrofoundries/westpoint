import React from 'react';
import type { Language } from '../types';

interface InnovationSectionProps {
  lang: Language;
}

export const InnovationSection: React.FC<InnovationSectionProps> = ({ lang }) => {
  const innovations = [
    {
      title: '3D Solidification Modeling',
      desc: lang === 'en'
        ? 'MagmaSoft® thermal simulation predicts liquid steel flow, cooling shrink, and grain boundaries to eliminate internal porosity.'
        : 'Simulación térmica MagmaSoft® que predice el flujo de acero líquido y elimina porosidades internas.',
      badge: 'Thermal Simulation',
      iconSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></svg>
      ),
    },
    {
      title: 'Spectrometric Melt Verification',
      desc: lang === 'en'
        ? 'Automated argon-shielded spectro-dosing verifies carbon, manganese, and alloy grain chemistry prior to electric furnace pouring.'
        : 'Verificación espectrométrica que garantiza la química exacta de carbono, manganeso y aleaciones antes del moldeo.',
      badge: 'Spectrometry',
      iconSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/><path d="M12 10v4"/><path d="M10 12h4"/></svg>
      ),
    },
    {
      title: '5-Axis CNC Turnout Machining',
      desc: lang === 'en'
        ? 'Robotic 5-axis heavy CNC milling machines forged steel axles and manganese frog crossovers to tight 0.05mm tolerances.'
        : 'Mecanizado CNC robótico de 5 ejes para ejes de acero forjado y desvíos de manganeso con tolerancias de 0.05mm.',
      badge: 'Precision CNC',
      iconSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
      ),
    },
  ];

  return (
    <section id="innovation" style={{ background: '#FFFFFF', padding: '48px 5vw' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ color: '#195B34', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            {lang === 'en' ? 'metal INNOVATION' : 'INNOVACIÓN METALÚRGICA'}
          </span>
          <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#195B34', letterSpacing: '-0.02em', margin: 0 }}>
            {lang === 'en' ? 'Next-Generation Rail Metallurgy' : 'Innovación Metalúrgica Ferroviaria'}
          </h2>
          <div style={{ width: '40px', height: '4px', background: '#15803D', margin: '16px auto 0 auto', borderRadius: '2px' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {innovations.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#F8FAFC',
                borderRadius: '0px',
                border: '1px solid #E2E8F0',
                padding: '36px 28px',
                boxShadow: '0 4px 15px rgba(15, 23, 42, 0.03)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#15803D';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(21, 128, 61, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 23, 42, 0.03)';
              }}
            >
              <div style={{ marginBottom: '16px' }}>{item.iconSvg}</div>
              <span style={{ background: '#ECFDF5', color: '#15803D', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '0px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>
                {item.badge}
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#195B34', marginTop: '16px', marginBottom: '12px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#4CAF50', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
