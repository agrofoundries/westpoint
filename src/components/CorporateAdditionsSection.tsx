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
    { name: 'Agro Foundries', logo: '/associations/AFlogo.png' }
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
        .brand-logos-grid-5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1200px) {
          .brand-logos-grid-5 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .brand-logos-grid-5 {
            grid-template-columns: repeat(2, 1fr);
          }
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

        {/* Big Brand Logos Grid Showcase (Only Large Clean Logos - No Text Side Label) */}
        {(activeTab === 'all' || activeTab === 'brands') && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <span style={{ width: '4px', height: '24px', background: '#69F0AE', borderRadius: '2px' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
                OUR GROUP DIVISIONS &amp; BRANDS
              </h3>
            </div>

            <div className="brand-logos-grid-5">
              {brandLogos.map((brand, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '1.5rem 1.75rem',
                    border: '1.5px solid rgba(105, 240, 174, 0.4)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '110px',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)';
                    e.currentTarget.style.borderColor = '#4CAF50';
                    e.currentTarget.style.boxShadow = '0 14px 35px rgba(105, 240, 174, 0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(105, 240, 174, 0.4)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
                  }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                      height: '68px',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4 Corporate Pillars Cards Grid */}
        {(activeTab === 'all' || activeTab === 'pillars') && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <span style={{ width: '4px', height: '24px', background: '#69F0AE', borderRadius: '2px' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
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
                      padding: '1.75rem',
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
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(76, 175, 80, 0.18)',
                            border: '1.5px solid rgba(105, 240, 174, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 14px rgba(105, 240, 174, 0.15)'
                          }}
                        >
                          <IconComponent size={22} color="#69F0AE" />
                        </div>

                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 900,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#69F0AE',
                            background: 'rgba(76, 175, 80, 0.15)',
                            padding: '4px 10px',
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
                          fontSize: '1.15rem',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          margin: '0 0 0.25rem 0',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                      >
                        {pillar.title}
                      </h4>

                      <p style={{ fontSize: '0.82rem', color: '#A5D6A7', fontWeight: 700, margin: '0 0 1.25rem 0', fontFamily: "'Manrope', sans-serif !important" }}>
                        {pillar.subtitle}
                      </p>

                      {/* Item List */}
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {pillar.items.map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#E8F5E9', lineHeight: 1.4, fontFamily: "'Manrope', sans-serif !important" }}>
                            <CheckCircle2 size={16} color="#69F0AE" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '1.5rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(129, 199, 132, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#A5D6A7', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>VERIFIED ADDITION</span>
                      <ArrowRight size={16} color="#69F0AE" />
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
