import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const handleBookService = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    
    // Smooth scroll to contact form
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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider rounded-full mb-4 uppercase">
              <span>✦</span> Professional Care
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-4 font-sans leading-tight">
              Complete garment care for every wardrobe
            </h2>
            <p className="text-[16px] text-brand-navy/70 leading-relaxed font-sans">
              Choose the service you need — from regular laundry to specialist cleaning for delicate items. Every item is treated with meticulous care.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-navy hover:bg-brand-blue text-white text-sm font-semibold rounded-full transition-all duration-300 self-start lg:self-auto cursor-pointer"
          >
            <span>View Pricing Guide</span>
            <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col h-full bg-brand-light/30 border border-brand-light rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-brand-navy text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm border border-brand-light">
                  0{idx + 1}
                </span>
              </div>

              {/* Service Details Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors font-sans">
                  {service.title}
                </h3>
                
                <p className="text-[14px] text-brand-navy/75 mb-6 leading-relaxed flex-grow font-sans">
                  {service.description}
                </p>

                {/* Bullets List */}
                <ul className="space-y-3 mb-8" aria-label={`Included in ${service.title}`}>
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2.5 text-[13.5px] text-brand-navy/90 font-sans">
                      <CheckCircle2 size={15} className="text-brand-gold flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action Button */}
                <button
                  onClick={() => handleBookService(service.title)}
                  className="w-full mt-auto inline-flex items-center justify-between px-5 py-3 bg-white hover:bg-brand-blue text-brand-navy hover:text-white group-hover:bg-brand-blue group-hover:text-white border border-brand-light group-hover:border-brand-blue hover:border-brand-blue text-sm font-semibold rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:ring-offset-2 active:scale-[0.98]"
                >
                  <span>Book This Service</span>
                  <ArrowUpRight size={16} className="text-brand-gold group-hover:text-white hover:text-white transition-colors" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
