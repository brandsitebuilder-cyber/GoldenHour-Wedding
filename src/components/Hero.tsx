import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="/images/travis-lee-gilbert-Xwvd6SdaGFA-unsplash.jpg"
          alt="Golden hour over the winelands"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: '#ffffff',
          paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
          maxWidth: 800,
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          Marcus
          <span
            style={{
              display: 'block',
              color: '#D4AF37',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              margin: '0.5rem 0',
              letterSpacing: '0.15em',
            }}
          >
            &amp;
          </span>
          Sophie
        </h1>

        <p
          style={{
            fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 300,
            marginBottom: '0.75rem',
            opacity: 0.85,
          }}
        >
          23 January 2027
        </p>

        <p
          style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 300,
            opacity: 0.6,
            marginBottom: '3rem',
          }}
        >
          Grand West Casino &middot; Cape Town
        </p>

        <a
          href="#rsvp"
          className="cta-button"
        >
          Save the Date
        </a>
      </motion.div>
    </section>
  );
}
