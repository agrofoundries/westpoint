import React, { useState } from 'react';
import { X, Upload, CheckCircle2, FileText, Building2, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

interface VendorRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VendorRegistrationModal: React.FC<VendorRegistrationModalProps> = ({
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
      setTrackingId(`WP-VND-2026-${randomNum}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 999999, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
      <div 
        style={{ 
          background: '#FFFFFF', 
          border: '1px solid #E5E7EB',
          borderTop: '4px solid #D97706', 
          borderRadius: '8px',
          width: '100%', 
          maxWidth: '640px', 
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem', 
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          color: '#111827'
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
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#D97706', color: '#FAF6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <CheckCircle2 size={34} color="#FFFFFF" />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#B45309', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
              VENDOR PRE-QUALIFICATION SUBMITTED
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', marginBottom: '0.75rem', fontFamily: "'Manrope', sans-serif !important" }}>
              SUPPLIER DOSSIER &amp; CERTIFICATES RECEIVED
            </h3>
            <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', padding: '0.85rem 1.5rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '10.5px', color: '#6B7280', display: 'block', fontWeight: 700 }}>VENDOR REGISTRATION ID</span>
              <strong style={{ fontSize: '17px', color: '#B45309', letterSpacing: '0.05em' }}>{trackingId}</strong>
            </div>
            <p style={{ fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '500px', margin: '0 auto 1.75rem auto' }}>
              Your supplier onboarding application and test certificates have been received by the Westpoint Global Procurement Division. Our supply chain team will contact you.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-animated"
              style={{
                background: '#D97706',
                color: '#FFFFFF',
                border: '1.5px solid #F59E0B',
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
              <div style={{ width: '44px', height: '44px', borderRadius: '4px', background: '#D97706', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Building2 size={22} color="#FFFFFF" />
              </div>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#B45309', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block' }}>
                  GLOBAL SUPPLY CHAIN PORTAL
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#111827', margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  VENDOR &amp; SUPPLIER REGISTRATION
                </h3>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#92400E', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    SUPPLIER COMPANY NAME *
                  </label>
                  <input type="text" required style={{ width: '100%', padding: '9px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#92400E', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    VENDOR REGISTRATION / GST / TAX ID *
                  </label>
                  <input type="text" required style={{ width: '100%', padding: '9px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#92400E', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    SUPPLY CHAIN DIRECTOR / CONTACT *
                  </label>
                  <input type="text" required style={{ width: '100%', padding: '9px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#92400E', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    OFFICIAL VENDOR EMAIL *
                  </label>
                  <input type="email" required style={{ width: '100%', padding: '9px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
              </div>

              {/* Upload Spec & Mill Certificate Dropzone */}
              <div>
                <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#92400E', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  ATTACH MILL TEST REPORTS, ISO CERTIFICATES &amp; TECHNICAL SPECS *
                </label>
                <div 
                  style={{ 
                    border: '2px dashed #F59E0B', 
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
                  <Upload size={24} color="#D97706" style={{ margin: '0 auto 6px auto' }} />
                  <p style={{ fontSize: '12.5px', fontWeight: 800, color: '#B45309', margin: 0 }}>
                    Click or Drag Mill Certificates &amp; Technical Drawings Here
                  </p>
                  <span style={{ fontSize: '10.5px', color: '#6B7280', display: 'block', marginTop: '4px' }}>
                    EN 10204 3.1 Certificates, Chemical Analysis Reports, ISO 9001 Audits, Technical Drawings
                  </span>
                </div>

                {files.length > 0 && (
                  <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {files.map((file, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FEF3C7', padding: '6px 10px', borderRadius: '4px', border: '1px solid #FCD34D' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <FileText size={15} color="#B45309" />
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#92400E' }}>{file.name}</span>
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
                <label style={{ display: 'block', fontSize: '10.5px', fontWeight: 800, color: '#92400E', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  RAW MATERIAL GRADES &amp; ANNUAL SUPPLY CAPACITY
                </label>
                <textarea 
                  rows={2} 
                  style={{ width: '100%', padding: '8px 11px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontSize: '12px', color: '#111827', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', color: '#4B5563' }}>
                <ShieldCheck size={15} color="#D97706" />
                <span>Supplier Compliance: All submitted dossiers undergo ASL verification within 48 hours.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-animated"
                style={{
                  background: '#D97706',
                  color: '#FFFFFF',
                  border: '1.5px solid #F59E0B',
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
                  <span>PROCESSING VENDOR REGISTRATION...</span>
                ) : (
                  <>
                    <span>SUBMIT VENDOR REGISTRATION &amp; DOSSIER</span>
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

export default VendorRegistrationModal;
