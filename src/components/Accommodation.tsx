import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function Accommodation() {
  const { language } = useLanguage();
  const t = content[language].accommodation;

  return (
    <section id="accommodation" className="py-24 md:py-32 bg-brand-fill">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-8 relative inline-block">
            {t.title}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-accent"></span>
          </h2>
          <p className="text-lg font-light text-brand-text/80 max-w-3xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-bg p-8 shadow-sm border border-brand-text/5"
          >
            <h3 className="font-serif text-2xl text-brand-accent mb-6">{t.onsiteTitle}</h3>
            <ul className="space-y-4 text-brand-text/80 font-light list-disc pl-5">
              {t.onsiteList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-brand-bg p-8 shadow-sm border border-brand-text/5 lg:col-span-2"
          >
            <h3 className="font-serif text-2xl text-brand-accent mb-6">{t.transportTitle}</h3>
            <ul className="space-y-4 text-brand-text/80 font-light list-disc pl-5">
              {t.transportList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="overflow-x-auto bg-brand-bg shadow-sm border border-brand-text/5 mb-16"
        >
          <div className="p-8 border-b border-brand-text/10">
            <h3 className="font-serif text-2xl text-brand-accent">{t.tableTitle}</h3>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-fill/50 text-brand-text/60 uppercase tracking-widest text-xs">
                {t.tableHeaders.map((header, i) => (
                  <th key={i} className="p-4 font-medium border-b border-brand-text/10">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="font-light text-brand-text/80 text-sm">
              {t.tableData.map((row, i) => (
                <tr key={i} className="border-b border-brand-text/5 hover:bg-brand-fill/30 transition-colors">
                  <td className="p-4 font-medium text-brand-text">{row[0]}</td>
                  <td className="p-4">{row[1]}</td>
                  <td className="p-4">{row[2]}</td>
                  <td className="p-4">
                    <a href={`https://${row[3]}`} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                      {row[3]}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="overflow-x-auto bg-brand-bg shadow-sm border border-brand-text/5"
        >
          <div className="p-8 border-b border-brand-text/10">
            <h3 className="font-serif text-2xl text-brand-accent">{t.shuttleTitle}</h3>
          </div>
          <table className="w-full text-left border-collapse">
            <tbody className="font-light text-brand-text/80 text-sm">
              {t.shuttleData.map((row, i) => (
                <tr key={i} className="border-b border-brand-text/5 hover:bg-brand-fill/30 transition-colors">
                  <td className="p-4 font-medium text-brand-text w-1/2">{row[0]}</td>
                  <td className="p-4 w-1/2">
                    <a href={`https://${row[1]}`} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                      {row[1]}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
