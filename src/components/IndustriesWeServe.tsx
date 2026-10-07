import React from 'react';

export const IndustriesWeServe: React.FC = () => {
  const industries = [
    {
      title: 'CLASS I FREIGHT RAILWAYS',
      img: '/images/real_rail_track_stock.jpg'
    },
    {
      title: 'URBAN TRANSIT & METRO',
      img: '/images/real_train_wheelset_stock.jpg'
    },
    {
      title: 'HEAVY HAUL MINING RAIL',
      img: '/images/real_steel_gears_stock.jpg'
    },
    {
      title: 'RAILWAY SWITCH & TURNOUTS',
      img: '/images/real_cnc_machining_stock.jpg'
    },
    {
      title: 'LOCOMOTIVE BOGIES & AXLES',
      img: '/images/real_metal_casting_stock.jpg'
    },
    {
      title: 'HEAVY FREIGHT CORRIDORS',
      img: '/images/trackside_turnout_castings_2.jpg'
    }
  ];

  return (
    <section id="industries" className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="eyebrow">
            <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#4CAF50' }} />
            <span style={{ color: '#4CAF50' }}>GLOBAL RAILWAY SECTOR COVERAGE</span>
          </div>
          <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
            RAILWAY SECTORS WE SERVE
          </h2>
        </div>

        {/* 6 Large Image Cards Grid */}
        <div className="grid-responsive-6">
          {industries.map((ind, idx) => (
            <div 
              key={idx}
              className="card-hover-industrial img-hover-zoom"
              style={{ 
                position: 'relative', 
                height: '280px', 
                overflow: 'hidden', 
                border: '1px solid #E5E7EB',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            >
              <img 
                src={ind.img} 
                alt={ind.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(27, 94, 32, 0.95) 0%, rgba(20, 61, 46, 0.3) 60%, transparent 100%)' }} />
              
              <div style={{ position: 'relative', zIndex: 10, padding: '1.25rem 1rem', height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 900, color: '#FAF6EE', margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.25, fontFamily: "'Manrope', sans-serif !important" }}>
                  {ind.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;
