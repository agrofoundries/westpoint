import React from 'react';

export const AssociationsStandards: React.FC = () => {
  // Using the requested logo for all association placeholders
  const logos = [
    { name: 'AGRO CASTINGS', img: '/associations/AFlogo.png' },
    { name: 'CONSTRUCTION CASTINGS', img: '/associations/AFlogo.png' },
    { name: 'FARM EQUIPMENT', img: '/associations/AFlogo.png' },
    { name: 'PETRO EQUIPMENT', img: '/associations/AFlogo.png' },
  ];

  return (
    <section style={{ padding: '2rem 0', background: '#F8F9FA', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ width: '40px', height: '3px', background: '#4CAF50' }}></span>
            <span style={{ color: '#4CAF50', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: "'Manrope', sans-serif" }}>
              WESTPOINT DIVISIONS
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900,
            color: '#0A192F',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            fontFamily: "'Manrope', sans-serif"
          }}>
            Our Groups
          </h2>
        </div>

        {/* CSS Grid for the logos to match the screenshot style */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          justifyItems: 'center'
        }}>
          {logos.map((logo, index) => (
            <div key={index} style={{
              background: '#FFFFFF',
              border: '2px solid transparent',
              borderRadius: '8px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '140px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
              gap: '12px'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(76, 175, 80, 0.15)';
              e.currentTarget.style.borderColor = '#4CAF50';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            >
              {logo.img && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, height: '70px' }}>
                  <img 
                    src={logo.img} 
                    alt={logo.name} 
                    style={{ maxWidth: '140px', maxHeight: '70px', objectFit: 'contain' }} 
                  />
                </div>
              )}
              <span style={{ 
                fontSize: '9px', 
                fontWeight: 800, 
                color: '#6B7280', 
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: 1.2,
                textAlign: 'center'
              }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociationsStandards;
