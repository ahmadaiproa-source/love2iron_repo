import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Mail, Phone, Map } from 'lucide-react';
import { SERVICE_AREAS, CONTACT_INFO } from '../constants';

export default function ServiceAreas() {
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
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Info & Area Badges */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider rounded-full mb-4 uppercase">
                <span>✦</span> Coverage Map
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-6 font-sans leading-tight">
                Serving Hampton Hill, Hampton &amp; nearby South West London areas
              </h2>
              <p className="text-[16px] text-brand-navy/80 leading-relaxed font-sans mb-6">
                Love 2 Iron is based in Hampton Hill and supports customers across Hampton, TW12, and nearby South West London areas with laundry, dry cleaning, ironing, curtain cleaning, wedding dress cleaning, and garment care services.
              </p>
              
              {/* Address detail card */}
              <div className="flex items-start gap-3 p-4 bg-brand-light rounded-2xl border border-brand-light max-w-md">
                <MapPin className="text-brand-gold mt-1 shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-brand-navy font-sans">Our Service Headquarters</h4>
                  <p className="text-[13.5px] text-brand-navy/80 font-sans mt-0.5">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Service Areas Grid list (No fake badge, just beautiful clean pills) */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 mb-4 font-sans">
                Our Collection &amp; Delivery Zone
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SERVICE_AREAS.map((area, idx) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-light/75 hover:bg-brand-blue/10 border border-brand-light rounded-xl text-[14px] font-medium text-brand-navy transition-all font-sans cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={handleScrollToForm}
                className="bg-brand-blue hover:bg-brand-blue/95 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-brand-blue/10 transition-all cursor-pointer"
              >
                Check Collection Availability
              </button>
            </div>
          </div>

          {/* Right Column: Premium Custom Map Placeholder Card */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-xl bg-brand-navy text-white p-8 min-h-[420px] flex flex-col justify-between">
              
              {/* Decorative Abstract Map Grid in SVG */}
              <div className="absolute inset-0 opacity-20 pointer-events-none select-none" aria-hidden="true">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Concentric service zone circles */}
                  <circle cx="50%" cy="50%" r="80" fill="none" stroke="#BFAE8E" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="50%" cy="50%" r="140" fill="none" stroke="#3051C7" strokeWidth="1.5" strokeDasharray="4,4" />
                </svg>
              </div>

              {/* Map header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <Navigation size={14} className="text-brand-gold animate-bounce" />
                  <span className="text-[11px] font-bold tracking-wider uppercase">Active Service Area</span>
                </div>
                <Map size={18} className="text-white/40" />
              </div>

              {/* Centered location pulsing pinpoint */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Outer pulsing rings */}
                  <div className="absolute -inset-4 bg-brand-gold/30 rounded-full animate-ping" />
                  <div className="absolute -inset-8 bg-brand-blue/20 rounded-full animate-pulse" />
                  {/* Center pin container */}
                  <div className="relative w-12 h-12 rounded-full bg-brand-blue border-2 border-white flex items-center justify-center shadow-lg">
                    <MapPin size={22} className="text-brand-gold" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold tracking-tight font-sans text-white">
                    Love 2 Iron — Hampton Hill, Hampton TW12
                  </h4>
                  <p className="text-xs text-brand-gold font-medium mt-1 uppercase tracking-wider font-sans">
                    Shop &amp; Local Service Point
                  </p>
                </div>
              </div>

              {/* Map Footer showing simple service area range stat */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                <div className="grid grid-cols-2 gap-4 divide-x divide-white/10 text-center">
                  <div>
                    <span className="block text-[11px] text-white/60 uppercase tracking-wider font-sans">Zone Coverage</span>
                    <span className="text-lg font-bold font-sans text-brand-gold">Hampton Hill + Nearby Areas</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-white/60 uppercase tracking-wider font-sans">Local Response</span>
                    <span className="text-lg font-bold font-sans text-brand-gold">Subject to Availability</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
