import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface ProductsSectionProps {
  lang: Language;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const products = [
    {
      title: t.prod1Title,
      desc: t.prod1Desc,
      tag: '1000-3000 SERIES',
      specs: 'AREMA Ch. 4 | ASTM A27 / A536 Steel & Ductile Iron',
      img: '/images/turnout_frog_manganese_stock.jpg'
    },
    {
      title: t.prod2Title,
      desc: t.prod2Desc,
      tag: '4000-6000 SERIES',
      specs: 'AAR M-107 / M-208 | Forged Alloy Steel (ASTM A668)',
      img: '/images/prod_railway_track_plates.jpg'
    },
    {
      title: t.prod3Title,
      desc: t.prod3Desc,
      tag: '7000-8000 SERIES',
      specs: 'AAR M-201 Grade E Cast Steel Couplers',
      img: '/images/locomotive_wheelset_stock.jpg'
    },
    {
      title: t.prod4Title,
      desc: t.prod4Desc,
      tag: '9000-10000 SERIES',
      specs: 'EN 13674 | High-Conductivity Bronze & Ductile Iron',
      img: '/images/real_train_wheelset_stock.jpg'
    },
    {
      title: t.prod5Title,
      desc: t.prod5Desc,
      tag: '11000-12000 SERIES',
      specs: 'AASHTO M306 | Heavy Load Sub-Track Pull Boxes',
      img: '/images/prod_pin_bracket.jpg'
    },
    {
      title: lang === 'en' ? 'Custom Rail Metal Forgings' : 'Forjas Metalúrgicas a Medida',
      desc: lang === 'en'
        ? 'Custom drop forgings, CNC machined tie-bar assemblies, and specialized turnout components engineered to custom client CAD specs.'
        : 'Forjas de precisión y componentes mecanizados CNC según especificaciones de clientes.',
      tag: 'CUSTOM MANUFACTURING',
      specs: 'ISO 9001:2015 & PPAP Level 3 Compliant',
      img: '/images/real_steel_gears_stock.jpg'
    },
    {
      title: lang === 'en' ? 'Heavy Axle Locomotive Wheelsets' : 'Juegos de Ruedas para Locomotoras',
      desc: lang === 'en'
        ? 'Monobloc heat-treated forged steel railway wheels and high-capacity precision axles built for 36-ton heavy haul freight tracks.'
        : 'Ruedas de acero forjado monobloque y ejes de alta capacidad para carga pesada.',
      tag: '13000-14000 SERIES',
      specs: 'AAR M-107 Class B & C | FRA Rule 213 Certified',
      img: '/images/disused-electric-drive-rack-railway-600w-2624945193.webp'
    },
    {
      title: lang === 'en' ? 'High-Speed Rail Frog Crossovers' : 'Cruces de Rieles de Alta Velocidad',
      desc: lang === 'en'
        ? 'Explosive depth-hardened manganese frog crossings and turnout switch heels engineered for high-frequency 300+ km/h transit lines.'
        : 'Cruces de manganeso endurecido y talones de cambio para líneas de alta velocidad.',
      tag: '15000-16000 SERIES',
      specs: 'AREMA Ch. 4 Spec 2.4 | High-Impact Cast Manganese',
      img: '/images/prod_centering_disc.jpg'
    }
  ];

  return (
    <section id="products" style={{ background: '#0B3B24', color: '#FFFFFF', padding: '64px 5vw', borderBottom: '1px solid #0F291E' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#34D399', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            RAW MATERIAL SCIENCE
          </span>
          <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 16px 0', lineHeight: 1.25, textTransform: 'uppercase' }}>
            {t.prodTitle}
          </h2>
          <p style={{ fontSize: '15px', color: '#A7F3D0', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6, fontWeight: 400 }}>
            {t.prodSub}
          </p>
          <div style={{ width: '40px', height: '4px', background: '#34D399', margin: '20px auto 0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {products.map((prod, idx) => (
            <div
              key={idx}
              style={{
                background: '#064E3B',
                border: '1px solid #059669',
                borderTop: '4px solid #34D399',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img src={prod.img} alt={prod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(15,23,42,0.85)', color: '#A7F3D0', padding: '3px 8px', fontSize: '9px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(167,243,208,0.3)', pointerEvents: 'none' }}>
                  iStock Stock Asset Ref
                </div>
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ background: '#0F291E', border: '1px solid #34D399', color: '#34D399', fontSize: '10px', fontWeight: 800, padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block' }}>
                    {prod.tag}
                  </span>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#FFFFFF', marginTop: '14px', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                    {prod.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#ECFDF5', lineHeight: 1.6, marginBottom: '20px', opacity: 0.9 }}>
                    {prod.desc}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #059669', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#A7F3D0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {prod.specs}
                  </div>
                  <a
                    href="#contact"
                    style={{
                      background: '#34D399',
                      color: '#042F2E',
                      padding: '8px 14px',
                      textDecoration: 'none',
                      fontWeight: 800,
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderRadius: '2px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Request Spec &amp; Quote</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
