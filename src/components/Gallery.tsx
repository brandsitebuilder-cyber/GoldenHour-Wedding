import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80',
    className: '',
    alt: 'Wedding rings',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    className: 'masonry-tall',
    alt: 'Wedding bouquet',
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    className: '',
    alt: 'Couple walking',
  },
  {
    src: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&q=80',
    className: 'masonry-wide',
    alt: 'Golden hour couple',
  },
  {
    src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80',
    className: 'masonry-tall',
    alt: 'Engagement shoot',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    className: '',
    alt: 'Couple portrait',
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
            A collection of moments captured in golden light
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
