import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { images } from '../assets';
import { motion } from 'motion/react';

export default function Gallery() {
  const { language } = useLanguage();
  const t = content[language].nav.gallery;

  const galleryImages = [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-fill text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-8 relative inline-block">
            {t}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-accent"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="aspect-[3/4] overflow-hidden shadow-md"
            >
              <img 
                src={src} 
                alt={`Gallery ${i + 1}`} 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
