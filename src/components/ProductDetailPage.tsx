import React, { useState, useEffect } from 'react';
import { EXPLORER_PRODUCTS } from './InteractiveExplorer';
import type { ProductItem } from './InteractiveExplorer';
import {
  X, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Download,
  Layers, TrainTrack, Compass, Share2, Printer, Check, Eye, ChevronRight
} from 'lucide-react';

interface ProductDetailPageProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuoteForProduct?: (productTitle: string) => void;
  onSelectProduct?: (product: ProductItem) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  isOpen,
  onClose,
  onRequestQuoteForProduct,
  onSelectProduct
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'photo' | 'cad' | 'solidification'>('photo');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when product detail is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  // Find related products in the same category
  const relatedProducts = EXPLORER_PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        background: 'rgba(15, 41, 30, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto',
        fontFamily: "'Manrope', sans-serif !important"
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFFFF',
          color: '#111827',
          width: '100%',
          maxWidth: '1240px',
          maxHeight: '94vh',
          overflowY: 'auto',
          borderRadius: '4px',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.4)',
          borderTop: '5px solid #4CAF50',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top Sticky Header & Breadcrumbs Bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 30,
            background: '#144818',
            color: '#FFFFFF',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            borderBottom: '1.5px solid #4CAF50'
          }}
        >
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, flexWrap: 'wrap' }}>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#A5D6A7',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '12px',
                fontWeight: 800,
                padding: '4px 8px',
                borderRadius: '2px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#A5D6A7'; e.currentTarget.style.background = 'transparent'; }}
            >
              <ArrowLeft size={14} />
              <span>CATALOG</span>
            </button>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: '#FAF6EE' }}>{product.categoryLabel}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: '#FFEB3B', fontWeight: 900 }}>{product.series}</span>
          </div>

          {/* Quick Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleShare}
              title="Copy link to clipboard"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                padding: '6px 12px',
                fontSize: '11.5px',
                fontWeight: 700,
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.2s'
              }}
            >
              {copiedLink ? <Check size={13} color="#81C784" /> : <Share2 size={13} />}
              <span>{copiedLink ? 'COPIED!' : 'SHARE'}</span>
            </button>

            <button
              onClick={handlePrint}
              title="Print / Save as PDF"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                padding: '6px 12px',
                fontSize: '11.5px',
                fontWeight: 700,
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.2s'
              }}
            >
              <Printer size={13} />
              <span>PRINT</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close Product Page"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: '#E8F5E9',
                border: '1px solid #4CAF50',
                color: '#1B5E20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginLeft: '6px'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#4CAF50'; e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#E8F5E9'; e.currentTarget.style.color = '#1B5E20'; }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Main Product Content Grid */}
        <div style={{ padding: '2rem', flex: 1 }}>
          <div className="grid-responsive-2" style={{ gap: '2.5rem', alignItems: 'start' }}>

            {/* ================= LEFT COLUMN: MEDIA VIEWER & TABS ================= */}
            <div>
              {/* Media Switcher Tabs */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveMediaTab('photo')}
                  style={{
                    padding: '7px 14px',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    background: activeMediaTab === 'photo' ? '#1B5E20' : '#F1F5F9',
                    color: activeMediaTab === 'photo' ? '#FFFFFF' : '#1B5E20',
                    border: activeMediaTab === 'photo' ? '1px solid #1B5E20' : '1px solid #E2E8F0',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Eye size={13} />
                  <span>COMPONENT PHOTO</span>
                </button>

                <button
                  onClick={() => setActiveMediaTab('cad')}
                  style={{
                    padding: '7px 14px',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    background: activeMediaTab === 'cad' ? '#1B5E20' : '#F1F5F9',
                    color: activeMediaTab === 'cad' ? '#FFFFFF' : '#1B5E20',
                    border: activeMediaTab === 'cad' ? '1px solid #1B5E20' : '1px solid #E2E8F0',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Compass size={13} />
                  <span>CAD BLUEPRINT</span>
                </button>

                <button
                  onClick={() => setActiveMediaTab('solidification')}
                  style={{
                    padding: '7px 14px',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    background: activeMediaTab === 'solidification' ? '#1B5E20' : '#F1F5F9',
                    color: activeMediaTab === 'solidification' ? '#FFFFFF' : '#1B5E20',
                    border: activeMediaTab === 'solidification' ? '1px solid #1B5E20' : '1px solid #E2E8F0',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Layers size={13} />
                  <span>SOLIDIFICATION MODEL</span>
                </button>
              </div>

              {/* Main Media Frame */}
              <div
                style={{
                  height: '380px',
                  background: activeMediaTab === 'photo' ? '#FFFFFF' : '#0F291E',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                }}
              >
                {activeMediaTab === 'photo' && (
                  <img
                    src={product.img}
                    alt={product.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1.5rem', display: 'block' }}
                  />
                )}

                {activeMediaTab === 'cad' && (
                  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src="/images/bogie_callouts_diagram.png"
                      alt="CAD Blueprint Technical Callout"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }}
                    />
                    <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(27,94,32,0.9)', color: '#FAF6EE', fontSize: '10px', fontWeight: 900, padding: '4px 8px', borderRadius: '2px', border: '1px solid #4CAF50' }}>
                      AREMA CAD TRUE-TO-CAST
                    </div>
                  </div>
                )}

                {activeMediaTab === 'solidification' && (
                  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src="/images/real_metal_casting_stock.jpg"
                      alt="MagmaSoft Thermal Solidification"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,72,24,0.9), transparent)', display: 'flex', alignItems: 'flex-end', padding: '1.5rem' }}>
                      <div>
                        <span style={{ fontSize: '10px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          MAGMASOFT® 3D THERMAL FLOW SIMULATION
                        </span>
                        <h4 style={{ fontSize: '14px', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
                          Zero-Porosity metal Solidification
                        </h4>
                      </div>
                    </div>
                  </div>
                )}

                {/* Floating Top Left Category Pill */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#1B5E20', color: '#FFFFFF', fontSize: '10px', fontWeight: 900, padding: '4px 10px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {product.categoryLabel}
                </div>
              </div>

              {/* Verified Compliances Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '14px' }}>
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '10px 8px', borderRadius: '4px', textAlign: 'center' }}>
                  <ShieldCheck size={16} color="#166534" style={{ margin: '0 auto 4px auto', display: 'block' }} />
                  <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#166534', display: 'block' }}>AAR M-1003 QA</span>
                </div>

                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '10px 8px', borderRadius: '4px', textAlign: 'center' }}>
                  <CheckCircle2 size={16} color="#166534" style={{ margin: '0 auto 4px auto', display: 'block' }} />
                  <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#166534', display: 'block' }}>100% NDT TESTED</span>
                </div>

                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '10px 8px', borderRadius: '4px', textAlign: 'center' }}>
                  <TrainTrack size={16} color="#166534" style={{ margin: '0 auto 4px auto', display: 'block' }} />
                  <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#166534', display: 'block' }}>36-TON HAL RATED</span>
                </div>
              </div>

            </div>

            {/* ================= RIGHT COLUMN: PRODUCT SPECIFICATIONS DOSSIER ================= */}
            <div>
              {/* Product Series & Code */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  WESTPOINT GROUP RAIL &amp; INDUSTRIAL DIVISIONS
                </span>
                <span style={{ color: '#E5E7EB' }}>|</span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#1B5E20', textTransform: 'uppercase' }}>
                  REF: {product.id.toUpperCase()}
                </span>
              </div>

              {/* Product Headline */}
              <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 900, color: '#111827', margin: '0 0 12px 0', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                {product.title}
              </h1>

              {/* Description */}
              <p style={{ fontSize: '14.5px', color: '#374151', lineHeight: 1.6, margin: '0 0 1.5rem 0', fontWeight: 500 }}>
                {product.desc} Engineered for demanding freight railroad, high-speed passenger transit, and industrial equipment endurance.
              </p>

              {/* Technical Specifications Table */}
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <div style={{ background: '#1B5E20', color: '#FFFFFF', padding: '10px 16px', fontSize: '11.5px', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  metal &amp; ENGINEERING SPECIFICATIONS
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', fontSize: '13px' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0' }}>
                    <span style={{ color: '#64748B', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>SPECIFICATION STANDARD</span>
                    <strong style={{ color: '#1B5E20' }}>{product.specs}</strong>
                  </div>

                  <div style={{ padding: '10px 16px', borderBottom: '1px solid #E2E8F0' }}>
                    <span style={{ color: '#64748B', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>MATERIAL METALLURGY</span>
                    <strong style={{ color: '#111827' }}>{product.materialGrade}</strong>
                  </div>

                  <div style={{ padding: '10px 16px', borderBottom: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0' }}>
                    <span style={{ color: '#64748B', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>AXLE LOAD / ENDURANCE</span>
                    <strong style={{ color: '#0284C7' }}>{product.axleLoad}</strong>
                  </div>

                  <div style={{ padding: '10px 16px', borderBottom: '1px solid #E2E8F0' }}>
                    <span style={{ color: '#64748B', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>TENSILE STRENGTH</span>
                    <strong style={{ color: '#111827' }}>{product.tensileStrength}</strong>
                  </div>

                  <div style={{ padding: '10px 16px', borderRight: '1px solid #E2E8F0' }}>
                    <span style={{ color: '#64748B', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>YIELD STRENGTH</span>
                    <strong style={{ color: '#111827' }}>{product.yieldStrength}</strong>
                  </div>

                  <div style={{ padding: '10px 16px' }}>
                    <span style={{ color: '#64748B', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>HARDNESS RATING</span>
                    <strong style={{ color: '#111827' }}>{product.hardness}</strong>
                  </div>
                </div>
              </div>

              {/* Key Features Checkmarks */}
              <div style={{ marginBottom: '1.75rem' }}>
                <strong style={{ fontSize: '12px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  KEY FEATURES
                </strong>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                  {product.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#1F2937', fontWeight: 600 }}>
                      <CheckCircle2 size={15} color="#16A34A" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#1F2937', fontWeight: 600 }}>
                    <CheckCircle2 size={15} color="#16A34A" style={{ flexShrink: 0 }} />
                    <span>100% Tested for Quality</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#1F2937', fontWeight: 600 }}>
                    <CheckCircle2 size={15} color="#16A34A" style={{ flexShrink: 0 }} />
                    <span>High Precision Robotic Machining</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    onClose();
                    if (onRequestQuoteForProduct) {
                      onRequestQuoteForProduct(product.title);
                    }
                  }}
                  className="btn-animated"
                  style={{
                    flex: 1,
                    minWidth: '220px',
                    padding: '14px 24px',
                    fontSize: '13px',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    borderRadius: '4px',
                    boxShadow: '0 8px 20px rgba(27,94,32,0.3)'
                  }}
                >
                  <span>REQUEST QUOTE FOR THIS PART</span>
                  <ArrowRight size={16} color="#FFFFFF" />
                </button>

                <a
                  href={product.img}
                  download={`Westpoint-${product.id}-Spec-Sheet.jpg`}
                  className="btn-animated"
                  style={{
                    background: '#FAF6EE',
                    color: '#1B5E20',
                    border: '1.5px solid #1B5E20',
                    padding: '14px 20px',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    borderRadius: '4px'
                  }}
                >
                  <Download size={16} color="#1B5E20" />
                  <span>DOWNLOAD CAD SPEC (.PDF)</span>
                </a>
              </div>

            </div>

          </div>

          {/* ================= RELATED PRODUCTS IN THIS CATEGORY ================= */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    DIVISION CATALOG
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#111827', margin: 0, textTransform: 'uppercase' }}>
                    Related {product.categoryLabel} Components
                  </h3>
                </div>
              </div>

              <div className="grid-responsive-4">
                {relatedProducts.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      if (onSelectProduct) onSelectProduct(rel);
                    }}
                    className="card-hover-industrial"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      padding: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div>
                      <div style={{ height: '120px', overflow: 'hidden', background: '#F8FAFC', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                        <img
                          src={rel.img}
                          alt={rel.title}
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <span style={{ fontSize: '9px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block' }}>
                        {rel.series}
                      </span>
                      <h4 style={{ fontSize: '12px', fontWeight: 800, color: '#111827', margin: '4px 0 6px 0', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {rel.title}
                      </h4>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '8px', marginTop: '6px' }}>
                      <span style={{ fontSize: '10px', color: '#4CAF50', fontWeight: 700 }}>
                        {rel.specs}
                      </span>
                      <ChevronRight size={13} color="#1B5E20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
