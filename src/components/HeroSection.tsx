// Hero Section with Embedded OUR TRAVELS Card (Clean & Responsive)
import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle, ShieldCheck, Zap, TrainTrack,
  ChevronLeft, ChevronRight, Play, Pause, Layers, Building2, Rocket
} from 'lucide-react';
import gsap from 'gsap';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onRequestQuoteClick?: () => void;
  onWatchVideoClick?: () => void;
}

// Unified Slide Data merging main hero message & OUR TRAVELS step into ONE Single Slider
const slidesData = [
  {
    id: 1,
    stepNum: '01',
    tag: '01 FOUNDRIES & TRANSIT',
    eyebrow: 'Heavy-Duty Rail Manufacturing',
    headline: 'Our Foundries keeping the rails going......',
    phaseTitle: 'RAIL & TRANSIT MOBILITY',
    icon: TrainTrack,
    travelText: (
      <>
        First we started with putting rails from
        <br />
        motion to speed....
      </>
    )
  },
  {
    id: 2,
    stepNum: '02',
    tag: '02 INFRASTRUCTURE CASTINGS',
    eyebrow: 'Ground-Up Construction & Infrastructure',
    headline: 'Building Infrastructure from Ground Up......',
    phaseTitle: 'INFRASTRUCTURE CASTINGS',
    icon: Building2,
    travelText: (
      <>
        Next we dipped into infrastructure
        <br />
        building ground up with Construction
        <br />
        Castings....Manhole,Valves,pumps,
        <br />
        hydrants and the works....
      </>
    )
  },
  {
    id: 3,
    stepNum: '03',
    tag: '03 SOLAR, WIND & AEROSPACE',
    eyebrow: 'Next-Gen Energy & Aviation Forgings',
    headline: 'Aspiring to cover the Universe with Solar, Wind & Aero',
    phaseTitle: 'SOLAR, WIND & AEROSPACE',
    icon: Rocket,
    travelText: (
      <>
        looking forward in the skies to contribute
        <br />
        our expertise...solar.wind &amp; Aero
        <br />
        Castings/<span style={{ color: '#8B0000', fontWeight: 900 }}>forgings</span>/fabrication
      </>
    )
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onRequestQuoteClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const travelTextRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  // Synchronized GSAP Animations for unified slider
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
      );
    }
    if (travelTextRef.current) {
      gsap.fromTo(
        travelTextRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [currentSlide]);

  // Unified Auto-play timer for single slider
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const slide = slidesData[currentSlide];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        color: '#FFFFFF'
      }}
    >
      {/* Background Media - Continuous video snippet */}
      <div ref={bgRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          src="/videos/20191217_Snippet_01_16by9.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Dark Vignette Overlay for Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 75% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 80%), linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 60%, rgba(0, 0, 0, 0.5) 100%)'
          }}
        />
      </div>

      <div
        className="container-custom"
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
          paddingTop: '1rem',
          paddingBottom: '0.75rem'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {/* LEFT COLUMN: Main Hero Content & Action Buttons */}
          <div ref={textRef} style={{ textAlign: 'left' }}>

            {/* Westpoint Foundry & Engineering Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(27, 94, 32, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(129, 199, 132, 0.5)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              marginBottom: '0.6rem'
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#69F0AE',
                boxShadow: '0 0 8px #69F0AE'
              }} />
              <span style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#E8F5E9',
                fontFamily: "'Manrope', sans-serif !important"
              }}>
                Foundry Associations &amp; Engineering on Westpoint
              </span>
            </div>

            {/* Eyebrow Label */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', marginBottom: '0.6rem', letterSpacing: '0.1em' }}>
              <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#4CAF50' }} />
              <span style={{ color: '#A5D6A7', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                {slide.tag} &bull; {slide.eyebrow}
              </span>
            </div>

            {/* Headline - BOLDER & SPACIOUS FONT */}
            <h1
              style={{
                fontSize: 'clamp(1.65rem, 2.35vw, 2.3rem)',
                fontWeight: 900,
                lineHeight: 1.25,
                color: '#FFFFFF',
                letterSpacing: '-0.01em',
                margin: '0 0 0.85rem 0',
                textTransform: 'uppercase',
                fontFamily: "'Manrope', sans-serif !important",
                textShadow: '0 4px 14px rgba(0,0,0,0.5)'
              }}
            >
              {slide.headline}
            </h1>

            {/* Signature Official Corporate Tagline Callout */}
            <div
              style={{
                margin: '0 0 1rem 0',
                padding: '10px 16px',
                background: 'linear-gradient(135deg, rgba(27, 94, 32, 0.85) 0%, rgba(15, 51, 20, 0.95) 100%)',
                borderLeft: '4px solid #FFD54F',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0 8px 8px 0',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                maxWidth: '100%'
              }}
            >
              <span style={{
                color: '#FFD54F',
                fontSize: '1.1rem',
                lineHeight: 1,
                fontFamily: 'serif',
                fontWeight: 900,
                userSelect: 'none'
              }}>
                &#10077;
              </span>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif !important",
                  fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                  fontWeight: 800,
                  fontStyle: 'italic',
                  color: '#FFF9C4',
                  letterSpacing: '0.02em',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                }}
              >
                Making you on the move non stop......courtesy Westpoint
              </span>
              <span style={{
                color: '#FFD54F',
                fontSize: '1.1rem',
                lineHeight: 1,
                fontFamily: 'serif',
                fontWeight: 900,
                userSelect: 'none'
              }}>
                &#10078;
              </span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.15rem' }}>
              <button
                onClick={onExploreClick}
                style={{
                  padding: '12px 24px',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '4px',
                  fontFamily: "'Manrope', sans-serif !important",
                  background: '#4CAF50',
                  color: '#ffffff',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(76, 175, 80, 0.35)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.35)'; }}
              >
                <Layers size={16} />
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={onRequestQuoteClick}
                style={{
                  padding: '12px 24px',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Manrope', sans-serif !important"
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span>REQUEST QUOTE</span>
              </button>
            </div>

            {/* Slider Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1.15rem' }}>
              <button
                onClick={goToPrevSlide}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backdropFilter: 'blur(4px)'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4CAF50'; e.currentTarget.style.borderColor = '#4CAF50'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; }}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>

              <div style={{ display: 'flex', gap: '9px', alignItems: 'center' }}>
                {slidesData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      width: currentSlide === idx ? '26px' : '9px',
                      height: '9px',
                      borderRadius: '4.5px',
                      background: currentSlide === idx ? '#4CAF50' : 'rgba(255, 255, 255, 0.4)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: currentSlide === idx ? '0 0 10px rgba(76, 175, 80, 0.5)' : 'none'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNextSlide}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backdropFilter: 'blur(4px)'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4CAF50'; e.currentTarget.style.borderColor = '#4CAF50'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; }}
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  marginLeft: '0.25rem',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                aria-label={isPlaying ? 'Pause Auto Play' : 'Start Auto Play'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          </div>

          {/* VERTICAL DIVIDER LINE (Between left hero block & right OUR TRAVELS column) */}
          <div
            className="hero-divider-line"
            style={{
              width: '2px',
              height: '320px',
              background: 'linear-gradient(180deg, rgba(76, 175, 80, 0) 0%, rgba(76, 175, 80, 0.75) 25%, rgba(129, 199, 132, 0.85) 50%, rgba(76, 175, 80, 0.75) 75%, rgba(76, 175, 80, 0) 100%)',
              boxShadow: '0 0 12px rgba(76, 175, 80, 0.5)',
              borderRadius: '2px'
            }}
          />

          {/* RIGHT COLUMN: MATCHING SYMMETRICAL DARK-THEME SHOWCASE */}
          <div
            ref={cardRef}
            style={{
              position: 'relative',
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0.5rem'
            }}
          >
            {/* Matching Pill Badge on Right Side */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(27, 94, 32, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(129, 199, 132, 0.5)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              marginBottom: '0.6rem'
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#69F0AE',
                boxShadow: '0 0 8px #69F0AE'
              }} />
              <span style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#E8F5E9',
                fontFamily: "'Manrope', sans-serif !important"
              }}>
                CORPORATE MILESTONES &amp; JOURNEY
              </span>
            </div>

            {/* Matching Eyebrow Label */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '0.6rem', letterSpacing: '0.1em' }}>
              <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#4CAF50' }} />
              <span style={{ color: '#A5D6A7', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                01 WESTPOINT CHRONICLES &bull; EST. 1991
              </span>
              <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#4CAF50' }} />
            </div>

            {/* Headline matching left side font size scale */}
            <h2
              style={{
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: 'clamp(1.65rem, 2.35vw, 2.3rem)',
                letterSpacing: '0.02em',
                margin: '0 0 0.85rem 0',
                textTransform: 'uppercase',
                fontFamily: "'Manrope', sans-serif !important",
                lineHeight: 1.25,
                textShadow: '0 4px 14px rgba(0,0,0,0.5)'
              }}
            >
              OUR TRAVELS SINCE 1991
            </h2>

            {/* Timeline Stepper with 3 Circular Nodes */}
            <div style={{ width: '100%', maxWidth: '420px', position: 'relative', marginBottom: '1rem', padding: '0 0.5rem' }}>
              {/* Connecting Lines behind nodes */}
              <div
                style={{
                  position: 'absolute',
                  top: '19px',
                  left: '18%',
                  right: '18%',
                  height: '2.5px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  zIndex: 0
                }}
              >
                {/* Active green progress line fill */}
                <div
                  style={{
                    height: '100%',
                    width: currentSlide === 0 ? '0%' : currentSlide === 1 ? '50%' : '100%',
                    background: '#4CAF50',
                    boxShadow: '0 0 10px #4CAF50',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>

              {/* 3 Step Nodes */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                {slidesData.map((item, idx) => {
                  const isSelected = currentSlide === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentSlide(idx)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          background: isSelected ? '#4CAF50' : 'rgba(0, 0, 0, 0.75)',
                          color: '#FFFFFF',
                          border: `2px solid ${isSelected ? '#69F0AE' : 'rgba(255, 255, 255, 0.35)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '13px',
                          fontWeight: 900,
                          transition: 'all 0.3s ease',
                          backdropFilter: 'blur(6px)',
                          boxShadow: isSelected ? '0 0 16px rgba(76, 175, 80, 0.6)' : 'none'
                        }}
                      >
                        {item.stepNum}
                      </div>

                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: isSelected ? 800 : 600,
                          color: isSelected ? '#69F0AE' : 'rgba(255, 255, 255, 0.7)',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                      >
                        Phase {item.stepNum}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle Slide Paragraph Callout Box - BIGGER FONT & SPACIOUS LINE HEIGHT */}
            <div
              style={{
                width: '100%',
                maxWidth: '480px',
                margin: '0.5rem 0 0.85rem 0',
                padding: '12px 18px',
                background: 'linear-gradient(135deg, rgba(27, 94, 32, 0.85) 0%, rgba(15, 51, 20, 0.95) 100%)',
                borderLeft: '4px solid #69F0AE',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0 8px 8px 0',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.35)'
              }}
            >
              <div
                ref={travelTextRef}
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(1.1rem, 1.45vw, 1.3rem)',
                  fontWeight: 800,
                  lineHeight: 1.6,
                  fontFamily: "'Manrope', sans-serif !important",
                  textAlign: 'center',
                  letterSpacing: '0.01em',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)'
                }}
              >
                {slide.travelText}
              </div>
            </div>

            {/* Brand Title: WESTPOINT GROUP (Glowing Header) */}
            <div
              style={{
                color: '#81C784',
                fontWeight: 900,
                fontSize: 'clamp(1.35rem, 1.8vw, 1.65rem)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                fontFamily: "'Manrope', sans-serif !important",
                textShadow: '0 2px 12px rgba(0,0,0,0.6)'
              }}
            >
              WESTPOINT GROUP
            </div>

          </div>
        </div>
      </div>

      {/* Embedded 4-Metric Technical Bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'rgba(15, 51, 20, 0.88)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '0.85rem 0',
        }}
      >
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            alignItems: 'center'
          }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(76, 175, 80, 0.2)', padding: '8px', borderRadius: '50%' }}>
                <TrainTrack size={18} color="#81C784" />
              </div>
              <div>
                <strong style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', display: 'block', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>WESTPOINT FOUNDRY ASSOCIATIONS</strong>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Associations &amp; Heavy Rail Engineering</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(76, 175, 80, 0.2)', padding: '8px', borderRadius: '50%' }}>
                <ShieldCheck size={18} color="#81C784" />
              </div>
              <div>
                <strong style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', display: 'block', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>36-TON CAPACITY</strong>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Built for heavy freight loads</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(76, 175, 80, 0.2)', padding: '8px', borderRadius: '50%' }}>
                <Zap size={18} color="#81C784" />
              </div>
              <div>
                <strong style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', display: 'block', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>HIGH PRECISION</strong>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Made with robotic machining</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(76, 175, 80, 0.2)', padding: '8px', borderRadius: '50%' }}>
                <CheckCircle size={18} color="#81C784" />
              </div>
              <div>
                <strong style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', display: 'block', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>100% QUALITY TESTED</strong>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Scanned for any flaws</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
