'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES = [
  {
    title: 'SfeduNet 10',
    org: 'SFedU, NTI University 20.35',
    date: '2025',
    type: 'Project-Educational Intensive',
    file: 'SfeduNet 10.pdf',
  },
  {
    title: 'SfeduNet 9',
    org: 'SFedU, NTI University 20.35',
    date: '2025',
    type: 'Project-Educational Intensive',
    file: 'SfeduNet 9.pdf',
  },
  {
    title: 'SfeduNet 8',
    org: 'SFedU, NTI University 20.35',
    date: '2024',
    type: 'Project-Educational Intensive',
    file: 'SfeduNet 8.pdf',
  },
  {
    title: 'Bachelor Diploma',
    org: 'Southern Federal University',
    date: '2025',
    type: 'Higher Education',
    file: 'Диплом.pdf',
  },
  {
    title: 'Additional Professional Education',
    org: 'Southern Federal University',
    date: '2024',
    type: 'DPO Certificate',
    file: 'ДПО.pdf',
  },
  {
    title: 'Certificate 4',
    org: 'Professional Development',
    date: '2024',
    type: 'Professional Certificate',
    file: 'Сертификат  4.pdf',
  },
];

export default function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cert-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.cert-card', {
        scrollTrigger: {
          trigger: '.certs-grid',
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0d1117 50%, #0a0a0f 100%)',
        padding: '120px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          className="cert-title"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '60px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #ffd93d, #ff9ff3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Certificates & Diplomas
        </h2>

        <div
          className="certs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.title}
              className="cert-card"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(255,217,61,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ffd93d, #ff9ff3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  fontSize: '1.5rem',
                }}
              >
                📜
              </div>

              <h3
                style={{
                  color: '#e2e8f0',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                {cert.title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '4px' }}>
                {cert.org}
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                }}
              >
                <span
                  style={{
                    background: 'rgba(255,217,61,0.12)',
                    color: '#ffd93d',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}
                >
                  {cert.type}
                </span>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
