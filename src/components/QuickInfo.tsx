import React from 'react';
import { Truck, Shirt, Sparkles, MapPin } from 'lucide-react';

export default function QuickInfo() {
  const cards = [
    {
      icon: <Truck size={18} className="text-brand-blue" />,
      title: "Collection Available",
      text: "Ask about local collection and delivery options."
    },
    {
      icon: <Shirt size={18} className="text-brand-blue" />,
      title: "Laundry & Ironing",
      text: "Fresh, folded, pressed, and ready to wear."
    },
    {
      icon: <Sparkles size={18} className="text-brand-blue" />,
      title: "Specialist Cleaning",
      text: "Wedding dresses, curtains, coats, and delicate garments."
    },
    {
      icon: <MapPin size={18} className="text-brand-blue" />,
      title: "Local Hampton Service",
      text: "Serving Hampton and surrounding areas."
    }
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-brand-light shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-brand-light">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-4 ${
                idx > 0 ? 'pt-6 sm:pt-0 lg:pl-8' : ''
              } ${
                idx === 1 ? 'sm:pl-4 lg:pl-8' : ''
              } ${
                idx === 2 ? 'lg:pl-8' : ''
              } ${
                idx === 3 ? 'sm:pl-4 lg:pl-8' : ''
              }`}
            >
              <div className="p-2.5 bg-brand-light rounded-xl text-brand-blue flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <h4 className="font-semibold text-[15px] text-brand-navy mb-1">
                  {card.title}
                </h4>
                <p className="text-[13px] text-brand-navy/70 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
