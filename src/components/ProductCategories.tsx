import React from 'react';
import { ArrowRight, ShieldCheck, Train, Layers, Anchor, Flame } from 'lucide-react';

export const ProductCategories: React.FC = () => {
  const categories = [
    {
      id: 'lhb',
      icon: Train,
      title: 'PASSENGER COACH & BOGIE SUSPENSION',
      desc: 'Precision train suspension parts, control arms, brake supports, and axle housings built to international rail safety standards.',
      img: '/images/locomotive_wheelset_stock.jpg',
      specs: 'DIN / EN / ISO APPROVED',
      tag: 'PASSENGER COACH'
    },
    {
      id: 'agri',
      icon: Layers,
      title: 'HEAVY MACHINERY & GEARBOX CASTINGS',
      desc: 'Heavy-duty rotavator gearboxes, reduction housings, brake drums, and structural linkages built for industrial and farm machinery.',
      img: '/images/prod_rotavator_gearbox_13x23.jpg',
      specs: 'DUCTILE & CAST IRON',
      tag: 'HEAVY MACHINERY'
    },
    {
      id: 'oem_mining',
      icon: Anchor,
      title: 'FORGED STUB AXLES & MINING SYSTEMS',
      desc: 'High-strength 10-ton stub axles, steering knuckles, undercarriage sprockets, and haulage drums built for freight and mining.',
      img: '/images/istockphoto-1030443074-1024x1024.jpg',
      specs: 'FORGED ALLOY STEEL',
      tag: 'OEM & MINING'
    },
    {
      id: 'en_alloys',
      icon: Flame,
      title: 'WEAR-RESISTANT ALLOY & CHROME STEEL',
      desc: 'Heat-treated alloy castings, 27% high-chrome crusher jaw plates, and boiler grates engineered for extreme impact and heat.',
      img: '/images/real_metal_casting_stock.jpg',
      specs: 'HEAT-TREATED ALLOY',
      tag: 'SPECIALTY ALLOYS'
    }
  ];

  return (
    <section className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>RDSO, AREMA &amp; AAR M-1003 APPROVED DIVISIONS</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              ENTERPRISE PRODUCT DIVISIONS &amp; WAGON SYSTEMS
            </h2>
          </div>

          <a 
            href="#products" 
            className="link-hover-arrow"
          >
            <span>EXPLORE ALL DIVISIONS &amp; PRODUCTS</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* 4 Enterprise Category Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx}
                className="card-hover-industrial img-hover-zoom"
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #E5E7EB', 
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden'
                }}
              >
                {/* Product Photo & Badge */}
                <div style={{ height: '210px', overflow: 'hidden', background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                  />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#1B5E20', color: '#FAF6EE', fontSize: '10px', fontWeight: 900, padding: '4px 10px', letterSpacing: '0.08em', borderRadius: '2px', border: '1px solid #4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>
                    {cat.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <Icon size={16} color="#166534" />
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#166534', letterSpacing: '0.06em', fontFamily: "'Manrope', sans-serif !important" }}>
                        {cat.specs}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '14.5px', fontWeight: 800, color: '#111827', letterSpacing: '0.02em', margin: '0 0 8px 0', textTransform: 'uppercase', lineHeight: 1.35, fontFamily: "'Manrope', sans-serif !important" }}>
                      {cat.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#374151', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                      {cat.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <ShieldCheck size={15} color="#16A34A" />
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>CERTIFIED SPEC</span>
                    </div>
                    
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F0FDF4', border: '1px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ArrowRight size={13} color="#15803D" />
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

export default ProductCategories;

