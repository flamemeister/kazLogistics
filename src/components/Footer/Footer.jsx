import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 pt-6 pb-3">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row with company info and schedule/contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 text-center">
          {/* Company info */}
          <div className="md:col-span-3">
            {/* If you want to show a footer logo: 
                <img src={footerLogo} alt="KazLogistics" className="h-10 mb-4" />
            */}
            <h3 className="text-xl font-bold mb-2">Great Steppe Logistics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering your value
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://wa.me/77771544455" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="h-8 w-8 text-green-600 hover:text-green-400" />
          </a>
          <a href="tel:+77015367873" aria-label="Phone">
            <PhoneIcon className="h-8 w-8 text-green-600 hover:text-green-400" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-8 w-8 text-green-600 hover:text-green-400" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-3 text-center text-sm text-gray-400">
          © All Rights Reserved. Great Steppe Logistics
        </div>
      </div>
    </footer>
  );
};

export default Footer;