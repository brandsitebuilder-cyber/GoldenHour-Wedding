import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  {
    src: '/images/taylor-flowe-soA1gQYsCgM-unsplash.jpg',
    className: '',
    alt: 'Engagement couple portrait',
  },
  {
    src: '/images/nathan-dumlao-7c5S2cwBvnU-unsplash.jpg',
    className: 'masonry-tall',
    alt: 'Romantic engagement moment',
  },
  {
    src: '/images/melissa-mjoen-7EmyHUnlK_o-unsplash.jpg',
    className: '',
    alt: 'Happy couple',
  },
  {
    src: '/images/gladys-aguayo-R1gJvAyn4JQ-unsplash.jpg',
    className: 'masonry-wide',
    alt: 'Engagement kiss',
  },
  {
    src: '/images/seth-reese-GJ92T3mRTEY-unsplash.jpg',
    className: 'masonry-tall',
    alt: 'Couple embracing',
  },
  {
    src: '/images/asdrubal-luna-m3WBskzsZ1o-unsplash.jpg',
    className: '',
    alt: 'Engagement celebration',
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
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
            Gallery
          </h2>
          <div
            className="gold-accent"
            style={{ margin: '0 auto 1.5rem' }}
          />
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
            }}
          >
            Our engagement story in pictures
          </p>
        </motion.div>

        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className={`masonry-item ${img.className}`}
              style={{
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
