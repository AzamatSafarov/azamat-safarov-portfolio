'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/azamat-safarov', icon: '💼' },
  { name: 'GitHub', url: 'https://github.com/AzamatSafarov', icon: '⚡' },
  { name: 'Habr', url: 'https://habr.com/ru/users/Azamat_Safarov/', icon: '📝' },
  { name: 'X / Twitter', url: 'https://x.com/Azamat__Safarov', icon: '🐦' },
  { name: 'Telegram', url: 'https://t.me/Kelebrimbor', icon: '✈️' },
  { name: 'Dev.to', url: 'https://dev.to/azamat_safarov_119e17602f/', icon: '👨‍💻' },
  { name: 'Medium', url: 'https://medium.com/@akutagavasora777', icon: '📖' },
  { name: 'Mastodon', url: 'https://mastodon.social/@Azamat_Safarov', icon: '🐘' },
  { name: 'Bluesky', url: 'https://bsky.app/profile/a-zamat.bsky.social', icon: '☁️' },
  { name: 'VK', url: 'https://vk.com/id616726815', icon: '🔷' },
];

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="contact"
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#0a0a0f',
        padding: '80px 24px 40px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="footer-content"
        style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #ff9ff3, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let&apos;s Connect
        </h2>

        <p
          style={{
            color: '#94a3b8',
            fontSize: '1.05rem',
            marginBottom: '40px',
            maxWidth: '500px',
            margin: '0 auto 40px',
          }}
        >
          Open to collaborations in Digital Humanities, data visualization, and research methodology.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#e2e8f0',
                padding: '10px 20px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,159,243,0.15)';
                e.currentTarget.style.borderColor = 'rgba(255,159,243,0.4)';
                e.currentTarget.style.color = '#ff9ff3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = '#e2e8f0';
              }}
            >
              <span>{social.icon}</span>
              {social.name}
            </a>
          ))}
        </div>

        <div
          style={{
            color: '#64748b',
            fontSize: '0.9rem',
            marginBottom: '16px',
          }}
        >
          <a
            href="mailto:akutagavasora777@gmail.com"
            style={{ color: '#a78bfa', textDecoration: 'none' }}
          >
            akutagavasora777@gmail.com
          </a>
        </div>

        <p style={{ color: '#475569', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Azamat Safarov. Built with Next.js, Three.js & GSAP.
        </p>
      </div>
    </footer>
  );
}
