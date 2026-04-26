import React from 'react';
import { motion } from 'motion/react';

export default function OurStory() {
  return (
    <section
      id="story"
      className="section-light"
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
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
        }}
        className="md-story-grid"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div
            style={{
              overflow: 'hidden',
              borderRadius: 12,
              aspectRatio: '4 / 5',
              maxHeight: 600,
            }}
          >
            <img
            src="/images/nathan-dumlao-_-prYEEf0v4-unsplash.jpg"
            alt="Marcus & Sophie in the field"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          style={{ maxWidth: 480 }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 500,
              color: '#1d1d1f',
              marginBottom: '0.5rem',
            }}
          >
            Our Story
          </h2>
          <div className="gold-accent" style={{ marginBottom: '2rem' }} />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              color: '#4a4a4e',
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            <p>
              It began with golden light. Marcus arrived late to a sunset photography
              workshop at Signal Hill, his camera bag half-open, tripod bumping against
              his leg. Sophie was already there, adjusting her lens toward the
              Atlantic — the only person in the group who noticed the shot everyone
              else missed.
            </p>
            <p>
              They didn't exchange numbers that evening. But the next weekend, at
              another workshop in the Winelands, there she was again — this time
              capturing the last rays through the vines. He asked to see her photos.
              She showed him one of a couple dancing in the distance, blurred by
              motion. "That's the feeling I want to remember," she said. He agreed.
            </p>
            <p>
              Three years, countless golden hours, and one sunrise proposal at
              Chapman's Peak later, they're ready for the next chapter — together,
              in front of the lens, finally.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-story-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
