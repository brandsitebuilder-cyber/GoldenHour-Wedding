import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  {
    src: '/images/roquelle-Z8GElxZdJ9g-unsplash.jpg',
    className: '',
    alt: 'Engagement couple portrait',
  },
  {
    src: '/images/travis-lee-gilbert-XmmanvB1Y_4-unsplash.jpg',
    className: 'masonry-tall',
    alt: 'Romantic engagement moment',
  },
  {
    src: '/images/karina-jauregui-UKdviKhNc_M-unsplash.jpg',
    className: '',
    alt: 'Happy couple',
  },
  {
    src: '/images/travis-lee-gilbert-SOKgyMj7dJo-unsplash.jpg',
    className: 'masonry-wide',
    alt: 'Engagement kiss',
  },
  {
    src: '/images/ryan-jacobson-N7S-Y9Yc1vA-unsplash.jpg',
    className: 'masonry-tall',
    alt: 'Couple embracing',
  },
  {
    src: '/images/nathan-dumlao-9UDwXxaPxZc-unsplash.jpg',
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
