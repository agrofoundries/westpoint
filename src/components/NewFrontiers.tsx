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
    <section style={{ background: '#0F291E', padding: '1.5rem 0', position: 'relative', overflow: 'hidden', borderTop: '2px solid #4CAF50', borderBottom: '2px solid #4CAF50' }}>
      <div className="container-custom" style={{ position: 'relative' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 900, letterSpacing: '0.15em', color: '#A5D6A7', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontFamily: "'Manrope', sans-serif !important" }}>
            Expanding Our Capabilities
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0, color: '#FFFFFF', fontFamily: "'Manrope', sans-serif !important" }}>
            OUR NEW FRONTIERS...
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {cards.map((card, idx) => (
            <div key={idx} style={{
              background: '#144818',
              border: '1px solid rgba(76, 175, 80, 0.3)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#4CAF50';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(76, 175, 80, 0.3)';
            }}
            >
              {/* Full-bleed Image Container */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0F291E', padding: '1.5rem', position: 'relative', borderBottom: '1px solid rgba(76, 175, 80, 0.2)' }}>
                <div style={{ position: 'absolute', inset: '10%', background: '#4CAF50', filter: 'blur(30px)', opacity: 0.15, borderRadius: '50%' }} />
                <img 
                  src="/Westpoint Industries catalog mockup.png" 
                  alt="Catalog Mockup" 
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: 'auto',
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))',
                    position: 'relative',
                    zIndex: 2,
                    transition: 'transform 0.4s ease',
                    transform: 'scale(1.05)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.05)'}
                />
              </div>

              {/* Text & Button Container */}
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, margin: '0 0 0.5rem 0', lineHeight: 1.2, color: '#FFFFFF', fontFamily: "'Manrope', sans-serif !important", textTransform: 'uppercase' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#E8F5E9', margin: '0 0 1.25rem 0', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important", flexGrow: 1 }}>
                  High-performance engineered metal components.
                </p>
                
                <button 
                  onClick={() => window.open('#catalog', '_self')}
                  style={{
                    background: '#FFFFFF',
                    color: '#1B5E20',
                    border: 'none',
                    padding: '12px 20px',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    fontFamily: "'Manrope', sans-serif !important",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#E8F5E9';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#FFFFFF';
                  }}
                >
                  EXPLORE <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewFrontiers;
