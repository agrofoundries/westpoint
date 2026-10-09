import React, { useState } from 'react';
import {
  Building2, MapPin, Calendar, Wrench, Cpu, Code2, Users,
  Award, ShieldCheck, FileSignature, CheckCircle2, ArrowRight
} from 'lucide-react';

export const CorporateAdditionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'brands' | 'pillars' | 'directory'>('all');

  const brandLogos = [
    { name: 'Westpoint Foundries', logo: '/logos/Westpoint-Foundries-Industrial-Logo.png' },
    { name: 'Westpoint Castings', logo: '/logos/Westpoint-Castings-Industrial-Logo.png' },
    { name: 'Westpoint Forgings', logo: '/logos/Westpoint-Forgings-Industrial-Logo.png' },
    { name: 'Westpoint Waterworks', logo: '/logos/Westpoint-Waterworks-Corporate-Logo.png' },
    { name: 'Agro Foundries', logo: '/associations/AFlogo.png' },
    { name: 'Marine Castings', logo: '/IMG-20261009-WA0017.jpg' }
  ];

  const corporatePillars = [
    {
      id: 'locations',
      category: 'LOCATIONS & FOOTPRINT',
      icon: MapPin,
      title: 'Global Manufacturing & Logistics',
      subtitle: 'Worldwide Footprint',
      items: [
        'Corporate HQ & US Supply Chain Desk',
        'India Manufacturing Foundries & Machining Hubs',
        'EU Technical & Engineering Liaison Office',
        'Global Warehousing & Consignment Hubs'
      ]
    },
    {
      id: 'standards',
      category: 'BEYOND STANDARDS',
      icon: Award,
      title: 'Quality Accreditations & Compliance',
      subtitle: 'Exceeding Global Specs',
      items: [
        'AAR M-1003 Certified Railway Foundries',
        'RDSO Class-A Approved Manufacturer (Indian Railways)',
        'ISO 9001:2015 & IATF 16949 Automotive QA',
        'FRA & Amtrak Specification Compliance'
      ]
    },
    {
      id: 'backed',
      category: 'BACKED BY THE BEST',
      icon: ShieldCheck,
      title: 'Guarantees & Advanced Testing',
      subtitle: '100% Quality Assurance',
      items: [
        '100% Volumetric Ultrasonic NDT Testing',
        'CMM 3D Coordinate Measuring Machine Inspection',
        'Personal Guarantees & Full Traceability',
        'Zero-Defect Metallurgical Sign-Off'
      ]
    },
    {
      id: 'checklist',
      category: 'VENDOR & FOUNDRY CHECKLIST',
      icon: FileSignature,
      title: 'Confidential Vendor Sign-Offs',
      subtitle: 'Governance & IP Compliance',
      items: [
        'NDA (Non-Disclosure Agreement) Sign-Off',
        'Individual Render / 3D CAD Drawing Sign-Off',
        'MCA / SOS / ZUBA Governance Sign-Off',
        'Confidential Vendor Portal Registration'
      ]
    }
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
        @keyframes brandMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brands-slider-track {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          width: max-content;
          animation: brandMarquee 24s linear infinite;
        }
        .brands-slider-track:hover {
          animation-play-state: paused;
        }
        .brand-slide-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 1.5rem 2.25rem;
          border: 2px solid rgba(105, 240, 174, 0.45);
          box-shadow: 0 8px 25px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 230px;
          height: 125px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          flex-shrink: 0;
        }
        .brand-slide-card:hover {
          transform: translateY(-6px) scale(1.05);
          border-color: #4CAF50;
          box-shadow: 0 16px 40px rgba(105, 240, 174, 0.4);
        }
        .pillars-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1200px) {
          .pillars-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .pillars-grid-4 {
            grid-template-columns: 1fr;
          }
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
            Explore our group divisions, quality accreditations, manufacturing footprint, and global infrastructure directory.
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
              { id: 'brands', label: 'Brand Divisions' },
              { id: 'pillars', label: 'Corporate Pillars' },
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

        {/* Big Brand Logos Slider Showcase */}
        {(activeTab === 'all' || activeTab === 'brands') && (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '5px', height: '28px', background: '#69F0AE', borderRadius: '3px' }} />
                <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#FFFFFF', margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
                  OUR GROUP DIVISIONS &amp; BRANDS
                </h3>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#69F0AE', textTransform: 'uppercase', letterSpacing: '0.12em', background: 'rgba(76, 175, 80, 0.15)', padding: '5px 14px', borderRadius: '20px', border: '1px solid rgba(105, 240, 174, 0.35)', fontFamily: "'Manrope', sans-serif !important" }}>
                Auto-Scrolling Division Slider (Hover to Pause)
              </span>
            </div>

            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                background: 'rgba(15, 51, 20, 0.45)',
                padding: '1.5rem 0',
                border: '1.5px solid rgba(129, 199, 132, 0.3)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.35)'
              }}
            >
              {/* Fade Overlays on Edges */}
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '50px', background: 'linear-gradient(to right, #0B2212, transparent)', zIndex: 5, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '50px', background: 'linear-gradient(to left, #05140A, transparent)', zIndex: 5, pointerEvents: 'none' }} />

              <div className="brands-slider-track">
                {/* --- SET 1 --- */}
                {brandLogos.map((brand, idx) => (
                  <div key={`s1-${idx}`} className="brand-slide-card">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      style={{
                        height: '78px',
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ))}
                {/* --- SET 2 (Duplicate for Infinite Loop) --- */}
                {brandLogos.map((brand, idx) => (
                  <div key={`s2-${idx}`} className="brand-slide-card">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      style={{
                        height: '78px',
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4 Corporate Pillars Cards Grid */}
        {(activeTab === 'all' || activeTab === 'pillars') && (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
              <span style={{ width: '5px', height: '28px', background: '#69F0AE', borderRadius: '3px' }} />
              <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#FFFFFF', margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
                CORPORATE GOVERNANCE &amp; ACCREDITATIONS
              </h3>
            </div>

            <div className="pillars-grid-4">
              {corporatePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    style={{
                      background: 'rgba(15, 51, 20, 0.75)',
                      borderRadius: '16px',
                      padding: '2rem 1.85rem',
                      border: '1.5px solid rgba(129, 199, 132, 0.3)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.35s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = '#69F0AE';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(105, 240, 174, 0.25)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(129, 199, 132, 0.3)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                    <div>
                      {/* Top Header Row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.35rem' }}>
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'rgba(76, 175, 80, 0.18)',
                            border: '1.5px solid rgba(105, 240, 174, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 14px rgba(105, 240, 174, 0.15)'
                          }}
                        >
                          <IconComponent size={24} color="#69F0AE" />
                        </div>

                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 900,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#69F0AE',
                            background: 'rgba(76, 175, 80, 0.15)',
                            padding: '5px 12px',
                            borderRadius: '12px',
                            border: '1px solid rgba(105, 240, 174, 0.3)',
                            fontFamily: "'Manrope', sans-serif !important"
                          }}
                        >
                          {pillar.category}
                        </span>
                      </div>

                      <h4
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          margin: '0 0 0.35rem 0',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                      >
                        {pillar.title}
                      </h4>

                      <p style={{ fontSize: '0.88rem', color: '#A5D6A7', fontWeight: 700, margin: '0 0 1.35rem 0', fontFamily: "'Manrope', sans-serif !important" }}>
                        {pillar.subtitle}
                      </p>

                      {/* Item List */}
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {pillar.items.map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#E8F5E9', lineHeight: 1.45, fontFamily: "'Manrope', sans-serif !important" }}>
                            <CheckCircle2 size={18} color="#69F0AE" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(129, 199, 132, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#A5D6A7', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>VERIFIED ADDITION</span>
                      <ArrowRight size={18} color="#69F0AE" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Global Directory Grid */}
        {(activeTab === 'all' || activeTab === 'directory') && (
          <div
            style={{
              background: 'rgba(15, 51, 20, 0.85)',
              borderRadius: '24px',
              padding: '3rem 3.25rem',
              border: '1.5px solid rgba(129, 199, 132, 0.45)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.55)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#69F0AE', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  GLOBAL DIRECTORY &amp; SUBMENUS
                </span>
                <h3 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#FFFFFF', margin: '0.3rem 0 0 0', fontFamily: "'Manrope', sans-serif !important", letterSpacing: '0.01em' }}>
                  Infrastructure, CAD, Equipment &amp; Trade Shows
                </h3>
              </div>
              <div style={{ background: '#1B5E20', color: '#E8F5E9', border: '1.5px solid #4CAF50', padding: '10px 24px', borderRadius: '30px', fontSize: '13px', fontWeight: 800, letterSpacing: '0.04em', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', fontFamily: "'Manrope', sans-serif !important" }}>
                Global Infrastructure Directory
              </div>
            </div>

            <style>{`
              .directory-grid-4 {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1.75rem;
              }
              .directory-card-item {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 16px;
                padding: 2.1rem 2rem;
                border: 1.5px solid rgba(129, 199, 132, 0.3);
                display: flex;
                align-items: flex-start;
                gap: 20px;
                transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                grid-column: span 1;
              }
              .directory-card-stretched {
                grid-column: span 2 !important;
                border-color: rgba(105, 240, 174, 0.5);
                background: rgba(76, 175, 80, 0.08);
              }
              @media (max-width: 1200px) {
                .directory-grid-4 {
                  grid-template-columns: repeat(2, 1fr);
                }
                .directory-card-stretched {
                  grid-column: span 1 !important;
                }
              }
              @media (max-width: 640px) {
                .directory-grid-4 {
                  grid-template-columns: 1fr;
                }
                .directory-card-stretched {
                  grid-column: span 1 !important;
                }
              }
              .directory-card-item:hover {
                background: rgba(76, 175, 80, 0.22);
                border-color: #69F0AE;
                transform: translateY(-5px);
                box-shadow: 0 16px 35px rgba(105, 240, 174, 0.25);
              }
            `}</style>

            <div className="directory-grid-4">
              {globalDirectory.map((dir, idx) => {
                const DirIcon = dir.icon;
                const isLastStretched = idx === globalDirectory.length - 1; // 7th item stretches span 2
                return (
                  <div
                    key={idx}
                    className={`directory-card-item ${isLastStretched ? 'directory-card-stretched' : ''}`}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '14px',
                        background: 'rgba(27, 94, 32, 0.85)',
                        border: '1.5px solid rgba(105, 240, 174, 0.45)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 0 16px rgba(105, 240, 174, 0.2)'
                      }}
                    >
                      <DirIcon size={28} color="#69F0AE" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF', margin: '0 0 8px 0', letterSpacing: '0.02em', lineHeight: 1.3, fontFamily: "'Manrope', sans-serif !important" }}>
                        {dir.title}
                      </h4>
                      <p style={{ fontSize: '0.98rem', color: '#D1E7DD', margin: 0, lineHeight: 1.55, fontFamily: "'Manrope', sans-serif !important" }}>
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
