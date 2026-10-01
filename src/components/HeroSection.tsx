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
    tag: '01 TRAIN PARTS',
    eyebrow: 'Building the future of transit',
    headline: 'Our Foundries keeping the rails going ...',
    desc: 'We make heavy-duty steel parts for trains and subways. From axles to track switches, we build the strong metal pieces that keep North American rail lines moving safely.',
    mediaType: 'video',
    mediaSrc: '/videos/20191217_Snippet_01_16by9.mp4',
  },
  {
    id: 2,
    tag: '02 INNOVATION',
    eyebrow: 'Better transit technology',
    headline: 'Railing into the future ...',
    desc: 'We use advanced materials and modern manufacturing to build rail parts that last longer and keep everyone safe.',
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
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { opacity: 0.8, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
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
      {/* Background Media */}
      <div ref={bgRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {slide.mediaType === 'video' ? (
          <video
            key={slide.mediaSrc}
            src={slide.mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <img
            key={slide.mediaSrc}
            src={slide.mediaSrc}
            alt={slide.headline}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
        {/* Dark Overlay for Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.4)'
          }}
        />
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div ref={textRef} style={{ maxWidth: '650px', textAlign: 'left', marginLeft: '5%' }}>

          {/* Eyebrow Label */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '2px', background: '#4CAF50' }} />
            <span style={{ color: '#A5D6A7', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase' }}>{slide.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              margin: '0 0 1.5rem 0',
              textTransform: 'uppercase',
              fontFamily: "'Manrope', sans-serif !important",
              textShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            {slide.headline}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.6,
              margin: '0 0 2.5rem 0',
              fontWeight: 500,
              fontFamily: "'Manrope', sans-serif !important",
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {slide.desc}
          </p>

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
                <strong style={{ fontSize: '12px', fontWeight: 900, color: '#FFFFFF', display: 'block', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>NORTH AMERICAN FOUNDRY</strong>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Leader in heavy rail manufacturing</span>
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


