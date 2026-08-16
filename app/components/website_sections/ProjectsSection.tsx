'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: 'Sankey Diagram',
    date: 'Dec 2024',
    desc: 'Interactive sankey showing translation flows between languages and countries. Bidirectional toggle.',
    url: 'https://gessen-sankey-diagram.vercel.app',
    tags: ['D3.js', 'Data Viz'],
  },
  {
    title: 'Chronotope of Ideas',
    date: 'Jan 2025',
    desc: 'Network graph mapping 221 works across 6 thematic tracks (1909-1994). Force simulation.',
    url: 'https://gessen-ideas-v2.vercel.app',
    tags: ['D3.js', 'Network Graph'],
  },
  {
    title: 'Translations Map',
    date: 'Jan 2025',
    desc: 'Leaflet map of 33 editions in 13 languages across 16 cities. Clustered markers.',
    url: 'https://gessen-translations-map.vercel.app',
    tags: ['Leaflet', 'GeoJSON'],
  },
  {
    title: 'Life Map',
    date: 'Dec 2024',
    desc: 'Interactive map of life journey across European cities. Life/Academic path toggle.',
    url: 'https://gessen-life-map.vercel.app',
    tags: ['Leaflet', 'D3.js'],
  },
  {
    title: 'Timeline v1',
    date: 'Nov 2024',
    desc: 'Scrollable timeline of 238 works with filtering and search.',
    url: 'https://gessen-timeline.vercel.app',
    tags: ['Vanilla JS', 'CSS Grid'],
  },
  {
    title: 'Hessen Works',
    date: 'Oct 2024',
    desc: '8-volume digital archive with thematic structure and full-text search.',
    url: 'https://hessen-collected-works.vercel.app',
    tags: ['Archive', 'Search'],
  },
  {
    title: 'Shchedrovitsky Wiki',
    date: 'Mar 2025',
    desc: 'Digital archive of methodological texts with categorization.',
    url: 'https://shchedrovitsky-wiki-app.vercel.app',
    tags: ['Wiki', 'Methodology'],
  },
  {
    title: 'Habr Articles',
    date: '2025',
    desc: 'Three published articles on blockchain voting, e-health, and archives.',
    url: 'https://habr.com/ru/users/Azamat_Safarov/',
    tags: ['Writing', 'Research'],
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
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
      id="projects"
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#0a0a0f',
        padding: '120px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          className="projects-title"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '60px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #4ecdc4, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Projects
        </h2>

        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '28px',
                textDecoration: 'none',
                display: 'block',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-4px)';
                el.style.borderColor = 'rgba(78,205,196,0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                }}
              >
                <h3
                  style={{
                    color: '#e2e8f0',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {project.date}
                </span>
              </div>

              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}
              >
                {project.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'rgba(78,205,196,0.12)',
                      color: '#4ecdc4',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
