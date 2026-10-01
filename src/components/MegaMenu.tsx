import React from 'react';
import type { Language, MegaMenuTab } from '../types';

interface MegaMenuProps {
  activeMegaMenu: MegaMenuTab;
  setActiveMegaMenu: (menu: MegaMenuTab) => void;
  lang: Language;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ activeMegaMenu, setActiveMegaMenu, lang }) => {
  if (!activeMegaMenu) return null;

  return (
    <div
      className="mega-menu-overlay"
      onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
      onMouseLeave={() => setActiveMegaMenu(null)}
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '3px solid #1B5E20',
        borderBottom: '2px solid #E5E7EB',
        boxShadow: '0 24px 48px rgba(15, 41, 30, 0.12)',
        zIndex: 999,
        padding: '32px 48px',
        animation: 'fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="mega-menu-container" style={{ width: '100%', margin: '0 auto' }}>
        
        {/* 1. PRODUCTS CATEGORY MEGA MENU */}
        {activeMegaMenu === 'products' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {/* Column 1: Railway Freight Wagons */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Freight Wagons & Rolling Stock' : 'Vagones de Carga'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> BCNHL / BCNA Covered Wagons
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> BOXNHL / BOXN Open Freight Wagons
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> BOBRN Rapid Discharge Hopper Wagons
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> BLC Container Flat &amp; BTPN Tank Wagons
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> BVZI Brake Vans &amp; Special Wagons
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Bogies & Suspension Systems */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Bogies & Suspension' : 'Bogies y Suspensión'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> CASNUB 22HS / 22NLR / 25T Bogies
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Barber S2 Design Freight Bogies
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> LHB Coach &amp; Locomotive Bogies
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Machined Axlebox &amp; Bearing Adaptors
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Coupler & Draft Gears */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Couplers & Draft Gears' : 'Enganches y Amortiguadores'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> AAR Type E / F / H Tightlock CBC
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Cardwell High-Capacity Friction Draft Gear
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Elastomeric Suspension Pads &amp; Springs
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Rotary &amp; Transition Coupler Systems
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: CMS Turnout Crossings & Steel Foundries */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'CMS Turnouts & Foundries' : 'Desvíos CMS y Fundiciones'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Cast Manganese Steel (CMS) Frogs
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Thick Web Switches (TWS) &amp; SEJ Joints
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Heavy Steel Castings (up to 20 Tons)
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#products" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Jacking Pads, Brake Heads &amp; Gearboxes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* 2. SOLUTIONS & INDUSTRIES CATEGORY MEGA MENU */}
        {activeMegaMenu === 'solutions' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Class I Heavy Freight' : 'Carga Pesada Clase I'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#markets" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> 39-Ton Axle Load Intermodal Corridors
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#markets" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Transcontinental Mainline Turnouts
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#markets" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Port &amp; Intermodal Terminal Tracks
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Passenger & High-Speed' : 'Pasajeros y Alta Velocidad'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#markets" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> 200+ mph High-Speed Rail Corridors
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#markets" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Noise-Damped Urban Light Rail
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#markets" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Underground Rapid Transit Metro
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Industrial & Mining Sidings' : 'Minería e Industria'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#markets" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Open-Pit Mining Haul Sidings
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#markets" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> High-Heat Steel Mill Trackage
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#markets" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Chemical Plant Rail Loading Bays
                  </a>
                </li>
              </ul>
            </div>

            {/* Featured Solutions Card */}
            <div style={{ background: '#0F291E', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#34D399', background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-block' }}>
                  {lang === 'en' ? 'CASE STUDY' : 'CASO DE ESTUDIO'}
                </span>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginTop: '12px', marginBottom: '8px' }}>Amtrak HSR Corridor</h4>
                <p style={{ fontSize: '12.5px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '16px', fontWeight: 400 }}>
                  {lang === 'en'
                    ? 'Supplying 1,200 manganese turnout frog sets for high-speed rail corridor upgrades.'
                    : 'Suministro de 1,200 conjuntos de cruzamientos de manganeso.'}
                </p>
              </div>
              <a
                href="#projects"
                onClick={() => setActiveMegaMenu(null)}
                style={{
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  padding: '10px 16px',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{lang === 'en' ? 'READ CASE STUDY' : 'VER CASO DE ESTUDIO'}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        )}

        {/* 3. SUSTAINABILITY CATEGORY MEGA MENU */}
        {activeMegaMenu === 'sustainability' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Decarbonized Metallurgy' : 'Metalurgia Descarbonizada'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#sustainability" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> 100% Recycled Scrap Steel Melting
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#sustainability" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Renewable-Powered Electric Induction
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#sustainability" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Zero Foundry Slag Landfill Goal
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Closed-Loop Operations' : 'Operaciones de Ciclo Cerrado'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#sustainability" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> 98% Silica Sand Thermal Recovery
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#sustainability" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Industrial Water Recirculation
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#sustainability" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> ISO 14001 Zero Air Emissions
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Product Life Extension' : 'Extensión de Vida Útil'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#sustainability" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Austenitic Work-Hardening Steel
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#sustainability" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> 2x Service Life Under Heavy Loads
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#sustainability" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Environmental Product Declarations
                  </a>
                </li>
              </ul>
            </div>

            {/* Sustainability Showcase Card */}
            <div style={{ background: '#0F291E', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#34D399', background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-block' }}>
                  {lang === 'en' ? 'ESG METRICS' : 'MÉTRICAS ESG'}
                </span>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginTop: '12px', marginBottom: '8px' }}>ESG Action Report 2026</h4>
                <p style={{ fontSize: '12.5px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '16px', fontWeight: 400 }}>
                  {lang === 'en'
                    ? 'Audit our verified CO₂ reduction data, scrap metal sourcing ratio, and circular sand targets.'
                    : 'Audite nuestros datos verificados de reducción de CO₂.'}
                </p>
              </div>
              <a
                href="#sustainability"
                onClick={() => setActiveMegaMenu(null)}
                style={{
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  padding: '10px 16px',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{lang === 'en' ? 'VIEW ESG DASHBOARD' : 'VER PANEL ESG'}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        )}

        {/* 4. RESOURCES & KNOWLEDGE CATEGORY MEGA MENU */}
        {activeMegaMenu === 'resources' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Engineering Guidelines' : 'Guías de Ingeniería'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> AREMA Chapter 4 Trackwork Standards
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> AAR M-1003 Quality Assurance Protocol
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> ASTM A27 / A536 metal Specs
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'Quality & Laboratory' : 'Calidad y Laboratorio'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Class 1 Ultrasonic (UT) Defect Scanning
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Magnetic Particle &amp; Dye Penetrant (MT)
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Sub-Zero Impact &amp; Brinell Hardness
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', background: '#34D399' }} />
                <h4 style={{ fontSize: '11px', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {lang === 'en' ? 'CAD & Design Library' : 'Biblioteca CAD y Diseño'}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> 3D STEP Models for Frog Turnouts
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Axle &amp; Wheelset Dimensional Schematics
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#knowledge" onClick={() => setActiveMegaMenu(null)} className="mega-link" style={{ textDecoration: 'none', color: '#1B5E20', fontWeight: 500, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s ease' }}>
                    <span style={{ color: '#1B5E20', fontWeight: 700 }}>›</span> Catenary Cantilever Installation Manuals
                  </a>
                </li>
              </ul>
            </div>

            {/* AI Tech Advisor Card */}
            <div style={{ background: '#0F291E', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#34D399', background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.3)', padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-block' }}>
                  {lang === 'en' ? 'ENGINEERING TOOLKIT' : 'HERRAMIENTAS AI'}
                </span>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginTop: '12px', marginBottom: '8px' }}>AI Metallurgist™</h4>
                <p style={{ fontSize: '12.5px', color: '#94A3B8', lineHeight: 1.5, marginBottom: '16px', fontWeight: 400 }}>
                  {lang === 'en'
                    ? 'Input your track axle loads and ambient temperature to simulate frog wear resistance.'
                    : 'Simule el desgaste y ciclo de vida de los cruzamientos.'}
                </p>
              </div>
              <a
                href="#knowledge"
                onClick={() => setActiveMegaMenu(null)}
                style={{
                  background: '#1B5E20',
                  color: '#FFFFFF',
                  padding: '10px 16px',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{lang === 'en' ? 'LAUNCH SIMULATOR' : 'INICIAR SIMULACIÓN'}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MegaMenu;
