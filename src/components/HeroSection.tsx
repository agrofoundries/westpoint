import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, TrainTrack, ChevronLeft, ChevronRight, Play, Pause, Layers } from 'lucide-react';
import gsap from 'gsap';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onRequestQuoteClick?: () => void;
  onWatchVideoClick?: () => void;
}

const slidesData = [
  {
    id: 1,
    tag: '01 FOUNDRIES & TRANSIT',
    eyebrow: 'Heavy-Duty Rail Manufacturing',
    headline: 'Our Foundries keeping the rails going......',
    mediaType: 'video',
    mediaSrc: '/videos/20191217_Snippet_01_16by9.mp4',
  },
  {
    id: 2,
    tag: '02 TRANSIT INNOVATION',
    eyebrow: 'Next-Generation Rail Technology',
    headline: 'Railing into the future....',
    mediaType: 'video',
    mediaSrc: '/videos/20191217_Snippet_01_16by9.mp4',
  },
  {
    id: 3,
    tag: '03 METALLURGICAL ALLIANCES',
    eyebrow: 'Westpoint Global Network',
    headline: 'Foundry associations n engineering on Westpoint',
    mediaType: 'video',
    mediaSrc: '/videos/20191217_Snippet_01_16by9.mp4',
  },
  {
    id: 4,
    tag: '04 CONTINUOUS MOBILITY',
    eyebrow: 'Non-Stop Infrastructure',
    headline: 'Making you on the move non stop......courtesy Westpoint',
    mediaType: 'video',
    mediaSrc: '/videos/20191217_Snippet_01_16by9.mp4',
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onRequestQuoteClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  // GSAP Animation Trigger on Slide Change
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [currentSlide]);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      goToNextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const slide = slidesData[currentSlide];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        color: '#FFFFFF'
      }}
    >
      {/* Background Media - Consistent continuous video across all slides */}
      <div ref={bgRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          src="/videos/20191217_Snippet_01_16by9.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Dark Overlay for Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.35) 100%)'
          }}
        />
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '4.5rem', paddingBottom: '2.5rem' }}>
        <div ref={textRef} style={{ maxWidth: '850px', textAlign: 'left', marginLeft: '3%' }}>

          {/* Westpoint Foundry & Engineering Pill Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '7px 18px',
            borderRadius: '9999px',
            background: 'rgba(27, 94, 32, 0.75)',
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
            <span style={{ color: '#A5D6A7', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase' }}>
              {slide.tag} &bull; {slide.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 4.6vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.12,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              margin: '0 0 1.5rem 0',
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
              margin: '0 0 2rem 0',
              padding: '12px 22px',
              background: 'linear-gradient(135deg, rgba(27, 94, 32, 0.8) 0%, rgba(15, 51, 20, 0.9) 100%)',
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
              fontSize: '1.3rem',
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
                fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
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
              fontSize: '1.3rem',
              lineHeight: 1,
              fontFamily: 'serif',
              fontWeight: 900,
              userSelect: 'none'
            }}>
              &#10078;
            </span>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <button
              onClick={onExploreClick}
              style={{
                padding: '16px 32px',
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
                padding: '16px 32px',
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

          {/* Simple Slider Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1.5rem' }}>
            <button
              onClick={goToPrevSlide}
              style={{
                width: '44px',
                height: '44px',
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
            >
              <ChevronLeft size={24} />
            </button>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {slidesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? '32px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
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
                width: '44px',
                height: '44px',
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
            >
              <ChevronRight size={24} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                marginLeft: '1rem',
                width: '44px',
                height: '44px',
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
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Embedded 4-Metric Technical Bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'rgba(15, 51, 20, 0.7)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
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


