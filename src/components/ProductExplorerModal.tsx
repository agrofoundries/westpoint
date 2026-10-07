import React from 'react';
import InteractiveExplorer from './InteractiveExplorer';
import type { ProductItem } from './InteractiveExplorer';

interface ProductExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuoteForProduct?: (productTitle: string) => void;
  onOpenProductDetail?: (product: ProductItem) => void;
}

export const ProductExplorerModal: React.FC<ProductExplorerModalProps> = ({
  isOpen,
  onClose,
  onRequestQuoteForProduct,
  onOpenProductDetail
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      overflowY: 'auto'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        maxWidth: '1280px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}>
        <InteractiveExplorer
          isModalView={true}
          onCloseModal={onClose}
          onRequestQuoteForProduct={onRequestQuoteForProduct}
          onOpenProductDetail={(prod) => {
            onClose();
            if (onOpenProductDetail) {
              onOpenProductDetail(prod);
            }
          }}
        />
      </div>
    </div>
  );
};

export default ProductExplorerModal;
