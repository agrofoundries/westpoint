import React, { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle2, FileText, UserCheck, Trash2, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

interface CustomerPortalPageProps {
  onBackToHome: () => void;
}

export const CustomerPortalPage: React.FC<CustomerPortalPageProps> = ({ onBackToHome }) => {
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [files, setFiles] = useState<Array<{ name: string; size: string }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setTrackingId(`WP-CUST-2026-${randomNum}`);
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
  };

  return (
    <div style={{ background: '#FAF6EE', minHeight: '80vh', padding: '3rem 1.5rem 5rem 1.5rem', color: '#111827', fontFamily: "'Manrope', sans-serif" }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Navigation / Breadcrumb Header */}
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={onBackToHome}
            style={{
              background: '#FFFFFF',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 800,
              color: '#1B5E20',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1B5E20'; e.currentTarget.style.color = '#FFFFFF'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#1B5E20'; }}
          >
            <ArrowLeft size={16} />
            <span>RETURN TO HOMEPAGE</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 800, color: '#1B5E20', background: 'rgba(27, 94, 32, 0.08)', padding: '6px 12px', borderRadius: '20px' }}>
            <Lock size={13} />
            <span>SECURE ISO 27001 PORTAL</span>
          </div>
        </div>

        {/* Page Container */}
        <div 
          style={{ 
            background: '#FFFFFF', 
            border: '1px solid #E5E7EB',
            borderTop: '5px solid #1B5E20', 
            borderRadius: '8px',
            padding: '2.5rem', 
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)'
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#1B5E20', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <CheckCircle2 size={40} color="#4CAF50" />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                CUSTOMER REGISTRATION &amp; SPECIFICATION CONFIRMED
              </span>
              <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#111827', marginBottom: '1rem' }}>
                CLIENT ACCOUNT REGISTERED SUCCESSFULLY
              </h1>
              <div style={{ background: '#FAF6EE', border: '1.5px solid #C8E6C9', padding: '1.25rem 2rem', borderRadius: '6px', display: 'inline-block', marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>OFFICIAL REGISTRATION TRACKING ID</span>
                <strong style={{ fontSize: '22px', color: '#1B5E20', letterSpacing: '0.08em', fontFamily: 'monospace' }}>{trackingId}</strong>
              </div>
              <p style={{ fontSize: '14.5px', color: '#374151', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                Your customer account registration details and attached 2D/3D CAD drawings have been assigned to Westpoint Engineering Estimating. A technical sales engineer will review your specifications shortly.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  onClick={() => { setSubmitted(false); setFiles([]); }}
                  style={{
                    background: '#FFFFFF',
                    color: '#1B5E20',
                    border: '1.5px solid #1B5E20',
                    padding: '12px 24px',
                    fontSize: '12px',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  SUBMIT ANOTHER DRAWING
                </button>
                <button
                  onClick={onBackToHome}
                  style={{
                    background: '#1B5E20',
                    color: '#FFFFFF',
                    border: '1.5px solid #4CAF50',
                    padding: '12px 28px',
                    fontSize: '12px',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  RETURN TO MAIN SITE
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #E5E7EB' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '6px', background: '#1B5E20', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <UserCheck size={26} color="#FFFFFF" />
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block' }}>
                    WESTPOINT INDUSTRIAL &amp; RAILWAY ENTERPRISE PORTAL
                  </span>
                  <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#111827', margin: 0, textTransform: 'uppercase' }}>
                    CUSTOMER REGISTRATION &amp; CAD DRAWING UPLOAD
                  </h1>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <h2 style={{ fontSize: '14px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
                    1. ENTERPRISE &amp; CONTACT INFORMATION
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        COMPANY / ENTERPRISE NAME *
                      </label>
                      <input type="text" required style={{ width: '100%', padding: '11px 14px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '14px', color: '#111827', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        TAX / DUNS / REGISTRATION NO. *
                      </label>
                      <input type="text" required style={{ width: '100%', padding: '11px 14px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '14px', color: '#111827', outline: 'none' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        AUTHORIZED CONTACT NAME *
                      </label>
                      <input type="text" required style={{ width: '100%', padding: '11px 14px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '14px', color: '#111827', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        CORPORATE EMAIL *
                      </label>
                      <input type="email" required style={{ width: '100%', padding: '11px 14px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '14px', color: '#111827', outline: 'none' }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: '14px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
                    2. TECHNICAL BLUEPRINTS &amp; CAD DRAWING UPLOAD
                  </h2>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    ATTACH 2D/3D CAD DRAWINGS (.DWG, .DXF, .STEP, .PDF) *
                  </label>
                  <div 
                    style={{ 
                      border: '2px dashed #4CAF50', 
                      background: '#FAF6EE', 
                      padding: '2rem', 
                      textAlign: 'center', 
                      borderRadius: '6px',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                    onDragOver={e => e.preventDefault()}
                  >
                    <input 
                      type="file" 
                      multiple 
                      onChange={handleFileChange}
                      accept=".dwg,.dxf,.step,.stp,.pdf,.zip,.rar"
                      style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                    />
                    <Upload size={32} color="#1B5E20" style={{ margin: '0 auto 8px auto' }} />
                    <p style={{ fontSize: '14px', fontWeight: 800, color: '#1B5E20', margin: 0 }}>
                      Click or Drag CAD Drawings &amp; Specifications Here
                    </p>
                    <span style={{ fontSize: '12px', color: '#6B7280', display: 'block', marginTop: '6px' }}>
                      AutoCAD (.DWG), 3D Model (.STEP/.STP), PDF Blueprints, ZIP Archives
                    </span>
                  </div>

                  {files.length > 0 && (
                    <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {files.map((file, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#E8F5E9', padding: '10px 14px', borderRadius: '4px', border: '1px solid #A5D6A7' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FileText size={18} color="#1B5E20" />
                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B5E20' }}>{file.name}</span>
                            <span style={{ fontSize: '11px', color: '#4B5563', background: '#FFFFFF', padding: '2px 6px', borderRadius: '3px' }}>{file.size}</span>
                          </div>
                          <button type="button" onClick={() => removeFile(idx)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#9B0403' }}>
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h2 style={{ fontSize: '14px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    3. MATERIAL &amp; PRODUCTION SPECIFICATIONS
                  </h2>
                  <textarea 
                    rows={4} 
                    style={{ width: '100%', padding: '12px 14px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#4B5563', background: '#F3F4F6', padding: '10px 14px', borderRadius: '4px' }}>
                  <ShieldCheck size={18} color="#1B5E20" />
                  <span>NDA Protected: Drawings are stored on ISO 27001 encrypted industrial infrastructure.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: '#1B5E20',
                    color: '#FFFFFF',
                    border: '1.5px solid #4CAF50',
                    padding: '16px',
                    fontSize: '13px',
                    fontWeight: 900,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    borderRadius: '4px',
                    marginTop: '8px'
                  }}
                >
                  {isSubmitting ? (
                    <span>SUBMITTING CUSTOMER REGISTRATION...</span>
                  ) : (
                    <>
                      <span>SUBMIT CUSTOMER REGISTRATION &amp; DRAWINGS</span>
                      <ArrowRight size={18} color="#4CAF50" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerPortalPage;
