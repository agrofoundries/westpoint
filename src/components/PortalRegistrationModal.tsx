import React, { useState } from 'react';
import { X, Upload, CheckCircle2, FileText, Building2, UserCheck, ShieldCheck, Trash2, ArrowRight } from 'lucide-react';

export type PortalType = 'customer' | 'vendor' | 'government';

interface PortalRegistrationModalProps {
  isOpen: boolean;
  initialType?: PortalType;
  onClose: () => void;
}

export const PortalRegistrationModal: React.FC<PortalRegistrationModalProps> = ({
  isOpen,
  initialType = 'customer',
  onClose,
}) => {
  const [portalType, setPortalType] = useState<PortalType>(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [files, setFiles] = useState<Array<{ name: string; size: string }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update selected type if initialType changes when opened
  React.useEffect(() => {
    if (isOpen) {
      setPortalType(initialType);
      setSubmitted(false);
      setFiles([]);
    }
  }, [isOpen, initialType]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(f => ({
        name: f.name,
        size: (f.size / (1024 * 1024)).toFixed(2) + ' MB'
      }));
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const prefix = portalType === 'customer' ? 'CUST' : portalType === 'vendor' ? 'VND' : 'GOV';
      setTrackingId(`WP-${prefix}-2026-${randomNum}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const portalConfig = {
    customer: {
      title: 'Customer Registration & Drawing Upload',
      subtitle: 'Register your enterprise account and submit technical CAD/PDF drawings for instant engineering quotation.',
      badgeColor: '#1B5E20',
      icon: UserCheck,
      idLabel: 'TAX / GST / DUNS NUMBER'
    },
    vendor: {
      title: 'Vendor & Supplier Registration Portal',
      subtitle: 'Onboard your supply chain organization, upload mill test reports, quality specs & vendor drawings.',
      badgeColor: '#D97706',
      icon: Building2,
      idLabel: 'VENDOR REGISTRATION / GST NUMBER'
    },
    government: {
      title: 'Government & Transit Authority Portal',
      subtitle: 'Official registration portal for municipal transit, state railways, defense & public sector drawing submissions.',
      badgeColor: '#C62828',
      icon: ShieldCheck,
      idLabel: 'GOVERNMENT AGENCY CODE / CAGE / EIN'
    }
  };

  const currentConfig = portalConfig[portalType];
  const IconComponent = currentConfig.icon;

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 9999 }}>
      <div 
        style={{ 
          background: '#FAF6EE', 
          border: `2px solid ${currentConfig.badgeColor}`, 
          width: '100%', 
          maxWidth: '720px', 
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem', 
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
          color: '#1B5E20'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '1.25rem', 
            right: '1.25rem', 
            background: 'rgba(0,0,0,0.05)', 
            border: 'none', 
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', 
            color: '#1B5E20' 
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#1B5E20', color: '#FAF6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <CheckCircle2 size={36} color="#4CAF50" />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              PORTAL SUBMISSION CONFIRMED
            </span>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#111827', marginBottom: '0.75rem', fontFamily: "'Manrope', sans-serif !important" }}>
              REGISTRATION & DRAWINGS RECEIVED
            </h3>
            <div style={{ background: '#FFFFFF', border: '1px border #E5E7EB', padding: '1rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', fontWeight: 700 }}>SUBMISSION TRACKING ID</span>
              <strong style={{ fontSize: '18px', color: '#1B5E20', letterSpacing: '0.05em' }}>{trackingId}</strong>
            </div>
            <p style={{ fontSize: '14px', color: '#2E7D32', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '520px', margin: '0 auto 2rem auto' }}>
              Your {portalType.toUpperCase()} portal registration and attached engineering drawings have been routed to our Westpoint Technical Evaluation Division. A designated account officer will contact you within 24 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-animated"
              style={{
                background: '#1B5E20',
                color: '#FFFFFF',
                border: '1.5px solid #4CAF50',
                padding: '14px 32px',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              CLOSE PORTAL WINDOW
            </button>
          </div>
        ) : (
          <div>
            {/* Tab Selector for Quick Switching */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '1.75rem', background: '#E5E7EB', padding: '4px', borderRadius: '4px' }}>
              {(['customer', 'vendor', 'government'] as PortalType[]).map((type) => {
                const isActive = portalType === type;
                const labels = { customer: 'Customer Portal', vendor: 'Vendor Portal', government: 'Government Portal' };
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPortalType(type)}
                    style={{
                      padding: '10px 8px',
                      fontSize: '11px',
                      fontWeight: 900,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      border: 'none',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      background: isActive ? '#1B5E20' : 'transparent',
                      color: isActive ? '#FFFFFF' : '#4B5563',
                      transition: 'all 0.2s ease',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                  >
                    {labels[type]}
                  </button>
                );
              })}
            </div>

            {/* Header section for current selected portal */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid #E5E7EB' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '4px', background: currentConfig.badgeColor, color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <IconComponent size={24} color="#FFFFFF" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: currentConfig.badgeColor, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    OFFICIAL ENTERPRISE PORTAL
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#111827', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  {currentConfig.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#4B5563', margin: '4px 0 0 0', lineHeight: 1.4 }}>
                  {currentConfig.subtitle}
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>ORGANIZATION / COMPANY NAME *</label>
                  <input type="text" required placeholder="e.g. Amtrak Railway / L&T Rail Division" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>{currentConfig.idLabel} *</label>
                  <input type="text" required placeholder="Registration / Tax ID Code" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>FULL NAME &amp; DESIGNATION *</label>
                  <input type="text" required placeholder="e.g. Chief Procurement Officer / Lead Engineer" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>OFFICIAL BUSINESS EMAIL *</label>
                  <input type="email" required placeholder="procurement@organization.com" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
              </div>

              {/* Upload Drawing & Specs Dropzone */}
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  ATTACH ENGINEERING DRAWINGS &amp; SPECIFICATIONS (.DWG, .DXF, .STEP, .PDF, .ZIP) *
                </label>
                <div 
                  style={{ 
                    border: '2px dashed #4CAF50', 
                    background: '#FFFFFF', 
                    padding: '1.5rem', 
                    textAlign: 'center', 
                    borderRadius: '4px',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onDragOver={e => e.preventDefault()}
                >
                  <input 
                    type="file" 
                    multiple 
                    onChange={handleFileChange}
                    accept=".dwg,.dxf,.step,.stp,.pdf,.zip,.rar,.doc,.docx"
                    style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                  />
                  <Upload size={28} color="#1B5E20" style={{ margin: '0 auto 8px auto' }} />
                  <p style={{ fontSize: '13px', fontWeight: 800, color: '#1B5E20', margin: 0 }}>
                    Click or Drag &amp; Drop Engineering Drawings Here
                  </p>
                  <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', marginTop: '4px' }}>
                    Supported formats: AutoCAD (.DWG/.DXF), 3D CAD (.STEP/.STP), PDF Specifications, ZIP archives (Up to 100MB)
                  </span>
                </div>

                {/* Uploaded files list */}
                {files.length > 0 && (
                  <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {files.map((file, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#E8F5E9', padding: '8px 12px', borderRadius: '4px', border: '1px solid #A5D6A7' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <FileText size={16} color="#1B5E20" />
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B5E20' }}>{file.name}</span>
                          <span style={{ fontSize: '10px', color: '#4B5563', background: '#FFFFFF', padding: '2px 6px', borderRadius: '2px' }}>{file.size}</span>
                        </div>
                        <button type="button" onClick={() => removeFile(idx)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#C62828' }}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  PROJECT NOTES &amp; MATERIAL REQUIREMENTS (OPTIONAL)
                </label>
                <textarea 
                  rows={2} 
                  placeholder="Specify material grade (e.g. Grade B+ Cast Steel, Alloy Steel 4140, AASHTO M306), annual quantity, or compliance standards..." 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '12.5px', color: '#111827', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#4B5563', marginTop: '4px' }}>
                <ShieldCheck size={16} color="#1B5E20" />
                <span>NDA Protected Submission: All drawings and credentials are strictly protected under Westpoint ISO 27001 Security Vault.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-animated"
                style={{
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  border: '1.5px solid #4CAF50',
                  padding: '15px',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '6px',
                  fontFamily: "'Manrope', sans-serif !important"
                }}
              >
                {isSubmitting ? (
                  <span>PROCESSING PORTAL SUBMISSION...</span>
                ) : (
                  <>
                    <span>SUBMIT PORTAL REGISTRATION &amp; DRAWINGS</span>
                    <ArrowRight size={16} color="#4CAF50" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortalRegistrationModal;
