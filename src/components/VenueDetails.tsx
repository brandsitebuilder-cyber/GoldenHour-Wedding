import React from 'react';
import { motion } from 'motion/react';

export default function VenueDetails() {
  return (
    <section
      id="venue"
      className="section-dark"
      style={{
        paddingTop: 'clamp(4rem, 10vw, 8rem)',
        paddingBottom: 'clamp(4rem, 10vw, 8rem)',
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 500,
              color: '#ffffff',
              marginBottom: '0.5rem',
            }}
          >
            Venue
          </h2>
          <div className="gold-accent" style={{ margin: '0 auto' }} />
        </motion.div>

        {/* Full-width venue image with overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'relative',
            borderRadius: 12,
            overflow: 'hidden',
            marginBottom: 'clamp(2rem, 5vw, 4rem)',
            aspectRatio: '21 / 9',
            minHeight: 280,
          }}
        >
          <img
            src="/images/abraham-flores-RR6I1EZfKT4-unsplash.jpg"
            alt="Grand West Casino venue"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: '#ffffff',
                fontWeight: 500,
                marginBottom: '0.25rem',
              }}
            >
              Grand West Casino
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
              }}
            >
              1 Jakes Gerwel Drive, Goodwood, Cape Town
            </p>
          </div>
        </motion.div>

        {/* Details grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2rem, 5vw, 3rem)',
          }}
          className="md-venue-details"
        >
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.25rem',
                color: '#D4AF37',
                fontWeight: 500,
                marginBottom: '0.75rem',
              }}
            >
              About the Venue
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
              }}
            >
              A stunning destination where elegance meets the spirit of the Cape —
              featuring grand ballrooms, exquisite gardens, and the warm
              hospitality that the Western Cape is known for. The golden hour
              views from the terrace are nothing short of magical.
            </p>
          </motion.div>

          {/* Dress Code */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.25rem',
                color: '#D4AF37',
                fontWeight: 500,
                marginBottom: '0.75rem',
              }}
            >
              Dress Code
            </h3>
            <div
              style={{
                display: 'inline-block',
                border: '1px solid #D4AF37',
                padding: '0.5rem 1.5rem',
                fontSize: '0.8125rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#D4AF37',
                marginBottom: '1rem',
              }}
            >
              Black Tie
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
              }}
            >
              We invite our guests to dress in classic black-tie elegance.
              Think floor-length gowns, tailored tuxedos, and touches of gold.
              This is a night to celebrate in style.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-venue-details {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
