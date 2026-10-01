import React from 'react';

export const SpecialtyMixesSection: React.FC = () => {
  const mixes = [
    { name: 'Manganese Steel Castings', psi: '11% - 14% Austenitic Mn', app: 'Turnout frogs, crossover diamonds, track switches', avail: 'All Foundries', img: '/images/istockphoto-2263816291-1024x1024.jpg' },
    { name: 'Ductile Iron Track Castings', psi: 'ASTM A536 80-55-06', app: 'Rail tie plates, base plates, rail anchors', avail: 'High-Volume', img: '/images/istockphoto-2263817295-1024x1024.jpg' },
    { name: 'Forged Carbon & Alloy Axles', psi: 'ASTM A668 / AAR M-101', app: 'Heavy freight & passenger locomotive wheelsets', avail: 'Stock & Custom', img: '/images/istockphoto-2278348463-1024x1024.jpg' },
    { name: 'Monobloc Cast/Forged Wheels', psi: 'AAR M-107 Class B & C', app: 'Freight car & transit passenger car wheelsets', avail: 'Stock & Custom', img: '/images/istockphoto-1313022650-1024x1024.jpg' },
    { name: 'Cast Steel Couplers & Yokes', psi: 'AAR M-201 Grade E Steel', app: 'Automatic train couplers, draft gear housings', avail: 'All Foundries', img: '/images/istockphoto-1345955492-1024x1024.jpg' },
    { name: 'High-Conductivity Catenary Arms', psi: 'Copper-Bronze & Aluminum', app: 'Transit overhead contact wire & pantograph cantilever', avail: 'Custom Spec', img: '/images/istockphoto-2166976559-1024x1024.jpg' },
    { name: 'Ductile Third-Rail Supports', psi: 'Dielectric Insulation Base', app: 'Urban metro third-rail insulator shoe brackets', avail: 'Stock & Custom', img: '/images/istockphoto-2263288423-1024x1024.jpg' },
    { name: 'Track Drainage Trench Grates', psi: 'AASHTO H-20 / M306 Load', app: 'Trackbed water management & cable pull boxes', avail: 'All Foundries', img: '/images/istockphoto-2284955682-1024x1024.jpg' }
  ];

  return (
    <section id="mixes" style={{ background: '#F8FAFC', padding: '48px 5vw', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ color: '#195B34', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            metal EXCELLENCE
          </span>
          <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#195B34', letterSpacing: '-0.02em', margin: 0, textTransform: 'uppercase' }}>
            Specialized Rail Alloys & Castings
          </h2>
          <div style={{ width: '40px', height: '4px', background: '#15803D', margin: '20px auto 0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {mixes.map((mix, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderTop: '3px solid #15803D',
                borderRadius: '0px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                <img src={mix.img} alt={mix.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '6px', right: '6px', background: 'rgba(15,23,42,0.8)', color: '#34D399', padding: '2px 6px', fontSize: '8.5px', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', border: '1px solid rgba(52,211,153,0.3)', pointerEvents: 'none' }}>
                  iStock Resource
                </div>
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#15803D', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>{mix.psi}</span>
                  <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#195B34', margin: '0 0 8px 0', letterSpacing: '-0.01em' }}>{mix.name}</h4>
                  <p style={{ fontSize: '13px', color: '#4CAF50', margin: '0 0 12px 0', lineHeight: 1.4 }}><strong>Applications:</strong> {mix.app}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '10px', fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <span>Availability: <strong style={{ color: '#195B34' }}>{mix.avail}</strong></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyMixesSection;
