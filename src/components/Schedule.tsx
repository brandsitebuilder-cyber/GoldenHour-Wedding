import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function Schedule() {
  const { language } = useLanguage();
  const t = content[language].schedule;

  return (
    <section id="schedule" className="py-24 md:py-32 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-16 relative inline-block">
            {t.title}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-accent"></span>
          </h2>
          
          <div className="space-y-12">
            {t.items.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-2xl font-serif text-brand-accent w-32 text-right">
                  {item.time}
                </div>
                <div className="hidden md:block w-px h-12 bg-brand-text/20"></div>
                <div className="text-lg font-light text-brand-text/80 uppercase tracking-widest w-64 text-left">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
