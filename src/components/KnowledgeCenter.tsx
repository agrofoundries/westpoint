import React from 'react';

export const KnowledgeCenter: React.FC = () => {
  const resources = [
    { title: 'Technical Guides', desc: 'Detailed reference specifications for AREMA and AAR compliance validation.' },
    { title: 'metal Specifications', desc: 'Chemical design guides for high-strength austenitic manganese castings.' },
    { title: 'Forging Basics', desc: 'Best practices for drop forging, heat treatment, and ultrasonic NDT testing.' },
    { title: 'Case Studies', desc: 'In-depth reviews of structural rail components under severe heavy-haul loads.' }
  ];

  return (
    <section id="knowledge" style={{ background: '#F8FAFC', padding: '48px 5vw', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ color: '#195B34', fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>ENGINEERING RESOURCES</span>
          <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 900, color: '#195B34', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>
            Knowledge Center
          </h2>
          <div style={{ width: '36px', height: '3px', background: '#195B34', margin: '10px auto 0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          {resources.map((resource, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '0px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 4px rgba(0,0,0,0.01)'
              }}
              className="hover-card-trigger"
            >
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#195B34', margin: '0 0 6px 0' }}>{resource.title}</h4>
                <p style={{ fontSize: '13.5px', color: '#4CAF50', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>{resource.desc}</p>
              </div>
              <a href="#knowledge" onClick={(e) => { e.preventDefault(); }} style={{ color: '#195B34', fontSize: '12px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <span>Download PDF</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCenter;
