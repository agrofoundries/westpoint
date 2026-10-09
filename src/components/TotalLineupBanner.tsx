import React, { useState, useEffect } from 'react';

const TypewriterTagline: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const speed = isDeleting ? 50 : 110;

    if (!isDeleting && displayText.length < text.length) {
      timer = window.setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else if (!isDeleting && displayText.length === text.length) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      timer = window.setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, speed);
    } else if (isDeleting && displayText.length === 0) {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text]);

  return (
    <span style={{ fontStyle: 'italic', fontSize: '32px', color: '#1B5E20', whiteSpace: 'nowrap', fontWeight: 900, minWidth: '380px', display: 'inline-block', lineHeight: 1, fontFamily: "'Manrope', sans-serif" }}>
      {displayText}
      <span style={{ animation: 'blinkCursor 0.8s infinite', marginLeft: '2px', color: '#4CAF50', fontWeight: 900 }}>|</span>
    </span>
  );
};

export const TotalLineupBanner: React.FC = () => {
  const divisions = [
    { name: 'Westpoint Foundries', logo: '/logos/Westpoint-Foundries-Industrial-Logo.png', subtitle: 'Heavy Rail & Transit Castings' },
    { name: 'Westpoint Castings', logo: '/logos/Westpoint-Castings-Industrial-Logo.png', subtitle: 'Infrastructure & Municipal Castings' },
    { name: 'Westpoint Forgings', logo: '/logos/Westpoint-Forgings-Industrial-Logo.png', subtitle: 'Aerospace, Precision & Ring Rolling' },
    { name: 'Westpoint Waterworks', logo: '/logos/Westpoint-Waterworks-Corporate-Logo.png', subtitle: 'Valves, Hydrants & Industrial Flow' },
    { name: 'Agro Foundries', logo: '/associations/AFlogo.png', subtitle: 'Agriculture & Mining Equipment' },
  ];

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F8F4 100%)',
        borderTop: '2px solid #E5E7EB',
        borderBottom: '2px solid #4CAF50',
        padding: '2.5rem 2vw',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Manrope', sans-serif"
      }}
    >
      <style>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes slideLogosBanner {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 16px)); }
        }
        .banner-logo-track {
          display: flex;
          gap: 32px;
          animation: slideLogosBanner 22s linear infinite;
          width: max-content;
          align-items: center;
        }
        .banner-logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        
        {/* Section Header with Typewriter Tagline */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderBottom: '1.5px solid #E2E8F0', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '6px', height: '36px', background: '#4CAF50', borderRadius: '3px' }} />
            <TypewriterTagline text="Our Total lineup......." />
          </div>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.12em', background: '#E8F5E9', padding: '6px 14px', borderRadius: '20px', border: '1px solid #C8E6C9' }}>
            Westpoint Industrial Group Divisions & Subsidiaries
          </div>
        </div>

        {/* Animated Division Logo Ticker */}
        <div style={{ overflow: 'hidden', width: '100%', position: 'relative', padding: '0.5rem 0' }}>
          <div className="banner-logo-track">
            {/* Set 1 */}
            {divisions.map((div, idx) => (
              <div
                key={`set1-${idx}`}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '10px',
                  padding: '14px 22px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  minWidth: '280px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(27, 94, 32, 0.15)';
                  e.currentTarget.style.borderColor = '#4CAF50';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <img src={div.logo} alt={div.name} style={{ height: '55px', objectFit: 'contain', maxWidth: '140px' }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#1B5E20' }}>{div.name}</div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#4CAF50', marginTop: '2px' }}>{div.subtitle}</div>
                </div>
              </div>
            ))}

            {/* Set 2 (Duplicate for Seamless Infinite Scroll) */}
            {divisions.map((div, idx) => (
              <div
                key={`set2-${idx}`}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '10px',
                  padding: '14px 22px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  minWidth: '280px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(27, 94, 32, 0.15)';
                  e.currentTarget.style.borderColor = '#4CAF50';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <img src={div.logo} alt={div.name} style={{ height: '55px', objectFit: 'contain', maxWidth: '140px' }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#1B5E20' }}>{div.name}</div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#4CAF50', marginTop: '2px' }}>{div.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TotalLineupBanner;
