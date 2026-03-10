import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = content[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.landing, href: '#landing' },
    { name: t.story, href: '#story' },
    { name: t.invitation, href: '#invitation' },
    { name: t.schedule, href: '#schedule' },
    { name: t.dressCode, href: '#details' },
    { name: t.registry, href: '#registry' },
    { name: t.accommodation, href: '#accommodation' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#landing" className="font-serif text-2xl tracking-widest text-brand-text">A & L</a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-brand-accent transition-colors">
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-2 text-sm uppercase tracking-widest border-l border-brand-text/20 pl-6">
              <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'text-brand-accent font-medium' : 'text-brand-text/60 hover:text-brand-text'}`}>EN</button>
              <span>|</span>
              <button onClick={() => setLanguage('af')} className={`${language === 'af' ? 'text-brand-accent font-medium' : 'text-brand-text/60 hover:text-brand-text'}`}>AF</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-text">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-bg absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest hover:text-brand-accent transition-colors block py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 pt-4 border-t border-brand-text/10">
            <button onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }} className={`text-sm uppercase tracking-widest ${language === 'en' ? 'text-brand-accent font-medium' : 'text-brand-text/60'}`}>EN</button>
            <button onClick={() => { setLanguage('af'); setIsMobileMenuOpen(false); }} className={`text-sm uppercase tracking-widest ${language === 'af' ? 'text-brand-accent font-medium' : 'text-brand-text/60'}`}>AF</button>
          </div>
        </div>
      )}
    </nav>
  );
}
