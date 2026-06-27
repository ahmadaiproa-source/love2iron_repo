import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ServiceAreas from './components/ServiceAreas';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { CONTACT_INFO } from './constants';

export default function App() {
  // Shared state to allow pre-selecting the service when "Book This Service" is clicked
  const [selectedService, setSelectedService] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col bg-brand-light antialiased selection:bg-brand-blue/20 selection:text-brand-navy">
      
      {/* 1. Header Section */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 4. About Us Section */}
        <AboutUs />

        {/* 5. Services Section */}
        <Services onSelectService={setSelectedService} />

        {/* 6. Pricing Section */}
        <Pricing />

        {/* 7. Service Areas Section */}
        <ServiceAreas />

        {/* 8. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 9. Reviews Section */}
        <Reviews />

        {/* 10. FAQ Section */}
        <FAQ />

        {/* 11. Contact / Booking Form Section */}
        <BookingForm 
          selectedService={selectedService} 
          setSelectedService={setSelectedService} 
        />

        {/* 12. Final CTA Section */}
        <FinalCTA />
      </main>

      {/* 13. Footer Section */}
      <Footer />

      {/* Floating Premium WhatsApp Button */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#1EBE5D] hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/30 border border-white/20 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp for rapid assistance"
      >
        {/* Crisp vector SVG of standard WhatsApp icon inside the premium button */}
        <svg
          className="w-6 h-6 md:w-7 md:h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.987 4.479-9.987 9.987 0 1.763.459 3.479 1.33 5l-1.354 4.954 5.074-1.332a9.92 9.92 0 0 0 4.937 1.312h.004c5.505 0 9.986-4.479 9.986-9.987 0-2.667-1.039-5.174-2.928-7.062A9.907 9.907 0 0 0 12.012 2zm5.726 14.161c-.249.702-1.241 1.285-1.716 1.352-.471.067-.923.111-2.986-.713-2.637-1.053-4.301-3.763-4.433-3.94-.132-.178-1.076-1.433-1.076-2.736 0-1.302.662-1.942.894-2.203.232-.261.507-.326.674-.326l.485.002c.159.002.373-.06.584.444.215.513.733 1.786.797 1.916.064.13.106.282.02.456-.086.174-.129.282-.257.433-.129.152-.271.341-.387.457-.13.13-.265.271-.115.529.151.258.67 1.102 1.436 1.78.987.872 1.815 1.144 2.073 1.272.258.128.409.108.56-.067.151-.174.646-.75.819-1.008.173-.258.345-.218.582-.13l1.83.86c.237.112.394.167.453.266.059.098.059.57-.19 1.272z" />
        </svg>
        
        {/* Floating tooltip label revealed on hover on desktop */}
        <span className="absolute right-16 bg-brand-navy text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-xl border border-white/10 shadow shadow-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:inline-block">
          WhatsApp Support
        </span>
      </a>

    </div>
  );
}
