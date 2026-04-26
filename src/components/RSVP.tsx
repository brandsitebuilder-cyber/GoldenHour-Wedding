import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guestCount: '1',
    dietary: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section
      id="rsvp"
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
          maxWidth: 640,
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
            RSVP
          </h2>
          <div className="gold-accent" style={{ margin: '0 auto 1.5rem' }} />
          <p
            style={{
              color: '#6e6e73',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              maxWidth: 450,
              margin: '0 auto',
            }}
          >
            Kindly confirm your attendance. Your presence is the greatest gift of all.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              borderRadius: 16,
              backgroundColor: '#ffffff',
              border: '1px solid #e5e5e5',
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                color: '#D4AF37',
                marginBottom: '1rem',
              }}
            >
              Thank You
            </div>
            <p
              style={{
                color: '#6e6e73',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
              }}
            >
              Your RSVP has been received. We look forward to celebrating
              with you on 23 January 2027.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Name */}
            <div>
              <input
                type="text"
                id="name"
                required
                placeholder="Full Name(s)"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="form-field"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                id="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="form-field"
              />
            </div>

            {/* Guest Count (1-5) */}
            <div>
              <select
                id="guestCount"
                value={formData.guestCount}
                onChange={(e) => handleChange('guestCount', e.target.value)}
                className="form-field"
                style={{ appearance: 'none', cursor: 'pointer' }}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Dietary */}
            <div>
              <textarea
                id="dietary"
                placeholder="Dietary Requirements (optional)"
                value={formData.dietary}
                onChange={(e) => handleChange('dietary', e.target.value)}
                className="form-field"
                rows={2}
                style={{ resize: 'vertical', minHeight: '2.5rem' }}
              />
            </div>

            {/* Submit */}
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button
                type="submit"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 3rem',
                  border: '1px solid #D4AF37',
                  backgroundColor: 'transparent',
                  color: '#1d1d1f',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4AF37';
                  e.currentTarget.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#1d1d1f';
                }}
              >
                Confirm Attendance
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
