import React from 'react';
import { ShieldCheck, TrainTrack, Box, Shield } from 'lucide-react';

export const FactoryOverview: React.FC = () => {
  const stats = [
    {
      value: '1.2M+',
      label: 'SQ. FT. MANUFACTURING COMPLEX',
      sub: 'Integrated foundry, forge & CNC machining complexes',
      icon: TrainTrack
    },
    {
      value: 'AAR M-1003',
      label: 'QUALITY CERTIFICATION',
      sub: 'Certified metal engineering excellence',
      icon: ShieldCheck
    },
    {
      value: '25,000+',
      label: 'PRODUCTS DELIVERED',
      sub: 'AREMA & AAR M-1003 certified rail components',
      icon: Box
    },
    {
      value: '600+',
      label: 'GLOBAL CUSTOMERS',
      sub: 'Class I railroads, transit agencies & OEMs worldwide',
      icon: Shield
    }
  ];

  return (
    <section className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        <div className="factory-overview-grid">
          
          {/* Left Column: Large Machined Axlebox Housing Photo */}
          <div className="factory-col-img">
            <img 
              src="/images/istockphoto-1196704251-2048x2048.jpg" 
              alt="Westpoint 5-Axis CNC Machined Axlebox Housing" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 60%, rgba(27, 94, 32, 0.95) 100%)' }} />
          </div>

          {/* Right Column: Dark Green Stats Panel */}
          <div className="factory-col-stats">
            <div className="grid-responsive-2" style={{ gap: '2rem 1.5rem' }}>
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div key={idx}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '2px', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid #81C784', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#81C784' }}>
                        <IconComp size={16} color="#81C784" />
                      </div>
                      <span style={{ fontSize: '1.85rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, fontFamily: "'Manrope', sans-serif !important" }}>
                        {stat.value}
                      </span>
                    </div>

                    <strong style={{ fontSize: '11px', fontWeight: 900, color: '#81C784', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>
                      {stat.label}
                    </strong>
                    <span style={{ fontSize: '11px', color: '#FFFFFF', lineHeight: 1.4, display: 'block', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
                      {stat.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FactoryOverview;
