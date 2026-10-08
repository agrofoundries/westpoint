import React from 'react';
import { Building2, Settings, Tractor, Fuel, Blocks } from 'lucide-react';

export const AssociationsStandards: React.FC = () => {
  const divisions = [
    { 
      name: 'AGRO CASTINGS', 
      img: '/associations/AFlogo.png',
      desc: 'High-wear components engineered for modern agricultural machinery and soil preparation.',
      icon: <Building2 size={24} color="#4CAF50" />
    },
    { 
      name: 'CONSTRUCTION CASTINGS', 
      img: '/associations/AFlogo.png',
      desc: 'Heavy-duty infrastructure castings built to withstand extreme environmental stress.',
      icon: <Settings size={24} color="#4CAF50" />
    },
    { 
      name: 'FARM EQUIPMENT', 
      img: '/associations/AFlogo.png',
      desc: 'Complete assemblies and structural parts for heavy harvesting and planting tractors.',
      icon: <Tractor size={24} color="#4CAF50" />
    },
    { 
      name: 'PETRO EQUIPMENT', 
      img: '/associations/AFlogo.png',
      desc: 'High-pressure valves, pumps, and drilling components for the oil and gas sector.',
      icon: <Fuel size={24} color="#4CAF50" />
    },
    { 
      name: 'PRECAST FORMS & MOLDS', 
      img: '/associations/AFlogo.png',
      desc: 'Precision-machined molds for large-scale concrete precasting operations.',
      icon: <Blocks size={24} color="#4CAF50" />
    },
  ];

  return (
    <section style={{ padding: '5rem 0', background: '#0a110a', borderTop: '1px solid #1B5E20', position: 'relative', overflow: 'hidden' }}>
      {/* Abstract Background pattern */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(#4CAF50 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '40px', height: '2px', background: '#4CAF50' }}></span>
            <span style={{ color: '#4CAF50', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Manrope', sans-serif" }}>
              WESTPOINT GROUP OF COMPANIES
            </span>
            <span style={{ width: '40px', height: '2px', background: '#4CAF50' }}></span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            fontFamily: "'Manrope', sans-serif"
          }}>
            Our Global <span style={{ color: '#4CAF50' }}>Divisions</span>
          </h2>
          <p style={{ color: '#A3B8A8', marginTop: '1rem', maxWidth: '600px', marginInline: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            An integrated network of specialized manufacturing divisions delivering critical components across major industrial sectors worldwide.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          justifyItems: 'center'
        }}>
          {divisions.map((div, index) => (
            <div key={index} style={{
              background: 'linear-gradient(145deg, #111c13 0%, #0d150e 100%)',
              border: '1px solid #1B5E20',
              borderRadius: '12px',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(76, 175, 80, 0.15)';
              e.currentTarget.style.borderColor = '#4CAF50';
              e.currentTarget.style.background = 'linear-gradient(145deg, #152418 0%, #0d150e 100%)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
              e.currentTarget.style.borderColor = '#1B5E20';
              e.currentTarget.style.background = 'linear-gradient(145deg, #111c13 0%, #0d150e 100%)';
            }}
            >
              {/* Top Accent Line */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #4CAF50, transparent)' }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ padding: '12px', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.2)' }}>
                  {div.icon}
                </div>
                {div.img && (
                  <img 
                    src={div.img} 
                    alt={div.name} 
                    style={{ maxHeight: '35px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.8)' }} 
                  />
                )}
              </div>

              <h3 style={{ 
                fontSize: '1.6rem', 
                fontWeight: 900, 
                color: '#FFFFFF', 
                marginBottom: '1rem',
                letterSpacing: '0.05em',
                fontFamily: "'Manrope', sans-serif"
              }}>
                {div.name}
              </h3>
              
              <p style={{
                color: '#8A9A8E',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                margin: 0
              }}>
                {div.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociationsStandards;

