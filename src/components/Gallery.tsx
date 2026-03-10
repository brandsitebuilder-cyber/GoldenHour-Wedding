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
    <section id="gallery" className="py-32 md:py-48 bg-brand-bg text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
            Moments
          </h3>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-text uppercase tracking-[0.15em] mb-8">
            {t}
          </h2>
          <div className="w-px h-16 bg-brand-accent/50 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          {galleryImages.map((src, i) => {
            // Create an asymmetrical layout
            let colSpan = "md:col-span-6";
            let marginTop = "";
            let aspect = "aspect-[3/4]";
            
            if (i === 0) {
              colSpan = "md:col-span-5 md:col-start-2";
              aspect = "aspect-[4/5]";
            } else if (i === 1) {
              colSpan = "md:col-span-4 md:col-start-8";
              marginTop = "md:mt-32";
              aspect = "aspect-[3/4]";
            } else if (i === 2) {
              colSpan = "md:col-span-6 md:col-start-1";
              aspect = "aspect-[16/9]";
            } else if (i === 3) {
              colSpan = "md:col-span-4 md:col-start-8";
              marginTop = "md:-mt-32";
              aspect = "aspect-[4/5]";
            }

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className={`${colSpan} ${marginTop} ${aspect} overflow-hidden`}
              >
                <img 
                  src={src} 
                  alt={`Gallery ${i + 1}`} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
