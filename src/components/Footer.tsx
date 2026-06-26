import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO } from '../constants';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
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

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About Us', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Areas', href: 'areas' },
    { name: 'Contact', href: 'contact' },
  ];

  const servicesLinks = [
    "Laundry Service",
    "Dry Cleaning",
    "Ironing Service",
    "Wedding Dress Cleaning",
    "Curtain Cleaning",
    "Repairs / Alterations"
  ];

  return (
    <footer className="bg-brand-navy text-white/80 pt-16 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info & Logo */}
          <div className="lg:col-span-5 space-y-6">
            {/* Footer desktop: 160px to 185px, mobile: 135px to 155px */}
            <div className="w-[145px] md:w-[175px]" aria-hidden="true">
              <Logo variant="dark" />
            </div>
            <p className="text-[14px] text-white/70 leading-relaxed font-sans max-w-sm">
              Laundry, dry cleaning, ironing, wedding dress cleaning, curtain cleaning, and garment care services in Hampton and nearby London areas.
            </p>
            
            {/* Direct Contact List */}
            <div className="space-y-3 pt-2 text-[13.5px]">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-brand-gold shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors font-sans">{CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-brand-gold shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors font-sans">{CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="font-sans leading-normal text-white/70">{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold font-sans">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-[14px]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className="hover:text-white transition-colors text-left font-sans cursor-pointer flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Shortlist */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold font-sans">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-[14px]">
              {servicesLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleScrollTo('services')}
                    className="hover:text-white transition-colors text-left font-sans cursor-pointer flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 font-sans text-center sm:text-left">
            &copy; 2026 Love 2 Iron. All rights reserved. Registered local garment care support in Hampton.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50 font-sans">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 hover:text-white transition-all cursor-pointer bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
