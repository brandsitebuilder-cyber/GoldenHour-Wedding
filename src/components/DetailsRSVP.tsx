import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function DetailsRSVP() {
  const { language } = useLanguage();
  const t = content[language].details;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="details" className="py-24 md:py-32 bg-brand-fill">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-8 relative inline-block">
                {t.attireTitle}
                <span className="absolute -bottom-4 left-0 w-12 h-0.5 bg-brand-accent"></span>
              </h2>
              <p className="text-brand-text/80 font-light mb-6 text-lg">{t.attireIntro}</p>
              <ul className="space-y-4 text-brand-text/70 font-light list-disc pl-5">
                {t.attireList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-8 relative inline-block">
                {t.dietaryTitle}
                <span className="absolute -bottom-4 left-0 w-12 h-0.5 bg-brand-accent"></span>
              </h2>
              <p className="text-brand-text/80 font-light text-lg">{t.dietaryText}</p>
            </div>
          </motion.div>

          {/* RSVP Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-bg p-8 md:p-12 shadow-sm border border-brand-text/5"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-8 relative inline-block">
              {t.rsvpTitle}
              <span className="absolute -bottom-4 left-0 w-12 h-0.5 bg-brand-accent"></span>
            </h2>
            <p className="text-brand-text/80 font-light mb-10 text-lg">{t.rsvpText}</p>

            {isSubmitted ? (
              <div className="bg-brand-fill p-8 text-center border border-brand-accent/20">
                <h3 className="font-serif text-2xl text-brand-accent mb-4">Thank You / Dankie</h3>
                <p className="text-brand-text/80 font-light">
                  {language === 'en' ? "Your RSVP has been received." : "U RSVP is ontvang."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest text-brand-text/70 mb-2">{t.form.name}</label>
                  <input type="text" id="name" required className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light" />
                </div>
                <div>
                  <label htmlFor="attending" className="block text-sm uppercase tracking-widest text-brand-text/70 mb-2">{t.form.attending}</label>
                  <select id="attending" required className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text">
                    <option value="">Select / Kies</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="0">Regrets / Kan nie bywoon nie</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="dietary" className="block text-sm uppercase tracking-widest text-brand-text/70 mb-2">{t.form.dietary}</label>
                  <input type="text" id="dietary" className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest text-brand-text/70 mb-2">{t.form.message}</label>
                  <textarea id="message" rows={3} className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-accent text-white hover:bg-brand-text transition-colors duration-300 py-4 uppercase tracking-widest text-sm mt-8">
                  {t.form.submit}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
