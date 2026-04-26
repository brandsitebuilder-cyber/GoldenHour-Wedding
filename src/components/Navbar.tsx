import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Story', hash: '#story' },
  { name: 'Gallery', hash: '#gallery' },
  { name: 'Events', hash: '#schedule' },
  { name: 'Venue', hash: '#venue' },
  { name: 'RSVP', hash: '#rsvp' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (hash: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: 48,
    transition: 'all 0.3s ease',
    backgroundColor: isScrolled ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    paddingLeft: 'clamp(1.25rem, 4vw, 2.5rem)',
    paddingRight: 'clamp(1.25rem, 4vw, 2.5rem)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  };

  const linkBase: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.75)',
    fontSize: '0.8125rem',
    letterSpacing: '0.04em',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    fontWeight: 400,
    padding: 0,
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.125rem',
            letterSpacing: '0.08em',
            color: '#D4AF37',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          GH
        </button>

        {/* Desktop center links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.hash)}
                style={linkBase}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#D4AF37'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}

        {/* CTA button (desktop) */}
        {!isMobile && (
          <button
            onClick={() => scrollToSection('#rsvp')}
            style={{
              background: 'transparent',
              border: '1px solid #D4AF37',
              color: '#D4AF37',
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '6px 16px',
              transition: 'all 0.3s ease',
              fontWeight: 400,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D4AF37';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#D4AF37';
            }}
          >
            RSVP
          </button>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#f5f5f7',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              padding: 4,
            }}
            aria-label="Menu"
          >
            <span style={{
              display: 'block',
              width: 18,
              height: 1.5,
              backgroundColor: '#f5f5f7',
              transition: 'all 0.3s ease',
              transform: isMobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: 18,
              height: 1.5,
              backgroundColor: '#f5f5f7',
              transition: 'all 0.3s ease',
              opacity: isMobileOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: 18,
              height: 1.5,
              backgroundColor: '#f5f5f7',
              transition: 'all 0.3s ease',
              transform: isMobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }} />
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMobileOpen && (
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.95)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
            paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
            paddingTop: '0.75rem',
            paddingBottom: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.hash)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.875rem',
                letterSpacing: '0.06em',
                textAlign: 'left',
                cursor: 'pointer',
                padding: '0.625rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#rsvp')}
            style={{
              background: 'transparent',
              border: '1px solid #D4AF37',
              color: '#D4AF37',
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '10px 0',
              marginTop: '0.5rem',
              transition: 'all 0.3s ease',
              fontWeight: 400,
            }}
          >
            RSVP
          </button>
        </div>
      )}
    </nav>
  );
}
