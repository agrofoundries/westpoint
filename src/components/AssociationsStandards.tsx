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
      img: '/logos/Westpoint-Foundries-Industrial-Logo.png',
      desc: 'Heavy-duty infrastructure castings built to withstand extreme environmental stress.',
      icon: <Settings size={24} color="#4CAF50" />
    },
    { 
      name: 'FARM EQUIPMENT', 
      img: '/logos/Westpoint-Forgings-Industrial-Logo.png',
      desc: 'Complete assemblies and structural parts for heavy harvesting and planting tractors.',
      icon: <Tractor size={24} color="#4CAF50" />
    },
    { 
      name: 'PETRO EQUIPMENT', 
      img: '/logos/Westpoint-Castings-Industrial-Logo.png',
      desc: 'High-pressure valves, pumps, and drilling components for the oil and gas sector.',
      icon: <Fuel size={24} color="#4CAF50" />
    },
    { 
      name: 'PRECAST FORMS & MOLDS', 
      img: '/logos/Westpoint-Waterworks-Corporate-Logo.png',
      desc: 'Precision-machined molds for large-scale concrete precasting operations.',
      icon: <Blocks size={24} color="#4CAF50" />
    },
  ];

  return (
    <section style={{ padding: '5rem 0', background: '#F8F9FA', borderTop: '1px solid #E5E7EB', position: 'relative', overflow: 'hidden' }}>
      
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
            color: '#111827',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            fontFamily: "'Manrope', sans-serif"
          }}>
            Our Global <span style={{ color: '#4CAF50' }}>Divisions</span>
          </h2>
          <p style={{ color: '#4B5563', marginTop: '1rem', maxWidth: '600px', marginInline: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            An integrated network of specialized manufacturing divisions delivering critical components across major industrial sectors worldwide.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1.5rem',
          justifyItems: 'center'
        }}>
          {divisions.map((div, index) => (
            <div key={index} style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '1.5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.borderColor = '#4CAF50';
              e.currentTarget.style.background = '#FFFFFF';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.background = '#FFFFFF';
            }}
            >
              {/* Top Accent Line */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: '#4CAF50' }}></div>
              
              {div.img && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90px', width: '100%', padding: '0.5rem' }}>
                  <img 
                    src={div.img} 
                    alt={div.name} 
                    style={{ maxWidth: '100%', maxHeight: '85px', objectFit: 'contain', display: 'block' }} 
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociationsStandards;

