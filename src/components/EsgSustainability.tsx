import React from 'react';

interface EsgSustainabilityProps {
  clinkerRatio: number;
  setClinkerRatio: (val: number) => void;
  esgVolumeVal: string;
}

export const EsgSustainability: React.FC<EsgSustainabilityProps> = ({
  clinkerRatio,
  setClinkerRatio,
  esgVolumeVal
}) => {
  const co2ReducedLbs = Math.round((parseFloat(esgVolumeVal) || 100) * clinkerRatio * 0.12);
  const percentCo2Cut = Math.round(clinkerRatio * 0.95);

  const features = [
    { title: '98% Foundry Sand Recovery', desc: 'Closed-loop thermal reclamation system recycling silica molding sand' },
    { title: 'ISO 14001:2015 Certified', desc: 'Zero-discharge environmental management across all foundry units' },
    { title: '100% Recycled Scrap Steel', desc: 'Electric arc furnaces powered by scrap metal & renewable power' },
    { title: 'Sub-Zero Fatigue Extended Life', desc: 'Extends turnout frog & axle service life, lowering total life carbon' }
  ];

  return (
    <section id="sustainability" style={{ background: '#FFFFFF', padding: '48px 0', overflow: 'hidden' }}>
      <div style={{ width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px', padding: '0 5vw' }}>
          <span style={{ color: '#195B34', fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>DECARBONIZATION & METALLURGY</span>
          <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 900, color: '#195B34', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>Sustainable Foundry Operations</h2>
          <div style={{ width: '36px', height: '3px', background: '#195B34', margin: '10px auto 0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', alignItems: 'center' }}>
          {/* Left Column: Info & Interactive Estimator */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '5vw', paddingRight: '5vw', paddingBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ background: '#ECFDF5', color: '#195B34', border: '1px solid #A7F3D0', padding: '4px 10px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Green Foundry Tech
                </span>
                <span style={{ color: '#15803D', fontSize: '12px', fontWeight: 600 }}>ISO 14001 &amp; AAR M-1003 Compliant</span>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#195B34', marginBottom: '12px', lineHeight: 1.25 }}>
                Recycled Steel Melting &amp; Sand Recovery
              </h3>
              <p style={{ color: '#15803D', fontSize: '14px', lineHeight: 1.55, marginBottom: '20px' }}>
                Westpoint Group Companies utilizes electric induction melting fueled by 100% recycled structural scrap steel and closed-loop thermal sand reclamation to manufacture low-emission, ultra-durable rail turnout castings and drop forgings.
              </p>

              {/* 4 Feature Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E5E7EB', padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <strong style={{ fontSize: '13px', color: '#195B34', fontWeight: 800 }}>{f.title}</strong>
                    </div>
                    <span style={{ fontSize: '11.5px', color: '#15803D', lineHeight: 1.4, display: 'block', paddingLeft: '22px' }}>{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Recycling Rate Box */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E5E7EB', borderLeft: '4px solid #195B34', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  SCRAP STEEL RECYCLING RATE: <span style={{ color: '#195B34', fontSize: '13px' }}>{clinkerRatio}%</span>
                </label>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {[20, 35, 50].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setClinkerRatio(preset)}
                      style={{
                        background: clinkerRatio === preset ? '#195B34' : '#FFFFFF',
                        color: clinkerRatio === preset ? '#FFFFFF' : '#2E7D32',
                        border: '1px solid #E5E7EB',
                        padding: '3px 8px',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {preset}%
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={clinkerRatio}
                onChange={(e) => setClinkerRatio(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#195B34', cursor: 'pointer' }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#2E7D32', marginTop: '8px' }}>
                <span>Min: 10% Recycled</span>
                <span style={{ color: '#195B34', fontWeight: 800 }}>Estimated CO₂ Reduction: {percentCo2Cut}%</span>
                <span>Max: 60% Recycled</span>
              </div>

              <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11.5px', color: '#2E7D32' }}>
                  Output Base: <strong style={{ color: '#1B5E20' }}>{esgVolumeVal} Tons</strong>
                </span>
                <span style={{ fontSize: '12px', color: '#195B34', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                  {co2ReducedLbs.toLocaleString()} lbs CO₂ Offset
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Floating Glass Stat Overlay */}
          <div style={{ position: 'relative', height: '100%', minHeight: '340px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
            <img
              src="/images/rail_trackwork_mfg.png"
              alt="Sustainable Westpoint metal casting facility"
              style={{ width: '100%', height: '100%', minHeight: '340px', objectFit: 'cover', display: 'block' }}
            />
            {/* Gradient Overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.7) 100%)' }} />

            {/* Top Badge with SVG Icon */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', color: '#195B34', padding: '6px 12px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.05em', borderLeft: '3px solid #195B34', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
              ISO 14001 GREEN FOUNDRY
            </div>

            {/* Bottom Glass Card */}
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', padding: '16px 20px', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399', display: 'inline-block' }} />
                  <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Real-Time CO₂ Saved</span>
                </div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#34D399', lineHeight: 1.1 }}>
                  {co2ReducedLbs.toLocaleString()} <span style={{ fontSize: '13px', color: '#CBD5E1', fontWeight: 600 }}>lbs</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '10.5px', color: '#94A3B8', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Scrap Ratio</span>
                <span style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF' }}>{clinkerRatio}% Scrap Metal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsgSustainability;
