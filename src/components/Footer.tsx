import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="bg-brand-bg py-16 text-center border-t border-brand-text/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="font-serif text-3xl text-brand-accent mb-6 select-none">
          A&L
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-text/60 font-light">
          {t.text}
        </p>
      </div>
    </footer>
  );
}
