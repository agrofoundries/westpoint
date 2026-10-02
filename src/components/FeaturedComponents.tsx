import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check, Filter } from 'lucide-react';

interface FeaturedComponentsProps {
  onOpenProductDetail?: (productTitle: string) => void;
}

export const FeaturedComponents: React.FC<FeaturedComponentsProps> = ({ onOpenProductDetail }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'rail', label: 'Rail Coach & Bogie' },
    { id: 'agri', label: 'Agri Industry' },
    { id: 'loco', label: 'Locomotives' },
    { id: 'oem', label: 'OEMs' },
    { id: 'mining', label: 'Mining Industries' },
    { id: 'other', label: 'Other Industries' }
  ];

  const components = [
    // Rail Coach & Bogie
    {
      id: 'rail-01',
      category: 'rail',
      title: 'Control Arm Upper / Lower',
      series: 'SG 400/18',
      specs: 'DIN/EN/ISO Standards',
      desc: 'Under-chassis critical components of high speed German LHB/FIAT coaches.',
      img: '/images/trackside_turnout_castings.jpg',
    },
    {
      id: 'rail-02',
      category: 'rail',
      title: 'Centering Disc Assembly',
      series: 'GS-20Mn5V',
      specs: 'DIN 17182',
      desc: 'Centering disc assembly for all types of high-speed passenger coaches.',
      img: '/images/amsted_centering_disc.jpg',
    },
    {
      id: 'rail-03',
      category: 'rail',
      title: 'Axlebox Housing',
      series: 'IS 1030',
      specs: 'Precision Machined',
      desc: 'Axlebox housing for freight and passenger bogie bolsters.',
      img: '/images/amsted_bogie_axlebox.jpg',
    },
    {
      id: 'rail-04',
      category: 'rail',
      title: 'Railway Track Plates',
      series: 'TRACKWORK',
      specs: 'Heavy Duty',
      desc: 'Precision cast steel track tie plates and turnout components.',
      img: '/images/trackside_turnout_castings_2.jpg',
    },

    // Agri Industry
    {
      id: 'agri-01',
      category: 'agri',
      title: 'Rotavator Gearbox 13x23',
      series: 'AGRI GEAR',
      specs: 'Precision Cast',
      desc: 'High durability rotavator gearbox casing for agricultural machinery.',
      img: '/images/prod_rotavator_gearbox_13x23.jpg',
    },
    {
      id: 'agri-02',
      category: 'agri',
      title: 'Reduction Gear Housing',
      series: 'AGRI HOUSING',
      specs: 'Heavy Duty Cast Iron',
      desc: 'Reduction gear housing for tractors and combine harvesters.',
      img: '/images/prod_rotavator_gearbox_13x23.jpg',
    },
    {
      id: 'agri-03',
      category: 'agri',
      title: 'Brake Drums',
      series: 'AGRI BRAKE',
      specs: 'Ductile Iron',
      desc: 'High-friction brake drums for agricultural trailers and tractors.',
      img: '/images/locomotive_wheelset_stock.jpg',
    },
    {
      id: 'agri-04',
      category: 'agri',
      title: 'Flywheels',
      series: 'AGRI FLYWHEEL',
      specs: 'Balanced Cast Iron',
      desc: 'Precision balanced flywheels for high-torque agricultural engines.',
      img: '/images/real_cnc_machining_stock.jpg',
    },

    // Locomotives
    {
      id: 'loco-01',
      category: 'loco',
      title: 'Jacking Pad',
      series: 'LOCO LIFT',
      specs: 'Heavy Duty',
      desc: 'Jacking pad for diesel-electric locomotives.',
      img: '/images/amsted_jacking_pad.jpg',
    },
    {
      id: 'loco-02',
      category: 'loco',
      title: 'Brake Head Assembly',
      series: 'LOCO BRAKE',
      specs: 'Ductile Iron',
      desc: 'Brake head for locomotive brake rigging kit.',
      img: '/images/amsted_brake_head.jpg',
    },
    {
      id: 'loco-03',
      category: 'loco',
      title: 'Bearing Adaptor Plate',
      series: 'LOCO ADAPT',
      specs: 'Precision Cast',
      desc: 'Bearing adaptor plate assembly for locomotive bogies.',
      img: '/images/real_train_wheelset_stock.jpg',
    },
    {
      id: 'loco-04',
      category: 'loco',
      title: 'Coupler Carrier',
      series: 'LOCO COUPLER',
      specs: 'High Tensile Steel',
      desc: 'Coupler carrier support for heavy haul locomotives.',
      img: '/images/prod_pin_bracket.jpg',
    },

    // OEMs
    {
      id: 'oem-01',
      category: 'oem',
      title: '10 Ton Stub Axle',
      series: 'OEM AXLE',
      specs: 'Forged Steel',
      desc: 'Heavy duty 10 Ton stub axle for OEM applications.',
      img: '/images/locomotive_wheelset_stock.jpg',
    },
    {
      id: 'oem-02',
      category: 'oem',
      title: 'Eliptcal Pin',
      series: 'OEM PIN',
      specs: 'Hardened Steel',
      desc: 'Precision engineered eliptcal pins for industrial machinery.',
      img: '/images/prod_pin_bracket.jpg',
    },
    {
      id: 'oem-03',
      category: 'oem',
      title: 'Sprockets for Undercarriage',
      series: 'OEM SPROCKET',
      specs: 'Wear Resistant',
      desc: 'Heavy duty sprockets for tracked undercarriage systems.',
      img: '/images/gettyimages-157479520-1024x1024.jpg',
    },
    {
      id: 'oem-04',
      category: 'oem',
      title: 'Trailer Components',
      series: 'OEM TRAILER',
      specs: 'High Capacity',
      desc: 'Various structural components for heavy haul trailers.',
      img: '/images/istockphoto-1967717882-1024x1024.jpg',
    },

    // Mining Industries
    {
      id: 'mine-01',
      category: 'mining',
      title: 'Mining Winches',
      series: 'MINE WINCH',
      specs: 'High Torque',
      desc: 'Heavy duty winches for underground and surface mining operations.',
      img: '/images/istockphoto-1030443074-1024x1024.jpg',
    },
    {
      id: 'mine-02',
      category: 'mining',
      title: 'Aeriel Ropeway Pulleys',
      series: 'MINE PULLEY',
      specs: 'Wear Resistant',
      desc: 'Heavy flanged pulleys for aerial ropeway material transport.',
      img: '/images/real_metal_casting_stock.jpg',
    },
    {
      id: 'mine-03',
      category: 'mining',
      title: 'Mining Gearboxes',
      series: 'MINE GEARBOX',
      specs: 'High Impact',
      desc: 'Reduction gearboxes for severe duty mining conveyors.',
      img: '/images/real_metal_casting_stock.jpg',
    },
    {
      id: 'mine-04',
      category: 'mining',
      title: 'Roof Bolter Components',
      series: 'MINE BOLTER',
      specs: 'Abrasion Resistant',
      desc: 'Components for underground mining roof bolter machinery.',
      img: '/images/istockphoto-1030443074-1024x1024.jpg',
    },

    // Other Industries
    {
      id: 'other-01',
      category: 'other',
      title: 'EN8 & EN9 Carbon Steel Castings',
      series: 'EN CASTINGS',
      specs: 'High Tensile',
      desc: 'Engineering carbon steel castings for heavy machinery.',
      img: '/images/trackside_turnout_castings.jpg',
    },
    {
      id: 'other-02',
      category: 'other',
      title: 'High Chrome Castings',
      series: 'CHROME IRON',
      specs: 'Abrasion Resistant',
      desc: 'High chrome abrasion-resistant liners and wear parts.',
      img: '/images/real_cnc_machining_stock.jpg',
    },
    {
      id: 'other-03',
      category: 'other',
      title: 'Stone Crusher Castings',
      series: 'CRUSHER',
      specs: 'Manganese Steel',
      desc: 'Castings for stone crushers including jaw plates and mantles.',
      img: '/images/real_cnc_machining_stock.jpg',
    },
    {
      id: 'other-04',
      category: 'other',
      title: 'Heat Resistant Castings for Boilers',
      series: 'BOILER CAST',
      specs: 'Heat Resistant',
      desc: 'Boiler grates and heat-resistant components for thermal plants.',
      img: '/images/real_metal_casting_stock.jpg',
    }
  ];

  const filteredComponents = activeCategory === 'all'
    ? components
    : components.filter(c => c.category === activeCategory);

  return (
    <>
      <section id="products" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', padding: '2.75rem 0 1.5rem 0' }}>
        <div className="container-custom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Section Header with Navigation Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">
                <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
                <span>RDSO, AREMA &amp; AAR M-1003 CERTIFIED CATALOG</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em', fontFamily: "'Manrope', sans-serif !important" }}>
                FEATURED WAGONS, BOGIES &amp; STEEL CASTINGS
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {/* Carousel Arrows */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => scroll('left')}
                  style={{
                    background: '#1B5E20',
                    border: '1.5px solid #4CAF50',
                    borderRadius: '2px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(27,94,32,0.25)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#FAF6EE';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.stroke = '#1B5E20';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1B5E20';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.stroke = '#FFFFFF';
                  }}
                >
                  <ChevronLeft size={22} color="#FFFFFF" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  style={{
                    background: '#1B5E20',
                    border: '1.5px solid #4CAF50',
                    borderRadius: '2px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(27,94,32,0.25)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#FAF6EE';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.stroke = '#1B5E20';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#1B5E20';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.stroke = '#FFFFFF';
                  }}
                >
                  <ChevronRight size={22} color="#FFFFFF" />
                </button>
              </div>

              <a
                href="#contact"
                className="link-hover-arrow"
              >
                <span>REQUEST COMPLETE TECHNICAL CATALOG</span>
                <ArrowRight size={14} color="#4CAF50" />
              </a>
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '8px', color: '#1B5E20', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Manrope', sans-serif !important" }}>
              <Filter size={14} color="#4CAF50" />
              <span>CATEGORY FILTER:</span>
            </div>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    background: isActive ? '#1B5E20' : '#FFFFFF',
                    color: isActive ? '#FAF6EE' : '#2E7D32',
                    border: isActive ? '1px solid #4CAF50' : '1px solid #D1D5DB',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '6px 14px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.04em',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Full Card Horizontal Slider (4 visible across 100% container width) */}
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '1.25rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              paddingBottom: '0.5rem',
              width: '100%'
            }}
          >
            {filteredComponents.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onOpenProductDetail && onOpenProductDetail(item.title)}
                className="card-slider-item card-hover-industrial img-hover-zoom"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  minHeight: '480px'
                }}
              >
                {/* Product Photo */}
                <div style={{ height: '210px', overflow: 'hidden', background: '#000000', position: 'relative', flexShrink: 0, borderBottom: '1px solid #E5E7EB', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                  />
                  <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#1B5E20', color: '#FFFFFF', fontSize: '9.5px', fontWeight: 900, padding: '4px 8px', letterSpacing: '0.08em', border: '1px solid #4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>
                    {item.series}
                  </span>
                </div>

                {/* Full Card Body & Footer */}
                <div style={{ padding: '1.25rem 1.15rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: 900, color: '#111827', letterSpacing: '0.04em', margin: '0 0 6px 0', textTransform: 'uppercase', lineHeight: 1.3, fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#4CAF50', display: 'block', marginBottom: '8px', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.specs}
                    </span>
                    <p style={{ fontSize: '14px', color: '#2E7D32', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '0.85rem', marginTop: '0.85rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={13} color="#4CAF50" />
                      <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>WESTPOINT QUALITY CERTIFIED</span>
                    </div>

                    <span style={{
                      background: '#E8F5E9',
                      color: '#1B5E20',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}>
                      AAR / AREMA
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturedComponents;

