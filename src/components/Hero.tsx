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
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-brand-light min-h-[580px] lg:min-h-[640px] flex items-center shadow-xl">
        {/* Background Image with Premium Overlay */}
        <div 
          className="absolute inset-0 select-none pointer-events-none"
          style={{ 
            backgroundImage: `linear-gradient(90deg, rgba(246,245,244,0.96) 0%, rgba(246,245,244,0.88) 42%, rgba(246,245,244,0.35) 70%, rgba(246,245,244,0.12) 100%), url('https://res.cloudinary.com/dfywgxkn3/image/upload/v1782563953/love_2_iron_image_for_background_hero_section_lyuriu.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
          }}
          aria-hidden="true"
        />
        
        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 py-16 md:p-16 lg:p-20 text-brand-navy flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-[1.15] mb-6 font-sans">
              Laundry, Dry Cleaning <br className="hidden sm:inline" />
              &amp; Ironing in Hampton
            </h1>
            
            <p 
              className="text-[16px] sm:text-[18px] leading-relaxed font-normal mb-8 max-w-xl font-sans"
              style={{ color: 'rgba(31, 40, 98, 0.78)' }}
            >
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
                className="bg-transparent hover:bg-brand-navy/5 text-brand-navy font-semibold px-8 py-3.5 rounded-full border border-brand-navy/20 transition-all text-center cursor-pointer"
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
            <div 
              className="backdrop-blur-md rounded-2xl p-5 border shadow-sm flex flex-col justify-between"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.82)', borderColor: 'rgba(191, 174, 142, 0.28)' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-blue/10 rounded-xl text-brand-blue mt-0.5">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-brand-navy mb-1.5 font-sans">Book a Collection</h3>
                  <p className="text-[13.5px] text-brand-navy/80 leading-relaxed font-sans">
                    Request laundry, dry cleaning, ironing, or specialist garment care in a few simple steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Glass Card 2 */}
            <div 
              className="backdrop-blur-md rounded-2xl p-5 border shadow-sm flex flex-col justify-between"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.82)', borderColor: 'rgba(191, 174, 142, 0.28)' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-blue/10 rounded-xl text-brand-blue mt-0.5">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-brand-navy mb-1.5 font-sans">Specialist Garment Care</h3>
                  <p className="text-[13.5px] text-brand-navy/80 leading-relaxed font-sans">
                    From everyday laundry to wedding dresses and curtains, every item is handled with care.
                  </p>
                </div>
              </div>
            </div>

            {/* Glass Card 3 */}
            <div 
              className="backdrop-blur-md rounded-2xl p-5 border shadow-sm flex flex-col justify-between"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.82)', borderColor: 'rgba(191, 174, 142, 0.28)' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-blue/10 rounded-xl text-brand-blue mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-brand-navy mb-1.5 font-sans">Serving Hampton Hill</h3>
                  <p className="text-[13.5px] text-brand-navy/80 leading-relaxed font-sans">
                    Local garment care from Hampton Hill for Hampton and nearby South West London areas.
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
