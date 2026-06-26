import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function FinalCTA() {
  const handleScrollToForm = () => {
    const element = document.getElementById('contact');
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Premium Deep Navy Rounded Banner with Blue Radial Glow */}
      <div className="relative rounded-[2.5rem] bg-brand-navy p-8 sm:p-12 md:p-16 text-white text-center shadow-2xl border border-white/5 overflow-hidden">
        
        {/* Subtle Background Radial Gradient Glow */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(48,81,199,0.22)_0%,rgba(31,40,98,0)_70%)] pointer-events-none select-none"
          aria-hidden="true" 
        />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-brand-gold text-xs font-semibold tracking-wider rounded-full uppercase">
            <span>✦</span> Get Started Today
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight font-sans">
            Fresh clothes, less stress — book your garment care today
          </h2>
          
          <p className="text-[15px] sm:text-[17px] text-white/80 leading-relaxed font-sans max-w-2xl mx-auto">
            Laundry, dry cleaning, ironing, wedding dress cleaning, curtain cleaning, and garment care support in Hampton and nearby areas.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={handleScrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold rounded-full shadow-lg transition-all cursor-pointer"
            >
              <Calendar size={18} />
              <span>Book a Collection</span>
            </button>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
            >
              <PhoneCall size={18} className="text-brand-gold animate-pulse" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
