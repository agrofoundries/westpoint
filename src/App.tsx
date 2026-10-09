import { useState, useEffect } from 'react';
import './index.css';
import { ChevronUp } from 'lucide-react';

import TopContactBar from './components/TopContactBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CompanyIntro from './components/CompanyIntro';
import FeaturedComponents from './components/FeaturedComponents';
import { EXPLORER_PRODUCTS } from './components/InteractiveExplorer';
import type { ProductItem } from './components/InteractiveExplorer';
import ProductShowcaseStrip from './components/ProductShowcaseStrip';
import RailwayTelemetryWidget from './components/RailwayTelemetryWidget';
import ManufacturingCapabilities from './components/ManufacturingCapabilities';
import ForgingCapabilitiesSection from './components/ForgingCapabilitiesSection';
import TotalLineupBanner from './components/TotalLineupBanner';
import SolidificationCalculator from './components/SolidificationCalculator';
import ManufacturingProcess from './components/ManufacturingProcess';
import IndustriesWeServe from './components/IndustriesWeServe';
import FactoryOverview from './components/FactoryOverview';
import EngineeringExcellence from './components/EngineeringExcellence';
import CorporateAdditionsSection from './components/CorporateAdditionsSection';
import AssociationsStandards from './components/AssociationsStandards';
import NewsInsights from './components/NewsInsights';
import CtaBanner from './components/CtaBanner';
import OfficeLocations from './components/OfficeLocations';
import Footer from './components/Footer';
import NewFrontiers from './components/NewFrontiers';
import RequestQuoteModal from './components/RequestQuoteModal';
import WatchVideoModal from './components/WatchVideoModal';
import ProductDetailPage from './components/ProductDetailPage';
import ProductCatalogPage from './components/ProductCatalogPage';
import CustomerPortalPage from './components/CustomerPortalPage';
import VendorPortalPage from './components/VendorPortalPage';
import GovernmentPortalPage from './components/GovernmentPortalPage';
export type PortalType = 'customer' | 'vendor' | 'government';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<ProductItem | null>(null);
  const [activePortalPage, setActivePortalPage] = useState<PortalType | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // SEO Friendly URL Routing & Dedicated Form Page Redirects
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.startsWith('/product/')) {
        setIsCatalogOpen(false);
        setActivePortalPage(null);
        const slug = path.replace('/product/', '');
        const product = EXPLORER_PRODUCTS.find(p => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);
        if (product) {
          setSelectedProductForDetail(product);
        } else {
          setSelectedProductForDetail(null);
        }
      } else if (path === '/products') {
        setSelectedProductForDetail(null);
        setActivePortalPage(null);
        setIsCatalogOpen(true);
      } else if (path === '/portal/customer') {
        setSelectedProductForDetail(null);
        setIsCatalogOpen(false);
        setActivePortalPage('customer');
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else if (path === '/portal/vendor') {
        setSelectedProductForDetail(null);
        setIsCatalogOpen(false);
        setActivePortalPage('vendor');
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else if (path === '/portal/government') {
        setSelectedProductForDetail(null);
        setIsCatalogOpen(false);
        setActivePortalPage('government');
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        setSelectedProductForDetail(null);
        setIsCatalogOpen(false);
        setActivePortalPage(null);
      }
    };

    handleLocationChange(); // Check on initial load
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = () => setIsQuoteModalOpen(true);
  const handleCloseQuote = () => setIsQuoteModalOpen(false);

  const handleOpenVideo = () => setIsVideoModalOpen(true);
  const handleCloseVideo = () => setIsVideoModalOpen(false);

  const handleOpenPortalModal = (type: PortalType = 'customer') => {
    window.history.pushState({}, '', `/portal/${type}`);
    setSelectedProductForDetail(null);
    setIsCatalogOpen(false);
    setActivePortalPage(type);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleBackToHome = () => {
    setActivePortalPage(null);
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleOpenCatalog = () => {
    setIsCatalogOpen(true);
    setSelectedProductForDetail(null);
    window.history.pushState({}, '', '/products');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleOpenProductDetail = (itemOrTitle: ProductItem | string) => {
    let match: ProductItem | null = null;
    if (typeof itemOrTitle === 'string') {
      const q = itemOrTitle.toLowerCase().trim();
      match = EXPLORER_PRODUCTS.find(p =>
        p.title.toLowerCase().includes(q) ||
        q.includes(p.title.toLowerCase()) ||
        p.series.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      ) || EXPLORER_PRODUCTS[0];
    } else {
      match = itemOrTitle;
    }
    
    if (match) {
      setSelectedProductForDetail(match);
      setIsCatalogOpen(false);
      const slug = match.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      window.history.pushState({}, '', `/product/${slug}`);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleCloseProductDetail = () => {
    setSelectedProductForDetail(null);
    if (isCatalogOpen) {
      window.history.pushState({}, '', '/products');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', color: '#1B5E20' }}>

      {/* Top Scroll Reading Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 01 Top Contact Bar */}
      <TopContactBar />


      {/* 02 Main Navigation & 03 Mega Menu */}
      <Header
        onRequestQuoteClick={handleOpenQuote}
        onOpenExplorer={handleOpenCatalog}
        onOpenPortalModal={handleOpenPortalModal}
      />

      {selectedProductForDetail ? (
        <ProductDetailPage
          isOpen={true}
          product={selectedProductForDetail}
          onClose={handleCloseProductDetail}
          onRequestQuoteForProduct={(_title) => {
            handleCloseProductDetail();
            setIsQuoteModalOpen(true);
          }}
          onSelectProduct={handleOpenProductDetail}
        />
      ) : isCatalogOpen ? (
        <ProductCatalogPage 
          onSelectProduct={handleOpenProductDetail}
        />
      ) : activePortalPage === 'customer' ? (
        <CustomerPortalPage onBackToHome={handleBackToHome} />
      ) : activePortalPage === 'vendor' ? (
        <VendorPortalPage onBackToHome={handleBackToHome} />
      ) : activePortalPage === 'government' ? (
        <GovernmentPortalPage onBackToHome={handleBackToHome} />
      ) : (
        <main id="main-content">
        {/* 04 Full Screen Hero Section with Embedded OUR TRAVELS Card */}
        <HeroSection
          onExploreClick={handleOpenCatalog}
          onRequestQuoteClick={handleOpenQuote}
          onWatchVideoClick={handleOpenVideo}
        />

        {/* 04B Dedicated Group Divisions & Total Lineup Banner Section */}
        <TotalLineupBanner />

        {/* 05 Company Introduction (Text Heavy - Disabled) */}
        <CompanyIntro />

        {/* 06 Featured Rail Components (All Products) */}
        <FeaturedComponents onOpenProductDetail={handleOpenProductDetail} onOpenCatalog={handleOpenCatalog} />

        {/* 06B Interactive Engineering & Product Spec Explorer */}
        {/* <InteractiveExplorer
          onRequestQuoteForProduct={() => setIsQuoteModalOpen(true)}
          onOpenProductDetail={handleOpenProductDetail}
        /> */}

        {/* 08 Live Interactive Railway Telemetry & Speed Monitor */}
        <RailwayTelemetryWidget />

        {/* 09 Manufacturing Capabilities */}
        <ManufacturingCapabilities />

        {/* 09B Forging Capabilities Section (Hammer, Ring Rolling, Cold/Warm Forging, Axle Shaft) */}
        <ForgingCapabilitiesSection />

        {/* 10 Solidification & Metallurgy Calculator - Hidden per user request */}
        <SolidificationCalculator />

        {/* 11 Manufacturing Process Timeline */}
        <ManufacturingProcess />

        {/* 12 Railway Sectors We Serve */}
        <IndustriesWeServe />

        {/* 13 Factory Section with Stats Overlay (Highly Graphical) */}
        <FactoryOverview />

        {/* Our New Frontiers & Catalog Mockup */}
        <NewFrontiers />

        {/* 14 Engineering Excellence */}
        <EngineeringExcellence />

        {/* 14B Corporate Additions, Brands & Global Directory (Canva Slides 6, 30 & 3) */}
        <CorporateAdditionsSection />

        {/* 15 International Standards & Wheelsets Showcase */}
        {/* <StandardsGrid /> */}

        {/* 16 In-House Testing Facilities */}
        {/* <TestingFacilities /> */}



        {/* 18 Company Trust & Official Certifications */}
        {/* <TrustCertificationSection /> */}

        {/* 19 News & Insights */}
        <NewsInsights />

        {/* 20 CTA Banner */}
        <CtaBanner onRequestQuoteClick={handleOpenQuote} />

        {/* 21 Critical Rail & Industrial Components (Moved to last section) */}
        <ProductShowcaseStrip onOpenProductDetail={handleOpenProductDetail} onOpenCatalog={handleOpenCatalog} />
      </main>
      )}

      {/* Unified Associations & Standards Section */}
      <AssociationsStandards />

      {/* 22 Strategic Office Locations */}
      <OfficeLocations />

      {/* 20 Corporate Mega Footer & Bottom Footer */}
      <Footer />

      {/* Interactive Modals */}

      <RequestQuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
      <WatchVideoModal isOpen={isVideoModalOpen} onClose={handleCloseVideo} />

      {/* Floating Action Buttons */}
      <div className="floating-action-btn">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#1B5E20',
              color: '#FFFFFF',
              border: '2px solid #4CAF50',
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#4CAF50';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#1B5E20';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <ChevronUp size={22} />
          </button>
        )}
      </div>

    </div>
  );
}

export default App;
