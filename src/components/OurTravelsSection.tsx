import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const travelsSlides = [
  {
    id: 0,
    color: '#2E7D32',
    text: (
      <>
        First we started with putting rails from
        <br />
        motion to speed....
      </>
    )
  },
  {
    id: 1,
    color: '#8B0000',
    text: (
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
    id: 2,
    color: '#2E7D32',
    text: (
      <>
        looking forward in the skies to contribute
        <br />
        our expertise...solar.wind &amp; Aero
        <br />
        Castings/<span style={{ color: '#8B0000', fontWeight: 800 }}>forgings</span>/fabrication
      </>
    )
  }
];

export const OurTravelsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideTextRef = useRef<HTMLDivElement>(null);

  // Auto-slide step-by-step timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % travelsSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Smooth fade-in on slide change
  useEffect(() => {
    if (slideTextRef.current) {
      gsap.fromTo(
        slideTextRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeSlide]);

  const current = travelsSlides[activeSlide];

  return (
    <section
      style={{
        padding: '3rem 0',
        background: '#F8F9FA',
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      <div className="container-custom" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        {/* Clean, Simple & Pristine Square Card */}
        <div
          style={{
            maxWidth: '430px',
            width: '100%',
            aspectRatio: '1 / 1',
            background: '#FFFFFF',
            borderRadius: '2px',
            padding: '2.2rem 1.8rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            border: '1px solid #E5E7EB',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {/* Header: OUR TRAVELS */}
          <h3
            style={{
              color: '#8B0000',
              fontWeight: 900,
              fontSize: '1.45rem',
              letterSpacing: '0.08em',
              margin: '0',
              textTransform: 'uppercase',
              fontFamily: "'Manrope', sans-serif !important",
              lineHeight: 1
            }}
          >
            OUR TRAVELS
          </h3>

          {/* Middle: Step-by-Step Text Slider */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              minHeight: '130px',
              margin: 'auto 0'
            }}
          >
            <div
              ref={slideTextRef}
              style={{
                color: current.color,
                fontStyle: 'italic',
                fontSize: '1.05rem',
                fontWeight: 600,
                lineHeight: 1.5,
                fontFamily: "'Manrope', sans-serif !important",
                textAlign: 'center'
              }}
            >
              {current.text}
            </div>

            {/* Simple Step Dots & Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '1rem' }}>
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + travelsSlides.length) % travelsSlides.length)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#9CA3AF',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-label="Previous step"
              >
                <ChevronLeft size={16} />
              </button>

              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {travelsSlides.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSlide(idx)}
                    style={{
                      width: activeSlide === idx ? '18px' : '7px',
                      height: '7px',
                      borderRadius: '4px',
                      background: activeSlide === idx ? (idx === 1 ? '#8B0000' : '#2E7D32') : '#D1D5DB',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % travelsSlides.length)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#9CA3AF',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-label="Next step"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Bottom Tagline & Brand */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div
              style={{
                color: '#8B0000',
                fontWeight: 900,
                fontSize: '1rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: "'Manrope', sans-serif !important"
              }}
            >
              ASPIRING TO COVER THE UNIVERSE
            </div>

            <div
              style={{
                color: '#1B5E20',
                fontWeight: 900,
                fontSize: '1.85rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                lineHeight: 1,
                fontFamily: "'Manrope', sans-serif !important"
              }}
            >
              WESTPOINT GROUP
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurTravelsSection;
