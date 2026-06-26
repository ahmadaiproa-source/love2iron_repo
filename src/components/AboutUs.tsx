import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      title: "Careful Handling",
      text: "We treat everyday and delicate garments with attention to fabric, finish, and presentation."
    },
    {
      title: "Clear Communication",
      text: "Simple booking, helpful updates, and an easy process from enquiry to collection."
    },
    {
      title: "Fresh Finish",
      text: "Clothes are returned clean, pressed, and ready for work, events, and daily wear."
    }
  ];

  return (
    <section id="about" className="py-20 bg-brand-light/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Values */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              {/* Badge element mimicking template */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider rounded-full mb-4 uppercase">
                <span>✦</span> Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-6 leading-tight">
                Garment care made simple for busy lives
              </h2>
              <p className="text-[16px] text-brand-navy/80 leading-relaxed max-w-xl">
                Love 2 Iron provides laundry, dry cleaning, ironing, and specialist garment care for customers who want reliable service without stress. From everyday clothes to delicate items, we focus on care, presentation, and convenience.
              </p>
            </div>

            {/* Value Points */}
            <div className="space-y-6 max-w-lg">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mt-1">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[17px] text-brand-navy mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-[14px] text-brand-navy/70 leading-relaxed">
                      {val.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Image Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft decorative background box accent */}
            <div className="absolute -inset-4 bg-brand-gold/15 rounded-[2.5rem] transform rotate-2 -z-10" />
            
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-xl max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80"
                alt="Neatly stacked and fresh sweaters representing premium garment care"
                className="w-full h-[450px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Gold floating overlay element representing brand luxury */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-brand-light">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                  <p className="text-xs font-semibold text-brand-navy tracking-wider uppercase">
                    Love 2 Iron Hampton
                  </p>
                </div>
                <p className="text-[13px] text-brand-navy/75 mt-1">
                  Meticulous finishing. Every fold, every crease, handled with expertise.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
