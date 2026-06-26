import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="faq" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading, intro, and Still have a question block */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 self-start">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider rounded-full mb-4 uppercase">
                <span>✦</span> Support FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-6 font-sans leading-tight">
                Questions We Get Often
              </h2>
              <p className="text-[16px] text-brand-navy/85 leading-relaxed font-sans">
                Answers about laundry, dry cleaning, ironing, curtain cleaning, wedding dress cleaning, and garment care services.
              </p>
            </div>

            {/* "Still have a question" card from layout template */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-light shadow-sm space-y-4">
              <div className="p-3 bg-brand-light rounded-2xl w-fit text-brand-blue">
                <HelpCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-navy font-sans">
                  Still have a question?
                </h3>
                <p className="text-[13.5px] text-brand-navy/70 mt-1 font-sans leading-relaxed">
                  Our local support team is ready to assist you with customized collections or delicate item quotes.
                </p>
              </div>
              <button
                onClick={handleScrollToForm}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 bg-brand-navy hover:bg-brand-blue text-white text-sm font-semibold rounded-2xl transition-all duration-300 cursor-pointer"
              >
                <span>Ask Our Team</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Accordions Stack */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-brand-light rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[15px] sm:text-[16px] text-brand-navy leading-snug">
                      {faq.question}
                    </span>
                    <div className={`p-1 rounded-full transition-colors ${
                      isOpen ? 'bg-brand-blue/15 text-brand-blue' : 'bg-brand-light text-brand-navy/40'
                    }`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {/* Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-[14px] text-brand-navy/75 leading-relaxed font-sans border-t border-brand-light/30">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
