import React from 'react';

interface Project {
  title: string;
  loc: string;
  vol: string;
  category: string;
  img: string;
}

interface FeaturedProjectsProps {
  galleryFilter: 'all' | 'commercial' | 'infrastructure' | 'industrial';
  setGalleryFilter: (filter: 'all' | 'commercial' | 'infrastructure' | 'industrial') => void;
  filteredProjects: Project[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  galleryFilter,
  setGalleryFilter,
  filteredProjects
}) => {
  return (
    <section id="projects" style={{ background: '#F8FAFC', padding: '48px 5vw', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Split Editorial Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'end', marginBottom: '28px' }}>
          <div>
            <span style={{ color: '#1B5E20', fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>PORTFOLIO OF SCALE</span>
            <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 900, color: '#195B34', letterSpacing: '-0.02em', lineHeight: 1.15, textTransform: 'uppercase', margin: 0 }}>
              Featured Projects
            </h2>
          </div>
          <div>
            <p style={{ color: '#2E7D32', fontSize: '13.5px', lineHeight: 1.5, margin: 0, maxWidth: '500px' }}>
              Every rail component supplied by Westpoint Group Companies represents an engineering commitment to heavy-haul durability. Explore our landmark turnout frog installations, transit line upgrades, and forged axle wheelsets.
            </p>
          </div>
        </div>

        {/* Clean Left-Aligned Tab Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px', borderBottom: '1px solid #E5E7EB', paddingBottom: '12px' }}>
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'infrastructure', label: 'Infrastructure' },
            { id: 'industrial', label: 'Industrial' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setGalleryFilter(tab.id as any)}
              style={{
                padding: '8px 18px',
                border: '1px solid #E5E7EB',
                background: galleryFilter === tab.id ? '#195B34' : '#FFFFFF',
                color: galleryFilter === tab.id ? '#FFFFFF' : '#1B5E20',
                borderRadius: '0px',
                fontWeight: 800,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Composition Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px' }}>
          {filteredProjects.map((project, index) => {
            const isLarge = index === 0;
            const gridSpan = isLarge ? 'span 7' : index === 1 ? 'span 5' : 'span 6';
            const cardHeight = isLarge ? '320px' : '260px';

            return (
              <div
                key={index}
                className="hover-card-trigger"
                onClick={() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  gridColumn: gridSpan,
                  position: 'relative',
                  height: cardHeight,
                  borderRadius: '0px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  border: '1px solid #E5E7EB'
                }}
              >
                {/* Base Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0,
                    transition: 'transform 0.5s ease'
                  }}
                  className="hover-zoom-img"
                />

                {/* Dark Elegant Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(31,41,55,0.2) 0%, rgba(31,41,55,0.7) 100%)',
                    transition: 'background 0.3s ease',
                    zIndex: 2
                  }}
                  className="hover-darken-overlay"
                />

                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(15,23,42,0.85)', color: '#34D399', padding: '3px 8px', fontSize: '9px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(52,211,153,0.3)', pointerEvents: 'none', zIndex: 10 }}>
                  iStock Stock Asset Ref
                </div>

                {/* Card Info Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '20px',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    height: '100%'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div style={{ transition: 'transform 0.3s ease' }} className="hover-lift-title">
                      <span style={{ fontSize: '10px', color: '#4ADE80', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                        {project.category}
                      </span>
                      <h3 style={{ fontSize: isLarge ? '20px' : '16px', fontWeight: 900, color: '#FFFFFF', margin: 0, textTransform: 'uppercase', lineHeight: 1.15 }}>
                        {project.title}
                      </h3>

                      {/* Hidden info revealed on hover */}
                      <div className="hover-reveal-specs" style={{ height: 0, opacity: 0, overflow: 'hidden', transition: 'all 0.3s ease', marginTop: '8px' }}>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#D1D5DB' }}>
                          <span>Location: <strong>{project.loc}</strong></span>
                          <span>Volume: <strong>{project.vol}</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Clean interaction circle icon */}
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        transition: 'all 0.3s ease',
                        flexShrink: 0,
                        marginLeft: '12px'
                      }}
                      className="hover-spin-icon"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
