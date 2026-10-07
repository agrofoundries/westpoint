import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Building2, Phone, Clock } from 'lucide-react';

const offices = [
  {
    id: 'northeast',
    name: 'Northeast',
    country: 'United States',
    tag: 'HEADQUARTERS',
    isHq: true,
    address: '1000 Rail Way, New York, NY 10001, United States',
    phone: '(212) 555-0199',
    timezone: 'ET · UTC−5',
    capabilities: ['Executive management', 'Global sales', 'Project planning', 'Financial operations'],
    support: '24/7',
    response: '< 1 hr',
    coverage: 'Global',
    image: '/maps/northeast.avif',
    mapLink: 'https://www.google.com/maps',
    iframeSrc: 'https://www.google.com/maps?q=New+York&z=14&output=embed'
  },
  {
    id: 'south',
    name: 'South',
    country: 'United States',
    tag: 'REGIONAL OFFICE',
    isHq: false,
    address: '400 Track Blvd, Atlanta, GA 30303, United States',
    phone: '(404) 555-0144',
    timezone: 'ET · UTC−5',
    capabilities: ['Regional sales', 'Dispatch', 'Maintenance team', 'Quality assurance'],
    support: '12h',
    response: '< 2 hr',
    coverage: 'Regional',
    image: '/maps/default_geocode-2x.svg',
    mapLink: 'https://www.google.com/maps',
    iframeSrc: 'https://www.google.com/maps?q=Atlanta&z=14&output=embed'
  },
  {
    id: 'midwest',
    name: 'Midwest',
    country: 'United States',
    tag: 'ENGINEERING CENTRE',
    isHq: false,
    address: '2200 Hunt Street, Detroit, MI 48207, United States',
    phone: '(631) 452-1111',
    timezone: 'ET · UTC−5',
    capabilities: ['Mechanical & electrical design', 'PLC / SCADA development', 'Testing & QA lab', 'Commissioning teams'],
    support: '12h',
    response: '< 2 hr',
    coverage: 'Local',
    image: '/maps/default_geocode-2x.svg',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=2200%20Hunt%20Street%2C%20Detroit%2C%20MI%2048207',
    iframeSrc: 'https://www.google.com/maps?q=2200%20Hunt%20Street%2C%20Detroit%2C%20MI%2048207&z=14&output=embed'
  },
  {
    id: 'westcoast',
    name: 'Westcoast',
    country: 'Canada',
    tag: 'ENGINEERING CENTRE',
    isHq: false,
    address: '150 Pacific Way, Vancouver, BC V6B 1A1, Canada',
    phone: '(604) 555-0188',
    timezone: 'PT · UTC−8',
    capabilities: ['Systems engineering', 'Software development', 'R&D', 'Technical support'],
    support: '12h',
    response: '< 2 hr',
    coverage: 'National',
    image: '/maps/default_geocode-2x.svg',
    mapLink: 'https://www.google.com/maps',
    iframeSrc: 'https://www.google.com/maps?q=Vancouver&z=14&output=embed'
  },
  {
    id: 'canada-east',
    name: 'Canada — East',
    country: 'Canada',
    tag: 'REGIONAL OFFICE',
    isHq: false,
    address: '300 Maple St, Toronto, ON M5V 3L9, Canada',
    phone: '(416) 555-0122',
    timezone: 'ET · UTC−5',
    capabilities: ['Regional sales', 'Field support', 'Training center', 'Logistics'],
    support: '10h',
    response: '< 4 hr',
    coverage: 'Regional',
    image: '/maps/default_geocode-2x.svg',
    mapLink: 'https://www.google.com/maps',
    iframeSrc: 'https://www.google.com/maps?q=Toronto&z=14&output=embed'
  },
  {
    id: 'canada-west',
    name: 'Canada — West',
    country: 'Canada',
    tag: 'REGIONAL OFFICE',
    isHq: false,
    address: '500 Prairie Ave, Calgary, AB T2P 1J9, Canada',
    phone: '(403) 555-0133',
    timezone: 'MT · UTC−7',
    capabilities: ['Operations', 'Maintenance support', 'Field engineering', 'Parts depot'],
    support: '10h',
    response: '< 4 hr',
    coverage: 'Regional',
    image: '/maps/default_geocode-2x.svg',
    mapLink: 'https://www.google.com/maps',
    iframeSrc: 'https://www.google.com/maps?q=Calgary&z=14&output=embed'
  },
  {
    id: 'caribbean',
    name: 'Caribbean / Latin America',
    country: 'Bahamas',
    tag: 'SUPPORT HUB',
    isHq: false,
    address: '700 Ocean Dr, Nassau, Bahamas',
    phone: '(242) 555-0177',
    timezone: 'EST · UTC−5',
    capabilities: ['International support', 'Logistics coordination', 'Sales', 'Remote monitoring'],
    support: '24/7',
    response: '< 2 hr',
    coverage: 'International',
    image: '/maps/default_geocode-2x.svg',
    mapLink: 'https://www.google.com/maps',
    iframeSrc: 'https://www.google.com/maps?q=Nassau&z=14&output=embed'
  }
];

const OfficeLocations: React.FC = () => {
  const [activeOfficeId, setActiveOfficeId] = useState('midwest');
  const activeOffice = offices.find(o => o.id === activeOfficeId) || offices[2];

  return (
    <section className="section-office-locations padding-global container-custom" id="office-locations" style={{ background: '#F8F9FA', paddingTop: '2rem', paddingBottom: '2rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container-large" style={{ width: '100%' }}>
        <div className="office-locations-header" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <div className="h-flex-tiny eyebrow" style={{ justifyContent: 'center', marginBottom: '0.25rem' }}>
            <span className="chip">STRATEGIC FOOTPRINT</span>
          </div>
          <h2 className="office-locations-title" style={{ fontSize: '1.75rem', margin: '0', color: '#111827' }}>
            Seven offices, <span className="text-green-vibrant">one delivery standard</span>
          </h2>
          <p className="office-locations-desc" style={{ maxWidth: '700px', margin: '0.5rem auto 0', color: '#2E7D32', fontSize: '0.95rem' }}>
            Regional manufacturing nodes, engineering design hubs, and strategic dispatch centers supporting civil infrastructure across North America.
          </p>
        </div>

        <div className="office-unified-card-group" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1fr) 2fr',
          gap: '1rem',
          background: '#fff',
          borderRadius: '12px',
          padding: '1rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          border: '1px solid #E5E7EB'
        }}>

          <div className="office-selector-panel custom-scrollbar" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            maxHeight: '480px',
            overflowY: 'auto',
            paddingRight: '0.5rem'
          }}>
            {offices.map((office) => {
              const isActive = office.id === activeOfficeId;
              return (
                <button
                  key={office.id}
                  type="button"
                  aria-pressed={isActive}
                  className={`office-item-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveOfficeId(office.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.75rem',
                    background: isActive ? '#FAF6EE' : 'transparent',
                    border: `1px solid ${isActive ? '#4CAF50' : '#E5E7EB'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {isActive && <div className="office-active-bar" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#4CAF50' }}></div>}
                  <div className="office-item-content" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="office-pin-icon-box" style={{ color: isActive ? '#4CAF50' : '#6B7280' }}>
                      <MapPin size={22} />
                    </div>
                    <div className="office-item-meta">
                      <div className="office-item-title-row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.1rem' }}>
                        <span className="office-item-name" style={{ fontWeight: 800, color: isActive ? '#1B5E20' : '#111827', fontSize: '0.9rem' }}>{office.name}</span>
                        <span className={`office-tag-badge ${office.isHq ? 'is-hq' : ''}`} style={{
                          fontSize: '0.55rem',
                          fontWeight: 800,
                          padding: '2px 5px',
                          borderRadius: '4px',
                          background: office.isHq ? '#1B5E20' : '#F3F4F6',
                          color: office.isHq ? '#fff' : '#4B5563',
                          letterSpacing: '0.05em',
                          whiteSpace: 'nowrap'
                        }}>
                          {office.tag}
                        </span>
                      </div>
                      <span className="office-item-city" style={{ color: '#4B5563', fontSize: '0.75rem', display: 'block' }}>{office.country}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={18} style={{ color: isActive ? '#4CAF50' : '#9CA3AF' }} />
                </button>
              )
            })}
          </div>

          <div className="office-showcase-panel" style={{ background: '#F8F9FA', borderRadius: '8px', padding: '1.25rem', border: '1px solid #E5E7EB' }}>
            <div className="office-showcase-body-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}>

              <div className="office-left-details-col">
                <div style={{ marginBottom: '1.25rem' }}>
                  <span className="office-header-tag eyebrow" style={{ margin: 0, marginBottom: '0.2rem', fontSize: '0.6rem' }}>{activeOffice.tag}</span>
                  <h3 className="office-header-title" style={{ fontSize: '1.25rem', margin: '0', color: '#1B5E20', fontWeight: 900, lineHeight: 1.1 }}>
                    {activeOffice.name} <br />
                    <span className="office-header-country" style={{ fontSize: '0.9rem', color: '#4B5563', fontWeight: 600 }}>{activeOffice.country}</span>
                  </h3>
                </div>

                <ul className="office-clean-contact-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li className="office-clean-contact-item" style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span className="office-clean-icon-pill" style={{ color: '#4CAF50', marginTop: '2px', background: '#E8F5E9', padding: '4px', borderRadius: '50%' }}><Building2 size={14} /></span>
                    <span className="office-clean-text-value" style={{ color: '#111827', fontSize: '0.8rem', lineHeight: 1.3, marginTop: '1px' }}>{activeOffice.address}</span>
                  </li>
                  <li className="office-clean-contact-item" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span className="office-clean-icon-pill" style={{ color: '#4CAF50', background: '#E8F5E9', padding: '4px', borderRadius: '50%' }}><Phone size={14} /></span>
                    <a href={`tel:${activeOffice.phone.replace(/[^0-9]/g, '')}`} className="office-clean-link-value link-hover-arrow" style={{ color: '#1B5E20', fontWeight: 700, fontSize: '0.85rem', padding: '2px 4px' }}>{activeOffice.phone}</a>
                  </li>
                  <li className="office-clean-contact-item" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span className="office-clean-icon-pill" style={{ color: '#4CAF50', background: '#E8F5E9', padding: '4px', borderRadius: '50%' }}><Clock size={14} /></span>
                    <span className="office-clean-text-value font-mono" style={{ color: '#4B5563', fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 600 }}>{activeOffice.timezone}</span>
                  </li>
                </ul>

                <div className="office-capabilities-section" style={{ marginBottom: '1.25rem' }}>
                  <p className="office-capabilities-label" style={{ fontWeight: 800, color: '#111827', marginBottom: '0.5rem', fontSize: '0.8rem' }}>Capabilities on site</p>
                  <ul className="office-capabilities-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {activeOffice.capabilities.map(cap => (
                      <li key={cap} className="office-capability-chip" style={{
                        background: '#fff',
                        border: '1px solid #E5E7EB',
                        color: '#111827',
                        padding: '3px 8px',
                        borderRadius: '16px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                      }}>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="office-metrics-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                  borderTop: '1px solid #E5E7EB',
                  paddingTop: '0.75rem'
                }}>
                  <div className="office-metric-box">
                    <p className="office-metric-value" style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1B5E20', margin: 0 }}>{activeOffice.support}</p>
                    <p className="office-metric-label" style={{ fontSize: '0.65rem', color: '#4B5563', margin: 0, fontWeight: 600 }}>Support window</p>
                  </div>
                  <div className="office-metric-box">
                    <p className="office-metric-value" style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1B5E20', margin: 0 }}>{activeOffice.response}</p>
                    <p className="office-metric-label" style={{ fontSize: '0.65rem', color: '#4B5563', margin: 0, fontWeight: 600 }}>First response</p>
                  </div>
                  <div className="office-metric-box">
                    <p className="office-metric-value" style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1B5E20', margin: 0 }}>{activeOffice.coverage}</p>
                    <p className="office-metric-label" style={{ fontSize: '0.65rem', color: '#4B5563', margin: 0, fontWeight: 600 }}>Site coverage</p>
                  </div>
                </div>
              </div>

              <div className="office-right-media-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

                {/* Image Card */}
                <div className="office-media-card" style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  position: 'relative'
                }}>
                  <div className="office-media-img-wrapper" style={{ height: '170px', width: '100%', overflow: 'hidden' }}>
                    <img
                      alt={`${activeOffice.name} Facility`}
                      className="office-media-img"
                      src={activeOffice.image}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="office-media-caption" style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '6px 10px',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 600,
                    fontSize: '0.75rem'
                  }}>
                    <Building2 size={12} style={{ color: '#4CAF50' }} />
                    <span>{activeOffice.name} office</span>
                  </div>
                </div>

                {/* Map Card */}
                <div className="office-media-card" style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  height: '170px'
                }}>
                  <div className="office-media-map-wrapper" style={{ height: '100%' }}>
                    <iframe
                      title={`${activeOffice.name} Map Location`}
                      src={activeOffice.iframeSrc}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', border: 0 }}
                    />
                  </div>
                </div>

                <a href={activeOffice.mapLink} target="_blank" rel="noopener noreferrer" className="link-hover-arrow" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '0.5rem',
                  padding: '4px 0',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: '#1B5E20',
                  borderBottom: 'none'
                }}>
                  <span>Open Google Map</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .office-unified-card-group {
            grid-template-columns: 1fr !important;
          }
          .office-selector-panel {
            max-height: 400px !important;
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8; 
        }
      `}</style>
    </section>
  );
};

export default OfficeLocations;
