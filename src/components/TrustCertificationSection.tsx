import React, { useState, useRef } from 'react';
import { ShieldCheck, Lock, Eye, Building2, TrainTrack, Award, CheckCircle2, Train, Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface CertificationItem {
  id: string;
  code: string;
  title: string;
  authority: string;
  certNumber: string;
  validUntil: string;
  scope: string;
  details: string;
  iconBg: string;
  pdfSize: string;
}

const certificationsList: CertificationItem[] = [
  {
    id: 'aar-m1003',
    code: 'AAR M-1003 QA',
    title: 'Association of American Railroads Quality Assurance',
    authority: 'AAR Quality Assurance Committee',
    certNumber: 'QA-CERT-8849-2026',
    validUntil: 'December 2028',
    scope: 'Manufacture of Cast Steel Bogies, Forged Axles, Axleboxes & Brake Head Hardware for Freight Cars.',
    details: 'Complete quality system audit compliance covering non-destructive testing (NDT), traceability, material heat lot logging, and dimensional CMM verification.',
    iconBg: '#4caf50',
    pdfSize: '2.4 MB'
  },
  {
    id: 'arema-ch4',
    code: 'AREMA CH. 4',
    title: 'Trackwork & Switch Frog Manufacturing Compliance',
    authority: 'American Railway Engineering & M/W Association',
    certNumber: 'AREMA-TRK-9042',
    validUntil: 'Annual Audit Completed 2026',
    scope: 'Austenitic Manganese Turnout Frogs, Crossing Diamonds, Tie Plates, Guard Rail Clamps & Switch Components.',
    details: 'Strict adherence to AREMA Chapter 4 trackwork geometry, explosive depth hardening parameters, and 36-ton HAL impact fatigue standards.',
    iconBg: '#4caf50',
    pdfSize: '1.8 MB'
  },
  {
    id: 'fra-rule213',
    code: 'FRA RULE 213',
    title: 'Federal Railroad Administration Safety Compliance',
    authority: 'U.S. Department of Transportation (DOT / FRA)',
    certNumber: 'FRA-213-CLASS1-OK',
    validUntil: 'Active Compliance 2026',
    scope: 'Safety Standard Compliance for Track Classes 1 through 9 including High-Speed Rail Corridors up to 220 mph.',
    details: 'Verifies structural sound state of cast manganese frogs and turnout trackage under heavy axle load impacts without fatigue failure.',
    iconBg: '#15803D',
    pdfSize: '3.1 MB'
  },
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    title: 'International Quality Management System',
    authority: 'Bureau Veritas Quality Certification',
    certNumber: 'ISO-9001-US-4921',
    validUntil: 'March 2029',
    scope: 'Design, Melting, Casting, Forging, Machining, and Assembly of Heavy Freight and Passenger Railway Components.',
    details: 'Rigorous 9001:2015 process controls from scrap steel procurement to induction furnace chemistry and final CMM release auditing.',
    iconBg: '#4caf50',
    pdfSize: '1.2 MB'
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001:2015',
    title: 'Environmental Management & Zero Slag Target',
    authority: 'DNV GL Environmental Systems',
    certNumber: 'ISO-14001-ENV-309',
    validUntil: 'October 2027',
    scope: '100% Recycled Electric Induction Foundry Operations, Thermal Silica Sand Reclamation & Zero Foundry Slag Landfill Target.',
    details: 'Verified environmental management system achieving 98.4% sand recycling, closed-loop industrial water, and 100% renewable power melting.',
    iconBg: '#4caf50',
    pdfSize: '2.1 MB'
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001:2018',
    title: 'Occupational Health & Safety Foundry Management',
    authority: 'TÜV SÜD America',
    certNumber: 'OHS-45001-USA-77',
    validUntil: 'June 2028',
    scope: 'Foundry Safety Protocols, Robotic Automated Pouring Cells, Electric Induction Furnace Shielding & Heavy Crane Operations.',
    details: 'Zero-harm workplace framework protecting 650+ foundry engineers, pour operators, and 5-axis CNC machining technicians.',
    iconBg: '#4caf50',
    pdfSize: '1.5 MB'
  }
];

const authorityApprovals = [
  {
    name: 'Amtrak Passenger Rail',
    network: 'National Passenger Rail System',
    status: 'Approved Master Vendor',
    supplies: 'High-speed passenger bogie castings, suspension arms, and forged wheelsets.',
    icon: Train,
    accent: '#4caf50',
    tag: 'PASSENGER CORRIDOR'
  },
  {
    name: 'BNSF Railway Company',
    network: 'North American Freight Network',
    status: 'Class 1 Certified Manufacturer',
    supplies: '36-ton heavy haul axles, freight bogie bolsters, and cast couplers.',
    icon: Building2,
    accent: '#EA580C',
    tag: 'CLASS I FREIGHT'
  },
  {
    name: 'Union Pacific Railroad',
    network: 'Transcontinental Class 1 System',
    status: 'Qualified Trackwork Supplier',
    supplies: 'High-impact manganese turnout switch frogs, crossovers, and trackwork.',
    icon: ShieldCheck,
    accent: '#DC2626',
    tag: 'TRACKWORK & TURNOUTS'
  },
  {
    name: 'CSX Transportation',
    network: 'Eastern U.S. Freight Network',
    status: 'Approved Component Provider',
    supplies: 'Locomotive wheel assemblies, wear plates, and structural steel castings.',
    icon: TrainTrack,
    accent: '##4caf50',
    tag: 'LOCOMOTIVE SYSTEMS'
  },
  {
    name: 'Norfolk Southern Rail',
    network: 'Heavy Haul Freight Network',
    status: 'Approved Heavy Haul Vendor',
    supplies: 'Ductile iron brake heads, forged axles, and side frame bolster parts.',
    icon: Award,
    accent: '#4caf50',
    tag: 'FOUNDRY CASTINGS'
  },
  {
    name: 'Metra / MBTA / MTA',
    network: 'Commuter & Subway Transit',
    status: 'Verified Transit Supplier',
    supplies: 'Commuter and subway coach bogies, disc brake rotors, and truck frames.',
    icon: CheckCircle2,
    accent: '#4caf50',
    tag: 'COMMUTER & METRO'
  }
];

export const TrustCertificationSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const approvalsSliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current && sliderRef.current.firstElementChild) {
      const cardWidth = (sliderRef.current.firstElementChild as HTMLElement).offsetWidth;
      const gap = 16;
      const scrollAmount = cardWidth + gap;
      sliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollApprovalsSlider = (direction: 'left' | 'right') => {
    if (approvalsSliderRef.current && approvalsSliderRef.current.firstElementChild) {
      const cardWidth = (approvalsSliderRef.current.firstElementChild as HTMLElement).offsetWidth;
      const gap = 12;
      const scrollAmount = cardWidth + gap;
      approvalsSliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="trust-certifications"
      style={{
        background: '#FFFFFF',
        padding: '2rem 0',
        borderBottom: '2px solid #E5E7EB',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container-custom" style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>

        {/* Left Column: Certifications */}
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
                <span style={{ color: '#4caf50', fontWeight: 900 }}>COMPANY TRUST &amp; COMPLIANCE DIVISION</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', lineHeight: 1.1, fontFamily: "'Manrope', sans-serif !important" }}>
                TRUST &amp; OFFICIAL CERTIFICATIONS
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '12px 20px', borderRadius: '2px' }}>
              <Lock size={18} color="#4caf50" />
              <div>
                <span style={{ fontSize: '10.5px', color: '#4caf50', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>AUDITED QUALITY SYSTEM</span>
                <strong style={{ fontSize: '13px', color: '#4caf50', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>AAR M-1003 &amp; ISO CERTIFIED</strong>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.75rem', marginTop: '-2.5rem' }}>
            <button onClick={() => scrollSlider('left')} style={{ background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '6px', cursor: 'pointer', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll left">
              <ChevronLeft size={18} color="#4caf50" />
            </button>
            <button onClick={() => scrollSlider('right')} style={{ background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '6px', cursor: 'pointer', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll right">
              <ChevronRight size={18} color="#4caf50" />
            </button>
          </div>
          <div
            ref={sliderRef}
            className="cert-slider"
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '1rem',
              marginBottom: '1.5rem',
              paddingBottom: '0.5rem',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
            .cert-slider::-webkit-scrollbar { display: none; }
          `}} />
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                style={{
                  minWidth: '220px',
                  width: 'calc(50% - 0.5rem)',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  background: '#FFFFFF',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: '2px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="card-hover-industrial"
              >
                <div>
                  {/* Header Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ background: '#4caf50', color: '#FFFFFF', padding: '6px 12px', fontSize: '11px', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '2px', fontFamily: "'Manrope', sans-serif !important" }}>
                      {cert.code}
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#4caf50', background: '#F0FDF4', padding: '4px 10px', borderRadius: '2px', border: '1px solid #BBF7D0' }}>
                      Active Cert
                    </span>
                  </div>

                  <h3 style={{ fontSize: '15px', fontWeight: 900, color: '#111827', margin: '0 0 8px 0', lineHeight: 1.35, fontFamily: "'Manrope', sans-serif !important" }}>
                    {cert.title}
                  </h3>

                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#4CAF50', marginBottom: '8px', fontFamily: "'Manrope', sans-serif !important" }}>
                    {cert.authority}
                  </div>
                </div>

                {/* Card Footer: Metadata & Action CTA */}
                <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '14px', marginTop: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#4caf50', marginBottom: '12px', fontWeight: 600 }}>
                    <span>Cert: <strong style={{ color: '#111827' }}>{cert.certNumber}</strong></span>
                    <span>Valid: <strong style={{ color: '#4caf50' }}>{cert.validUntil}</strong></span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="btn-animated"
                      style={{
                        flex: 1,
                        background: '#4caf50',
                        color: '#FFFFFF',
                        border: '1.5px solid #4caf50',
                        padding: '10px 14px',
                        fontSize: '11.5px',
                        fontWeight: 900,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontFamily: "'Manrope', sans-serif !important"
                      }}
                    >
                      <Eye size={14} />
                      <span>INSPECT CERT</span>
                    </button>

                    <a
                      href={`#download-${cert.id}`}
                      onClick={(e) => { e.preventDefault(); alert(`Downloading official ${cert.code} audit documentation (${cert.pdfSize})...`); }}
                      title="Download Official PDF Certificate"
                      style={{
                        width: '38px',
                        height: '38px',
                        background: '#FAF6EE',
                        border: '1.5px solid #4caf50',
                        color: '#4caf50',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#4CAF50'; e.currentTarget.style.color = '#FFFFFF'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#4caf50'; }}
                    >
                      <Download size={15} />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Rail Authorities Approval Directory */}
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#4caf50', color: '#FFFFFF', padding: '1.5rem', borderRadius: '4px', position: 'relative', overflow: 'hidden', borderTop: '4px solid #4CAF50', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>
                  CLASS I FREIGHT &amp; PASSENGER RAIL AUTHORITY APPROVALS
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important", lineHeight: 1.2 }}>
                  APPROVED RAIL NETWORK VENDOR STATUS
                </h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.75rem', marginTop: '-2.5rem' }}>
                <button onClick={() => scrollApprovalsSlider('left')} style={{ background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '6px', cursor: 'pointer', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll left">
                  <ChevronLeft size={18} color="#4caf50" />
                </button>
                <button onClick={() => scrollApprovalsSlider('right')} style={{ background: '#FAF6EE', border: '1.5px solid #4caf50', padding: '6px', cursor: 'pointer', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Scroll right">
                  <ChevronRight size={18} color="#4caf50" />
                </button>
              </div>
            </div>

            <div
              ref={approvalsSliderRef}
              className="cert-slider"
              style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridAutoColumns: 'calc(50% - 0.375rem)', gridAutoFlow: 'column', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {authorityApprovals.map((auth, i) => {
                const IconComp = auth.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '4px',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                      border: '1px solid #E5E7EB',
                      width: '100%',
                      scrollSnapAlign: 'start'
                    }}
                  >
                    <div>
                      {/* Top Row: Railroad Identity & Status Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: auth.accent + '15', color: auth.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid ' + auth.accent + '30' }}>
                            <IconComp size={16} color={auth.accent} />
                          </div>
                          <div>
                            <span style={{ fontSize: '10px', fontWeight: 800, color: auth.accent, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                              {auth.tag}
                            </span>
                          </div>
                        </div>

                        <span style={{ background: '#F0FDF4', color: '#4caf50', border: '1px solid #BBF7D0', padding: '3px 8px', borderRadius: '3px', fontSize: '10.5px', fontWeight: 800, whiteSpace: 'nowrap', fontFamily: "'Manrope', sans-serif !important" }}>
                          VERIFIED
                        </span>
                      </div>

                      {/* Railroad Name */}
                      <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 16px 0', fontFamily: "'Manrope', sans-serif !important" }}>
                        {auth.name}
                      </h4>
                    </div>

                    {/* Footer Status */}
                    <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '10px', color: '#4caf50', fontWeight: 700, fontFamily: "'Manrope', sans-serif !important" }}>
                        {auth.status}
                      </span>
                      <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
                        AAR / AREMA
                      </span>
                    </div>
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

export default TrustCertificationSection;
