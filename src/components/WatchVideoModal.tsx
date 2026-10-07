import React from 'react';
import { X } from 'lucide-react';

interface WatchVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WatchVideoModal: React.FC<WatchVideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        style={{ 
          background: '#0C241B', 
          border: '1px solid #B78A4C', 
          width: '100%', 
          maxWidth: '880px', 
          padding: '1rem', 
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '-2.5rem', 
            right: 0, 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '12px',
            fontWeight: 700
          }}
        >
          <span>CLOSE</span>
          <X size={18} />
        </button>

        <div style={{ width: '100%', height: '480px', background: '#1B5E20', overflow: 'hidden' }}>
          <video 
            src="/videos/foundry_live.mp4" 
            controls 
            autoPlay 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ padding: '1rem 0.5rem 0.5rem 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#F5F2EB' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#B78A4C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              DOCUMENTARY REEL
            </span>
            <h4 style={{ fontSize: '15px', fontWeight: 800, margin: '2px 0 0 0', color: '#F5F2EB' }}>
              Westpoint Group Companies Electric Induction &amp; Forging Operations
            </h4>
          </div>

          <span style={{ fontSize: '11px', color: '#A3B5AC' }}>
            AAR M-1003 &amp; AREMA Compliant Facility
          </span>
        </div>
      </div>
    </div>
  );
};

export default WatchVideoModal;
