import React from 'react';
import { Leaf, Recycle, Zap } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" style={{ background: '#FFFFFF', padding: '5.5rem 0', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Side: Factual Metrics */}
          <div style={{ gridColumn: 'span 7' }}>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>DECARBONIZED FOUNDRY OPERATIONS</span>
            </div>

            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 800, margin: '0 0 1.25rem 0', lineHeight: 1.2, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              SUSTAINABLE metal PRODUCTION
            </h2>

            <p style={{ fontSize: '1rem', color: '#2E7D32', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 500, maxWidth: '640px', fontFamily: "'Manrope', sans-serif !important" }}>
              Westpoint Group Companies operates electric arc and induction melting furnaces powered by 100% recycled structural scrap steel. Combined with closed-loop thermal sand reclamation, our foundries minimize environmental impact without compromising fatigue endurance or AREMA standards.
            </p>

            {/* 3 Factual Sustainability Pillar Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              <div style={{ background: '#FAF6EE', border: '1px solid #E5E7EB', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#1B5E20' }}>
                  <Recycle size={18} color="#4CAF50" />
                  <strong style={{ fontSize: '1.25rem', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>98%</strong>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#1B5E20', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>
                  SAND RECOVERY
                </span>
                <span style={{ fontSize: '11px', color: '#2E7D32', marginTop: '2px', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                  Closed-loop thermal silica reclamation
                </span>
              </div>

              <div style={{ background: '#FAF6EE', border: '1px solid #E5E7EB', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#1B5E20' }}>
                  <Zap size={18} color="#4CAF50" />
                  <strong style={{ fontSize: '1.25rem', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>100%</strong>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#1B5E20', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>
                  RECYCLED SCRAP
                </span>
                <span style={{ fontSize: '11px', color: '#2E7D32', marginTop: '2px', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                  Electric induction furnace feedstock
                </span>
              </div>

              <div style={{ background: '#FAF6EE', border: '1px solid #E5E7EB', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#1B5E20' }}>
                  <Leaf size={18} color="#4CAF50" />
                  <strong style={{ fontSize: '1.25rem', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>ISO 14001</strong>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#1B5E20', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>
                  ENVIRONMENTAL QA
                </span>
                <span style={{ fontSize: '11px', color: '#2E7D32', marginTop: '2px', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                  Zero-discharge plant management
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Clean Heavy Rail Trackwork Facility Photo */}
          <div style={{ gridColumn: 'span 5' }}>
            <div className="img-hover-zoom" style={{ border: '1px solid #E5E7EB', background: '#FAF6EE' }}>
              <img 
                src="/images/prod_railway_track_plates.jpg" 
                alt="Westpoint Environmental Heavy Rail metal Foundry" 
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
