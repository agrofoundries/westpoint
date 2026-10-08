import React, { useState } from 'react';
import { X, Upload, CheckCircle2, FileText, ShieldCheck, Trash2, ArrowRight } from 'lucide-react';

interface GovernmentRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GovernmentRegistrationModal: React.FC<GovernmentRegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [files, setFiles] = useState<Array<{ name: string; size: string }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFiles([]);
    }
  }, [isOpen]);

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
      setTrackingId(`WP-GOV-2026-${randomNum}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 9999 }}>
      <div 
        style={{ 
          background: '#FAF6EE', 
          border: '2px solid #C62828', 
          width: '100%', 
          maxWidth: '680px', 
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.25rem', 
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
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', 
            color: '#1B5E20' 
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#C62828', color: '#FAF6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <CheckCircle2 size={34} color="#FFFFFF" />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#C62828', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              GOVERNMENT SUBMISSION CONFIRMED
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', marginBottom: '0.75rem', fontFamily: "'Manrope', sans-serif !important" }}>
              AUTHORITY REGISTRATION &amp; TENDER DRAWINGS RECEIVED
            </h3>
            <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', padding: '0.85rem 1.5rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '10.5px', color: '#6B7280', display: 'block', fontWeight: 700 }}>GOVERNMENT DOCKET TRACKING NO.</span>
              <strong style={{ fontSize: '17px', color: '#C62828', letterSpacing: '0.05em' }}>{trackingId}</strong>
            </div>
            <p style={{ fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '500px', margin: '0 auto 1.75rem auto' }}>
              Your official agency registration and tender technical drawings have been logged under ISO 27001 security protocols into the Westpoint Defense &amp; Public Transit Contracting Vault.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-animated"
              style={{
                background: '#C62828',
                color: '#FFFFFF',
                border: '1.5px solid #EF5350',
                padding: '12px 28px',
                fontSize: '12px',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #E5E7EB' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '4px', background: '#C62828', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} color="#FFFFFF" />
              </div>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#C62828', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block' }}>
                  PUBLIC SECTOR &amp; TRANSIT VAULT
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#111827', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  GOVERNMENT &amp; TRANSIT AUTHORITY PORTAL
                </h3>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#C62828', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    TRANSIT AUTHORITY / GOVERNMENT AGENCY *
                  </label>
                  <input type="text" required style={{ width: '100%', padding: '9px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#C62828', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    AGENCY CODE / CAGE / EIN / TAX ID *
                  </label>
                  <input type="text" required style={{ width: '100%', padding: '9px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#C62828', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    PROCUREMENT OFFICER / REPRESENTATIVE *
                  </label>
                  <input type="text" required style={{ width: '100%', padding: '9px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#C62828', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    OFFICIAL GOVERNMENT EMAIL *
                  </label>
                  <input type="email" required style={{ width: '100%', padding: '9px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
              </div>

              {/* Upload Classified Tender & CAD Specification Vault */}
              <div>
                <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#C62828', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  ATTACH CLASSIFIED TENDER DRAWINGS &amp; SPECIFICATIONS (.DWG, .STEP, .PDF, .ZIP) *
                </label>
                <div 
                  style={{ 
                    border: '2px dashed #EF5350', 
                    background: '#FFFFFF', 
                    padding: '1.25rem', 
                    textAlign: 'center', 
                    borderRadius: '4px',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onDragOver={e => e.preventDefault()}
                >
                  <input 
                    type="file" 
                    multiple 
                    onChange={handleFileChange}
                    accept=".pdf,.dwg,.dxf,.step,.doc,.docx,.zip"
                    style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                  />
                  <Upload size={24} color="#C62828" style={{ margin: '0 auto 6px auto' }} />
                  <p style={{ fontSize: '12.5px', fontWeight: 800, color: '#C62828', margin: 0 }}>
                    Click or Drag Official Tender Drawings &amp; Specifications Here
                  </p>
                  <span style={{ fontSize: '10.5px', color: '#6B7280', display: 'block', marginTop: '4px' }}>
                    National Infrastructure CAD Drawings, RDSO Specifications, Public Procurement RFPs (Up to 100MB)
                  </span>
                </div>

                {files.length > 0 && (
                  <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {files.map((file, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FEE2E2', padding: '6px 10px', borderRadius: '4px', border: '1px solid #FCA5A5' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <FileText size={15} color="#C62828" />
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#7F1D1D' }}>{file.name}</span>
                          <span style={{ fontSize: '10px', color: '#4B5563', background: '#FFFFFF', padding: '1px 5px', borderRadius: '2px' }}>{file.size}</span>
                        </div>
                        <button type="button" onClick={() => removeFile(idx)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#C62828' }}>
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#C62828', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  TENDER REFERENCE NO. &amp; COMPLIANCE REQUIREMENTS
                </label>
                <textarea 
                  rows={2} 
                  style={{ width: '100%', padding: '8px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '12px', color: '#111827', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', color: '#4B5563' }}>
                <ShieldCheck size={15} color="#C62828" />
                <span>Government Confidentiality: Encrypted under ISO 27001 Public Sector Data Security Vault.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-animated"
                style={{
                  background: '#C62828',
                  color: '#FFFFFF',
                  border: '1.5px solid #EF5350',
                  padding: '13px',
                  fontSize: '12px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginTop: '4px',
                  fontFamily: "'Manrope', sans-serif !important"
                }}
              >
                {isSubmitting ? (
                  <span>SUBMITTING GOVERNMENT TENDER REGISTRATION...</span>
                ) : (
                  <>
                    <span>SUBMIT GOVERNMENT REGISTRATION &amp; TENDER DRAWINGS</span>
                    <ArrowRight size={15} color="#FFFFFF" />
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

export default GovernmentRegistrationModal;
