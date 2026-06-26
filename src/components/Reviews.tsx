import React from 'react';
import { motion } from 'motion/react';
import { Quote, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Reviews() {
  // Let's generate initials for initials badges
  const getInitials = (name: string): string => {
    if (name === "Local Customer") return "LC";
    if (name === "Hampton Resident") return "HR";
    if (name === "Customer Review") return "CR";
    return "C";
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider rounded-full mb-4 uppercase">
            <span>✦</span> Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-4 font-sans leading-tight">
            What customers say
          </h2>
          <p className="text-[15px] sm:text-[16px] text-brand-navy/80 leading-relaxed font-sans">
            Customer-style feedback for everyday laundry, dry cleaning, ironing, and garment care.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-brand-light/35 border border-brand-light rounded-3xl p-8 flex flex-col justify-between relative hover:bg-brand-light/65 transition-colors duration-300"
            >
              {/* Quotation Mark Accent */}
              <div className="absolute top-6 right-8 text-brand-gold/20">
                <Quote size={40} className="fill-current" />
              </div>

              {/* Review Text */}
              <div className="relative z-10 mb-8">
                <p className="text-[15.5px] sm:text-[16px] text-brand-navy/90 leading-relaxed font-medium italic font-sans">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Customer Info Row */}
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-brand-light/70">
                {/* Custom Initials Circle Badge */}
                <div className="w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm tracking-wide shadow-sm select-none shrink-0">
                  {getInitials(review.name)}
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-brand-navy font-sans leading-tight">
                    {review.name}
                  </h4>
                  {/* Service tag */}
                  <span className="inline-block mt-1 text-[11px] font-bold text-brand-gold tracking-wider uppercase font-sans">
                    {review.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Customer Feedback Info bar */}
        <div className="mt-12 p-4 bg-brand-light/40 border border-brand-light rounded-2xl max-w-xl mx-auto flex items-center justify-center gap-2.5">
          <MessageSquare size={15} className="text-brand-blue" />
          <p className="text-xs text-brand-navy/70 text-center font-sans">
            Every review represents real local feedback from Hampton and nearby clients.
          </p>
        </div>

      </div>
    </section>
  );
}
