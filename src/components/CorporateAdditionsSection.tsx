import React, { useState } from 'react';
import {
  Building2, MapPin, Calendar, Wrench, Cpu, Code2, Users
} from 'lucide-react';

export const CorporateAdditionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'brands' | 'directory'>('all');

  const brandDivisions = [
    { name: 'Westpoint Foundries', desc: 'Heavy Rail & Transit Castings', logo: '/logos/Westpoint-Foundries-Industrial-Logo.png' },
    { name: 'Westpoint Castings', desc: 'Infrastructure & Municipal Castings', logo: '/logos/Westpoint-Castings-Industrial-Logo.png' },
    { name: 'Westpoint Forgings', desc: 'Aerospace, Solar & Precision Forgings', logo: '/logos/Westpoint-Forgings-Industrial-Logo.png' },
    { name: 'Westpoint Waterworks', desc: 'Valves, Hydrants & Industrial Waterworks', logo: '/logos/Westpoint-Waterworks-Corporate-Logo.png' },
    { name: 'Agro Foundries', desc: 'Agricultural & Mining Castings', logo: '/associations/AFlogo.png' }
  ];

  const globalDirectory = [
    {
      title: 'TRADE SHOWS & EXPOS',
      icon: Calendar,
      desc: 'InnoTrans Berlin, Railway Interchange USA, IFEX India, Agritechnica Germany'
    },
    {
      title: 'LOCATIONS & FACILITIES',
      icon: MapPin,
      desc: 'Foundry Units 1-4, Precision Machining Centers, Heat Treatment & Forging Shops'
    },
    {
      title: 'ASSOCIATIONS & FELLOWSHIPS',
      icon: Building2,
      desc: 'IIF (Institute of Indian Foundrymen), AAR, CII, Engineering Export Council'
    },
    {
      title: 'ENGINEERING & CAD TOOLS',
      icon: Wrench,
      desc: 'SolidWorks, Creo 3D, MAGMASOFT Casting Simulation, AutoCAD'
    },
    {
      title: 'EQUIPMENTS & MACHINING LINES',
      icon: Cpu,
      desc: 'Inductotherm Induction Furnaces, Haas CNC Machining, CMM, Spectrometers'
    },
    {
      title: 'METALLURGICAL SOFTWARES',
      icon: Code2,
      desc: 'Magma5 Simulation, Solidification Modeling, FEA Stress Analysis'
    },
    {
      title: 'COLLABORATIONS & VENDOR PORTAL',
      icon: Users,
      desc: 'Confidential OEM Portal, NDA Sign-Offs, Joint CAD Review Room'
    }
  ];

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #0B2212 0%, #05140A 100%)',
        color: '#FFFFFF',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Manrope', sans-serif !important"
      }}
    >
      <style>{`
        @keyframes slideLogosSection {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 16px)); }
        }
        .section-logo-track {
          display: flex;
          gap: 32px;
          animation: slideLogosSection 22s linear infinite;
          width: max-content;
          align-items: center;
        }
        .section-logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative Grid Pattern */}
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
                color: '#E8F5E9',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'Manrope', sans-serif !important"
              }}
            >
              WESTPOINT GROUP CORPORATE DIVISIONS &amp; FOOTPRINT
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '0.02em',
              margin: '0 0 1rem 0',
              textTransform: 'uppercase',
              lineHeight: 1.2,
              fontFamily: "'Manrope', sans-serif !important",
              textShadow: '0 4px 16px rgba(0,0,0,0.5)'
            }}
          >
            GLOBAL DIVISIONS, BRANDS &amp; DIRECTORY
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#A5D6A7',
              lineHeight: 1.6,
              margin: 0,
              fontFamily: "'Manrope', sans-serif !important"
            }}
          >
            Explore our group divisions, manufacturing footprint, metallurgical CAD toolsets, and international trade show schedule.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}
          >
            {[
              { id: 'all', label: 'All Showcase' },
              { id: 'brands', label: 'Global Brand Divisions' },
              { id: 'directory', label: 'Global Directory' }
            ].map((btn) => {
              const isActive = activeTab === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveTab(btn.id as any)}
                  style={{
                    padding: '8px 20px',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    background: isActive ? '#4CAF50' : 'rgba(15, 51, 20, 0.75)',
                    color: isActive ? '#FFFFFF' : '#A5D6A7',
                    border: `1px solid ${isActive ? '#69F0AE' : 'rgba(129, 199, 132, 0.3)'}`,
                    transition: 'all 0.3s ease',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Brand Divisions Infinite Logo Slider */}
        {(activeTab === 'all' || activeTab === 'brands') && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '4px', height: '24px', background: '#69F0AE', borderRadius: '2px' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
                  OUR GLOBAL DIVISIONS &amp; BRANDS
                </h3>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#69F0AE', background: 'rgba(76, 175, 80, 0.15)', padding: '4px 14px', borderRadius: '16px', border: '1px solid rgba(105, 240, 174, 0.3)', fontFamily: "'Manrope', sans-serif !important" }}>
                Hover to pause slider
              </span>
            </div>

            <div style={{ overflow: 'hidden', width: '100%', position: 'relative', padding: '0.5rem 0' }}>
              <div className="section-logo-track">
                {/* Set 1 */}
                {brandDivisions.map((brand, idx) => (
                  <div
                    key={`brand1-${idx}`}
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid rgba(105, 240, 174, 0.4)',
                      borderRadius: '12px',
                      padding: '16px 24px',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '18px',
                      minWidth: '310px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#4CAF50';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(105, 240, 174, 0.35)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(105, 240, 174, 0.4)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
                    }}
                  >
                    <img src={brand.logo} alt={brand.name} style={{ height: '52px', objectFit: 'contain', maxWidth: '130px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>{brand.name}</div>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#4CAF50', marginTop: '2px', fontFamily: "'Manrope', sans-serif !important" }}>{brand.desc}</div>
                    </div>
                  </div>
                ))}

                {/* Set 2 (Exact Duplicate for Seamless Loop) */}
                {brandDivisions.map((brand, idx) => (
                  <div
                    key={`brand2-${idx}`}
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid rgba(105, 240, 174, 0.4)',
                      borderRadius: '12px',
                      padding: '16px 24px',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '18px',
                      minWidth: '310px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#4CAF50';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(105, 240, 174, 0.35)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(105, 240, 174, 0.4)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
                    }}
                  >
                    <img src={brand.logo} alt={brand.name} style={{ height: '52px', objectFit: 'contain', maxWidth: '130px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#1B5E20', fontFamily: "'Manrope', sans-serif !important" }}>{brand.name}</div>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#4CAF50', marginTop: '2px', fontFamily: "'Manrope', sans-serif !important" }}>{brand.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Global Directory Grid */}
        {(activeTab === 'all' || activeTab === 'directory') && (
          <div
            style={{
              background: 'rgba(15, 51, 20, 0.75)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(129, 199, 132, 0.4)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#69F0AE', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  GLOBAL DIRECTORY &amp; SUBMENUS
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', margin: '0.2rem 0 0 0', fontFamily: "'Manrope', sans-serif !important" }}>
                  Infrastructure, CAD, Equipment &amp; Trade Shows
                </h3>
              </div>
              <div style={{ background: '#1B5E20', color: '#E8F5E9', border: '1px solid #4CAF50', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 800, fontFamily: "'Manrope', sans-serif !important" }}>
                Global Infrastructure Directory
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {globalDirectory.map((dir, idx) => {
                const DirIcon = dir.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      border: '1px solid rgba(129, 199, 132, 0.2)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(76, 175, 80, 0.15)';
                      e.currentTarget.style.borderColor = '#69F0AE';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(129, 199, 132, 0.2)';
                    }}
                  >
                    <div style={{ background: 'rgba(27, 94, 32, 0.6)', padding: '10px', borderRadius: '10px', border: '1px solid rgba(105, 240, 174, 0.3)' }}>
                      <DirIcon size={20} color="#69F0AE" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 4px 0', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>
                        {dir.title}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#A5D6A7', margin: 0, lineHeight: 1.45, fontFamily: "'Manrope', sans-serif !important" }}>
                        {dir.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CorporateAdditionsSection;
