import React, { useState } from 'react';
import Logo from './Logo';
import {
  MapPin,
  Mail,
  Clock,
  ArrowRight,
  ChevronUp,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { label: 'Manganese Turnout Frogs', href: '#products' },
    { label: 'Forged Wheelsets & Axles', href: '#products' },
    { label: 'Locomotive Bogie Castings', href: '#products' },
    { label: 'Draft Gear & Coupler Knuckles', href: '#products' },
    { label: 'Track Tie Plates & Fasteners', href: '#products' },
    { label: 'Custom Rail Patterns & Tooling', href: '#capabilities' }
  ];

  const solutions = [
    { label: 'AREMA Trackwork Engineering', href: '#standards' },
    { label: 'AAR M-1003 QA Certification', href: '#approvals' },
    { label: 'Electric Induction Steel Melting', href: '#process' },
    { label: 'Ultrasonic NDT & Testing Lab', href: '#testing' },
    { label: 'Heavy-Axle-Load Track Systems', href: '#performance' },
    { label: 'Class I Railroad Supply Chain', href: '#coverage' }
  ];

  const companyLinks = [
    { label: 'About Westpoint Group', href: '#company-overview' },
    { label: 'Metal Engineering Team', href: '#company-overview' },
    { label: 'Foundry & Forging Facilities', href: '#capabilities' },
    { label: 'Rail Network Vendor Status', href: '#trust-certifications' },
    { label: 'Contact Enterprise Sales', href: '#contact' }
  ];

  const industryPills = [
    'Class I Freight Corridors',
    'Urban Passenger Transit & Metro',
    'High-Speed Passenger Rail',
    'Heavy-Haul Mining Rail',
    'Locomotive & Rolling Stock',
    'Railway Switch & Turnouts',
    'Commuter & Intercity Lines',
    'Rail Maintenance-of-Way (MOW)'
  ];

  return (
    <footer style={{ background: '#144818', color: '#FFFFFF', borderTop: '3px solid #4CAF50', position: 'relative', zIndex: 1002 }}>

      {/* Main Top Footer Grid with compact top padding */}
      <div className="container-custom" style={{ paddingTop: '1.25rem', paddingBottom: '2.5rem', paddingLeft: '2rem', paddingRight: '2.5rem' }}>
        <div className="footer-corporate-grid">

          {/* ==================== LEFT COLUMN: BRAND & CONTACT ==================== */}
          <div>
            {/* Logo Badge */}
            <div style={{ marginBottom: '1.25rem', display: 'inline-block', background: '#FFFFFF', padding: '6px 14px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
              <Logo division="group" height="42px" />
            </div>

            {/* Mission Statement */}
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.65, margin: '0 0 1.75rem 0', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              Westpoint Group manufactures heavy-duty steel castings, forged axles, and track switch components for Class I freight railroads and urban passenger transit systems across North America.
            </p>

            {/* Contact Rows with Rounded Icon Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2rem' }}>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(76, 175, 80, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin size={15} color="#81C784" />
                </div>
                <div style={{ lineHeight: 1.4, color: '#FFFFFF', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
                  105 Maxess Road, Melville, NY 11747, United States
                </div>
              </div>



              {/* Email Address */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(76, 175, 80, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={15} color="#81C784" />
                </div>
                <div>
                  <a href="mailto:foundry@westpointindustries.com" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => e.currentTarget.style.color = '#A5D6A7'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>
                    foundry@westpointindustries.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(76, 175, 80, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={15} color="#81C784" />
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
                  Mon – Fri · 8:00 AM to 6:00 PM EST
                </div>
              </div>

            </div>

            {/* Follow Us */}
            <div>
              <div style={{ fontSize: '10.5px', fontWeight: 900, letterSpacing: '0.14em', color: '#A5D6A7', textTransform: 'uppercase', marginBottom: '10px', fontFamily: "'Manrope', sans-serif !important" }}>
                FOLLOW US
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {[
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                    href: '#linkedin'
                  },
                  {
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                    href: '#twitter'
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                    href: '#instagram'
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                      </svg>
                    ),
                    href: '#youtube'
                  },
                  {
                    icon: <MessageSquare size={15} />,
                    href: '#contact'
                  }
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(76, 175, 80, 0.4)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#FAF6EE';
                      e.currentTarget.style.color = '#1B5E20';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ==================== MIDDLE SECTION: NAVIGATION & INDUSTRIES ==================== */}
          <div>

            {/* Top 3 Columns: Services, Solutions, Company */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>

              {/* Services */}
              <div>
                {/* Phone Numbers Moved Here (Now ABOVE Services) */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <h4 style={{ fontSize: '11.5px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 1.25rem 0', fontFamily: "'Manrope', sans-serif !important" }}>
                    CONTACT DEPARTMENTS
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: 500, fontSize: '11.5px', fontFamily: "'Manrope', sans-serif !important" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>Office</span>
                      <a href="tel:+15163453330" style={{ color: '#FFFFFF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#A5D6A7'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>+1 516-345-3330</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>Forging</span>
                      <a href="tel:+15163453331" style={{ color: '#FFFFFF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#A5D6A7'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>+1 516-345-3331</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>Foundry</span>
                      <a href="tel:+15163453332" style={{ color: '#FFFFFF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#A5D6A7'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>+1 516-345-3332</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>Engineering</span>
                      <a href="tel:+15163453334" style={{ color: '#FFFFFF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#A5D6A7'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>+1 516-345-3334</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>Admin</span>
                      <a href="tel:+15163453338" style={{ color: '#FFFFFF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#A5D6A7'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>+1 516-345-3338</a>
                    </div>
                  </div>
                </div>

                <h4 style={{ fontSize: '11.5px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 1.25rem 0', fontFamily: "'Manrope', sans-serif !important" }}>
                  SERVICES
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {services.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 600, transition: 'color 0.2s', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => e.currentTarget.style.color = '#A5D6A7'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Solutions */}
              <div>
                <h4 style={{ fontSize: '11.5px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 1.25rem 0', fontFamily: "'Manrope', sans-serif !important" }}>
                  SOLUTIONS
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {solutions.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 600, transition: 'color 0.2s', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => e.currentTarget.style.color = '#A5D6A7'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 style={{ fontSize: '11.5px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 1.25rem 0', fontFamily: "'Manrope', sans-serif !important" }}>
                  COMPANY
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {companyLinks.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 600, transition: 'color 0.2s', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => e.currentTarget.style.color = '#A5D6A7'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* ==================== RIGHT COLUMN: STAY INFORMED & LATEST INSIGHTS ==================== */}
          <div>

            {/* Stay Informed Newsletter */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '11.5px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 0.5rem 0', fontFamily: "'Manrope', sans-serif !important" }}>
                STAY INFORMED
              </h4>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, margin: '0 0 1rem 0', fontFamily: "'Manrope', sans-serif !important" }}>
                Engineering notes, technology breakdowns and project insights. One email a month, no filler.
              </p>

              {subscribed ? (
                <div style={{ background: 'rgba(76, 175, 80, 0.2)', border: '1px solid #4CAF50', borderRadius: '30px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontSize: '12.5px', fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="#81C784" />
                  <span>Thank you! Subscribed to technical bulletins.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#FFFFFF',
                    borderRadius: '50px',
                    padding: '4px 5px 4px 16px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.25)'
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      fontSize: '13px',
                      color: '#1B5E20',
                      fontWeight: 600,
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#1B5E20',
                      border: 'none',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      flexShrink: 0
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#4CAF50'}
                    onMouseLeave={e => e.currentTarget.style.background = '#1B5E20'}
                  >
                    <ArrowRight size={16} color="#FFFFFF" />
                  </button>
                </form>
              )}
            </div>

            {/* Industries Section with Pill Badges */}
            <div style={{ marginBottom: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <span style={{ fontSize: '11.5px', fontWeight: 900, letterSpacing: '0.14em', color: '#A5D6A7', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  INDUSTRIES
                </span>
                <span style={{ height: '2px', width: '24px', background: '#4CAF50' }} />
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {industryPills.map((pill, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const el = document.getElementById('markets');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(76, 175, 80, 0.4)',
                      borderRadius: '20px',
                      padding: '5px 12px',
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#FAF6EE';
                      e.currentTarget.style.color = '#1B5E20';
                      e.currentTarget.style.borderColor = '#FAF6EE';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = 'rgba(76, 175, 80, 0.4)';
                    }}
                  >
                    {pill}
                  </button>
                ))}
              </div>
            </div>

            {/* AAR & AREMA Quality Certification Badge Card */}
            <div style={{ padding: '1.25rem 1.5rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(76, 175, 80, 0.35)' }}>
              <div style={{ fontSize: '11px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', fontFamily: "'Manrope', sans-serif !important" }}>
                AAR M-1003 &amp; AREMA QUALITY ACCREDITATION
              </div>
              <p style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55, margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
                All heavy rail components and trackwork castings are manufactured under ISO 9001:2015 certification with 100% volumetric NDT and full heat-code traceability.
              </p>
            </div>

          </div>

        </div>

        {/* ==================== GROUP ENTERPRISES & ASSOCIATIONS STRIP (DIRECTLY IN MAIN FOOTER) ==================== */}
        <div style={{
          marginTop: '2.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>
                Westpoint Corporate Network
              </span>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.01em', fontFamily: "'Manrope', sans-serif !important" }}>
                Westpoint Group of Enterprises &amp; Associated Divisions
              </h4>
            </div>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
              Integrated Rail, Water, Infrastructure &amp; Metallurgy
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* 01 Westpoint Infrastructure */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '10px',
              padding: '1.4rem 1.6rem',
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1.5px solid rgba(76, 175, 80, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <img
                  src="/logos/Westpoint-Foundries-Industrial-Logo.png"
                  alt="Westpoint Foundries Logo"
                  style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
                />
                <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#1B5E20', background: '#E8F5E9', padding: '4px 10px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Foundries Division
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#4A5568', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                Heavy rail trackwork, transit castings, rolling stock forgings, base plates, and metallurgical infrastructure engineering.
              </p>
            </div>

            {/* 02 Westpoint Water */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '10px',
              padding: '1.4rem 1.6rem',
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1.5px solid rgba(76, 175, 80, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <img
                  src="/logos/Westpoint-Castings-Industrial-Logo.png"
                  alt="Westpoint Castings Logo"
                  style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
                />
                <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#1B5E20', background: '#E8F5E9', padding: '4px 10px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Castings Division
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#4A5568', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                Advanced industrial water management, municipal hydraulics, heavy ductile pumping systems, and environmental fluid infrastructure.
              </p>
            </div>

            {/* 03 Westpoint Group Companies */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '10px',
              padding: '1.4rem 1.6rem',
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1.5px solid rgba(76, 175, 80, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <img
                  src="/logos/Westpoint-Forgings-Industrial-Logo.png"
                  alt="Westpoint Forgings Logo"
                  style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
                />
                <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#1B5E20', background: '#E8F5E9', padding: '4px 10px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Forgings Division
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#4A5568', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                Global parent holding conglomerate coordinating specialized foundries, precision CNC machining complexes, and supply logistics worldwide.
              </p>
            </div>

            {/* 04 Agro Foundries */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '10px',
              padding: '1.4rem 1.6rem',
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1.5px solid rgba(76, 175, 80, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <img
                  src="/associations/AFlogo.png"
                  alt="Agro Foundries Logo"
                  style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
                />
                <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#1B5E20', background: '#E8F5E9', padding: '4px 10px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Agro Division
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#4A5568', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                Specialized agricultural castings, tillage tools, rotavator components, and farm machinery equipment manufacturing.
              </p>
            </div>

            {/* 05 Westpoint Waterworks */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '10px',
              padding: '1.4rem 1.6rem',
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1.5px solid rgba(76, 175, 80, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <img
                  src="/logos/Westpoint-Waterworks-Corporate-Logo.png"
                  alt="Westpoint Waterworks Logo"
                  style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
                />
                <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#1B5E20', background: '#E8F5E9', padding: '4px 10px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Waterworks Division
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#4A5568', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                Advanced industrial water management, municipal hydraulics, heavy ductile pumping systems, and environmental fluid infrastructure.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ==================== BOTTOM FOOTER BAR ==================== */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', background: '#0F291E', padding: '1.25rem 0', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingLeft: '2rem', paddingRight: '2.5rem' }}>

          {/* Copyright */}
          <div style={{ fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>
            &copy; 2026 Westpoint Group Companies. All rights reserved.
          </div>

          {/* Legal Links + Scroll To Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#privacy" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}>
              Privacy Policy
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>/</span>

            <a href="#terms" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}>
              Terms of Service
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>/</span>

            <a href="#standards" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}>
              Standard Specifications
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>/</span>

            <a href="#sitemap" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}>
              Sitemap
            </a>

            {/* Back to Top Floating Style Circle Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#1B5E20',
                border: '1.5px solid #4CAF50',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginLeft: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#4CAF50';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#1B5E20';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ChevronUp size={18} />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
