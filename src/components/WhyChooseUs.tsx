import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US_REASONS } from '../constants';

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-brand-light/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider rounded-full mb-4 uppercase">
            <span>✦</span> Our Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-4 font-sans leading-tight">
            Why customers choose Love 2 Iron
          </h2>
          <p className="text-[16px] text-brand-navy/70 leading-relaxed font-sans max-w-xl">
            Garment care should feel easy, reliable, and handled with care from start to finish.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive List Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_US_REASONS.map((reason, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-brand-blue/30 shadow-md shadow-brand-blue/5' 
                      : 'bg-white/60 border-brand-light hover:border-brand-blue/20'
                  }`}
                >
                  {/* Header/Title Toggle Trigger */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-1.5 rounded-lg transition-colors ${
                        isOpen ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-light text-brand-navy/60'
                      }`}>
                        <Sparkles size={16} />
                      </div>
                      <span className="font-bold text-[16px] sm:text-[17px] text-brand-navy font-sans">
                        {reason.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-brand-navy/40"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  {/* Accordion Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-[14.5px] text-brand-navy/75 leading-relaxed font-sans border-t border-brand-light/40">
                          {reason.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Premium Image Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft decorative background box accent */}
            <div className="absolute -inset-4 bg-brand-gold/15 rounded-[2.5rem] transform -rotate-2 -z-10" />
            
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-xl max-w-md w-full">
              <img
                src="https://res.cloudinary.com/dfywgxkn3/image/upload/v1782512277/why_customer_choose_us_amsodn.png"
                alt="Perfectly pressed shirts hanging in a wardrobe"
                className="w-full h-[450px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
              
              {/* Gold floating overlay element representing brand luxury */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-brand-light">
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-brand-gold" />
                  <span className="text-xs font-bold text-brand-navy tracking-wider uppercase font-sans">
                    The Premium standard
                  </span>
                </div>
                <p className="text-[13px] text-brand-navy/75 mt-1.5 font-sans leading-relaxed">
                  Every garment undergoes a meticulous multi-point inspection process before being hand-delivered back to your door.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
