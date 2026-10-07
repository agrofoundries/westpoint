import React from 'react';
import { ArrowRight } from 'lucide-react';

export const MarketsSection: React.FC = () => {
  const markets = [
    {
      title: 'CLASS I FREIGHT RAILROADS',
      desc: 'High HAL manganese turnout frogs, heavy tie plates, and 36-ton axles engineered for Class I transcontinental freight corridors.',
      tag: 'FREIGHT RAIL'
    },
    {
      title: 'URBAN TRANSIT & METRO AUTHORITIES',
      desc: 'Urban subway bogie frames, third-rail insulator shoe gear, and noise-damping track plates for city transit authorities.',
      tag: 'RAPID TRANSIT'
    },
    {
      title: 'HIGH-SPEED PASSENGER CORRIDORS',
      desc: 'Low-maintenance, high-precision turnout frogs and catenary arm forgings engineered for 200+ MPH high-speed rail lines.',
      tag: 'HIGH-SPEED'
    },
    {
      title: 'MINING & HEAVY INDUSTRIAL LOGISTICS',
      desc: 'Extreme impact haul truck spindle castings, dragline bucket teeth, and heavy industrial turnout trackwork sets.',
      tag: 'HEAVY HAUL'
    }
  ];

  return (
    <section id="markets" className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>MARKET SECTORS</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '-0.02em', fontFamily: "'Manrope', sans-serif !important" }}>
              MARKETS WE SERVE
            </h2>
            <p style={{ fontSize: '14px', color: '#4CAF50', margin: 0, maxWidth: '580px', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              Engineered rail components deployed across North American freight networks, global transit systems, and heavy industrial mining lines.
            </p>
          </div>

          <a 
            href="#contact" 
            className="btn-animated"
            style={{ 
              color: '#1B5E20', 
              fontWeight: 900, 
              fontSize: '12.5px', 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px',
              borderBottom: '2px solid #4CAF50',
              paddingBottom: '2px',
              fontFamily: "'Manrope', sans-serif !important"
            }}
          >
            <span>SUBMIT TECHNICAL SPECIFICATION</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* 4 Multi-Column Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {markets.map((market, idx) => (
            <div 
              key={idx}
              className="card-hover-industrial"
              style={{ 
                padding: '2.25rem 1.75rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                minHeight: '300px'
              }}
            >
              <div>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem', fontFamily: "'Manrope', sans-serif !important" }}>
                  {market.tag}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#111827', letterSpacing: '0.02em', lineHeight: 1.25, marginBottom: '1rem', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  {market.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#2E7D32', lineHeight: 1.6, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                  {market.desc}
                </p>
              </div>

              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  LEARN MORE
                </span>
                <ArrowRight size={14} color="#4CAF50" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MarketsSection;
