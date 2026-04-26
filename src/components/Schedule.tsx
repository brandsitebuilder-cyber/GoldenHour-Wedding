import React from 'react';
import { motion } from 'motion/react';

const scheduleItems = [
  { time: '15:00', event: 'Wedding Ceremony', desc: 'Exchange vows under the golden afternoon sky — the moment we\'ve been waiting for.' },
  { time: '16:00', event: 'Cocktail Hour', desc: 'Champagne, canapés, and warm conversation as the sun begins to set.' },
  { time: '18:00', event: 'Grand Reception', desc: 'A seated dinner in the ballroom — fine dining, toasts, and hearts full of joy.' },
  { time: '20:00', event: 'Dancing & Celebration', desc: 'The dance floor opens. Live music, laughter, and memories made until late.' },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
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
          maxWidth: 800,
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
              color: '#1d1d1f',
              marginBottom: '0.5rem',
            }}
          >
            The Day
          </h2>
          <div className="gold-accent" style={{ margin: '0 auto' }} />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1rem',
          }}
        >
          {scheduleItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="timeline-card"
              style={{
                borderRadius: 12,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  minWidth: 100,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#D4AF37',
                    flexShrink: 0,
                    marginTop: 6,
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.25rem',
                    color: '#D4AF37',
                    fontWeight: 500,
                  }}
                >
                  {item.time}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#1d1d1f',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.event}
                </div>
                <div
                  style={{
                    fontSize: '0.8125rem',
                    color: '#6e6e73',
                    fontWeight: 400,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
