import React from 'react';
import {
  Hammer, Disc, Zap, Maximize2, Flame, Snowflake, ShieldCheck, Cpu, Layers, Wrench, ChevronRight
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

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
          
          {/* Eyebrow Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '0px',
              background: 'rgba(27, 94, 32, 0.85)',
              border: '1px solid rgba(129, 199, 132, 0.5)',
              marginBottom: '1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            <span style={{ width: '8px', height: '8px', background: '#69F0AE', boxShadow: '0 0 8px #69F0AE' }} />
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
            Precision forging lines and heavy industrial metal forming specifications
          </p>
        </div>

        {/* 4-Column Grid with Last 2 Items Stretched Across Full Width */}
        <style>{`
          .forging-grid-4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.35rem;
          }
          .forging-card-sharp {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.3rem 1.4rem;
            background: rgba(15, 51, 20, 0.75);
            border: 1.5px solid rgba(129, 199, 132, 0.3);
            border-radius: 0px !important; /* Sharp Square Corners */
            backdrop-filter: blur(10px);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            cursor: pointer;
            position: relative;
            grid-column: span 1;
          }
          .forging-card-stretched {
            grid-column: span 2 !important;
          }
          @media (max-width: 992px) {
            .forging-grid-4 {
              grid-template-columns: repeat(2, 1fr);
            }
            .forging-card-stretched {
              grid-column: span 1 !important;
            }
          }
          @media (max-width: 576px) {
            .forging-grid-4 {
              grid-template-columns: 1fr;
            }
            .forging-card-stretched {
              grid-column: span 1 !important;
            }
          }
          .forging-card-sharp:hover {
            transform: translateY(-4px);
            border-color: #69F0AE;
            background: rgba(27, 94, 32, 0.92);
            box-shadow: 0 12px 35px rgba(105, 240, 174, 0.3);
          }
          .forging-card-sharp:hover .card-arrow {
            transform: translateX(4px);
            color: #69F0AE !important;
            border-color: #69F0AE !important;
          }
        `}</style>

        <div className="forging-grid-4">
          {forgingCapabilities.map((item, idx) => {
            const IconComponent = item.icon;
            const isStretched = idx >= 8; // Items 09 & 10 stretched (span 2)
            return (
              <div
                key={item.id}
                className={`forging-card-sharp ${isStretched ? 'forging-card-stretched' : ''}`}
              >
                
                {/* Number Badge Top Left Accent */}
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '12px',
                    fontSize: '10px',
                    fontWeight: 900,
                    color: 'rgba(105, 240, 174, 0.5)',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                >
                  #{item.id}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', flex: 1, paddingRight: '1rem' }}>
                  
                  {/* Square Glowing Icon Box */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '0px', /* Sharp Square Icon Box */
                      background: 'rgba(76, 175, 80, 0.18)',
                      border: '1.5px solid rgba(105, 240, 174, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 0 14px rgba(105, 240, 174, 0.12)'
                    }}
                  >
                    <IconComponent size={24} color="#69F0AE" />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: 0,
                      lineHeight: 1.3,
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Square Right Arrow Box */}
                <div
                  className="card-arrow"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '34px',
                    height: '34px',
                    borderRadius: '0px', /* Sharp Square Arrow Container */
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.3s ease',
                    flexShrink: 0
                  }}
                >
                  <ChevronRight size={18} color="#A5D6A7" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForgingCapabilitiesSection;
