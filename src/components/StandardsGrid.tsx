import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const StandardsGrid: React.FC = () => {
  const standards = [
    {
      code: 'ISO 9001:2015',
      name: 'QUALITY MANAGEMENT SYSTEM',
      desc: 'Certified manufacturing facilities with full material traceability from scrap steel melt to final dispatch.'
    },
    {
      code: 'IATF 16949',
      name: 'HEAVY EQUIPMENT & FORGING QA',
      desc: 'PPAP Level 3 documentation and defect prevention management across drop forging operations.'
    },
    {
      code: 'AAR M-1003',
      name: 'ASSOCIATION OF AMERICAN RAILROADS',
      desc: 'Quality assurance certification for locomotive wheelsets, axles, knuckles, and cast steel bolsters.'
    },
    {
      code: 'AREMA CHAPTER 4',
      name: 'RAILWAY ENGINEERING TRACKWORK',
      desc: 'Full specification compliance for manganese frog crossovers, turnout switch heels, and tie plates.'
    },
    {
      code: 'EN 13674',
      name: 'EUROPEAN RAILWAY APPLICATIONS',
      desc: 'Material composition and fatigue resistance benchmarks for transit catenary hardware and rail fasteners.'
    },
    {
      code: 'FRA RULE 213',
      name: 'FEDERAL RAILROAD ADMINISTRATION',
      desc: 'Safety standards for Class 1 through Class 9 heavy haul freight and high-speed passenger lines.'
    }
  ];

  return (
    <section id="standards" className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', position: 'relative', overflow: 'hidden' }}>
      {/* Background Blueprint Grid & Radial Glow Accents */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
      <div className="section-shape-gold" style={{ bottom: '-10%', right: '-5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>CERTIFICATIONS &amp; GLOBAL COMPLIANCE</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              INTERNATIONAL STANDARDS
            </h2>
          </div>

          <a href="#contact" className="link-hover-arrow">
            <span>REQUEST COMPLIANCE CERTIFICATES</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* 6 High-Contrast Certified Standards Cards Grid */}
        <div className="grid-responsive-3" style={{ marginBottom: '2.5rem' }}>
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="card-hover-industrial"
              style={{
                background: '#F8F9FA',
                border: '1px solid #D1D5DB',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '2px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#111827', letterSpacing: '0.02em', fontFamily: "'Manrope', sans-serif !important" }}>
                    {std.code}
                  </span>
                  <div style={{ width: '28px', height: '28px', borderRadius: '2px', background: '#1B5E20', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={16} color="#FFFFFF" />
                  </div>
                </div>

                <strong style={{ fontSize: '12px', fontWeight: 900, color: '#111827', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.65rem', fontFamily: "'Manrope', sans-serif !important" }}>
                  {std.name}
                </strong>

                <p style={{ fontSize: '13px', color: '#2E7D32', lineHeight: 1.6, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                  {std.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Visual Banner: Train Wheels & Gearboxes */}
        <div className="grid-responsive-2">

          <div className="img-hover-zoom" style={{ border: '1px solid #D1D5DB', borderRadius: '2px', overflow: 'hidden', position: 'relative', height: '220px' }}>
            <img
              src="/images/real_train_wheelset_stock.jpg"
              alt="Heavy Duty Locomotive Wheelset & Gear Assembly"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,94,32,0.9), transparent)', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                AAR M-101 CERTIFIED WHEELSETS
              </span>
              <h3 style={{ fontSize: '15px', fontWeight: 900, color: '#FFFFFF', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                Heavy Freight Train Axle &amp; Wheel Assemblies
              </h3>
            </div>
          </div>

          <div className="img-hover-zoom" style={{ border: '1px solid #D1D5DB', borderRadius: '2px', overflow: 'hidden', position: 'relative', height: '220px' }}>
            <img
              src="/images/144461984-1024x1024 (1).jpg"
              alt="Machined Industrial Rotavator Gearboxes"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,94,32,0.9), transparent)', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                PRECISION GEARING DIVISIONS
              </span>
              <h3 style={{ fontSize: '15px', fontWeight: 900, color: '#FFFFFF', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                Machined Rotavator Gearboxes &amp; Sprockets
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StandardsGrid;
