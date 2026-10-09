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
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
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
          paddingTop: '3.5rem',
          paddingBottom: '2.5rem'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* LEFT COLUMN: Main Hero Content & Action Buttons */}
          <div ref={textRef} style={{ textAlign: 'left' }}>

            {/* Westpoint Foundry & Engineering Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '7px 18px',
              borderRadius: '9999px',
              background: 'rgba(27, 94, 32, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(129, 199, 132, 0.5)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              marginBottom: '1.25rem'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#69F0AE',
                boxShadow: '0 0 10px #69F0AE'
              }} />
              <span style={{
                fontSize: '11.5px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#E8F5E9',
                fontFamily: "'Manrope', sans-serif !important"
              }}>
                Foundry Associations &amp; Engineering on Westpoint
              </span>
            </div>

            {/* Eyebrow Label */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', marginBottom: '1rem', letterSpacing: '0.15em' }}>
              <span style={{ display: 'inline-block', width: '36px', height: '2px', background: '#4CAF50' }} />
              <span style={{ color: '#A5D6A7', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                {slide.tag} &bull; {slide.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                margin: '0 0 1.25rem 0',
                textTransform: 'uppercase',
                fontFamily: "'Manrope', sans-serif !important",
                textShadow: '0 4px 14px rgba(0,0,0,0.45)'
              }}
            >
              {slide.headline}
            </h1>

            {/* Signature Official Corporate Tagline Callout */}
            <div
              style={{
                margin: '0 0 1.75rem 0',
                padding: '12px 20px',
                background: 'linear-gradient(135deg, rgba(27, 94, 32, 0.85) 0%, rgba(15, 51, 20, 0.95) 100%)',
                borderLeft: '4px solid #FFD54F',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0 8px 8px 0',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                maxWidth: '100%'
              }}
            >
              <span style={{
                color: '#FFD54F',
                fontSize: '1.2rem',
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
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
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
                fontSize: '1.2rem',
                lineHeight: 1,
                fontFamily: 'serif',
                fontWeight: 900,
                userSelect: 'none'
              }}>
                &#10078;
              </span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button
                onClick={onExploreClick}
                style={{
                  padding: '15px 30px',
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '4px',
                  fontFamily: "'Manrope', sans-serif !important",
                  background: '#4CAF50',
                  color: '#ffffff',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)'; }}
              >
                <Layers size={18} />
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onRequestQuoteClick}
                style={{
                  padding: '15px 30px',
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1.25rem' }}>
              <button
                onClick={goToPrevSlide}
                style={{
                  width: '40px',
                  height: '40px',
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
                <ChevronLeft size={22} />
              </button>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {slidesData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      width: currentSlide === idx ? '28px' : '10px',
                      height: '10px',
                      borderRadius: '5px',
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
                  width: '40px',
                  height: '40px',
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
                <ChevronRight size={22} />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  marginLeft: '0.5rem',
                  width: '40px',
                  height: '40px',
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

          {/* RIGHT COLUMN: WIDER CARD WITH BOLD & LARGER DESCRIPTION FONT */}
          <div
            ref={cardRef}
            style={{
              position: 'relative',
              maxWidth: '480px',
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              background: 'radial-gradient(ellipse 140% 45% at 50% 105%, #F1F5F9 0%, #FFFFFF 70%)',
              borderRadius: '22px',
              padding: '1.5rem 1.6rem 1.4rem 1.6rem',
              boxShadow: '0 25px 65px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.95)',
              border: '2px solid rgba(255, 255, 255, 0.95)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
              overflow: 'hidden'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
              e.currentTarget.style.boxShadow = '0 32px 75px rgba(0, 0, 0, 0.7)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 25px 65px rgba(0, 0, 0, 0.6)';
            }}
          >
            {/* Header: OUR TRAVELS with short double underline bar */}
            <div style={{ width: '100%', marginBottom: '0.85rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
              <h3
                style={{
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: 'clamp(1.9rem, 2.4vw, 2.2rem)',
                  letterSpacing: '0.06em',
                  margin: '0 0 0.15rem 0',
                  textTransform: 'uppercase',
                  fontFamily: "'Manrope', sans-serif !important",
                  lineHeight: 1
                }}
              >
                OUR TRAVELS
              </h3>
              <div style={{ width: '38px', height: '3px', background: '#000000', borderRadius: '2px' }} />
              <div style={{ width: '14px', height: '2px', background: '#000000', borderRadius: '1px' }} />
            </div>

            {/* Timeline Stepper with 3 Circular Nodes */}
            <div style={{ width: '100%', position: 'relative', marginBottom: '0.85rem', padding: '0 0.75rem' }}>
              {/* Connecting Lines behind nodes */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '18%',
                  right: '18%',
                  height: '2.5px',
                  background: '#CBD5E1',
                  zIndex: 0
                }}
              >
                {/* Active dark progress line fill */}
                <div
                  style={{
                    height: '100%',
                    width: currentSlide === 0 ? '0%' : currentSlide === 1 ? '50%' : '100%',
                    background: '#000000',
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
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: isSelected ? '#000000' : '#FFFFFF',
                          color: isSelected ? '#FFFFFF' : '#475569',
                          border: `2px solid ${isSelected ? '#000000' : '#CBD5E1'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12.5px',
                          fontWeight: 800,
                          transition: 'all 0.3s ease',
                          boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.25)' : '0 1px 4px rgba(0,0,0,0.05)'
                        }}
                      >
                        {item.stepNum}
                      </div>

                      {/* Small Bullet Dot */}
                      <div
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#475569',
                          opacity: isSelected ? 1 : 0.4,
                          marginTop: '1px'
                        }}
                      />

                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: isSelected ? 800 : 600,
                          color: isSelected ? '#000000' : '#64748B',
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

            {/* Middle Slide Paragraph Text - BOLDER AND BIGGER FONT */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                minHeight: '95px',
                margin: '0.3rem 0'
              }}
            >
              <div
                ref={travelTextRef}
                style={{
                  color: '#000000',
                  fontSize: 'clamp(1.15rem, 1.6vw, 1.4rem)',
                  fontWeight: 800,
                  lineHeight: 1.45,
                  fontFamily: "'Manrope', sans-serif !important",
                  textAlign: 'center',
                  padding: '0 0.5rem'
                }}
              >
                {slide.travelText}
              </div>
            </div>

            {/* Divider 1 with 3-bar audio pulse symbol */}
            <div style={{ display: 'flex', alignItems: 'center', width: '85%', margin: '0.45rem auto', gap: '12px' }}>
              <div style={{ flex: 1, height: '1px', background: '#94A3B8', opacity: 0.5 }} />
              <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                <span style={{ width: '3px', height: '9px', background: '#334155', borderRadius: '1.5px' }} />
                <span style={{ width: '3px', height: '14px', background: '#0F172A', borderRadius: '1.5px' }} />
                <span style={{ width: '3px', height: '9px', background: '#334155', borderRadius: '1.5px' }} />
              </div>
              <div style={{ flex: 1, height: '1px', background: '#94A3B8', opacity: 0.5 }} />
            </div>

            {/* Tagline: ASPIRING TO COVER THE UNIVERSE */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div
                style={{
                  color: '#1E293B',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  letterSpacing: '0.11em',
                  textTransform: 'uppercase',
                  fontFamily: "'Manrope', sans-serif !important"
                }}
              >
                ASPIRING TO COVER THE
              </div>

              <div
                style={{
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: '1.55rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  fontFamily: "'Manrope', sans-serif !important"
                }}
              >
                UNIVERSE
              </div>
            </div>

            {/* Divider 2 with 3-bar audio pulse symbol */}
            <div style={{ display: 'flex', alignItems: 'center', width: '85%', margin: '0.45rem auto', gap: '12px' }}>
              <div style={{ flex: 1, height: '1px', background: '#94A3B8', opacity: 0.5 }} />
              <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                <span style={{ width: '3px', height: '9px', background: '#334155', borderRadius: '1.5px' }} />
                <span style={{ width: '3px', height: '14px', background: '#0F172A', borderRadius: '1.5px' }} />
                <span style={{ width: '3px', height: '9px', background: '#334155', borderRadius: '1.5px' }} />
              </div>
              <div style={{ flex: 1, height: '1px', background: '#94A3B8', opacity: 0.5 }} />
            </div>

            {/* Brand Title: WESTPOINT GROUP (Smaller & Compact) */}
            <div
              style={{
                color: '#006837',
                fontWeight: 900,
                fontSize: '1.35rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                lineHeight: 1.1,
                fontFamily: "'Manrope', sans-serif !important"
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
          background: 'rgba(15, 51, 20, 0.85)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '1.5rem 0',
        }}
      >
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(76, 175, 80, 0.2)', padding: '10px', borderRadius: '50%' }}>
                <TrainTrack size={22} color="#81C784" />
              </div>
              <div>
                <strong style={{ fontSize: '12px', fontWeight: 900, color: '#FFFFFF', display: 'block', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>WESTPOINT FOUNDRY ASSOCIATIONS</strong>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Associations &amp; Heavy Rail Engineering</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(76, 175, 80, 0.2)', padding: '10px', borderRadius: '50%' }}>
                <ShieldCheck size={22} color="#81C784" />
              </div>
              <div>
                <strong style={{ fontSize: '12px', fontWeight: 900, color: '#FFFFFF', display: 'block', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>36-TON CAPACITY</strong>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Built for heavy freight loads</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(76, 175, 80, 0.2)', padding: '10px', borderRadius: '50%' }}>
                <Zap size={22} color="#81C784" />
              </div>
              <div>
                <strong style={{ fontSize: '12px', fontWeight: 900, color: '#FFFFFF', display: 'block', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>HIGH PRECISION</strong>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Made with robotic machining</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(76, 175, 80, 0.2)', padding: '10px', borderRadius: '50%' }}>
                <CheckCircle size={22} color="#81C784" />
              </div>
              <div>
                <strong style={{ fontSize: '12px', fontWeight: 900, color: '#FFFFFF', display: 'block', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>100% QUALITY TESTED</strong>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Scanned for any flaws</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
