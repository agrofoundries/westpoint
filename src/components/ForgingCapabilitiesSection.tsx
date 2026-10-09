import React from 'react';
import {
  Flame, Hammer, Disc, Zap, Maximize2, Snowflake, ShieldCheck, Cpu, Layers, Wrench
} from 'lucide-react';

const forgingCapabilities = [
  {
    id: '01',
    title: 'Hammer & Upsetter Forgings',
    desc: 'High-energy impact & upset forging techniques for heavy-duty load components and railway coupling rods.',
    icon: Hammer,
    spec: 'Up to 25-Ton Impact'
  },
  {
    id: '02',
    title: 'Ring Rolling',
    desc: 'Seamless forged rings engineered for high structural integrity in railway wheelsets, flanges, and bearing races.',
    icon: Disc,
    spec: 'Seamless Ring Tech'
  },
  {
    id: '03',
    title: 'Press Forging',
    desc: 'Continuous hydraulic press deformation delivering uniform grain flow for high-stress industrial applications.',
    icon: Zap,
    spec: 'Hydraulic Multi-Ram'
  },
  {
    id: '04',
    title: 'Extrusion Forging',
    desc: 'Precision hot & cold extrusion for cylindrical, tubular, and intricate high-strength structural profiles.',
    icon: Maximize2,
    spec: 'Precision Extrusion'
  },
  {
    id: '05',
    title: 'Warm Forging',
    desc: 'Optimized thermal processing combining tight dimensional tolerances with superior surface finish.',
    icon: Flame,
    spec: 'Controlled Temp'
  },
  {
    id: '06',
    title: 'Cold Forging',
    desc: 'High-speed near-net-shape cold forming eliminating machining waste and bolstering material fatigue strength.',
    icon: Snowflake,
    spec: 'Near-Net Shape'
  },
  {
    id: '07',
    title: 'Aluminium Forging',
    desc: 'Lightweight high-strength aerospace and high-speed rail aluminum alloy forgings resistant to corrosion.',
    icon: ShieldCheck,
    spec: 'Aerospace Grade Alloys'
  },
  {
    id: '08',
    title: 'Axle Shaft',
    desc: 'Heavy-duty forged axle shafts engineered for 36-ton axle load freight locomotives and passenger bogies.',
    icon: Cpu,
    spec: 'Heavy Axle Load'
  },
  {
    id: '09',
    title: 'Small Ring Rolling (Upto 200mm)',
    desc: 'Specialized micro-ring rolling lines crafting precision compact rings with tight diameter tolerances up to 200mm.',
    icon: Layers,
    spec: 'Upto 200mm Ring Dia'
  },
  {
    id: '10',
    title: 'Excavator Pins, Fulcrum Pins and U Bolt',
    desc: 'Heavy-duty forged pins, fulcrum pivots, and high-tensile U-bolts designed for mining excavators and heavy rail chassis.',
    icon: Wrench,
    spec: 'High-Tensile Alloy'
  }
];

export const ForgingCapabilitiesSection: React.FC = () => {
  return (
    <section
      id="forging-capabilities"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(180deg, #0B2212 0%, #05140A 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Metallic Background Grid Pattern */}
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

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          
          {/* Eyebrow Label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
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
              fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              color: '#FFFFFF',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              margin: '0 0 1rem 0',
              fontFamily: "'Manrope', sans-serif !important",
              textShadow: '0 4px 16px rgba(0,0,0,0.5)'
            }}
          >
            OUR FORGING CAPABILITIES
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#A5D6A7',
              lineHeight: 1.6,
              fontFamily: "'Manrope', sans-serif !important",
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            State-of-the-art forging lines delivering high-durability alloy components, seamless ring rolling, and heavy-duty pins for global railways and heavy industries.
          </p>
        </div>

        {/* 10-Item Capability Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {forgingCapabilities.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  background: 'rgba(15, 51, 20, 0.75)',
                  border: '1px solid rgba(129, 199, 132, 0.25)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.35s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#4CAF50';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(76, 175, 80, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(129, 199, 132, 0.25)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                }}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '10px',
                        background: 'rgba(76, 175, 80, 0.2)',
                        border: '1px solid rgba(105, 240, 174, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={24} color="#69F0AE" />
                    </div>
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 900,
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontFamily: "'Manrope', sans-serif !important"
                      }}
                    >
                      #{item.id}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '0.65rem',
                      lineHeight: 1.3,
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      lineHeight: 1.55,
                      fontFamily: "'Manrope', sans-serif !important",
                      marginBottom: '1.25rem'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Technical Spec Pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#81C784',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#81C784' }} />
                  <span>{item.spec}</span>
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
