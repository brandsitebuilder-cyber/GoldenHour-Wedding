import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { images } from '../assets';
import { motion } from 'motion/react';

export default function OurStory() {
  const { language } = useLanguage();
  const t = content[language].story;

  return (
    <section id="story" className="py-24 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
              <img 
                src={images.story} 
                alt="Our Story" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-fill -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-brand-accent/30 -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-12 relative inline-block">
              {t.title}
              <span className="absolute -bottom-4 left-0 w-12 h-0.5 bg-brand-accent"></span>
            </h2>
            
            <div className="space-y-6 text-brand-text/80 leading-relaxed font-light text-lg">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
              <p className="font-medium text-brand-text italic">{t.p4}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
