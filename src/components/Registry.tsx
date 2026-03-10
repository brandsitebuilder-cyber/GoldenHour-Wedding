import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function Registry() {
  const { language } = useLanguage();
  const t = content[language].registry;

  return (
    <section id="registry" className="py-32 md:py-48 bg-brand-fill text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
            Gifts
          </h3>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-text uppercase tracking-[0.15em] mb-8">
            {t.title}
          </h2>
          <div className="w-px h-16 bg-brand-accent/50 mx-auto mb-16"></div>
          <p className="text-sm md:text-base font-light text-brand-text/70 leading-[2] tracking-wide">
            {t.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
