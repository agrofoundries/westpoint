import React from 'react';

export const FleetOperations: React.FC = () => {
  const fleetSpecs = [
    { title: 'Live Slump Telemetry', desc: 'Sensors continuously measure hydration consistency inside every mixer drum.' },
    { title: 'Automated Batching', desc: 'Digital tower controls eliminate human volumetric error & batch variation.' },
    { title: 'GPS Dispatch Matrix', desc: 'Predictive traffic routing coordinates plant releases for peak workability.' },
    { title: 'Booster-Axle Mixers', desc: 'Heavy-duty high-capacity trucks compliant with state axle weight limits.' }
  ];

  return (
    <section id="fleet" style={{ background: '#FFFFFF', padding: '48px 5vw', borderBottom: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#1B5E20', fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>FLEET MANAGEMENT</span>
          <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 900, color: '#195B34', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '16px' }}>Fleet &amp; Operations</h2>
          <p style={{ color: '#2E7D32', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '24px' }}>
            Our logistics operations utilize heavy-duty booster-axle mixers. Each mixer is equipped with computerized drum controls and satellite tracking to ensure chemical hydration properties remain within precise parameters during transit.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
            {fleetSpecs.map((spec, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', border: '1px solid #E5E7EB', padding: '14px 16px' }}>
                <strong style={{ fontSize: '13.5px', color: '#1B5E20', display: 'block', fontWeight: 800, marginBottom: '4px' }}>{spec.title}</strong>
                <span style={{ color: '#2E7D32', fontSize: '12px', lineHeight: 1.4, display: 'block' }}>{spec.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
          <img
            src="/images/rail_forging_press.png"
            alt="Rail logistics facility"
            style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)', padding: '14px 18px', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '10.5px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '2px' }}>Active Fleet Status</span>
              <strong style={{ fontSize: '15px', color: '#34D399', fontWeight: 800 }}>● 100% Computerized GPS Tracking</strong>
            </div>
            <span style={{ fontSize: '12px', background: '#195B34', color: '#FFFFFF', padding: '4px 10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              24/7 Dispatch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetOperations;
