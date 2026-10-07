import React from 'react';
import { ArrowRight } from 'lucide-react';
const NewFrontiers: React.FC = () => {
  return (
    <section style={{ background: '#0F291E', color: '#FFFFFF', padding: '6rem 0', position: 'relative', overflow: 'hidden', borderTop: '2px solid #4CAF50', borderBottom: '2px solid #4CAF50' }}>
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 900, letterSpacing: '0.15em', color: '#A5D6A7', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontFamily: "'Manrope', sans-serif !important" }}>
                Expanding Our Capabilities
              </span>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, margin: 0, lineHeight: 1.1, color: '#FFFFFF', fontFamily: "'Manrope', sans-serif !important" }}>
                OUR NEW FRONTIERS...
              </h2>
            </div>
            
            <p style={{ fontSize: '1.2rem', color: '#E8F5E9', lineHeight: 1.6, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              We are bringing our years of metal engineering experience to new industries. We build strong, reliable, and heavy-duty parts for the toughest jobs in construction, farming, and more.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '1rem' }}>
              {[
                'CONSTRUCTION CASTINGS',
                'AGRO CASTINGS',
                'FARM EQUIPMENT',
                'PETRO EQUIPMENT'
              ].map((item, idx) => (
                <span key={idx} style={{
                  background: 'rgba(76, 175, 80, 0.15)',
                  border: '1px solid rgba(76, 175, 80, 0.4)',
                  padding: '8px 16px',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                  fontFamily: "'Manrope', sans-serif !important"
                }}>
                  {item}
                </span>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <button 
                onClick={() => window.open('#catalog', '_self')}
                style={{
                  background: '#FFFFFF',
                  color: '#1B5E20',
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  fontFamily: "'Manrope', sans-serif !important",
                  boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
                }}
              >
                EXPLORE THE CATALOG <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Glow effect behind image */}
            <div style={{ position: 'absolute', inset: '10%', background: '#4CAF50', filter: 'blur(80px)', opacity: 0.15, borderRadius: '50%' }} />
            
            <img 
              src="/Westpoint Industries catalog mockup.png" 
              alt="Westpoint Industries Catalog Mockup" 
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                transform: 'rotate(-2deg)',
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                zIndex: 2
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewFrontiers;
