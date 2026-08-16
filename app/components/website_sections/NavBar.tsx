'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!visible) return null;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px 24px',
        backdropFilter: 'blur(10px)',
        background: 'rgba(0,0,0,0.3)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="nav-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = '#ff9ff3';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = '#fff';
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
