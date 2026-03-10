import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function Invitation() {
  const { language } = useLanguage();
  const t = content[language].invitation;

  return (
    <section id="invitation" className="py-32 md:py-48 bg-brand-fill text-center relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center opacity-5 pointer-events-none">
        <span className="font-serif text-[40vw] text-brand-accent leading-none select-none">A&L</span>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-brand-text/60 mb-12">
          {t.intro}
        </p>
        
        <h2 className="font-serif text-4xl md:text-6xl text-brand-text mb-8 leading-tight">
          {t.names.split('&').map((name, i) => (
            <React.Fragment key={name}>
              {name.trim()}
              {i === 0 && <span className="block text-2xl md:text-4xl my-4 font-light italic text-brand-accent">&</span>}
            </React.Fragment>
          ))}
        </h2>
        
        <p className="text-lg uppercase tracking-widest text-brand-text mb-16 font-medium">
          {t.action}
        </p>
        
        <div className="w-16 h-px bg-brand-accent mx-auto mb-16"></div>
        
        <p className="text-lg md:text-xl font-light text-brand-text/80 mb-16 leading-relaxed max-w-2xl mx-auto">
          {t.message}
        </p>
        
        <div className="space-y-4 mb-16">
          <p className="text-lg uppercase tracking-widest font-medium text-brand-text">
            {t.datetime}
          </p>
          <p className="text-md uppercase tracking-widest text-brand-text/70">
            {t.venue}
          </p>
          <p className="text-md uppercase tracking-widest text-brand-text/70 pt-4">
            {t.attire}
          </p>
        </div>
        
        <p className="text-md font-light italic text-brand-text/80 mb-16">
          {t.closing}
        </p>
        
        <a 
          href="#details" 
          className="inline-block border border-brand-accent text-brand-text hover:bg-brand-accent hover:text-white transition-all duration-300 px-10 py-4 uppercase tracking-widest text-sm"
        >
          {language === 'en' ? 'Details & RSVP' : 'Besonderhede & RSVP'}
        </a>
      </motion.div>
    </section>
  );
}
