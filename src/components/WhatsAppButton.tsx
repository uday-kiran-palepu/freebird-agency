import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916303464811?text=Hi! I\'m interested in your creative services.', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+916303464811';
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      {/* Phone Call Button */}
      <button
        onClick={handlePhoneClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transform hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Call us at +91 6303464811"
      >
        <Phone className="h-6 w-6" />
      </button>
      
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-primary-500 text-white p-4 rounded-full shadow-lg hover:bg-primary-600 hover:shadow-xl transform hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default WhatsAppButton;