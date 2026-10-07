import React from 'react';

export const EngineeringExcellence: React.FC = () => {
  return (
    <section className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        <div className="engineering-grid">
          
          {/* Left Column: Real CNC Precision Photo */}
          <div className="engineering-col-left">
            <div className="img-hover-zoom" style={{ border: '1px solid #E5E7EB', background: '#F8F9FA', position: 'relative' }}>
              <img 
                src="/images/real_cnc_machining_stock.jpg" 
                alt="5-Axis CNC Precision Machining of Steel Component" 
                style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#1B5E20', color: '#FAF6EE', fontSize: '10px', fontWeight: 900, padding: '4px 10px', letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid #4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>
                CNC TOLERANCE: ±0.05MM
              </div>
            </div>
          </div>

          {/* Right Column: Technical Details */}
          <div className="engineering-col-right">
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>PRECISION METALLURGY &amp; MACHINING</span>
            </div>

            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: '0 0 1.25rem 0', lineHeight: 1.15, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              ENGINEERING EXCELLENCE &amp; CAD SPECS
            </h2>

            <p style={{ fontSize: '1rem', color: '#2E7D32', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              Using MagmaSoft® 3D thermal simulation and robotic 5-axis CNC machining, Westpoint Group Companies eliminates internal porosity and guarantees zero-defect grain boundaries for high-stress turnout trackwork and forged axles.
            </p>

            {/* 4 Feature Bullet Blocks */}
            <div className="grid-responsive-2" style={{ gap: '1.5rem' }}>
              <div style={{ borderLeft: '3px solid #4CAF50', paddingLeft: '1rem' }}>
                <strong style={{ fontSize: '13px', color: '#1B5E20', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>
                  3D Thermal Simulation
                </strong>
                <span style={{ fontSize: '12px', color: '#4CAF50', marginTop: '2px', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                  Predictive liquid metal flow modeling
                </span>
              </div>

              <div style={{ borderLeft: '3px solid #4CAF50', paddingLeft: '1rem' }}>
                <strong style={{ fontSize: '13px', color: '#1B5E20', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>
                  Sub-Zero Impact QA
                </strong>
                <span style={{ fontSize: '12px', color: '#4CAF50', marginTop: '2px', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                  Charpy V-notch fracture toughness
                </span>
              </div>

              <div style={{ borderLeft: '3px solid #4CAF50', paddingLeft: '1rem' }}>
                <strong style={{ fontSize: '13px', color: '#1B5E20', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>
                  Austenitic Mn Steel
                </strong>
                <span style={{ fontSize: '12px', color: '#4CAF50', marginTop: '2px', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                  11–14% work-hardening manganese
                </span>
              </div>

              <div style={{ borderLeft: '3px solid #4CAF50', paddingLeft: '1rem' }}>
                <strong style={{ fontSize: '13px', color: '#1B5E20', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>
                  100% Ultrasonic NDT
                </strong>
                <span style={{ fontSize: '12px', color: '#4CAF50', marginTop: '2px', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                  Full volumetric flaw scanning
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EngineeringExcellence;
