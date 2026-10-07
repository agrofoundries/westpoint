import React, { useState } from 'react';
import { ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export const WagonTrackingGrievance: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'Product Quality & Specification',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", color: '#1B5E20', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Simple Grievance Card */}
      <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '2.5rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
        
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ background: '#E8F5E9', color: '#1B5E20', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Grievance Submitted Successfully!</h3>
            <p style={{ color: '#4CAF50', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
              Thank you, <strong>{formData.name}</strong>. Your ticket <strong>GRV-2026-9810</strong> has been registered. Our Quality Support Team will review your issue and respond within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              style={{ background: '#1B5E20', color: '#FFFFFF', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: 800, cursor: 'pointer' }}
            >
              Submit Another Grievance
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
              <ShieldCheck size={24} color="#1B5E20" />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                Customer Quality Grievance &amp; Support
              </h2>
            </div>
            
            <p style={{ fontSize: '0.925rem', color: '#4CAF50', lineHeight: 1.6, marginBottom: '2rem' }}>
              We are committed to uncompromised quality. If you have any feedback, technical queries, or product grievances, please submit your details below for immediate review by our Quality Support team.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '6px' }}>Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Officer / Representative Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '6px' }}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '6px' }}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '6px' }}>Grievance Category *</label>
                <select
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFF' }}
                >
                  <option value="Product Quality & Specification">Product Quality &amp; Specification</option>
                  <option value="Delivery & Logistics">Delivery &amp; Logistics Support</option>
                  <option value="Documentation & Certificates">Documentation &amp; NDT Certificates</option>
                  <option value="General Technical Query">General Technical Query</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '6px' }}>Subject / Title *</label>
              <input
                type="text"
                required
                placeholder="Brief summary of your grievance or question"
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
              />
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '6px' }}>Detailed Message *</label>
              <textarea
                rows={4}
                required
                placeholder="Please describe your query or feedback in detail..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                background: '#1B5E20',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '14px',
                fontSize: '0.95rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(27, 94, 32, 0.3)'
              }}
            >
              <Send size={18} />
              <span>SUBMIT GRIEVANCE TO SUPPORT TEAM</span>
            </button>
          </form>
        )}

      </div>

    </div>
  );
};

export default WagonTrackingGrievance;
