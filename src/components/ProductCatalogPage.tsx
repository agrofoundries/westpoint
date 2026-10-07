import React from 'react';
import { EXPLORER_PRODUCTS } from './InteractiveExplorer';
import type { ProductItem } from './InteractiveExplorer';
import { ChevronRight } from 'lucide-react';

interface ProductCatalogPageProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCatalogPage: React.FC<ProductCatalogPageProps> = ({ onSelectProduct }) => {
  // Group products by category
  const categories = Array.from(new Set(EXPLORER_PRODUCTS.map(p => p.categoryLabel)));
  const groupedProducts = categories.map(categoryLabel => ({
    label: categoryLabel,
    products: EXPLORER_PRODUCTS.filter(p => p.categoryLabel === categoryLabel)
  }));

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '4rem 0', fontFamily: "'Manrope', sans-serif !important" }}>
      <div className="container-custom">
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            COMPLETE INVENTORY
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 900, color: '#111827', margin: 0, textTransform: 'uppercase' }}>
            Product Catalog
          </h1>
          <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '600px', margin: '1rem auto 0 auto', fontWeight: 500 }}>
            Browse our comprehensive range of high-quality industrial, railway, and automotive components.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {groupedProducts.map((group, gIdx) => (
            <section key={gIdx}>
              <div style={{ borderBottom: '2px solid #E2E8F0', paddingBottom: '1rem', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1B5E20', margin: 0, textTransform: 'uppercase' }}>
                  {group.label}
                </h2>
              </div>
              
              <div className="grid-responsive-4" style={{ gap: '1.5rem' }}>
                {group.products.map(product => (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    className="card-hover-industrial"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      padding: '16px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div>
                      <div style={{ height: '160px', overflow: 'hidden', background: '#F8FAFC', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                        <img
                          src={product.img}
                          alt={product.title}
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <span style={{ fontSize: '10px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        {product.series}
                      </span>
                      <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#111827', margin: '0 0 8px 0', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {product.title}
                      </h4>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '12px', marginTop: 'auto' }}>
                      <span style={{ fontSize: '11px', color: '#4CAF50', fontWeight: 700 }}>
                        {product.specs}
                      </span>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ChevronRight size={14} color="#1B5E20" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogPage;
