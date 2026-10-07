import React from 'react';

export const PerformanceMetrics: React.FC = () => {
  const metrics = [
    { label: 'Active Projects', val: '1,200+' },
    { label: 'Batch Plants', val: '42' },
    { label: 'Booster Fleet', val: '450+' },
    { label: 'Delivered (CY)', val: '12.4M' },
    { label: 'Dispatch Hubs', val: '4' },
    { label: 'On-Time Pour', val: '98.6%' },
    { label: 'Safety Index', val: '99.9%' }
  ];

  return (
    <section id="performance" style={{ background: '#0F291E', color: '#FFFFFF', padding: '48px 5vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ color: '#34D399', fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>KEY METRICS</span>
          <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>Company Performance</h2>
          <div style={{ width: '36px', height: '3px', background: '#34D399', margin: '10px auto 0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          {metrics.map((metric, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '20px 16px',
                textAlign: 'center'
              }}
            >
              <span style={{ display: 'block', fontSize: '11px', color: '#A7F3D0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: 700 }}>{metric.label}</span>
              <strong style={{ fontSize: '32px', fontWeight: 900, color: '#34D399', display: 'block', lineHeight: 1 }}>{metric.val}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
