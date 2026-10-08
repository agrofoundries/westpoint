import React, { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle2, FileText, ShieldCheck, Trash2, ArrowRight } from 'lucide-react';

interface GovernmentPortalPageProps {
  onBackToHome: () => void;
}

export const GovernmentPortalPage: React.FC<GovernmentPortalPageProps> = ({ onBackToHome }) => {
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
      setTrackingId(`WP-GOV-2026-${randomNum}`);
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
  };

  return (
    <div style={{ background: '#FAF6EE', minHeight: '80vh', padding: '3rem 1.5rem 5rem 1.5rem', color: '#111827', fontFamily: "'Manrope', sans-serif" }}>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        
        {/* Navigation Header */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
        </div>

        {/* Page Container */}
        <div 
          style={{ 
            background: '#FFFFFF', 
            border: '1px solid #E5E7EB',
            borderTop: '4px solid #1B5E20', 
            borderRadius: '6px',
            padding: '2.5rem', 
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)'
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#1B5E20', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <CheckCircle2 size={36} color="#4CAF50" />
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#111827', marginBottom: '0.75rem' }}>
                Tender Submission Received
              </h1>
              <div style={{ background: '#FAF6EE', border: '1px solid #C8E6C9', padding: '1rem 1.75rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>TENDER REFERENCE</span>
                <strong style={{ fontSize: '20px', color: '#1B5E20', letterSpacing: '0.05em', fontFamily: 'monospace' }}>{trackingId}</strong>
              </div>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '550px', margin: '0 auto 2rem auto' }}>
                Your government / transit authority tender documentation has been received by Westpoint Infrastructure Directorate.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  onClick={() => { setSubmitted(false); setFiles([]); }}
                  style={{
                    background: '#FFFFFF',
                    color: '#1B5E20',
                    border: '1px solid #1B5E20',
                    padding: '10px 20px',
                    fontSize: '12px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  Submit Another File
                </button>
                <button
                  onClick={onBackToHome}
                  style={{
                    background: '#1B5E20',
                    color: '#FFFFFF',
                    border: '1px solid #1B5E20',
                    padding: '10px 24px',
                    fontSize: '12px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid #E5E7EB' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#1B5E20', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldCheck size={24} color="#FFFFFF" />
                </div>
                <div>
                  <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', margin: 0 }}>
                    Government &amp; Transit Authority Submission
                  </h1>
                  <p style={{ fontSize: '13px', color: '#6B7280', margin: '4px 0 0 0' }}>
                    Submit national railway tender dossiers, AREMA / AASHTO infrastructure blueprints, and compliance documents.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#1B5E20', textTransform: 'uppercase', marginBottom: '0.85rem', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
                    Authority Details
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', textTransform: 'uppercase', marginBottom: '5px' }}>
                        Ministry / Transit Authority *
                      </label>
                      <input type="text" required style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '13.5px', color: '#111827', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', textTransform: 'uppercase', marginBottom: '5px' }}>
                        Tender / Reference Number *
                      </label>
                      <input type="text" required style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '13.5px', color: '#111827', outline: 'none' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', textTransform: 'uppercase', marginBottom: '5px' }}>
                        Procurement Officer Name *
                      </label>
                      <input type="text" required style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '13.5px', color: '#111827', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', textTransform: 'uppercase', marginBottom: '5px' }}>
                        Official Email (.gov / .mil / official) *
                      </label>
                      <input type="email" required style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '13.5px', color: '#111827', outline: 'none' }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#1B5E20', textTransform: 'uppercase', marginBottom: '0.85rem', borderBottom: '1px solid #F3F4F6', paddingBottom: '6px' }}>
                    Tender Dossiers &amp; Blueprints
                  </h2>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#374151', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Attach Tender Blueprints &amp; Specifications *
                  </label>
                  <div 
                    style={{ 
                      border: '2px dashed #4CAF50', 
                      background: '#FAF6EE', 
                      padding: '1.75rem', 
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
                      accept=".pdf,.dwg,.step,.zip,.doc,.docx"
                      style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                    />
                    <Upload size={28} color="#1B5E20" style={{ margin: '0 auto 6px auto' }} />
                    <p style={{ fontSize: '13px', fontWeight: 800, color: '#1B5E20', margin: 0 }}>
                      Click or drag files here to upload
                    </p>
                    <span style={{ fontSize: '11.5px', color: '#6B7280', display: 'block', marginTop: '4px' }}>
                      Accepts AREMA / AASHTO Blueprints, PDF Tender Documents, ZIP Archives
                    </span>
                  </div>

                  {files.length > 0 && (
                    <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {files.map((file, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#E8F5E9', padding: '8px 12px', borderRadius: '4px', border: '1px solid #A5D6A7' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FileText size={16} color="#1B5E20" />
                            <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B5E20' }}>{file.name}</span>
                            <span style={{ fontSize: '10.5px', color: '#4B5563', background: '#FFFFFF', padding: '2px 5px', borderRadius: '3px' }}>{file.size}</span>
                          </div>
                          <button type="button" onClick={() => removeFile(idx)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#9B0403' }}>
                            <Trash2 size={15} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#1B5E20', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Infrastructure Standards &amp; Timeline
                  </h2>
                  <textarea 
                    rows={3} 
                    placeholder="Enter compliance standards, project delivery timeline, or tender notes..."
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', background: '#FFFFFF', fontSize: '13px', color: '#111827', outline: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: '#1B5E20',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '14px',
                    fontSize: '13px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    borderRadius: '4px',
                    marginTop: '4px'
                  }}
                >
                  {isSubmitting ? (
                    <span>Submitting Tender Details...</span>
                  ) : (
                    <>
                      <span>Submit Tender Submission</span>
                      <ArrowRight size={16} color="#FFFFFF" />
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

export default GovernmentPortalPage;
