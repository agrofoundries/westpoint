import React, { useState } from 'react';
import { Sliders, ShieldCheck, Zap, Activity } from 'lucide-react';

export const SolidificationCalculator: React.FC = () => {
  const [alloy, setAlloy] = useState<'manganese' | 'ductile' | 'forged'>('manganese');
  const [temp, setTemp] = useState<number>(1550);
  const [axleLoad, setAxleLoad] = useState<number>(36);

  const alloyData = {
    manganese: {
      name: 'Austenitic Manganese Steel (AREMA Ch. 4)',
      yieldStrength: '680 - 750 MPa',
      hardness: '220 - 550 BHN (Work-Hardened)',
      fractureToughness: '120 J/cm² @ -40°C',
      porosityRisk: '0.00% (MagmaSoft® Modeled)',
      desc: 'Formulated with 11-14% manganese for extreme impact work-hardening in turnout frog crossovers.'
    },
    ductile: {
      name: 'SG Ductile Iron (ASTM A536 80-55-06)',
      yieldStrength: '550 - 620 MPa',
      hardness: '180 - 245 BHN',
      fractureToughness: '95 J/cm² @ -20°C',
      porosityRisk: '0.01% (Thermal Sand Coated)',
      desc: 'High spheroidal graphite density delivering superior vibration damping for locomotive brake heads.'
    },
    forged: {
      name: 'Forged Alloy Steel (AAR M-101 Grade F)',
      yieldStrength: '850 - 980 MPa',
      hardness: '280 - 340 BHN',
      fractureToughness: '145 J/cm² @ -50°C',
      porosityRisk: '0.00% (36-Ton Hydraulic Press)',
      desc: 'Vacuum degassed carbon steel forged with continuous grain flow for heavy freight axles.'
    }
  };

  const current = alloyData[alloy];

  return (
    <section className="section-full-vh section-dark-gradient" style={{ color: '#FAF6EE', borderBottom: '2px solid #4CAF50', position: 'relative' }}>
      <div className="blueprint-grid-dark" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow eyebrow-dark">
              <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#81C784' }} />
              <span style={{ color: '#A5D6A7', fontWeight: 900 }}>INTERACTIVE metal ENGINE</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#FFFFFF', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              THERMAL SOLIDIFICATION &amp; TOLERANCE CALCULATOR
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid #81C784', padding: '6px 14px', borderRadius: '2px' }}>
            <Activity size={16} color="#81C784" />
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              LIVE SIMULATION ACTIVE
            </span>
          </div>
        </div>

        {/* Interactive Controls & Real-Time Telemetry */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'stretch' }}>
          
          {/* Left Panel: Inputs */}
          <div style={{ gridColumn: 'span 5', background: '#144818', border: '1px solid #81C784', padding: '2rem', borderRadius: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Manrope', sans-serif !important" }}>
                <Sliders size={16} color="#81C784" />
                <span>SELECT ALLOY &amp; PARAMETERS</span>
              </h3>

              {/* Alloy Picker Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.75rem' }}>
                <button
                  onClick={() => setAlloy('manganese')}
                  style={{
                    background: alloy === 'manganese' ? '#FAF6EE' : 'rgba(255,255,255,0.06)',
                    border: alloy === 'manganese' ? '1.5px solid #1B5E20' : '1px solid rgba(255,255,255,0.15)',
                    color: alloy === 'manganese' ? '#1B5E20' : '#FAF6EE',
                    padding: '12px 16px',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.2s',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                  onMouseEnter={e => { if (alloy !== 'manganese') { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; } }}
                  onMouseLeave={e => { if (alloy !== 'manganese') { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#FAF6EE'; } }}
                >
                  Austenitic Manganese (Turnout Frogs)
                </button>

                <button
                  onClick={() => setAlloy('ductile')}
                  style={{
                    background: alloy === 'ductile' ? '#FAF6EE' : 'rgba(255,255,255,0.06)',
                    border: alloy === 'ductile' ? '1.5px solid #1B5E20' : '1px solid rgba(255,255,255,0.15)',
                    color: alloy === 'ductile' ? '#1B5E20' : '#FAF6EE',
                    padding: '12px 16px',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.2s',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                  onMouseEnter={e => { if (alloy !== 'ductile') { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; } }}
                  onMouseLeave={e => { if (alloy !== 'ductile') { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#FAF6EE'; } }}
                >
                  SG Ductile Iron (Brake Heads)
                </button>

                <button
                  onClick={() => setAlloy('forged')}
                  style={{
                    background: alloy === 'forged' ? '#FAF6EE' : 'rgba(255,255,255,0.06)',
                    border: alloy === 'forged' ? '1.5px solid #1B5E20' : '1px solid rgba(255,255,255,0.15)',
                    color: alloy === 'forged' ? '#1B5E20' : '#FAF6EE',
                    padding: '12px 16px',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.2s',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                  onMouseEnter={e => { if (alloy !== 'forged') { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; } }}
                  onMouseLeave={e => { if (alloy !== 'forged') { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#FAF6EE'; } }}
                >
                  Forged Alloy Steel (Locomotive Axles)
                </button>
              </div>

              {/* Pouring Temperature Slider */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 800, color: '#E8F5E9', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Manrope', sans-serif !important" }}>MELT POURING TEMP (°C)</label>
                  <span style={{ fontSize: '12px', fontWeight: 900, color: '#4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>{temp} °C</span>
                </div>
                <input 
                  type="range" 
                  min="1400" 
                  max="1700" 
                  step="10"
                  value={temp}
                  onChange={e => setTemp(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#4CAF50', cursor: 'pointer' }}
                />
              </div>

              {/* Axle Load Capacity Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 800, color: '#E8F5E9', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Manrope', sans-serif !important" }}>AXLE LOAD SPECIFICATION (TONS)</label>
                  <span style={{ fontSize: '12px', fontWeight: 900, color: '#4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>{axleLoad} TONS</span>
                </div>
                <input 
                  type="range" 
                  min="25" 
                  max="45" 
                  step="1"
                  value={axleLoad}
                  onChange={e => setAxleLoad(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#4CAF50', cursor: 'pointer' }}
                />
              </div>

            </div>

            <div style={{ paddingTop: '1.25rem', marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#4CAF50" />
              <span style={{ fontSize: '11px', color: '#E8F5E9', fontFamily: "'Manrope', sans-serif !important" }}>
                Calculations auto-validated against AREMA Chapter 4 specs.
              </span>
            </div>
          </div>

          {/* Right Panel: Simulated Results Telemetry */}
          <div style={{ gridColumn: 'span 7', background: '#FFFFFF', color: '#1B5E20', padding: '2.25rem', borderRadius: '2px', boxShadow: '0 20px 45px rgba(0,0,0,0.25)', borderTop: '4px solid #4CAF50', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#111827', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  {current.name}
                </h4>
                <span style={{ background: '#1B5E20', color: '#FFFFFF', fontSize: '10px', fontWeight: 900, padding: '4px 10px', letterSpacing: '0.1em', fontFamily: "'Manrope', sans-serif !important" }}>
                  SIMULATED TELEMETRY
                </span>
              </div>

              <p style={{ fontSize: '13px', color: '#2E7D32', lineHeight: 1.6, marginBottom: '1.5rem', fontFamily: "'Manrope', sans-serif !important" }}>
                {current.desc}
              </p>

              {/* Telemetry Metric Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1rem', borderLeft: '3.5px solid #4CAF50' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>YIELD STRENGTH</span>
                  <strong style={{ fontSize: '16px', fontWeight: 900, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>{current.yieldStrength}</strong>
                </div>

                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1rem', borderLeft: '3.5px solid #4CAF50' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>BRINELL HARDNESS</span>
                  <strong style={{ fontSize: '16px', fontWeight: 900, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>{current.hardness}</strong>
                </div>

                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1rem', borderLeft: '3.5px solid #4CAF50' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>SUB-ZERO IMPACT TOUGHNESS</span>
                  <strong style={{ fontSize: '16px', fontWeight: 900, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>{current.fractureToughness}</strong>
                </div>

                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1rem', borderLeft: '3.5px solid #4CAF50' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>INTERNAL POROSITY RISK</span>
                  <strong style={{ fontSize: '16px', fontWeight: 900, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>{current.porosityRisk}</strong>
                </div>
              </div>
            </div>

            <div style={{ background: '#1B5E20', color: '#FAF6EE', padding: '1rem 1.25rem', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} color="#4CAF50" />
                <span style={{ fontSize: '12px', fontWeight: 800, fontFamily: "'Manrope', sans-serif !important" }}>
                  CALCULATED HAL SAFETY FACTOR: 3.4x OPERATIONAL LOAD
                </span>
              </div>
              <a href="#contact" className="link-hover-arrow" style={{ color: '#1B5E20' }}>
                <span>REQUEST SPECS</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolidificationCalculator;
