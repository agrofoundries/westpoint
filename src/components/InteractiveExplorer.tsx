import React, { useState, useMemo } from 'react';
import {
  Search, Check,
  ChevronRight, Table, Grid, Info, Sparkles, X, Compass
} from 'lucide-react';

export interface ProductItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  series: string;
  specs: string;
  compliance: string[];
  axleLoad: string;
  materialGrade: string;
  tensileStrength: string;
  yieldStrength: string;
  hardness: string;
  desc: string;
  img: string;
  keyFeatures: string[];
}

export const EXPLORER_PRODUCTS: ProductItem[] = [
  {
    id: 'rail-0',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Under-chassis critical components of high speed German LHB/FIAT coaches',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Under-chassis critical components of high speed German LHB/FIAT coaches manufactured by Westpoint Industries.',
    img: '/images/prod_railway_track_plates.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-1',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Control Arm Upper, Lower Right, Lower Left - SG 400/18',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Control Arm Upper, Lower Right, Lower Left - SG 400/18 manufactured by Westpoint Industries.',
    img: '/images/suspension-arm-vehicle-260nw-1232311150.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-2',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Centering Disc Assembly (All Types) - DIN 17182 GS-20Mn5V',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Centering Disc Assembly (All Types) - DIN 17182 GS-20Mn5V manufactured by Westpoint Industries.',
    img: '/images/1124259795-1024x1024.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-3',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Brake support - GS-20Mn5V',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Brake support - GS-20Mn5V manufactured by Westpoint Industries.',
    img: '/images/520686084-1024x1024.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-4',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Set Of Console',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Set Of Console manufactured by Westpoint Industries.',
    img: '/images/169263915-1024x1024.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-5',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Pin Bracket',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Pin Bracket manufactured by Westpoint Industries.',
    img: '/images/976893614-1024x1024.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-6',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Bump Stop Bracket',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Bump Stop Bracket manufactured by Westpoint Industries.',
    img: '/images/1020709664-1024x1024.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-7',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Articulation Piece - IS 1030',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Articulation Piece - IS 1030 manufactured by Westpoint Industries.',
    img: '/images/two-crossing-train-tracks.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-8',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Axlebox Housing - IS 1030',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Axlebox Housing - IS 1030 manufactured by Westpoint Industries.',
    img: '/images/169263915-1024x1024.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-9',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Front and Rear Draft Lugs - Grade B & C',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Front and Rear Draft Lugs - Grade B & C manufactured by Westpoint Industries.',
    img: '/images/close-train-coupler-260nw-1680899338.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-10',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Railway Track Plates',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Railway Track Plates manufactured by Westpoint Industries.',
    img: '/images/railroad-tracks-divided-260nw-2686728089.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-11',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Castings for Buffers',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Castings for Buffers manufactured by Westpoint Industries.',
    img: '/images/980499052-1024x1024.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-12',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Other railway components',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Other railway components manufactured by Westpoint Industries.',
    img: '/images/close-train-coupler-260nw-1680899338.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-23',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Jacking Pad',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Jacking Pad manufactured by Westpoint Industries.',
    img: '/images/cast-metal-engine-block-260nw-2786927443.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-24',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Coupler Carrier',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Coupler Carrier manufactured by Westpoint Industries.',
    img: '/images/close-train-coupler-260nw-1680899338.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-25',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Bearing Adaptor Plate Assembly',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Bearing Adaptor Plate Assembly manufactured by Westpoint Industries.',
    img: '/images/camber-plates-drift-aluminium-race-600w-576380224.webp',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-26',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Brake Head for Brake rigging kit',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Brake Head for Brake rigging kit manufactured by Westpoint Industries.',
    img: '/images/drum-brake-truck-bus-260nw-2457408845.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-27',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Equaliser Spring Seat',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Equaliser Spring Seat manufactured by Westpoint Industries.',
    img: '/images/big-industrial-springs-600w-159552263.webp',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-28',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Fuel Pump Support',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Fuel Pump Support manufactured by Westpoint Industries.',
    img: '/images/cast-metal-engine-block-260nw-2786927443.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-29',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: '10 Ton Stub Axle',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality 10 Ton Stub Axle manufactured by Westpoint Industries.',
    img: '/images/suspension-arm-vehicle-260nw-1232311150.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-30',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: '8 Ton Knuckle',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality 8 Ton Knuckle manufactured by Westpoint Industries.',
    img: '/images/2234684923-1024x1024.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-31',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: 'Rotor',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Rotor manufactured by Westpoint Industries.',
    img: '/images/disused-electric-drive-rack-railway-600w-2624945193.webp',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-32',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: 'Elliptical Pin',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Elliptical Pin manufactured by Westpoint Industries.',
    img: '/images/tow-hitch-modern-tractor-260nw-2206903103.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-33',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: 'Sprockets for Undercarriage',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Sprockets for Undercarriage manufactured by Westpoint Industries.',
    img: '/images/track-drive-gear-bulldozer-260nw-623455658.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-34',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: 'Trailer Components',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Trailer Components manufactured by Westpoint Industries.',
    img: '/images/1756783058-1024x1024.jpg',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  ];

interface InteractiveExplorerProps {
  onRequestQuoteForProduct?: (productTitle: string) => void;
  isModalView?: boolean;
  onCloseModal?: () => void;
  onOpenProductDetail?: (product: ProductItem) => void;
}

export const InteractiveExplorer: React.FC<InteractiveExplorerProps> = ({
  onRequestQuoteForProduct,
  isModalView = false,
  onCloseModal,
  onOpenProductDetail
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeStandard, setActiveStandard] = useState<string>('all');
  const [activeAxleLoad, setActiveAxleLoad] = useState<string>('all');
  // View & Glossary States
  const [viewMode, setViewMode] = useState<'grid' | 'table' | 'compare'>('grid');
  const [showGlossary, setShowGlossary] = useState<boolean>(false);

  // Selected items for Comparison Tool (max 3)
  const [comparedProductIds, setComparedProductIds] = useState<string[]>([]);

  // Available Standards Filter Options
  const standardsList = [
    { id: 'all', label: 'All Standards' },
    { id: 'RDSO', label: 'RDSO' },
    { id: 'AAR', label: 'AAR M-201' },
    { id: 'AREMA', label: 'AREMA' },
    { id: 'ASTM', label: 'ASTM' },
    { id: 'IS', label: 'IS / IRS Spec' }
  ];

  // Available Axle Load Filter Options
  const axleLoadList = [
    { id: 'all', label: 'All Axle Loads' },
    { id: '22.9', label: '22.9T Freight' },
    { id: '25.0', label: '25.0T Heavy Freight' },
    { id: '32.5', label: '32.5T Heavy Haul' },
    { id: 'High', label: 'High Speed / Pass.' }
  ];

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'rail', label: 'Rail Coach & Bogie Components' },
    { id: 'loco', label: 'Components for Locomotives' },
    { id: 'oem', label: 'Components for OEMs' },
    { id: 'other', label: 'Other Industries' }
  ];

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return EXPLORER_PRODUCTS.filter(item => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;

      // Standard match
      if (activeStandard !== 'all') {
        const matchesStandard = item.compliance.some(c => c.toLowerCase().includes(activeStandard.toLowerCase())) ||
          item.specs.toLowerCase().includes(activeStandard.toLowerCase());
        if (!matchesStandard) return false;
      }

      // Axle Load match
      if (activeAxleLoad !== 'all') {
        const matchesAxle = item.axleLoad.toLowerCase().includes(activeAxleLoad.toLowerCase());
        if (!matchesAxle) return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          item.title.toLowerCase().includes(query) ||
          item.series.toLowerCase().includes(query) ||
          item.specs.toLowerCase().includes(query) ||
          item.materialGrade.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.id.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [activeCategory, activeStandard, activeAxleLoad, searchQuery]);

  // Comparison toggle handler
  const toggleCompare = (id: string) => {
    setComparedProductIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 products at a time.');
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  const comparedProducts = useMemo(() => {
    return EXPLORER_PRODUCTS.filter(p => comparedProductIds.includes(p.id));
  }, [comparedProductIds]);

  return (
    <section
      id="explorer"
      style={{
        background: isModalView ? '#FFFFFF' : '#FAFBFD',
        padding: isModalView ? '1.5rem' : '4rem 1.5rem',
        borderBottom: isModalView ? 'none' : '1px solid #E2E8F0',
        fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      <div className={isModalView ? '' : 'container-custom'}>

        {/* Section Header */}
        {!isModalView && (
          <div style={{ marginBottom: '2.5rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(27, 94, 32, 0.08)',
              color: '#1B5E20',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              <Sparkles size={16} color="#4CAF50" />
              <span>INTERACTIVE ENGINEERING SEARCH ENGINE</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: '#111827',
              fontWeight: 900,
              lineHeight: 1.15,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}>
              ENGINEERING PRODUCT &amp; SPECIFICATION EXPLORER
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#4CAF50', lineHeight: 1.6, margin: 0 }}>
              Search across 100+ AREMA, RDSO &amp; AAR certified railway components, heavy steel castings, and ready-mix concrete formulations. Filter by compliance, load rating, and mechanical tolerances.
            </p>
          </div>
        )}

        {/* Modal Top Bar if in Modal View */}
        {isModalView && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: '#1B5E20', color: '#FFF', padding: '8px', borderRadius: '6px', display: 'flex' }}>
                <Compass size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: 0 }}>
                  Component &amp; Technical Spec Explorer
                </h3>
                <span style={{ fontSize: '0.825rem', color: '#4CAF50' }}>
                  Filter by RDSO / AAR standards, material grades, and CAD schematics
                </span>
              </div>
            </div>

            {onCloseModal && (
              <button
                onClick={onCloseModal}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#4CAF50',
                  transition: 'all 0.2s'
                }}
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* Filter Controls Toolbar */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '1.25rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid #E2E8F0',
          marginBottom: '2rem'
        }}>

          {/* Top Line: Search Bar + View Mode Toggles + Compare Counter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>

            {/* Search Input Box */}
            <div style={{ flex: '1 1 320px', position: 'relative' }}>
              <Search size={18} color="#4CAF50" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search part name, spec (e.g. RDSO, CASNUB, M-201, M60), DWG filename..."
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 42px',
                  borderRadius: '8px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.925rem',
                  color: '#1B5E20',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = '#1B5E20'}
                onBlur={e => e.target.style.borderColor = '#CBD5E1'}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#94A3B8',
                    fontSize: '0.8rem'
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Switcher + Compare Counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

              {/* Compare Items Button */}
              {comparedProductIds.length > 0 && (
                <button
                  onClick={() => setViewMode('compare')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: viewMode === 'compare' ? '#1B5E20' : '#E8F5E9',
                    color: viewMode === 'compare' ? '#FFF' : '#1B5E20',
                    border: '1px solid #4CAF50',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <Table size={16} />
                  <span>Compare ({comparedProductIds.length}/3)</span>
                </button>
              )}

              {/* Grid / Table View Toggles */}
              <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: '8px', padding: '4px', border: '1px solid #E2E8F0' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: viewMode === 'grid' ? '#FFFFFF' : 'transparent',
                    color: viewMode === 'grid' ? '#1B5E20' : '#4CAF50',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: viewMode === 'grid' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <Grid size={16} />
                  <span>Grid Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: viewMode === 'table' ? '#FFFFFF' : 'transparent',
                    color: viewMode === 'table' ? '#1B5E20' : '#4CAF50',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: viewMode === 'table' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <Table size={16} />
                  <span>Spec Table</span>
                </button>
              </div>

            </div>

          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9', marginBottom: '1rem' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: activeCategory === cat.id ? 700 : 500,
                  background: activeCategory === cat.id ? '#1B5E20' : '#F8FAFC',
                  color: activeCategory === cat.id ? '#FFFFFF' : '#4CAF50',
                  border: activeCategory === cat.id ? '1px solid #1B5E20' : '1px solid #E2E8F0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Pill Filters: Standard & Axle Load */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>

            {/* Standards Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Standard:
              </span>
              {standardsList.map(std => (
                <button
                  key={std.id}
                  onClick={() => setActiveStandard(std.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.775rem',
                    fontWeight: activeStandard === std.id ? 700 : 500,
                    background: activeStandard === std.id ? '#E8F5E9' : '#FFFFFF',
                    color: activeStandard === std.id ? '#1B5E20' : '#4CAF50',
                    border: activeStandard === std.id ? '1px solid #4CAF50' : '1px solid #CBD5E1',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {std.label}
                </button>
              ))}
            </div>

            {/* Axle Load Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Axle Load:
              </span>
              {axleLoadList.map(axle => (
                <button
                  key={axle.id}
                  onClick={() => setActiveAxleLoad(axle.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.775rem',
                    fontWeight: activeAxleLoad === axle.id ? 700 : 500,
                    background: activeAxleLoad === axle.id ? '#E8F5E9' : '#FFFFFF',
                    color: activeAxleLoad === axle.id ? '#1B5E20' : '#4CAF50',
                    border: activeAxleLoad === axle.id ? '1px solid #4CAF50' : '1px solid #CBD5E1',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {axle.label}
                </button>
              ))}
            </div>

            {/* Active Results Counter & Glossary Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setShowGlossary(!showGlossary)}
                style={{
                  background: showGlossary ? '#1B5E20' : '#E8F5E9',
                  color: showGlossary ? '#FFFFFF' : '#1B5E20',
                  border: '1px solid #4CAF50',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Info size={14} />
                <span>{showGlossary ? 'Hide Full Forms Guide' : 'View Full Forms & Acronym Glossary'}</span>
              </button>

              <div style={{ fontSize: '0.825rem', color: '#4CAF50', fontWeight: 600 }}>
                Showing <strong style={{ color: '#1B5E20' }}>{filteredProducts.length}</strong> components
              </div>
            </div>

          </div>

          {/* Expandable Acronym & Full Form Glossary Banner */}
          {showGlossary && (
            <div style={{
              marginTop: '1.25rem',
              paddingTop: '1.25rem',
              borderTop: '1px dashed #CBD5E1',
              background: '#F8FAFC',
              borderRadius: '10px',
              padding: '1rem 1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <Info size={16} color="#1B5E20" />
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Full Form Glossary &amp; Technical Abbreviation Legend
                </h4>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '8px 16px',
                fontSize: '0.8rem',
                color: '#2E7D32'
              }}>
                <div><strong style={{ color: '#1B5E20' }}>BCNHL:</strong> Bogie Covered Number High-Capacity Length Wagon</div>
                <div><strong style={{ color: '#1B5E20' }}>BOXNHL:</strong> Bogie Open High Speed Stainless Heavy Load Wagon</div>
                <div><strong style={{ color: '#1B5E20' }}>BOBRN:</strong> Bogie Open Bottom Rapid Discharge Nitrogen Hopper</div>
                <div><strong style={{ color: '#1B5E20' }}>CASNUB:</strong> Cast Steel Heavy Freight Wagon Bogie</div>
                <div><strong style={{ color: '#1B5E20' }}>CMS Frog:</strong> Cast Manganese Steel (12-14% Mn) Crossing Frog</div>
                <div><strong style={{ color: '#1B5E20' }}>TWS:</strong> Thick Web Switch Point Tongue Rail</div>
                <div><strong style={{ color: '#1B5E20' }}>RDSO:</strong> Research Designs &amp; Standards Organisation</div>
                <div><strong style={{ color: '#1B5E20' }}>AAR:</strong> Association of American Railroads</div>
                <div><strong style={{ color: '#1B5E20' }}>AREMA:</strong> Amer. Railway Engineering &amp; Maint.-of-Way Assoc.</div>
                <div><strong style={{ color: '#1B5E20' }}>IRS:</strong> Indian Railway Standards</div>
                <div><strong style={{ color: '#1B5E20' }}>FRA:</strong> Federal Railroad Administration (USA)</div>
                <div><strong style={{ color: '#1B5E20' }}>APTA:</strong> American Public Transportation Association</div>
                <div><strong style={{ color: '#1B5E20' }}>5-Axis CNC:</strong> 5-Axis Computer Numerical Control Milling</div>
                <div><strong style={{ color: '#1B5E20' }}>CMM:</strong> Coordinate Measuring Machine 3D Inspection</div>
                <div><strong style={{ color: '#1B5E20' }}>BHN:</strong> Brinell Hardness Number</div>
                <div><strong style={{ color: '#1B5E20' }}>HPC:</strong> High Performance Concrete (M60 Grade)</div>
                <div><strong style={{ color: '#1B5E20' }}>UHSC:</strong> Ultra High Strength Concrete (M80 Grade)</div>
                <div><strong style={{ color: '#1B5E20' }}>SCC:</strong> Self-Compacting Concrete (650mm Flow)</div>
              </div>
            </div>
          )}

        </div>

        {/* ==================== VIEW 1: GRID CARDS VIEW ==================== */}
        {viewMode === 'grid' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredProducts.map(product => {
              const isCompared = comparedProductIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="card-hover-industrial"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 14px 28px rgba(27,94,32,0.1)';
                    e.currentTarget.style.borderColor = '#4CAF50';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  {/* Card Media Preview Header */}
                  <div
                    onClick={() => onOpenProductDetail && onOpenProductDetail(product)}
                    style={{ position: 'relative', height: '200px', background: '#0F2E14', overflow: 'hidden', borderBottom: '1px solid #E2E8F0', cursor: onOpenProductDetail ? 'pointer' : 'default' }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#F8FAFC', opacity: 1, transition: 'transform 0.4s ease' }}
                    />

                    {/* Top Series Badge */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', alignItems: 'center', zIndex: 2 }}>
                      <span style={{
                        background: '#1B5E20',
                        color: '#FFF',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '4px',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}>
                        {product.series}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '1.25rem 1.4rem 1.4rem 1.4rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

                    {/* Brand Tag */}
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                        WESTPOINT GROUP
                      </span>
                    </div>

                    {/* Compliance pills */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                      {product.compliance.slice(0, 2).map((comp, idx) => (
                        <span key={idx} style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0', fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                          {comp}
                        </span>
                      ))}
                      <span style={{ background: '#F8FAFC', color: '#475569', border: '1px solid #E2E8F0', fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: '4px' }}>
                        {product.axleLoad}
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3
                      onClick={() => onOpenProductDetail && onOpenProductDetail(product)}
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#111827',
                        margin: '0 0 8px 0',
                        lineHeight: 1.4,
                        letterSpacing: '-0.01em',
                        fontFamily: "'Manrope', sans-serif !important",
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '2.8em',
                        cursor: onOpenProductDetail ? 'pointer' : 'default'
                      }}
                      onMouseEnter={e => {
                        if (onOpenProductDetail) e.currentTarget.style.color = '#1B5E20';
                      }}
                      onMouseLeave={e => {
                        if (onOpenProductDetail) e.currentTarget.style.color = '#111827';
                      }}
                    >
                      {product.title}
                    </h3>

                    {/* Product Description */}
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#2E7D32',
                      lineHeight: 1.6,
                      margin: '0 0 10px 0',
                      flex: 1,
                      fontWeight: 500,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}>
                      {product.desc}
                    </p>

                    {/* Divider Line (Requested by User) */}
                    <div style={{ borderTop: '1px solid #E5E7EB', margin: '14px 0 14px 0' }} />

                    {/* Card Actions */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>

                      {/* Compare Checkbox Button */}
                      <button
                        onClick={() => toggleCompare(product.id)}
                        style={{
                          background: isCompared ? '#E8F5E9' : '#FFFFFF',
                          color: '#111827',
                          border: isCompared ? '1.5px solid #1B5E20' : '1.5px solid #94A3B8',
                          borderRadius: '8px',
                          padding: '9px 13px',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#F1F5F9';
                          e.currentTarget.style.borderColor = '#111827';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = isCompared ? '#E8F5E9' : '#FFFFFF';
                          e.currentTarget.style.borderColor = isCompared ? '#1B5E20' : '#94A3B8';
                        }}
                      >
                        <Check size={14} color={isCompared ? '#1B5E20' : '#111827'} strokeWidth={2.5} />
                        <span style={{ color: '#111827', fontWeight: 800 }}>{isCompared ? 'Compared' : 'Compare'}</span>
                      </button>

                      {/* See More Button -> Opens Product Detail Page */}
                      <button
                        onClick={() => {
                          if (onOpenProductDetail) {
                            onOpenProductDetail(product);
                          } else {
                            window.location.hash = '#contact';
                          }
                        }}
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
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                      >
                        <span>See More</span>
                        <ChevronRight size={15} />
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== VIEW 2: SPECIFICATIONS TABLE VIEW ==================== */}
        {viewMode === 'table' && (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: '#1B5E20', color: '#FFFFFF', textTransform: 'uppercase', fontSize: '0.775rem', letterSpacing: '0.05em' }}>
                    <th style={{ padding: '14px 16px' }}>Series &amp; Title</th>
                    <th style={{ padding: '14px 16px' }}>Category</th>
                    <th style={{ padding: '14px 16px' }}>Axle Load / Rating</th>
                    <th style={{ padding: '14px 16px' }}>Specification Standard</th>
                    <th style={{ padding: '14px 16px' }}>Material Grade</th>
                    <th style={{ padding: '14px 16px' }}>Tensile Strength</th>
                    <th style={{ padding: '14px 16px' }}>Ref Code</th>
                    <th style={{ padding: '14px 16px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p, idx) => (
                    <tr
                      key={p.id}
                      style={{ borderBottom: '1px solid #E2E8F0', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC', cursor: onOpenProductDetail ? 'pointer' : 'default' }}
                      onClick={() => onOpenProductDetail && onOpenProductDetail(p)}
                    >
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 800, color: '#1B5E20' }}>{p.title}</div>
                        <span style={{ fontSize: '0.75rem', color: '#1B5E20', fontWeight: 700 }}>{p.series}</span>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#4CAF50', fontWeight: 600 }}>
                        {p.categoryLabel}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: '#E0F2FE', color: '#0369A1', fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                          {p.axleLoad}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#2E7D32', fontWeight: 600 }}>
                        {p.specs}
                      </td>
                      <td style={{ padding: '14px 16px', color: '#4CAF50', fontWeight: 600 }}>
                        {p.materialGrade}
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: '#1B5E20' }}>
                        {p.tensileStrength}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <code style={{ background: '#F1F5F9', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                          {p.id.toUpperCase()}
                        </code>
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenProductDetail) {
                              onOpenProductDetail(p);
                            } else {
                              window.location.hash = '#contact';
                            }
                          }}
                          style={{
                            background: '#1B5E20',
                            color: '#FFF',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '0.775rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-block'
                          }}
                        >
                          See More
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==================== VIEW 3: PRODUCT COMPARISON MATRIX ==================== */}
        {viewMode === 'compare' && (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: 0 }}>
                  Side-by-Side Component Comparison Matrix
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#4CAF50' }}>
                  Comparing {comparedProducts.length} selected engineering components
                </span>
              </div>

              <button
                onClick={() => setComparedProductIds([])}
                style={{ background: '#F1F5F9', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 600, color: '#4CAF50', cursor: 'pointer' }}
              >
                Clear Comparison
              </button>
            </div>

            {comparedProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#4CAF50' }}>
                <Info size={40} color="#94A3B8" style={{ marginBottom: '1rem' }} />
                <p>No products selected for comparison. Switch to Grid view and click "Compare" on up to 3 products.</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '220px', padding: '12px', background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>Parameter</th>
                      {comparedProducts.map(p => (
                        <th key={p.id} style={{ padding: '12px', background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>
                          <div style={{ fontWeight: 800, color: '#1B5E20', fontSize: '1rem' }}>{p.title}</div>
                          <div style={{ color: '#1B5E20', fontSize: '0.8rem', fontWeight: 700 }}>{p.series}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Category</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 600 }}>{p.categoryLabel}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Axle Load Rating</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#0284C7', fontWeight: 700 }}>{p.axleLoad}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Standard Compliance</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20' }}>
                          {p.compliance.join(', ')}
                        </td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Material Metallurgy</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontSize: '0.825rem' }}>{p.materialGrade}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Tensile Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 800 }}>{p.tensileStrength}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Yield Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 700 }}>{p.yieldStrength}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Hardness Rating</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 700 }}>{p.hardness}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>RFQ Action</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px' }}>
                          <button
                            onClick={() => {
                              if (onRequestQuoteForProduct) onRequestQuoteForProduct(p.title);
                            }}
                            style={{
                              background: '#1B5E20',
                              color: '#FFF',
                              border: 'none',
                              borderRadius: '6px',
                              padding: '8px 14px',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Request Quote
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default InteractiveExplorer;
