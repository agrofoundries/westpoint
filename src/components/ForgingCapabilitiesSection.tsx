import React from 'react';
import {
  Hammer, Disc, Zap, Maximize2, Flame, Snowflake, ShieldCheck, Cpu, Layers, Wrench
} from 'lucide-react';

const forgingCapabilities = [
  {
    id: '01',
    title: 'Hammer & Upsetter Forgings',
    icon: Hammer
  },
  {
    id: '02',
    title: 'Ring Rolling',
    icon: Disc
  },
  {
    id: '03',
    title: 'Press Forging',
    icon: Zap
  },
  {
    id: '04',
    title: 'Extrusion Forging',
    icon: Maximize2
  },
  {
    id: '05',
    title: 'Warm Forging',
    icon: Flame
  },
  {
    id: '06',
    title: 'Cold Forging',
    icon: Snowflake
  },
  {
    id: '07',
    title: 'Aluminium Forging',
    icon: ShieldCheck
  },
  {
    id: '08',
    title: 'Axle Shaft',
    icon: Cpu
  },
  {
    id: '09',
    title: 'Small Ring Rolling (Upto 200mm)',
    icon: Layers
  },
  {
    id: '10',
    title: 'Excavator Pins, Fulcrum Pins and U Bolt',
    icon: Wrench
  }
];

export const ForgingCapabilitiesSection: React.FC = () => {
  return (
    <section
      id="forging-capabilities"
      style={{
        padding: '5rem 2vw',
        background: 'linear-gradient(180deg, #0B2212 0%, #05140A 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Manrope', sans-serif !important"
      }}
    >
      {/* Decorative Background Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(129, 199, 132, 0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.6,
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
          
          {/* Eyebrow Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '9999px',
              background: 'rgba(27, 94, 32, 0.85)',
              border: '1px solid rgba(129, 199, 132, 0.5)',
              marginBottom: '1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#69F0AE', boxShadow: '0 0 8px #69F0AE' }} />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#E8F5E9',
                fontFamily: "'Manrope', sans-serif !important"
              }}
            >
              FORGING INTO THE FUTURE.......
            </span>
          </div>

          {/* Main Title */}
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              color: '#FFFFFF',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              margin: '0 0 0.75rem 0',
              fontFamily: "'Manrope', sans-serif !important",
              textShadow: '0 4px 16px rgba(0,0,0,0.5)'
            }}
          >
            OUR FORGING CAPABILITIES
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: '#A5D6A7',
              lineHeight: 1.5,
              fontFamily: "'Manrope', sans-serif !important",
              margin: 0
            }}
          >
            State-of-the-art precision forging lines and alloy component manufacturing
          </p>
        </div>

        {/* 5-Column Responsive Square Cards Grid */}
        <style>{`
          .forging-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1.5rem;
          }
          @media (max-width: 1200px) {
            .forging-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (max-width: 768px) {
            .forging-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 480px) {
            .forging-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="forging-grid">
          {forgingCapabilities.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  aspectRatio: '1 / 1',
                  background: 'rgba(15, 51, 20, 0.75)',
                  border: '1px solid rgba(129, 199, 132, 0.3)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  e.currentTarget.style.borderColor = '#69F0AE';
                  e.currentTarget.style.boxShadow = '0 14px 35px rgba(105, 240, 174, 0.35)';
                  e.currentTarget.style.background = 'rgba(27, 94, 32, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(129, 199, 132, 0.3)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                  e.currentTarget.style.background = 'rgba(15, 51, 20, 0.75)';
                }}
              >
                {/* Number Badge Top Right */}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '16px',
                    fontSize: '11px',
                    fontWeight: 900,
                    color: 'rgba(105, 240, 174, 0.6)',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                >
                  #{item.id}
                </span>

                {/* Glowing Icon Circle */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(76, 175, 80, 0.18)',
                    border: '1.5px solid rgba(105, 240, 174, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.2rem',
                    boxShadow: '0 0 20px rgba(105, 240, 174, 0.15)'
                  }}
                >
                  <IconComponent size={28} color="#69F0AE" />
                </div>

                {/* Clean Bold Title */}
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: 0,
                    lineHeight: 1.35,
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                >
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForgingCapabilitiesSection;
