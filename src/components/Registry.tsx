import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function Registry() {
  const { language } = useLanguage();
  const t = content[language].registry;

  return (
    <section id="registry" className="py-24 md:py-32 bg-brand-bg text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-12 relative inline-block">
            {t.title}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-accent"></span>
          </h2>
          <p className="text-lg md:text-xl font-light text-brand-text/80 leading-relaxed">
            {t.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
