import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { language } = useLanguage();
  const t = content[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 md:py-48 bg-brand-fill">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
            Details
          </h3>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-text uppercase tracking-[0.15em] mb-8">
            {t.title}
          </h2>
          <div className="w-px h-16 bg-brand-accent/50 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* FAQ Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-1 space-y-4"
          >
            {t.questions.map((q, i) => (
              <div key={i} className="border-b border-brand-text/10 pb-4">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                >
                  <span className="font-serif text-lg md:text-xl text-brand-text group-hover:text-brand-accent transition-colors tracking-wide">
                    {q.q}
                  </span>
                  <ChevronDown 
                    className={`text-brand-accent transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-light text-brand-text/70 pb-8 leading-[2] tracking-wide text-sm md:text-base">
                        {q.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Things to Do Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="bg-brand-bg p-10 md:p-16">
              <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
                Explore
              </h3>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-text uppercase tracking-[0.15em] mb-8">
                {t.thingsTitle}
              </h2>
              <div className="w-12 h-[1px] bg-brand-accent mb-8"></div>
              
              <p className="font-light text-brand-text/70 mb-12 leading-[2] tracking-wide text-sm md:text-base">
                {t.thingsIntro}
              </p>
              <div className="space-y-8">
                {t.thingsList.map((item, i) => (
                  <div key={i} className="border-l border-brand-accent/30 pl-6">
                    <h4 className="font-serif text-lg text-brand-text mb-2 tracking-wide">{item.name}</h4>
                    <p className="font-light text-sm text-brand-text/60 leading-[2] tracking-wide">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
