import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Shield, MapPin } from 'lucide-react';

export default function Hero() {
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

  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Large Rounded Hero Container */}
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-brand-navy min-h-[580px] lg:min-h-[640px] flex items-center shadow-xl">
        {/* Background Image with Premium Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dfywgxkn3/image/upload/v1782512285/ironing_image_-_hero_background_szj5yn.png')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/60 mix-blend-multiply" />
        
        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 py-16 md:p-16 lg:p-20 text-white flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6 font-sans">
              Laundry, Dry Cleaning <br className="hidden sm:inline" />
              &amp; Ironing in Hampton
            </h1>
            
            <p className="text-[16px] sm:text-[18px] text-white/90 leading-relaxed font-normal mb-8 max-w-xl font-sans">
              Love 2 Iron helps busy households and professionals keep clothes fresh, clean, pressed, and ready to wear with reliable local garment care.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={() => handleScrollTo('contact')}
                className="bg-brand-blue hover:bg-brand-blue/95 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-brand-blue/20 transition-all text-center cursor-pointer"
              >
                Book a Collection
              </button>
              <button
                onClick={() => handleScrollTo('services')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 backdrop-blur-sm transition-all text-center cursor-pointer"
              >
                View Services
              </button>
            </div>
          </motion.div>

          {/* Bottom Glass-style Cards (Stretched across the bottom inside the container on big screens, stacked below on mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full mt-auto"
          >
            {/* Glass Card 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-gold/20 rounded-xl text-brand-gold mt-0.5">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-white mb-1.5">Book a Collection</h3>
                  <p className="text-[13.5px] text-white/80 leading-relaxed">
                    Request laundry, dry cleaning, ironing, or specialist garment care in a few simple steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Glass Card 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-gold/20 rounded-xl text-brand-gold mt-0.5">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-white mb-1.5">Specialist Garment Care</h3>
                  <p className="text-[13.5px] text-white/80 leading-relaxed">
                    From everyday laundry to wedding dresses and curtains, every item is handled with care.
                  </p>
                </div>
              </div>
            </div>

            {/* Glass Card 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-gold/20 rounded-xl text-brand-gold mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-white mb-1.5">Serving Hampton</h3>
                  <p className="text-[13.5px] text-white/80 leading-relaxed">
                    Local garment care support across Hampton and nearby London areas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
