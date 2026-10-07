import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        style={{ 
          background: '#FAF6EE', 
          border: '1.5px solid #4CAF50', 
          width: '100%', 
          maxWidth: '560px', 
          padding: '2.5rem', 
          position: 'relative',
          boxShadow: '0 25px 60px rgba(27, 94, 32, 0.4)',
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
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            color: '#1B5E20' 
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#1B5E20', color: '#FAF6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <CheckCircle2 size={32} color="#4CAF50" />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '0.75rem' }}>
              QUOTATION REQUEST SUBMITTED
            </h3>
            <p style={{ fontSize: '14px', color: '#2E7D32', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you for reaching out. A Westpoint Group Companies metal sales engineer will review your specifications and contact you within 24 business hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-animated"
              style={{
                background: '#1B5E20',
                color: '#FFFFFF',
                border: '1.5px solid #4CAF50',
                padding: '12px 28px',
                fontSize: '12px',
                fontWeight: 800,
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
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>COMMERCIAL TENDER &amp; SPECIFICATIONS</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}>
              REQUEST A QUOTE
            </h3>

            <p style={{ fontSize: '13px', color: '#2E7D32', margin: '0 0 1.75rem 0', lineHeight: 1.5 }}>
              Submit your technical requirements, CAD files, or project parameters for an immediate engineering estimate.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>FULL NAME *</label>
                  <input type="text" required placeholder="John Doe" style={{ width: '100%', padding: '10px 12px', border: '1px solid #E5E7EB', background: '#FFFFFF', fontSize: '13px', color: '#1B5E20', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>COMPANY *</label>
                  <input type="text" required placeholder="Railway Corp" style={{ width: '100%', padding: '10px 12px', border: '1px solid #E5E7EB', background: '#FFFFFF', fontSize: '13px', color: '#1B5E20', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>EMAIL ADDRESS *</label>
                  <input type="email" required placeholder="name@company.com" style={{ width: '100%', padding: '10px 12px', border: '1px solid #E5E7EB', background: '#FFFFFF', fontSize: '13px', color: '#1B5E20', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>PHONE</label>
                  <input type="tel" placeholder="+1 (512) 555-0199" style={{ width: '100%', padding: '10px 12px', border: '1px solid #E5E7EB', background: '#FFFFFF', fontSize: '13px', color: '#1B5E20', outline: 'none' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>PRODUCT INTEREST</label>
                <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #E5E7EB', background: '#FFFFFF', fontSize: '13px', color: '#1B5E20', outline: 'none' }}>
                  <option>Rail Turnout Castings (AREMA Ch. 4)</option>
                  <option>Forged Locomotive Axles &amp; Wheelsets</option>
                  <option>AAR Grade E Couplers &amp; Draft Gear</option>
                  <option>Catenary &amp; Third-Rail Hardware</option>
                  <option>Custom Industrial Forgings &amp; Castings</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>PROJECT SPECIFICATIONS</label>
                <textarea rows={3} placeholder="Provide quantity, timeline, or material grade requirements..." style={{ width: '100%', padding: '10px 12px', border: '1px solid #E5E7EB', background: '#FFFFFF', fontSize: '13px', color: '#1B5E20', outline: 'none', resize: 'vertical' }} />
              </div>

              <button
                type="submit"
                className="btn-animated"
                style={{
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  border: '1.5px solid #4CAF50',
                  padding: '14px',
                  fontSize: '12.5px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '0.5rem'
                }}
              >
                <span>SUBMIT QUOTATION REQUEST</span>
                <Send size={14} color="#4CAF50" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestQuoteModal;
