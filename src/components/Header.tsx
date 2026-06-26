import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.substring(1));
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-light py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo container - Header desktop: 150px to 170px, mobile: 120px to 140px */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-[130px] md:w-[160px] flex-shrink-0"
            aria-label="Love 2 Iron Home"
          >
            <Logo variant="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop navigation">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.href)}
                className="text-[15px] font-medium text-brand-navy/80 hover:text-brand-blue transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right CTA Area */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleScrollTo('#contact')}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white text-[14px] font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              Book Collection
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => handleScrollTo('#contact')}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white text-xs font-semibold px-3.5 py-2 rounded-full cursor-pointer"
              aria-label="Book Collection"
            >
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-brand-navy hover:bg-brand-light transition-colors cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-brand-light overflow-hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-[16px] font-medium text-brand-navy/90 hover:bg-brand-light hover:text-brand-blue rounded-xl transition-all cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-3 border-t border-brand-light px-4">
                <button
                  onClick={() => handleScrollTo('#contact')}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white text-center font-semibold py-3 rounded-full shadow transition-all cursor-pointer block"
                >
                  Book Collection
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
