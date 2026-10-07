import React from 'react';
import { Microscope, Activity, Flame, ShieldAlert, Binary, Building, ArrowRight } from 'lucide-react';

export const TestingFacilities: React.FC = () => {
  const tests = [
    {
      title: 'MECHANICAL ENDURANCE TESTING',
      desc: 'Tensile yield strength, Charpy V-notch sub-zero impact endurance, and Brinell hardness testing for heavy freight axles.',
      icon: Activity
    },
    {
      title: 'SPECTROMETRY CHEMICAL ANALYSIS',
      desc: 'Argon-shielded optical emission spectrometry verifying carbon, manganese, and alloy dosing to exact AREMA specs.',
      icon: Flame
    },
    {
      title: '100% VOLUMETRIC NDT TESTING',
      desc: '100% volumetric ultrasonic flaw detection and magnetic particle scanning per AAR M-1003 rules.',
      icon: ShieldAlert
    },
    {
      title: 'metal SOLIDIFICATION',
      desc: 'Microstructural grain boundary evaluation, inclusion rating, and 3D solidification porosity analysis.',
      icon: Microscope
    },
    {
      title: 'CMM LASER DIMENSIONAL SCAN',
      desc: 'Coordinate Measuring Machine (CMM) laser scanning verifying CNC tolerances within ±0.05mm on turnout frogs.',
      icon: Binary
    },
    {
      title: 'ACCREDITED LAB FACILITIES',
      desc: 'AAR & ISO 17025 accredited in-house testing laboratory with full heat certificate traceability.',
      icon: Building
    }
  ];

  return (
    <section id="testing" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>IN-HOUSE QUALITY ASSURANCE &amp; NDT</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              TESTING FACILITIES &amp; LABS
            </h2>
          </div>

          <a href="#contact" className="link-hover-arrow">
            <span>REQUEST LAB TEST REPORTS</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* 6 High-Contrast High-Legibility Cards Grid */}
        <div className="grid-responsive-3">
          {tests.map((test, idx) => {
            const IconComp = test.icon;
            return (
              <div
                key={idx}
                className="card-hover-industrial"
                style={{
                  padding: '2rem 1.75rem',
                  background: '#FFFFFF',
                  border: '1px solid #D1D5DB',
                  borderRadius: '2px',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ width: '44px', height: '44px', background: '#1B5E20', color: '#fff', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #4CAF50' }}>
                  <IconComp size={22} color="#fff" />
                </div>
                <div>
                  <h3 style={{ fontSize: '13.5px', fontWeight: 900, color: '#111827', letterSpacing: '0.04em', margin: '0 0 0.65rem 0', textTransform: 'uppercase', lineHeight: 1.35, fontFamily: "'Manrope', sans-serif !important" }}>
                    {test.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#1B5E20', lineHeight: 1.6, margin: 0, fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
                    {test.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TestingFacilities;
