import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { ArrowRight, Search, ChevronDown, Building2, Layers, ShieldCheck, Compass, Menu, X, ChevronRight, Phone, Mail, UserCheck } from 'lucide-react';

interface HeaderProps {
  onRequestQuoteClick?: () => void;
  onOpenExplorer?: () => void;
  onOpenPortalModal?: (type?: any) => void;
}

const TypewriterTagline: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const speed = isDeleting ? 50 : 110;

    if (!isDeleting && displayText.length < text.length) {
      timer = window.setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else if (!isDeleting && displayText.length === text.length) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      timer = window.setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, speed);
    } else if (isDeleting && displayText.length === 0) {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text]);

  return (
    <span style={{ fontStyle: 'italic', fontSize: '36px', color: '#9B0403', whiteSpace: 'nowrap', fontWeight: 900, minWidth: '420px', display: 'inline-block', lineHeight: 1 }}>
      {displayText}
      <span style={{ animation: 'blinkCursor 0.8s infinite', marginLeft: '2px', color: '#9B0403', fontWeight: 900 }}>|</span>
    </span>
  );
};

export const Header: React.FC<HeaderProps> = ({ onRequestQuoteClick, onOpenExplorer, onOpenPortalModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isPortalsDropdownOpen, setIsPortalsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>('rail_coach');

  useEffect(() => {
    const handleScroll = () => {
      setActiveMegaMenu(null);
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navCategories = [
    {
      id: 'rail_coach',
      label: 'LHB & BOGIE COMPONENTS',
      icon: Layers,
      columns: [
        {
          title: 'LHB / FIAT GERMAN COACH BOGIE PARTS',
          links: [
            'Control Arm Upper, Lower Right/Left (SG 400/18)',
            'Centering Disc Assembly (DIN 17182 GS-20Mn5V)',
            'Brake Support (GS-20Mn5V)',
            'Set Of Console, Pin & Bump Stop Brackets',
            'Articulation Piece & Axlebox Housing (IS 1030)'
          ]
        },
        {
          title: 'LOCOMOTIVE & FREIGHT CASTINGS',
          links: [
            'Front & Rear Draft Lugs (Grade B & C)',
            'Locomotive Jacking Pad & Coupler Carrier',
            'Bearing Adaptor Plate & Equaliser Spring Seat',
            'Brake Head for Brake Rigging Kit & Fuel Pump Support',
            'Railway Track Plates & Buffer Castings'
          ]
        }
      ]
    },
    {
      id: 'agri_oem',
      label: 'AGRI, OEM & MINING',
      icon: Building2,
      columns: [
        {
          title: 'AGRI INDUSTRY COMPONENTS',
          links: [
            'Rotavator Gearbox 13x23 & 13x25 Casing',
            'Reduction Gear Housing & Combine Harvester Parts',
            'Shackle, Brake Drums, Flywheels & Rotor Housing',
            'Front Linkage Assembly (Top & Bottom)',
            'Other Castings for Rotavators & Farm Equipment'
          ]
        },
        {
          title: 'OEM & MINING INDUSTRY CASTINGS',
          links: [
            '10 Ton Stub Axle & 8 Ton Steering Knuckle',
            'Rotor, Elliptical Pin & Undercarriage Sprockets',
            'Mining Haulages, Winches & Aerial Ropeway Pulleys',
            'Heavy Flanges, Mining Gearboxes & Roof Bolter Parts',
            'Commercial Trailer Suspension Components'
          ]
        }
      ]
    },
    {
      id: 'en_alloys',
      label: 'SPECIALTY EN ALLOYS',
      icon: ShieldCheck,
      columns: [
        {
          title: 'EN-SERIES & ALLOY CASTINGS',
          links: [
            'EN8 & EN9 Carbon Steel Castings',
            'EN15 & EN18 Alloy Steel Castings',
            'EN19 & EN24 High-Tensile Quenched Steel',
            'IS 2708 Standard Steel Castings',
            'High Chrome Castings (27% Cr White Iron)'
          ]
        },
        {
          title: 'SPECIALTY HEAVY INDUSTRY',
          links: [
            'Castings for Stone Crushers (Jaw Plates & Mantles)',
            'Heat Resistant Castings for Industrial Boilers',
            'Architectural & Ornamental Steel Castings',
            '100% Volumetric Ultrasonic NDT & CMM QA',
            'Custom Pattern Design & Induction Melting'
          ]
        }
      ]
    },
    {
      id: 'governance',
      label: 'GRIEVANCE & QA',
      icon: ShieldCheck,
      columns: [
        {
          title: 'WAGON TRACKING & QUALITY',
          links: ['Wagon Search & Status', 'Register Complaint / Grievance', 'Check Grievance Resolution', 'RDSO Quality Feedback']
        },
        {
          title: 'AUTHORITIES & APPROVALS',
          links: ['Federal Railroad Admin (FRA)', 'Amtrak Approved Manufacturer', 'BNSF & Union Pacific Qualified', 'Metra Transit Agency Spec']
        }
      ]
    }
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: '#FFFFFF',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          fontFamily: "'Manrope', sans-serif"
        }}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >

        {/* Tier 1: Middle Corporate Branding Bar */}
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '12px 2.5vw', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', width: '100%' }}>

            {/* Corporate Group Emblems (First / Left) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Logo division="group" height="65px" />
            </div>

            {/* Right Division Emblems (Desktop) with Tagline & Infinite Slider */}
            <div className="desktop-nav-only" style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '750px', flex: 1, marginLeft: '12px' }}>
              <TypewriterTagline text="Our Total lineup......." />
              
              <style>{`
                @keyframes blinkCursor {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
                @keyframes slideLogosHeader {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-50% - 12px)); } /* 12px is half the gap */
                }
                .header-logo-track {
                  display: flex;
                  gap: 24px;
                  animation: slideLogosHeader 20s linear infinite;
                  width: max-content;
                  align-items: center;
                }
                .header-logo-track:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div style={{ overflow: 'hidden', flex: 1, position: 'relative' }}>
                <div className="header-logo-track">
                  {/* --- SET 1 --- */}
                  <img src="/logos/Westpoint-Foundries-Industrial-Logo.png" alt="Westpoint Foundries" style={{ height: '65px', objectFit: 'contain' }} />
                  <img src="/logos/Westpoint-Castings-Industrial-Logo.png" alt="Westpoint Castings" style={{ height: '65px', objectFit: 'contain' }} />
                  <img src="/logos/Westpoint-Forgings-Industrial-Logo.png" alt="Westpoint Forgings" style={{ height: '65px', objectFit: 'contain' }} />
                  <img src="/logos/Westpoint-Waterworks-Corporate-Logo.png" alt="Westpoint Waterworks" style={{ height: '65px', objectFit: 'contain' }} />
                  <img src="/associations/AFlogo.png" alt="Agro Foundries" style={{ height: '65px', objectFit: 'contain' }} />
                  
                  {/* --- SET 2 (Exact duplicate for infinite scroll) --- */}
                  <img src="/logos/Westpoint-Foundries-Industrial-Logo.png" alt="Westpoint Foundries" style={{ height: '65px', objectFit: 'contain' }} />
                  <img src="/logos/Westpoint-Castings-Industrial-Logo.png" alt="Westpoint Castings" style={{ height: '65px', objectFit: 'contain' }} />
                  <img src="/logos/Westpoint-Forgings-Industrial-Logo.png" alt="Westpoint Forgings" style={{ height: '65px', objectFit: 'contain' }} />
                  <img src="/logos/Westpoint-Waterworks-Corporate-Logo.png" alt="Westpoint Waterworks" style={{ height: '65px', objectFit: 'contain' }} />
                  <img src="/associations/AFlogo.png" alt="Agro Foundries" style={{ height: '65px', objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            {/* Mobile Header Right Controls: Fast Explorer Trigger + Hamburger Menu Toggle */}
            <div className="mobile-nav-toggle" style={{ alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => {
                  if (onOpenExplorer) {
                    onOpenExplorer();
                  } else {
                    const el = document.getElementById('explorer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  padding: '8px 12px',
                  fontSize: '11px',
                  fontWeight: 800,
                  background: '#E8F5E9',
                  color: '#1B5E20',
                  border: '1px solid #4CAF50',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Compass size={14} />
                <span>PRODUCTS</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                style={{
                  padding: '8px 10px',
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>


        {/* Tier 2: Fortune 500 Corporate Industrial Navigation Bar */}
        <div style={{ background: '#4CAF50', borderBottom: '3px solid #388E3C', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)', padding: '0 2.5vw', width: '100%', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative' }}>

            <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none', flex: 1 }}>
              {navCategories.map((cat) => {
                const isActive = activeMegaMenu === cat.id;
                return (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setActiveMegaMenu(cat.id)}
                    style={{ position: 'relative', flexShrink: 0, borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}
                  >
                    <button
                      style={{
                        background: isActive ? '#FAF6EE' : 'transparent',
                        border: 'none',
                        color: isActive ? '#1B5E20' : '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 900,
                        letterSpacing: '0.06em',
                        padding: '16px 20px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                        borderBottom: isActive ? '3px solid #1B5E20' : '3px solid transparent',
                        fontFamily: "'Manrope', sans-serif"
                      }}
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = '#FAF6EE';
                          e.currentTarget.style.color = '#1B5E20';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#FFFFFF';
                        }
                      }}
                      onClick={() => setActiveMegaMenu(isActive ? null : cat.id)}
                    >
                      <span>{cat.label}</span>
                      <ChevronDown size={13} style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: isActive ? '#1B5E20' : '#FFFFFF' }} />
                    </button>
                  </div>
                );
              })}
            </nav>

            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0, position: 'relative' }}>
              <button
                onClick={() => {
                  if (onOpenExplorer) {
                    onOpenExplorer();
                  } else {
                    const el = document.getElementById('explorer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  color: '#FFFFFF',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  padding: '16px 20px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: "'Manrope', sans-serif",
                  borderRadius: '2px'
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
              >
                <Compass size={14} />
                <span>PRODUCT CATALOG</span>
              </button>

              {/* Enterprise Portals Dropdown */}
              <div 
                style={{ position: 'relative', flexShrink: 0, zIndex: 99999 }}
                onMouseEnter={() => { setActiveMegaMenu(null); setIsPortalsDropdownOpen(true); }}
                onMouseLeave={() => setIsPortalsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsPortalsDropdownOpen(!isPortalsDropdownOpen)}
                  style={{
                    background: isPortalsDropdownOpen ? '#FAF6EE' : '#1B5E20',
                    color: isPortalsDropdownOpen ? '#1B5E20' : '#FFFFFF',
                    border: '1px solid #FAF6EE',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    padding: '6px 12px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontFamily: "'Manrope', sans-serif",
                    borderRadius: '3px'
                  }}
                >
                  <Building2 size={13} />
                  <span>PORTALS</span>
                  <ChevronDown size={12} style={{ transform: isPortalsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </button>

                {/* Dropdown Menu with 3 Simple Links */}
                {isPortalsDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    minWidth: '200px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                    zIndex: 999999,
                    padding: '6px 0',
                    marginTop: '4px'
                  }}>
                    {/* Link 1: Customer Portal */}
                    <button
                      onClick={() => {
                        setIsPortalsDropdownOpen(false);
                        if (onOpenPortalModal) onOpenPortalModal('customer');
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '10px 16px',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#1E293B',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        fontFamily: "'Manrope', sans-serif !important"
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#F1F5F9'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      Customer Portal
                    </button>

                    {/* Link 2: Vendor Portal */}
                    <button
                      onClick={() => {
                        setIsPortalsDropdownOpen(false);
                        if (onOpenPortalModal) onOpenPortalModal('vendor');
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '10px 16px',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#1E293B',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        fontFamily: "'Manrope', sans-serif !important"
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#F1F5F9'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      Vendor Portal
                    </button>

                    {/* Link 3: Government Portal */}
                    <button
                      onClick={() => {
                        setIsPortalsDropdownOpen(false);
                        if (onOpenPortalModal) onOpenPortalModal('government');
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '10px 16px',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#1E293B',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        fontFamily: "'Manrope', sans-serif !important"
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#F1F5F9'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      Government Portal
                    </button>
                  </div>
                )}
              </div>

                <a
                  href="#downloads"
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    padding: '16px 20px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'Manrope', sans-serif",
                    borderRadius: '2px'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <span>TECHNICAL LIBRARY</span>
                </a>
              </div>

          </div>
        </div>

        {/* High-Impact Corporate Mega Menu Overlay Panel Attached Directly to Header Bottom */}
        {activeMegaMenu && (
          <div
            className="megamenu-panel"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: '#FFFFFF',
              color: '#1B5E20',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)',
              borderTop: '3px solid #4CAF50',
              borderBottom: '3px solid #1B5E20',
              zIndex: 999,
              fontFamily: "'Manrope', sans-serif"
            }}
          >
            <div className="container-custom" style={{ padding: '2.5rem 2rem 1.75rem 2rem' }}>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>

                {/* Categorized Multi-Column Content */}
                <div style={{ gridColumn: 'span 8', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                  {navCategories.find(m => m.id === activeMegaMenu)?.columns.map((col, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: '13px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', borderBottom: '1.5px solid #E5E7EB', paddingBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Manrope', sans-serif" }}>
                        <span style={{ width: '4px', height: '14px', background: '#4CAF50', display: 'inline-block' }} />
                        <span>{col.title}</span>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {col.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <a
                              href="#products"
                              onClick={() => setActiveMegaMenu(null)}
                              style={{
                                color: '#2E7D32',
                                textDecoration: 'none',
                                fontSize: '13.5px',
                                fontWeight: 600,
                                display: 'inline-block',
                                transition: 'all 0.2s',
                                padding: '2px 6px',
                                borderRadius: '2px',
                                fontFamily: "'Manrope', sans-serif"
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.color = '#1B5E20';
                                e.currentTarget.style.background = '#FAF6EE';
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.color = '#2E7D32';
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Division Right Panel */}
                <div style={{ gridColumn: 'span 4' }}>
                  <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                      <img
                        src="/images/real_metal_casting_stock.jpg"
                        alt="Rail & Transit Manufacturing"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27, 94, 32, 0.88), transparent)' }} />
                      <span style={{ position: 'absolute', bottom: '12px', left: '14px', color: '#FFFFFF', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: "'Manrope', sans-serif" }}>
                        AAR M-1003 CERTIFIED FOUNDRY
                      </span>
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 900, color: '#111827', margin: '0 0 6px 0', fontFamily: "'Manrope', sans-serif" }}>
                        North American Heavy Freight &amp; Transit Castings
                      </h4>
                      <p style={{ fontSize: '12.5px', color: '#4CAF50', margin: '0 0 14px 0', lineHeight: 1.45, fontFamily: "'Manrope', sans-serif" }}>
                        Engineered to AREMA &amp; AAR M-1003 standards for 36-ton heavy axle load endurance.
                      </p>
                      <a
                        href="#products"
                        onClick={() => setActiveMegaMenu(null)}
                        style={{ color: '#1B5E20', fontSize: '13px', fontWeight: 900, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '2px', transition: 'all 0.2s', fontFamily: "'Manrope', sans-serif" }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                      >
                        <span>Access Specification Catalogue</span>
                        <ArrowRight size={14} color="#4CAF50" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}
      </header>

      {/* High-Impact Blur Backdrop Overlay when Mega Menu is Open */}
      {activeMegaMenu && (
        <div
          className="megamenu-backdrop"
          style={{ top: '100%' }}
          onClick={() => setActiveMegaMenu(null)}
        />
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="mobile-drawer-content">
            {/* Drawer Header */}
            <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', background: '#F8F9FA' }}>
              <Logo variant="light" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#E8F5E9',
                  border: '1px solid #4CAF50',
                  color: '#1B5E20',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile Search Bar */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search products, AREMA specs..."
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenExplorer) onOpenExplorer();
                  }}
                  style={{
                    width: '100%',
                    padding: '10px 38px 10px 14px',
                    fontSize: '13px',
                    background: '#F8F9FA',
                    border: '1.5px solid #E5E7EB',
                    borderRadius: '6px',
                    outline: 'none',
                    color: '#1B5E20',
                    fontFamily: "'Manrope', sans-serif"
                  }}
                />
                <Search size={16} color="#4CAF50" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            {/* Mobile Primary Actions */}
            <div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: '#F8F9FA', borderBottom: '1px solid #E5E7EB' }}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenExplorer) {
                    onOpenExplorer();
                  } else {
                    const el = document.getElementById('explorer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  padding: '12px 10px',
                  fontSize: '11px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  background: '#E8F5E9',
                  color: '#1B5E20',
                  border: '1.5px solid #4CAF50',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <Compass size={15} />
                <span>PRODUCT CATALOG</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onRequestQuoteClick) onRequestQuoteClick();
                }}
                style={{
                  padding: '12px 10px',
                  fontSize: '11px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  border: '1.5px solid #1B5E20',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <span>REQUEST QUOTE</span>
                <ArrowRight size={14} color="#FFFFFF" />
              </button>
            </div>

            {/* Collapsible Accordion Navigation Categories */}
            <div style={{ flex: 1, padding: '12px 0', overflowY: 'auto' }}>
              <div style={{ padding: '8px 20px', fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                PRODUCT DIVISIONS &amp; SPECIFICATIONS
              </div>

              {navCategories.map((cat) => {
                const isExpanded = expandedMobileCategory === cat.id;
                const IconComp = cat.icon;

                return (
                  <div key={cat.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <button
                      onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.id)}
                      style={{
                        width: '100%',
                        padding: '14px 20px',
                        background: isExpanded ? '#F0FDF4' : 'transparent',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Manrope', sans-serif"
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <IconComp size={16} color="#1B5E20" />
                        <span style={{ fontSize: '13px', fontWeight: 800, color: '#1B5E20' }}>{cat.label}</span>
                      </div>
                      <ChevronDown
                        size={16}
                        color="#1B5E20"
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }}
                      />
                    </button>

                    {isExpanded && (
                      <div style={{ padding: '8px 20px 16px 20px', background: '#FAFAFA' }}>
                        {cat.columns.map((col, cIdx) => (
                          <div key={cIdx} style={{ marginBottom: '14px' }}>
                            <div style={{ fontSize: '11px', fontWeight: 900, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ width: '3px', height: '10px', background: '#4CAF50', display: 'inline-block' }} />
                              <span>{col.title}</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {col.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                  <a
                                    href="#products"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                      fontSize: '12.5px',
                                      color: '#2E7D32',
                                      textDecoration: 'none',
                                      fontWeight: 600,
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '6px',
                                      padding: '3px 0'
                                    }}
                                  >
                                    <ChevronRight size={12} color="#81C784" />
                                    <span>{link}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Quick Section Anchors */}
              <div style={{ padding: '16px 20px 8px 20px', fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                ENTERPRISE REGISTRATION PORTALS
              </div>
              <div style={{ padding: '0 20px 16px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenPortalModal) onOpenPortalModal('customer');
                  }}
                  style={{ background: '#E8F5E9', border: '1px solid #4CAF50', padding: '10px 14px', borderRadius: '4px', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <UserCheck size={16} color="#1B5E20" />
                  <div>
                    <strong style={{ fontSize: '12.5px', color: '#1B5E20', display: 'block' }}>1. Customer Registration &amp; CAD Upload</strong>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenPortalModal) onOpenPortalModal('vendor');
                  }}
                  style={{ background: '#FEF3C7', border: '1px solid #F59E0B', padding: '10px 14px', borderRadius: '4px', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <Building2 size={16} color="#B45309" />
                  <div>
                    <strong style={{ fontSize: '12.5px', color: '#B45309', display: 'block' }}>2. Vendor &amp; Supplier Registration</strong>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenPortalModal) onOpenPortalModal('government');
                  }}
                  style={{ background: '#FEE2E2', border: '1px solid #9B0403', padding: '10px 14px', borderRadius: '4px', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <ShieldCheck size={16} color="#9B0403" />
                  <div>
                    <strong style={{ fontSize: '12.5px', color: '#9B0403', display: 'block' }}>3. Government &amp; Transit Authority Portal</strong>
                  </div>
                </button>
              </div>

              <div style={{ padding: '8px 20px 8px 20px', fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                DIRECT DIRECTORY
              </div>
              <div style={{ padding: '0 20px 16px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href="#capabilities"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  Foundry Capabilities &amp; Metallurgy
                </a>
                <a
                  href="#process"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  Manufacturing Timeline Workflow
                </a>
                <a
                  href="#standards"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  International Standards &amp; Wheelsets
                </a>
                <a
                  href="#testing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  In-House Testing Facilities
                </a>
                <a
                  href="#approvals"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  Authorities &amp; Certifications
                </a>
                <a
                  href="#news"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 800, textDecoration: 'none' }}
                >
                  News &amp; Technical Bulletins
                </a>
              </div>
            </div>

            {/* Mobile Drawer Footer Contacts */}
            <div style={{ padding: '16px 20px', background: '#144818', color: '#FFFFFF', borderTop: '2px solid #4CAF50' }}>
              <div style={{ fontSize: '11px', color: '#A5D6A7', fontWeight: 800, marginBottom: '8px' }}>
                24/7 TECHNICAL SALES HOTLINE
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <a href="tel:6038383333" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                  <Phone size={14} color="#81C784" />
                  <span>603 838 3333 / 603 838 3222</span>
                </a>
                <a href="mailto:foundry@westpointindustries.com" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                  <Mail size={14} color="#81C784" />
                  <span>foundry@westpointindustries.com</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;

