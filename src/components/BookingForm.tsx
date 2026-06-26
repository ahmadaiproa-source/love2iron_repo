import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, AlertCircle, Calendar, MapPin, User, Phone, Mail, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface BookingFormProps {
  selectedService: string;
  setSelectedService: (service: string) => void;
}

export default function BookingForm({ selectedService, setSelectedService }: BookingFormProps) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [collectionArea, setCollectionArea] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');

  // Form error states
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selectedService to dropdown
  const servicesList = [
    "Laundry Service",
    "Dry Cleaning",
    "Ironing Service",
    "Wedding Dress Cleaning",
    "Curtain Cleaning",
    "Repairs / Alterations",
    "Winter Jackets / Overcoat",
    "Collection / Delivery Enquiry",
    "Not sure yet"
  ];

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!phoneNumber.trim()) tempErrors.phoneNumber = "Phone / WhatsApp Number is required";
    if (!selectedService) tempErrors.service = "Please select a required service";
    if (!message.trim()) tempErrors.message = "Please describe your items or message details";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!validateForm()) {
      return;
    }

    // Compose the precise WhatsApp message format requested
    const formattedMessage = `Hi Love 2 Iron, I’d like to enquire about your garment care service.
Name: ${fullName.trim()}
Phone: ${phoneNumber.trim()}
Email: ${email.trim() || 'Not provided'}
Service Required: ${selectedService}
Area: ${collectionArea.trim() || 'Not specified'}
Preferred Date: ${preferredDate || 'Not specified'}
Message:
${message.trim()}

Please contact me with the next steps.`;

    // URL encode the message
    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/447000123456?text=${encodedText}`;

    // Reset submission feedback banner after brief delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);

    // Open WhatsApp in a new tab securely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider rounded-full mb-4 uppercase">
            <span>✦</span> Secure Booking
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-4 font-sans leading-tight">
            Book your garment care service
          </h2>
          <p className="text-[15px] sm:text-[16px] text-brand-navy/80 leading-relaxed font-sans">
            Tell us what you need and we’ll get back to confirm availability, pricing, and the next step.
          </p>
        </div>

        {/* Premium Form Card */}
        <div className="bg-brand-light/35 border border-brand-light rounded-[2rem] p-6 sm:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Success Feedback banner */}
            {isSubmitted && Object.keys(errors).length === 0 && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-2xl flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                <div className="text-sm font-sans">
                  <p className="font-bold">Launching WhatsApp Enquiry...</p>
                  <p className="mt-1 text-green-700/90">
                    We've opened a secure window to dispatch your details directly to our customer support. Please click send in WhatsApp!
                  </p>
                </div>
              </div>
            )}

            {/* Error Feedback Banner */}
            {isSubmitted && Object.keys(errors).length > 0 && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl flex items-start gap-3">
                <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                <div className="text-sm font-sans">
                  <p className="font-bold">Please correct the missing fields:</p>
                  <ul className="list-disc pl-5 mt-1 text-red-700/90 space-y-0.5">
                    {Object.values(errors).map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-bold text-brand-navy/95 block font-sans">
                  Full Name <span className="text-brand-blue font-bold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center text-brand-navy/40 pointer-events-none">
                    <User size={16} />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    placeholder="Enter your full name"
                    className={`w-full bg-white border ${
                      errors.fullName ? 'border-red-400 focus:ring-red-400/20' : 'border-brand-light focus:ring-brand-blue/20'
                    } rounded-xl py-3 pl-11 pr-4 text-sm text-brand-navy placeholder-brand-navy/35 focus:outline-none focus:ring-4 focus:border-brand-blue transition-all font-sans`}
                  />
                </div>
              </div>

              {/* Phone / WhatsApp Number */}
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="text-sm font-bold text-brand-navy/95 block font-sans">
                  Phone / WhatsApp Number <span className="text-brand-blue font-bold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center text-brand-navy/40 pointer-events-none">
                    <Phone size={16} />
                  </div>
                  <input
                    id="phoneNumber"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" });
                    }}
                    placeholder="e.g. +44 7000 123456"
                    className={`w-full bg-white border ${
                      errors.phoneNumber ? 'border-red-400 focus:ring-red-400/20' : 'border-brand-light focus:ring-brand-blue/20'
                    } rounded-xl py-3 pl-11 pr-4 text-sm text-brand-navy placeholder-brand-navy/35 focus:outline-none focus:ring-4 focus:border-brand-blue transition-all font-sans`}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-brand-navy/95 block font-sans">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center text-brand-navy/40 pointer-events-none">
                    <Mail size={16} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-white border border-brand-light rounded-xl py-3 pl-11 pr-4 text-sm text-brand-navy placeholder-brand-navy/35 focus:outline-none focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-sans"
                  />
                </div>
              </div>

              {/* Service Required Dropdown */}
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-brand-navy/95 block font-sans">
                  Service Required <span className="text-brand-blue font-bold">*</span>
                </label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    if (errors.service) setErrors({ ...errors, service: "" });
                  }}
                  className={`w-full bg-white border ${
                    errors.service ? 'border-red-400' : 'border-brand-light'
                  } rounded-xl py-3 px-4 text-sm text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-sans`}
                >
                  <option value="" disabled>-- Select Service Required --</option>
                  {servicesList.map((service, i) => (
                    <option key={i} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Preferred Collection Area */}
              <div className="space-y-2">
                <label htmlFor="area" className="text-sm font-bold text-brand-navy/95 block font-sans">
                  Preferred Collection Area
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center text-brand-navy/40 pointer-events-none">
                    <MapPin size={16} />
                  </div>
                  <input
                    id="area"
                    type="text"
                    value={collectionArea}
                    onChange={(e) => setCollectionArea(e.target.value)}
                    placeholder="e.g. Hampton Hill, Teddington"
                    className="w-full bg-white border border-brand-light rounded-xl py-3 pl-11 pr-4 text-sm text-brand-navy placeholder-brand-navy/35 focus:outline-none focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-sans"
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-bold text-brand-navy/95 block font-sans">
                  Preferred Collection Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center text-brand-navy/40 pointer-events-none">
                    <Calendar size={16} />
                  </div>
                  <input
                    id="date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-white border border-brand-light rounded-xl py-3 pl-11 pr-4 text-sm text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-sans"
                  />
                </div>
              </div>

            </div>

            {/* Message / Item Details */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-brand-navy/95 block font-sans">
                Message / Item Details <span className="text-brand-blue font-bold">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                placeholder="List the garments you need care for (e.g., 5 shirts, 2 suits, double duvet cover) or explain your special care requests..."
                className={`w-full bg-white border ${
                  errors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-brand-light focus:ring-brand-blue/20'
                } rounded-xl py-3 px-4 text-sm text-brand-navy placeholder-brand-navy/35 focus:outline-none focus:ring-4 focus:border-brand-blue transition-all font-sans`}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blue/95 text-white text-base font-bold rounded-full shadow-lg hover:shadow-brand-blue/20 transition-all cursor-pointer"
              >
                <span>Send Enquiry via WhatsApp</span>
                <Send size={16} className="ml-1" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
