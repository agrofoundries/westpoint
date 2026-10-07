import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ManufacturingCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'CASTING',
      sub: 'Electric Induction & Solidification',
      desc: 'High-capacity electric arc melting with MagmaSoft® 3D thermal solidification modeling for manganese steel and ductile iron.',
      img: '/images/real_metal_casting_stock.jpg'
    },
    {
      title: 'FORGING',
      sub: 'Heavy Drop & Ring Rolling',
      desc: 'Precision drop forging presses producing high-density grain structure carbon and alloy steel axles, wheelsets, and couplers.',
      img: '/images/real_steel_gears_stock.jpg'
    },
    {
      title: 'MACHINING',
      sub: '5-Axis CNC Milling & Turning',
      desc: 'Robotic 5-axis heavy CNC machining centers operating to 0.05mm tolerances for turnout frogs, axles, and bogie frames.',
      img: '/images/real_cnc_machining_stock.jpg'
    },
    {
      title: 'ASSEMBLY',
      sub: 'Turnout & Wheelset Fitting',
      desc: 'Full mechanical assembly of trackwork turnout sets, pantograph catenary arms, and automated rail coupling gear.',
      img: '/images/real_rail_track_stock.jpg'
    },
    {
      title: 'TESTING',
      sub: '100% Volumetric NDT & QA',
      desc: 'Spectrometric chemical analysis, ultrasonic flaw detection, magnetic particle scanning, and sub-zero impact testing.',
      img: '/images/real_train_wheelset_stock.jpg'
    }
  ];

  return (
    <section id="capabilities" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', overflow: 'hidden' }}>
      {/* Background Blueprint Grid & Radial Glow Accents */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
      <div className="section-shape-gold" style={{ top: '-10%', left: '-5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>END-TO-END INDUSTRIAL PRODUCTION</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '-0.02em', fontFamily: "'Manrope', sans-serif !important" }}>
              MANUFACTURING CAPABILITIES
            </h2>
            <p style={{ fontSize: '14px', color: '#2E7D32', margin: 0, maxWidth: '580px', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              Integrated manufacturing from melting and forging to precision CNC machining and certified non-destructive testing.
            </p>
          </div>

          <a 
            href="#process" 
            className="link-hover-arrow"
          >
            <span>OUR PROCESS TIMELINE</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* 5 Horizontal / Grid Cards Matching Reference Screenshot */}
        <div className="grid-responsive-5">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx}
              className="card-hover-industrial img-hover-zoom"
              style={{ 
                background: '#1B5E20', 
                color: '#FAF6EE', 
                border: '1px solid #1B5E20', 
                borderRadius: '2px',
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '320px', 
                position: 'relative' 
              }}
            >
              {/* Background Photo */}
              <img 
                src={cap.img} 
                alt={cap.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
              />

              {/* Dark Overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(14, 54, 18, 0.96) 0%, rgba(27, 94, 32, 0.5) 60%, transparent 100%)' }} />

              {/* Card Label Overlay */}
              <div style={{ position: 'relative', zIndex: 10, padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>
                  {cap.sub}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FAF6EE', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>
                  {cap.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ManufacturingCapabilities;
