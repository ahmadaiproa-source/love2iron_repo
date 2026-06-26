import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { PRICING_CATEGORIES } from '../constants';

export default function Pricing() {
  // Let's implement interactive expansions for Dry Cleaning (Category 0) and Repairs/Alterations (Category 2)
  const [dryCleaningExpanded, setDryCleaningExpanded] = useState(false);
  const [repairsExpanded, setRepairsExpanded] = useState(false);

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
    <section id="pricing" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider rounded-full mb-4 uppercase">
            <span>✦</span> Pricing Guide
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-4 font-sans leading-tight">
            Clear guide pricing for garment care
          </h2>
          <p className="text-[15px] sm:text-[16px] text-brand-navy/80 leading-relaxed font-sans">
            Use this as a guide to understand starting prices. Final pricing may depend on item type, fabric, size, condition, and cleaning requirements.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PRICING_CATEGORIES.map((category, catIdx) => {
            // Check if we need to collapse/expand items for Dry Cleaning (idx 0) or Repairs (idx 2)
            const isCollapsible = catIdx === 0 || catIdx === 2;
            const isExpanded = catIdx === 0 ? dryCleaningExpanded : repairsExpanded;
            const toggleExpand = () => {
              if (catIdx === 0) setDryCleaningExpanded(!dryCleaningExpanded);
              if (catIdx === 2) setRepairsExpanded(!repairsExpanded);
            };

            // Limit initial visible items if collapsible
            const visibleItems = isCollapsible && !isExpanded 
              ? category.items.slice(0, 6) 
              : category.items;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-brand-light shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300"
              >
                {/* Category Header */}
                <div className="bg-brand-blue px-6 py-5 text-white">
                  <h3 className="text-lg font-bold tracking-tight font-sans">
                    {category.title}
                  </h3>
                  <p className="text-xs text-white/80 font-medium mt-0.5 uppercase tracking-wider font-sans">
                    {category.subtitle}
                  </p>
                </div>

                {/* Items List */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    {visibleItems.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-end gap-3 text-[14px]">
                        {/* Item Name */}
                        <span className="font-medium text-brand-navy shrink-0 font-sans">
                          {item.name}
                        </span>
                        
                        {/* Dotted Spacer */}
                        <div className="flex-grow border-b border-dashed border-brand-gold/30 mb-1" />
                        
                        {/* Item Price */}
                        <span className="font-semibold text-brand-navy text-right shrink-0 font-sans">
                          {item.price}
                        </span>
                      </div>
                    ))}

                    {/* Inline view-more list anim */}
                    {isCollapsible && (
                      <div className="pt-2">
                        <button
                          onClick={toggleExpand}
                          className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-brand-blue/20 text-brand-blue hover:bg-brand-light text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer"
                        >
                          <span>{isExpanded ? "Show Less" : "View More Pricing"}</span>
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Informational Hint for specialist categories */}
                  {(catIdx === 3 || catIdx === 4) && (
                    <div className="mt-6 p-3 bg-brand-light/50 rounded-xl flex items-start gap-2 border border-brand-light">
                      <HelpCircle size={14} className="text-brand-gold mt-0.5 shrink-0" />
                      <p className="text-[11.5px] text-brand-navy/70 leading-normal font-sans">
                        Prices are highly dependent on fabric layers, lining materials, and embellishments.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy hover:bg-brand-blue text-white text-base font-semibold rounded-full shadow-lg hover:shadow-brand-blue/10 transition-all cursor-pointer"
          >
            <span>Need a custom quote? Book a Collection</span>
          </button>
        </div>

      </div>
    </section>
  );
}
