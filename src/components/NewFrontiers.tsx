import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewFrontiers: React.FC = () => {
  const cards = [
    { title: 'CONSTRUCTION CASTINGS' },
    { title: 'AGRO CASTINGS' },
    { title: 'FARM EQUIPMENT' },
    { title: 'PETRO EQUIPMENT' }
  ];

  return (
    <section style={{ background: '#FAF6EE', padding: '3.5rem 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom" style={{ position: 'relative' }}>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '1.85rem', fontWeight: 900, letterSpacing: '0.15em', color: '#1B5E20', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontFamily: "'Manrope', sans-serif !important" }}>
            Expanding Our Capabilities
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 7.8rem)', fontWeight: 900, margin: 0, color: '#C8102E', letterSpacing: '0.02em', fontFamily: "'Manrope', sans-serif !important" }}>
            OUR NEW FRONTIERS...
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {cards.map((card, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: isEven ? 'row' : 'row-reverse',
                alignItems: 'stretch',
                background: '#144818',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(76, 175, 80, 0.3)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
              }}>
                {/* Image Container (4 columns) */}
                <div style={{ flex: '4 1 250px', display: 'flex', position: 'relative', borderRight: isEven ? '1px solid rgba(76, 175, 80, 0.2)' : 'none', borderLeft: !isEven ? '1px solid rgba(76, 175, 80, 0.2)' : 'none', overflow: 'hidden' }}>
                  <img
                    src="/mokup/Westpoint-Industries-catalog-mockup.png"
                    alt={`${card.title} Catalog`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      inset: 0,
                      transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>

                {/* Text & Button Container (8 columns) */}
                <div style={{ flex: '8 1 500px', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, margin: '0 0 1rem 0', lineHeight: 1.2, color: '#FFFFFF', fontFamily: "'Manrope', sans-serif !important", textTransform: 'uppercase' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: '#E8F5E9', margin: '0 0 2rem 0', lineHeight: 1.6, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important", maxWidth: '800px' }}>
                    We are expanding our capabilities to deliver high-performance engineered metal components for {card.title.toLowerCase()}. Built with our legacy of quality, durability, and strict manufacturing standards.
                  </p>

                  <div style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
                    <button
                      onClick={() => window.open('#catalog', '_self')}
                      style={{
                        background: '#4CAF50',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '14px 28px',
                        borderRadius: '6px',
                        fontSize: '0.95rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        letterSpacing: '0.05em',
                        fontFamily: "'Manrope', sans-serif !important",
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 8px 16px rgba(76, 175, 80, 0.2)'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#388E3C';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 20px rgba(76, 175, 80, 0.3)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#4CAF50';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(76, 175, 80, 0.2)';
                      }}
                    >
                      EXPLORE SOLUTIONS <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewFrontiers;
