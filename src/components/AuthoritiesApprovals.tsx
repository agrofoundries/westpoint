import React from 'react';
import { Landmark, TrainTrack, Building2, Globe2, ShieldCheck, CheckCircle2, Award, ArrowRight } from 'lucide-react';

export const AuthoritiesApprovals: React.FC = () => {
  const approvals = [
    {
      category: 'RDSO APPROVED CLASS A FOUNDRY',
      icon: Award,
      desc: 'Research Designs and Standards Organisation certified Class A foundry.',
      items: [
        'RDSO Class A Foundry Accreditation for Steel & Ductile Iron',
        'Approved Supplier for Rail Coach, Bogie Bolster & Bogie Frames',
        'Critical Cast & Machined Railway Components Approval'
      ]
    },
    {
      category: 'GOVERNMENT TRANSPORTATION BODIES',
      icon: Landmark,
      desc: 'Federal oversight & safety compliance accreditation.',
      items: [
        'Federal Railroad Administration (FRA Rule 213)',
        'Federal Transit Administration (FTA Certified)',
        'U.S. Department of Transportation (USDOT Approved)'
      ]
    },
    {
      category: 'CLASS I FREIGHT RAILROADS',
      icon: Building2,
      desc: 'Direct supplier qualification for 36-ton heavy axle load freight.',
      items: [
        'BNSF Railway Certified Component Manufacturer',
        'Union Pacific Railroad Approved Foundry & Forge',
        'CSX Transportation Qualified Trackwork Supplier',
        'Norfolk Southern Siding Approved Castings'
      ]
    },
    {
      category: 'URBAN TRANSIT AUTHORITIES',
      icon: TrainTrack,
      desc: 'Metro, monorail & high-speed passenger corridor approvals.',
      items: [
        'Amtrak High-Speed Corridor Approved',
        'NYC Metropolitan Transportation Authority (MTA)',
        'Regional Transit Authority (RTA) System Standard',
        'Bay Area Rapid Transit (BART) Track Fastener Spec'
      ]
    },
    {
      category: 'GLOBAL RAILWAY ADMINISTRATIONS',
      icon: Globe2,
      desc: 'International heavy rail & transit authority qualifications.',
      items: [
        'Network Rail (United Kingdom) Prequalified',
        'Deutsche Bahn (DB Germany) Standard Certified',
        'Canadian National (CN Rail) Heavy Haul Approved',
        'SNCF Mobility (France) Turnout Frog Supplier'
      ]
    },
    {
      category: 'metal QA ACCREDITATION',
      icon: ShieldCheck,
      desc: 'Full quality management system & metallurgy audits.',
      items: [
        'AAR M-1003 Quality Assurance Certified Facility',
        'ISO 9001:2015 Manufacturing Traceability',
        'IATF 16949 Heavy Equipment Drop Forging QA',
        'AREMA Chapter 4 Trackwork Specification Compliance'
      ]
    }
  ];

  return (
    <section id="approvals" className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>RDSO CLASS A FOUNDRY &amp; INSTITUTIONAL ACCREDITATION</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              AUTHORITIES &amp; ACCREDITATIONS
            </h2>
          </div>

          <a href="#contact" className="link-hover-arrow">
            <span>REQUEST AUDIT DOCUMENTATION</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* 6 Full Detailed Regulatory Cards Grid */}
        <div className="grid-responsive-3" style={{ marginBottom: '2.5rem' }}>
          {approvals.map((app, idx) => {
            const IconComp = app.icon;
            return (
              <div 
                key={idx}
                className="card-hover-industrial"
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #D1D5DB', 
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.85rem' }}>
                    <div style={{ width: '46px', height: '46px', background: '#1B5E20', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #4CAF50' }}>
                      <IconComp size={22} color="#4CAF50" />
                    </div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 900, color: '#111827', letterSpacing: '0.02em', textTransform: 'uppercase', margin: 0, lineHeight: 1.35, fontFamily: "'Manrope', sans-serif !important" }}>
                      {app.category}
                    </h3>
                  </div>

                  {/* Authority Scope Description - Large & High Visibility */}
                  <div style={{ background: '#F8FAFC', borderLeft: '3px solid #1B5E20', padding: '10px 14px', borderRadius: '4px', marginBottom: '1.25rem' }}>
                    <p style={{ fontSize: '15px', color: '#1F2937', fontWeight: 600, lineHeight: 1.5, margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
                      {app.desc}
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {app.items.map((item, iIdx) => (
                      <li key={iIdx} style={{ fontSize: '14px', color: '#1F2937', fontWeight: 600, display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.5, fontFamily: "'Manrope', sans-serif !important" }}>
                        <CheckCircle2 size={17} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Accreditation Audit Telemetry Bar */}
        <div style={{ background: '#1B5E20', color: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', borderTop: '3px solid #4CAF50' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontSize: '10px', color: '#A5D6A7', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>FOUNDRY CLASSIFICATION</span>
              <strong style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 800, fontFamily: "'Manrope', sans-serif !important" }}>RDSO APPROVED CLASS 'A' FOUNDRY</strong>
            </div>

            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '1.5rem' }}>
              <span style={{ fontSize: '10px', color: '#A5D6A7', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>ULTRASONIC NDT PASS RATE</span>
              <strong style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>100.00% VOLUMETRIC SCAN</strong>
            </div>

            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '1.5rem' }}>
              <span style={{ fontSize: '10px', color: '#A5D6A7', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>AAR &amp; AREMA COMPLIANCE</span>
              <strong style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 800, fontFamily: "'Manrope', sans-serif !important" }}>FULL HEAT CODE CERTIFICATION</strong>
            </div>
          </div>

          <a href="#contact" className="link-hover-arrow" style={{ color: '#FFFFFF', borderBottomColor: '#81C784' }}>
            <span>DOWNLOAD AUDIT PACK</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AuthoritiesApprovals;
