import React from 'react';

interface LogisticsHub {
  name: string;
  activeMixers: number;
  yardsLoaded: string;
  transitTime: string;
  status: string;
}

interface LogisticsCoverageProps {
  logisticsHubData: Record<'houston' | 'chicago' | 'denver' | 'dallas', LogisticsHub>;
  activeHub: 'houston' | 'chicago' | 'denver' | 'dallas';
  setActiveHub: (hub: 'houston' | 'chicago' | 'denver' | 'dallas') => void;
}

export const LogisticsCoverage: React.FC<LogisticsCoverageProps> = ({
  logisticsHubData,
  activeHub,
  setActiveHub
}) => {
  return (
    <section id="coverage" style={{ background: '#14532D', color: '#FFFFFF', padding: '48px 5vw' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ color: '#34D399', fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>DISTRIBUTION AREA</span>
          <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>Nationwide Coverage</h2>
          <div style={{ width: '36px', height: '3px', background: '#34D399', margin: '10px auto 0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', alignItems: 'center' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '24px', textAlign: 'center' }}>
            <svg viewBox="0 0 100 60" style={{ width: '100%', height: 'auto', maxHeight: '220px' }}>
              <path d="M15,15 Q30,10 50,15 T85,15 Q90,30 80,45 T45,55 Q25,50 15,35 Z" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
              <circle cx="28" cy="20" r="2" fill="#34D399" />
              <circle cx="48" cy="30" r="2" fill="#34D399" />
              <circle cx="68" cy="22" r="2" fill="#34D399" />
              <circle cx="78" cy="40" r="2" fill="#34D399" />
              <circle cx="35" cy="42" r="2" fill="#34D399" />
              <line x1="28" y1="20" x2="48" y2="30" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
              <line x1="48" y1="30" x2="68" y2="22" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
              <line x1="48" y1="30" x2="35" y2="42" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
              <line x1="68" y1="22" x2="78" y2="40" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
            </svg>
            <span style={{ fontSize: '10.5px', color: '#A7F3D0', display: 'block', marginTop: '12px', fontWeight: 700 }}>AUTOMATED DISPATCH HUB GEOLOCATION MATRIX</span>
          </div>

          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>Rail Component Freight & Dispatch Network</h3>
            <p style={{ color: '#ECFDF5', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '20px', opacity: 0.9 }}>
              Westpoint Group Companies operates an integrated network of specialized foundries, CNC machining facilities, and rail depot centers across North America with direct Class I rail siding access.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={{ borderLeft: '3px solid #34D399', paddingLeft: '12px' }}>
                <strong style={{ fontSize: '15px', display: 'block', color: '#FFFFFF' }}>Class I Siding Access</strong>
                <span style={{ fontSize: '12px', color: '#A7F3D0' }}>Direct railcar loading & freight transport</span>
              </div>
              <div style={{ borderLeft: '3px solid #34D399', paddingLeft: '12px' }}>
                <strong style={{ fontSize: '15px', display: 'block', color: '#FFFFFF' }}>24-Hour Dispatch</strong>
                <span style={{ fontSize: '12px', color: '#A7F3D0' }}>Emergency turnout frog replacements</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}>
              {(Object.keys(logisticsHubData) as Array<keyof typeof logisticsHubData>).map((hubKey) => {
                const hub = logisticsHubData[hubKey];
                const isSelected = activeHub === hubKey;
                return (
                  <button
                    key={hubKey}
                    onClick={() => setActiveHub(hubKey)}
                    style={{
                      padding: '10px 14px',
                      border: isSelected ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.2)',
                      background: isSelected ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.05)',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <strong style={{ fontSize: '12.5px', display: 'block', color: isSelected ? '#34D399' : '#FFFFFF' }}>{hub.name}</strong>
                    <span style={{ fontSize: '10.5px', color: '#A7F3D0' }}>{hub.yardsLoaded} Output</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsCoverage;
