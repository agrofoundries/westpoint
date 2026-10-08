import React from 'react';
import { UserCheck, Building2, ShieldCheck, Upload, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import type { PortalType } from './PortalRegistrationModal';

interface PortalsSectionProps {
  onOpenPortalModal: (type: PortalType) => void;
}

export const PortalsSection: React.FC<PortalsSectionProps> = ({ onOpenPortalModal }) => {
  const portals = [
    {
      type: 'customer' as PortalType,
      tag: 'CUSTOMER PORTAL',
      title: 'Customer Registration & Drawing Upload',
      subtitle: 'For railway operators, OEM equipment builders, and industrial clients seeking precision forgings & casting manufacturing.',
      icon: UserCheck,
      badgeBg: 'rgba(27, 94, 32, 0.1)',
      badgeBorder: '#4CAF50',
      badgeColor: '#1B5E20',
      btnBg: '#1B5E20',
      highlights: [
        'Enterprise Customer Registration & Account Management',
        'Direct Upload of 2D/3D CAD Drawings (.DWG, .STEP, .PDF)',
        'Instant Automated RFQ Tracking Number Generation',
        'Direct Technical Review by Westpoint Metallurgy Engineers'
      ],
      ctaText: 'REGISTER AS CUSTOMER & UPLOAD DRAWING'
    },
    {
      type: 'vendor' as PortalType,
      tag: 'VENDOR & SUPPLIER PORTAL',
      title: 'Vendor Registration & Spec Upload',
      subtitle: 'For raw material suppliers, alloy foundries, heat-treating partners, and tooling vendors joining our global network.',
      icon: Building2,
      badgeBg: 'rgba(217, 119, 6, 0.1)',
      badgeBorder: '#F59E0B',
      badgeColor: '#B45309',
      btnBg: '#92400E',
      highlights: [
        'Supplier Pre-qualification & Registration Portal',
        'Mill Test Certificate & Raw Material Chemical Analysis Upload',
        'Approved Supplier List (ASL) Onboarding',
        'Sub-component Drawing & Tooling Spec Submission'
      ],
      ctaText: 'REGISTER AS VENDOR & SUBMIT SPECS'
    },
    {
      type: 'government' as PortalType,
      tag: 'GOVERNMENT & AUTHORITY PORTAL',
      title: 'Government & Transit Registration',
      subtitle: 'For national railways, state DOTs, municipal transit authorities, and defense procurement departments.',
      icon: ShieldCheck,
      badgeBg: 'rgba(198, 40, 40, 0.1)',
      badgeBorder: '#EF5350',
      badgeColor: '#C62828',
      btnBg: '#B71C1C',
      highlights: [
        'Public Transit & Government Entity Registration',
        'Classified Railway Infrastructure Tender Submissions',
        'ISO 27001 Secure CAD & Compliance Drawing Vault',
        'AASHTO M306 & National Infrastructure Standards Verification'
      ],
      ctaText: 'REGISTER AUTHORITY & SUBMIT TENDER DRAWINGS'
    }
  ];

  return (
    <section 
      id="portals" 
      style={{ 
        padding: '5rem 0', 
        background: '#FAF6EE', 
        borderTop: '1px solid #E5E7EB',
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#4CAF50' }} />
            <span style={{ color: '#4CAF50', fontWeight: 900, letterSpacing: '0.15em', fontSize: '11px', textTransform: 'uppercase' }}>
              DIRECT ACCESS ENTERPRISE PORTALS
            </span>
            <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#4CAF50' }} />
          </div>

          <h2 style={{ 
            fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', 
            fontWeight: 900, 
            color: '#111827', 
            margin: '0.5rem 0 1rem 0',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            fontFamily: "'Manrope', sans-serif !important"
          }}>
            QUICK REGISTRATION &amp; CAD DRAWING SUBMISSION PORTALS
          </h2>

          <p style={{ fontSize: '15px', color: '#2E7D32', lineHeight: 1.6, margin: 0 }}>
            Streamlined digital portals tailored for client engineering teams, certified vendors, and public sector transit authorities. Upload CAD specifications and complete registration instantly.
          </p>
        </div>

        {/* 3 Portal Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {portals.map((portal) => {
            const IconComp = portal.icon;
            return (
              <div
                key={portal.type}
                className="btn-animated"
                style={{
                  background: '#FFFFFF',
                  border: `1.5px solid ${portal.badgeBorder}`,
                  borderRadius: '4px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 900,
                      letterSpacing: '0.12em',
                      background: portal.badgeBg,
                      color: portal.badgeColor,
                      border: `1px solid ${portal.badgeBorder}`,
                      padding: '4px 10px',
                      borderRadius: '2px',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}>
                      {portal.tag}
                    </span>

                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '4px',
                      background: portal.btnBg,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp size={22} color="#FFFFFF" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{ 
                    fontSize: '1.35rem', 
                    fontWeight: 900, 
                    color: '#111827', 
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                    fontFamily: "'Manrope', sans-serif !important"
                  }}>
                    {portal.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#4B5563', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    {portal.subtitle}
                  </p>

                  {/* Feature Highlights List */}
                  <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '1.25rem', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                      PORTAL CAPABILITIES:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {portal.highlights.map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#1F2937', lineHeight: 1.4 }}>
                          <CheckCircle2 size={16} color="#4CAF50" style={{ flexShrink: 0, marginTop: '1px' }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quick Link Action Button */}
                <div>
                  <button
                    onClick={() => onOpenPortalModal(portal.type)}
                    className="btn-animated"
                    style={{
                      width: '100%',
                      background: portal.btnBg,
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '14px 18px',
                      fontSize: '11.5px',
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                  >
                    <Upload size={16} color="#FFFFFF" />
                    <span>{portal.ctaText}</span>
                    <ArrowRight size={15} color="#FFFFFF" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Security Disclaimer Strip */}
        <div style={{ marginTop: '3rem', background: '#FFFFFF', border: '1px solid #E5E7EB', padding: '1.25rem 2rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileText size={22} color="#1B5E20" />
            <div>
              <strong style={{ fontSize: '13px', color: '#111827', display: 'block', textTransform: 'uppercase' }}>
                ISO 27001 SECURE DRAWING SUBMISSION VAULT
              </strong>
              <span style={{ fontSize: '12px', color: '#6B7280' }}>
                All customer, vendor, and government drawing uploads are encrypted end-to-end and governed under strict Non-Disclosure Agreements (NDA).
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => onOpenPortalModal('customer')}
              style={{ background: 'transparent', border: '1px solid #1B5E20', color: '#1B5E20', padding: '8px 16px', fontSize: '11px', fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase' }}
            >
              CUSTOMER QUICK LINK
            </button>
            <button
              onClick={() => onOpenPortalModal('vendor')}
              style={{ background: 'transparent', border: '1px solid #D97706', color: '#B45309', padding: '8px 16px', fontSize: '11px', fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase' }}
            >
              VENDOR QUICK LINK
            </button>
            <button
              onClick={() => onOpenPortalModal('government')}
              style={{ background: 'transparent', border: '1px solid #C62828', color: '#C62828', padding: '8px 16px', fontSize: '11px', fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase' }}
            >
              GOV QUICK LINK
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortalsSection;
