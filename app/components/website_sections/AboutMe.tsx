'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BIO = `I am a Master's student at SFedU (Southern Federal University) specializing in International Security & Data Analysis. My work bridges the gap between humanities research and modern technology — from building digital archives of methodological texts to creating interactive data visualizations.

I co-compiled the 8-volume Collected Works of Sergei Gessen, built the Shchedrovitsky Wiki digital archive, and developed multiple D3.js visualizations for digital humanities research. My academic background in International Relations combines with hands-on experience in project management, data analysis, and full-stack development.`;

const EDUCATION = [
  {
    year: '2025 — Present',
    degree: 'M.A. International Security & Data Analysis',
    school: 'Southern Federal University (SFedU)',
  },
  {
    year: '2021 — 2025',
    degree: 'B.A. International Relations',
    school: 'Southern Federal University (SFedU)',
  },
];

const SKILLS = [
  'D3.js', 'React', 'TypeScript', 'Next.js', 'Three.js',
  'Python', 'Data Analysis', 'Network Analysis', 'Gephi',
  'Digital Humanities', 'Research Methodology', 'Project Management',
];

const SOFT_SKILLS = [
  'Critical Thinking', 'Systems Thinking', 'Team Coordination',
  'Public Speaking', 'Academic Writing', 'Cross-cultural Communication',
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: '.about-card',
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0d1117 50%, #0a0a0f 100%)',
        padding: '120px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          className="about-title"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '60px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #ff9ff3, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </h2>

        {/* Bio */}
        <div
          className="about-card"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '40px',
            marginBottom: '40px',
          }}
        >
          <p
            style={{
              color: '#e2e8f0',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              whiteSpace: 'pre-line',
            }}
          >
            {BIO}
          </p>
        </div>

        {/* Education */}
        <div
          className="about-card"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '40px',
            marginBottom: '40px',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '24px',
              color: '#4ecdc4',
            }}
          >
            Education
          </h3>
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              style={{
                marginBottom: i < EDUCATION.length - 1 ? '20px' : 0,
                paddingBottom: i < EDUCATION.length - 1 ? '20px' : 0,
                borderBottom: i < EDUCATION.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div
                style={{
                  color: '#ffd93d',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  marginBottom: '4px',
                }}
              >
                {edu.year}
              </div>
              <div style={{ color: '#e2e8f0', fontSize: '1.1rem', fontWeight: 600 }}>
                {edu.degree}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{edu.school}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div
            className="about-card"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px',
              padding: '40px',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#a78bfa',
              }}
            >
              Technical Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: 'rgba(167,139,250,0.15)',
                    color: '#a78bfa',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    border: '1px solid rgba(167,139,250,0.3)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            className="about-card"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px',
              padding: '40px',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#51cf66',
              }}
            >
              Soft Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {SOFT_SKILLS.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: 'rgba(81,207,102,0.15)',
                    color: '#51cf66',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    border: '1px solid rgba(81,207,102,0.3)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
