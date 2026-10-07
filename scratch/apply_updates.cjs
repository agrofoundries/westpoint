const fs = require('fs');
const path = require('path');

// 1. Update InteractiveExplorer.tsx
const explorerPath = path.resolve(__dirname, '../src/components/InteractiveExplorer.tsx');
let explorerContent = fs.readFileSync(explorerPath, 'utf8');

// Replace the "Full Tech Spec" button with "See More" anchor link to #contact
const oldButtonRegex = /\{\/\* Full Spec \/ Request RFQ Details Button \*\/\}[\s\S]*?<button[\s\S]*?onClick=\{\(\) => setSelectedProduct\(product\)\}[\s\S]*?<span>Full Tech Spec<\/span>[\s\S]*?<\/button>/;

const newSeeMoreLink = `{/* See More Button */}
                      <a
                        href="#contact"
                        className="btn-animated"
                        style={{
                          flex: 1,
                          background: '#1B5E20',
                          color: '#FFFFFF',
                          border: '1.5px solid #1B5E20',
                          borderRadius: '8px',
                          padding: '9px 14px',
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(27,94,32,0.2)',
                          transition: 'all 0.2s',
                          textDecoration: 'none',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                      >
                        <span>See More</span>
                        <ChevronRight size={15} />
                      </a>`;

if (oldButtonRegex.test(explorerContent)) {
  explorerContent = explorerContent.replace(oldButtonRegex, newSeeMoreLink);
  console.log('Successfully replaced Full Tech Spec button in InteractiveExplorer.tsx');
} else {
  console.error('Could not find Full Tech Spec button regex in InteractiveExplorer.tsx');
}

// In table view, replace View Specs button with See More
const oldTableBtn = `<button
                          onClick={() => setSelectedProduct(p)}
                          style={{
                            background: '#1B5E20',
                            color: '#FFF',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '0.775rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          View Specs
                        </button>`;

const newTableLink = `<a
                          href="#contact"
                          style={{
                            background: '#1B5E20',
                            color: '#FFF',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '0.775rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            display: 'inline-block'
                          }}
                        >
                          See More
                        </a>`;

if (explorerContent.includes(oldTableBtn)) {
  explorerContent = explorerContent.replace(oldTableBtn, newTableLink);
  console.log('Successfully replaced table view button in InteractiveExplorer.tsx');
}

// Remove the modal popup: {selectedProduct && ( ... )}
const modalRegex = /\{\/\* =+ SPECIFICATION & CAD DETAIL DRAWER MODAL =+ \*\/\}[\s\S]*?\{selectedProduct && \([\s\S]*?<\/div>\s*<\/div>\s*\)\}/;
if (modalRegex.test(explorerContent)) {
  explorerContent = explorerContent.replace(modalRegex, '');
  console.log('Successfully removed drawer modal popup from InteractiveExplorer.tsx');
} else {
  console.error('Could not find drawer modal regex in InteractiveExplorer.tsx');
}

fs.writeFileSync(explorerPath, explorerContent, 'utf8');

// 2. Update TrustCertificationSection.tsx
const trustPath = path.resolve(__dirname, '../src/components/TrustCertificationSection.tsx');
let trustContent = fs.readFileSync(trustPath, 'utf8');

// Add icons to lucide-react import
trustContent = trustContent.replace(
  "import { ShieldCheck, Lock, Eye, Building2 } from 'lucide-react';",
  "import { ShieldCheck, Lock, Eye, Building2, TrainTrack, Award, CheckCircle2, Train } from 'lucide-react';"
);

// Replace authorityApprovals array
const oldAuthorityArray = `const authorityApprovals = [
  { name: 'Amtrak Passenger Rail', status: 'Approved Master Vendor', code: 'AMTK-SUP-091', logo: 'AMTRAK' },
  { name: 'BNSF Railway Company', status: 'Class 1 Heavy Freight Certified', code: 'BNSF-M-1003-OK', logo: 'BNSF' },
  { name: 'Union Pacific Railroad', status: 'Qualified Trackwork Supplier', code: 'UP-TRK-7740', logo: 'UNION PACIFIC' },
  { name: 'CSX Transportation', status: 'Approved Component Provider', code: 'CSX-QA-339', logo: 'CSX' },
  { name: 'Norfolk Southern Rail', status: 'Heavy Haul Axle Certified', code: 'NS-AXLE-512', logo: 'NORFOLK SOUTHERN' },
  { name: 'Metra / MBTA / MTA', status: 'Commuter Transit Spec Verified', code: 'TRN-NY-BOS-CHI', logo: 'TRANSIT AGENCIES' }
];`;

const newAuthorityArray = `const authorityApprovals = [
  { 
    name: 'Amtrak Passenger Rail', 
    network: 'National Passenger Rail System',
    status: 'Approved Master Vendor', 
    supplies: 'High-speed passenger bogie castings, suspension arms, and forged wheelsets.',
    icon: Train,
    accent: '#0284C7',
    tag: 'PASSENGER CORRIDOR'
  },
  { 
    name: 'BNSF Railway Company', 
    network: 'North American Freight Network',
    status: 'Class 1 Certified Manufacturer', 
    supplies: '36-ton heavy haul axles, freight bogie bolsters, and cast couplers.',
    icon: Building2,
    accent: '#EA580C',
    tag: 'CLASS I FREIGHT'
  },
  { 
    name: 'Union Pacific Railroad', 
    network: 'Transcontinental Class 1 System',
    status: 'Qualified Trackwork Supplier', 
    supplies: 'High-impact manganese turnout switch frogs, crossovers, and trackwork.',
    icon: ShieldCheck,
    accent: '#DC2626',
    tag: 'TRACKWORK & TURNOUTS'
  },
  { 
    name: 'CSX Transportation', 
    network: 'Eastern U.S. Freight Network',
    status: 'Approved Component Provider', 
    supplies: 'Locomotive wheel assemblies, wear plates, and structural steel castings.',
    icon: TrainTrack,
    accent: '#2563EB',
    tag: 'LOCOMOTIVE SYSTEMS'
  },
  { 
    name: 'Norfolk Southern Rail', 
    network: 'Heavy Haul Freight Network',
    status: 'Approved Heavy Haul Vendor', 
    supplies: 'Ductile iron brake heads, forged axles, and side frame bolster parts.',
    icon: Award,
    accent: '#334155',
    tag: 'FOUNDRY CASTINGS'
  },
  { 
    name: 'Metra / MBTA / MTA', 
    network: 'Commuter & Subway Transit',
    status: 'Verified Transit Supplier', 
    supplies: 'Commuter and subway coach bogies, disc brake rotors, and truck frames.',
    icon: CheckCircle2,
    accent: '#059669',
    tag: 'COMMUTER & METRO'
  }
];`;

if (trustContent.includes(oldAuthorityArray)) {
  trustContent = trustContent.replace(oldAuthorityArray, newAuthorityArray);
  console.log('Successfully replaced authorityApprovals array');
} else {
  console.error('Could not find old authorityApprovals array');
}

// Replace the generic rail approval grid
const oldGridRegex = /\{\/\* Rail Authorities Approval Grid \*\/\}[\s\S]*?<div style=\{\{ display: 'grid', gridTemplateColumns: 'repeat\(3, 1fr\)', gap: '1\.5rem' \}\}>[\s\S]*?\{authorityApprovals\.map\([\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const newGridJSX = `{/* Rail Authorities Approval Directory */}
        <div style={{ background: '#1B5E20', color: '#FFFFFF', padding: '3.5rem 3rem', borderRadius: '4px', position: 'relative', overflow: 'hidden', borderTop: '4px solid #4CAF50' }}>
          <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '8px', fontFamily: "'Manrope', sans-serif !important" }}>
              CLASS I FREIGHT &amp; PASSENGER RAIL AUTHORITY APPROVALS
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', margin: '0 0 10px 0', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              APPROVED RAIL NETWORK VENDOR STATUS
            </h3>
            <p style={{ fontSize: '14.5px', color: '#E8F5E9', margin: 0, lineHeight: 1.5, fontFamily: "'Manrope', sans-serif !important" }}>
              Westpoint is a qualified direct manufacturer for leading North American Class I freight railroads and passenger transit corridors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {authorityApprovals.map((auth, i) => {
              const IconComp = auth.icon;
              return (
                <div 
                  key={i}
                  style={{ 
                    background: '#FFFFFF', 
                    borderRadius: '4px', 
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                    border: '1px solid #E5E7EB',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                >
                  <div>
                    {/* Top Row: Railroad Identity & Status Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '42px', height: '42px', borderRadius: '4px', background: auth.accent + '15', color: auth.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid ' + auth.accent + '30' }}>
                          <IconComp size={22} color={auth.accent} />
                        </div>
                        <div>
                          <span style={{ fontSize: '10px', fontWeight: 800, color: auth.accent, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                            {auth.tag}
                          </span>
                          <span style={{ fontSize: '11.5px', color: '#6B7280', fontWeight: 600, display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                            {auth.network}
                          </span>
                        </div>
                      </div>

                      <span style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0', padding: '3px 8px', borderRadius: '3px', fontSize: '10.5px', fontWeight: 800, whiteSpace: 'nowrap', fontFamily: "'Manrope', sans-serif !important" }}>
                        VERIFIED
                      </span>
                    </div>

                    {/* Railroad Name */}
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 6px 0', fontFamily: "'Manrope', sans-serif !important" }}>
                      {auth.name}
                    </h4>

                    {/* What Westpoint Manufactures For Them */}
                    <p style={{ fontSize: '13.5px', color: '#374151', lineHeight: 1.5, margin: '8px 0 0 0', borderTop: '1px solid #F3F4F6', paddingTop: '10px', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                      {auth.supplies}
                    </p>
                  </div>

                  {/* Footer Status */}
                  <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11.5px', color: '#1B5E20', fontWeight: 700, fontFamily: "'Manrope', sans-serif !important" }}>
                      {auth.status}
                    </span>
                    <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
                      AAR / AREMA Spec
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>`;

if (oldGridRegex.test(trustContent)) {
  trustContent = trustContent.replace(oldGridRegex, newGridJSX);
  console.log('Successfully replaced generic grid in TrustCertificationSection.tsx');
} else {
  console.error('Could not find old rail grid regex in TrustCertificationSection.tsx');
}

fs.writeFileSync(trustPath, trustContent, 'utf8');
