import React, { useState } from 'react';
import {
  Building2, Layers, Award, ShieldCheck, CheckCircle2,
  Cpu, ArrowRight, Sparkles, MapPin, Calendar,
  Wrench, Code2, Users, FileSignature
} from 'lucide-react';

export const CorporateAdditionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'brands' | 'ventures' | 'checklist' | 'directory'>('all');

  const additionsPillars = [
    {
      id: 'brands',
      category: 'BRANDS',
      icon: Layers,
      color: '#2E7D32',
      bgGradient: 'linear-gradient(135deg, #0F3314 0%, #1B5E20 100%)',
      title: 'Westpoint Group Brand Portfolio',
      subtitle: 'Specialized Industrial Divisions',
      items: [
        'Westpoint Foundries (Heavy Rail & Transit)',
        'Westpoint Castings (Infrastructure & Municipal)',
        'Westpoint Forgings (Aerospace, Solar & Energy)',
        'Westpoint Waterworks (Valves, Hydrants & Pumps)',
        'Agro Foundries (Agricultural & Mining Castings)'
      ]
    },
    {
      id: 'companies',
      category: 'GROUP COMPANIES',
      icon: Building2,
      color: '#1565C0',
      bgGradient: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)',
      title: 'Corporate Entities & Subsidiaries',
      subtitle: 'Global Operations Network',
      items: [
        'Westpoint Heavy Rail Engineering Pvt Ltd',
        'Westpoint Metallurgical Alliances Corp',
        'Westpoint Precision Forgings & Fabrication',
        'Agro Industrial Castings & Utilities LLC'
      ]
    },
    {
      id: 'products',
      category: 'NEW PRODUCT LINES',
      icon: Sparkles,
      color: '#C62828',
      bgGradient: 'linear-gradient(135deg, #7F0000 0%, #B71C1C 100%)',
      title: 'Next-Gen Manufacturing Capabilities',
      subtitle: 'Expanded Industrial Lines',
      items: [
        'Small Ring Rolling (Upto 200mm Outer Diameter)',
        'Hydraulic Axles & Steering Knuckles (8T - 10T)',
        'Solar & Wind Turbine Castings / Forgings',
        'Cold/Warm Extrusions & Fulcrum Pins'
      ]
    },
    {
      id: 'ventures',
      category: 'ACQUISITIONS & VENTURES',
      icon: Users,
      color: '#E65100',
      bgGradient: 'linear-gradient(135deg, #BF360C 0%, #E65100 100%)',
      title: 'Strategic Alliances & Joint Ventures',
      subtitle: 'Global Metallurgy Partnerships',
      items: [
        'Strategic European Metallurgical Alliances',
        'North American Rail Supply Partnerships',
        'Joint Foundry Infrastructure Investments',
        'Technology Transfer & Co-Engineering Deals'
      ]
    },
    {
      id: 'locations',
      category: 'LOCATIONS & FOOTPRINT',
      icon: MapPin,
      color: '#6A1B9A',
      bgGradient: 'linear-gradient(135deg, #4A148C 0%, #6A1B9A 100%)',
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
      color: '#00838F',
      bgGradient: 'linear-gradient(135deg, #004D40 0%, #00695C 100%)',
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
      color: '#283593',
      bgGradient: 'linear-gradient(135deg, #1A237E 0%, #283593 100%)',
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
      color: '#D84315',
      bgGradient: 'linear-gradient(135deg, #4E342E 0%, #6D4C41 100%)',
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
        background: '#0B132B',
        color: '#FFFFFF',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Manrope', sans-serif"
      }}
    >
      {/* Background Decorative Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46, 125, 50, 0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21, 101, 192, 0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '20px',
              background: 'rgba(76, 175, 80, 0.12)',
              border: '1px solid rgba(76, 175, 80, 0.3)',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={16} color="#69F0AE" />
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: '#A5D6A7',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              WESTPOINT GROUP CORPORATE ADDITIONS
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              margin: '0 0 1rem 0',
              textTransform: 'uppercase',
              lineHeight: 1.15
            }}
          >
            Brands, Ventures &amp; Beyond Standards
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#94A3B8',
              lineHeight: 1.6,
              margin: 0
            }}
          >
            Explore our expanding portfolio of corporate brands, new forging lines, global footprint,
            and confidential vendor governance sign-off frameworks.
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
              { id: 'all', label: 'All Additions' },
              { id: 'brands', label: 'Brands & Companies' },
              { id: 'ventures', label: 'Ventures & Tech' },
              { id: 'checklist', label: 'Vendor Sign-Offs' },
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
                    background: isActive ? '#4CAF50' : 'rgba(255, 255, 255, 0.06)',
                    color: isActive ? '#FFFFFF' : '#CBD5E1',
                    border: `1px solid ${isActive ? '#4CAF50' : 'rgba(255, 255, 255, 0.15)'}`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid 1: Additions Pillars */}
        {activeTab !== 'directory' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
              marginBottom: '4rem'
            }}
          >
            {additionsPillars
              .filter((p) => {
                if (activeTab === 'all') return true;
                if (activeTab === 'brands') return p.id === 'brands' || p.id === 'companies';
                if (activeTab === 'ventures') return p.id === 'products' || p.id === 'ventures' || p.id === 'locations';
                if (activeTab === 'checklist') return p.id === 'checklist' || p.id === 'standards' || p.id === 'backed';
                return true;
              })
              .map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    style={{
                      background: 'rgba(15, 23, 42, 0.75)',
                      borderRadius: '16px',
                      padding: '2rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = pillar.color;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <div>
                      {/* Top Header Row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                        <div
                          style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '12px',
                            background: pillar.bgGradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                          }}
                        >
                          <IconComponent size={22} color="#FFFFFF" />
                        </div>

                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 900,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#94A3B8',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {pillar.category}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          margin: '0 0 0.25rem 0'
                        }}
                      >
                        {pillar.title}
                      </h3>

                      <p style={{ fontSize: '0.85rem', color: pillar.color, fontWeight: 700, margin: '0 0 1.25rem 0' }}>
                        {pillar.subtitle}
                      </p>

                      {/* Item List */}
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {pillar.items.map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.4 }}>
                            <CheckCircle2 size={16} color={pillar.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.05em' }}>VERIFIED ADDITION</span>
                      <ArrowRight size={16} color={pillar.color} />
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {/* Grid 2: Global Presence Directory from Canva Slide 30 */}
        {(activeTab === 'all' || activeTab === 'directory') && (
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(76, 175, 80, 0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              marginTop: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  GLOBAL DIRECTORY &amp; SUBMENUS
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', margin: '0.2rem 0 0 0' }}>
                  Infrastructure, CAD, Equipment &amp; Trade Shows
                </h3>
              </div>
              <div style={{ background: '#1B5E20', color: '#FFFFFF', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 800 }}>
                Canva Directory Slide 30
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
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(76, 175, 80, 0.1)';
                      e.currentTarget.style.borderColor = '#4CAF50';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    <div style={{ background: '#1E293B', padding: '10px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <DirIcon size={20} color="#81C784" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 4px 0', letterSpacing: '0.04em' }}>
                        {dir.title}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#94A3B8', margin: 0, lineHeight: 1.45 }}>
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
