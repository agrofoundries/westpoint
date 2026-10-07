import React from 'react';

export const SupportedIndustries: React.FC = () => {
  const industries = [
    { title: 'Warehousing & Logistics', code: 'LOG' },
    { title: 'Healthcare Infrastructure', code: 'MED' },
    { title: 'Education & Civic Structures', code: 'EDU' },
    { title: 'Heavy Transportation', code: 'CIV' },
    { title: 'Mass Manufacturing', code: 'IND' },
    { title: 'Commercial Retail Blocks', code: 'COM' },
    { title: 'Power Grid Generation', code: 'NRG' },
    { title: 'Water Treatment Facilities', code: 'WTR' },
    { title: 'Hospitality Framing', code: 'HOS' },
    { title: 'Federal Aviation Plazas', code: 'FED' },
    { title: 'Defense & Military Bases', code: 'DEF' },
    { title: 'Maritime Ports & Docks', code: 'MAR' }
  ];

  return (
    <section id="industries" style={{ background: '#195B34', color: '#FFFFFF', padding: '48px 5vw' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ color: '#A7F3D0', fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>PROJECT APPLICATION</span>
          <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>Industries We Support</h2>
          <div style={{ width: '36px', height: '3px', background: '#34D399', margin: '10px auto 0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
          {industries.map((ind, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '16px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s ease'
              }}
              className="hover-card-trigger"
            >
              <div style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', padding: '6px 10px', fontSize: '10.5px', fontWeight: 900 }}>
                {ind.code}
              </div>
              <strong style={{ fontSize: '13.5px', color: '#FFFFFF', fontWeight: 700 }}>{ind.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedIndustries;
