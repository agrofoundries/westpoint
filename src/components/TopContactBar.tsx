import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const TopContactBar: React.FC = () => {
  return (
    <div style={{ background: '#1B5E20', color: '#FFFFFF', fontSize: '11.5px', borderBottom: '1px solid #4CAF50', padding: '8px 0', fontFamily: "'Manrope', sans-serif !important" }}>
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>

        {/* Left Side: Brand & Compliance Badges & Headquarters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <span style={{ color: '#A5D6A7', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            WESTPOINT GROUP COMPANIES
          </span>
          <span style={{ background: '#C8102E', color: '#FFFFFF', fontSize: '9.5px', fontWeight: 900, padding: '2px 7px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            ISO 9001 &amp; RDSO APPROVED
          </span>

          <span style={{ color: 'rgba(255,255,255,0.35)' }}>|</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>

            <span style={{ color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.04em' }}>
              <a
                href="mailto:foundry@westpointindustries.com"
                style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 800, transition: 'all 0.2s', padding: '3px 8px', borderRadius: '2px' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
              >
                <Mail size={13} color="#81C784" />
                <span>foundry@westpointindustries.com</span>
              </a>
            </span>
          </div>
        </div>

        {/* Right Side: Quick Contact Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={13} color="#81C784" />
            <a
              href="tel:6038383333"
              style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, transition: 'all 0.2s', padding: '2px 4px', borderRadius: '2px' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
            >
              603 838 3333
            </a>
            <span style={{ color: '#81C784' }}>/</span>
            <a
              href="tel:6038383222"
              style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, transition: 'all 0.2s', padding: '2px 4px', borderRadius: '2px' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
            >
              603 838 3222
            </a>
          </div>

          <span style={{ color: 'rgba(255,255,255,0.35)' }}>|</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={13} color="#81C784" />
            <select
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: 'none',
                fontWeight: 800,
                fontSize: 'inherit',
                outline: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              <option value="usa" style={{ color: '#1B5E20' }}>USA</option>
              <option value="canada" style={{ color: '#1B5E20' }}>Canada</option>
              <option value="mexico" style={{ color: '#1B5E20' }}>Mexico</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopContactBar;
