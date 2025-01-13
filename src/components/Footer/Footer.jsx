import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo_white.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A5225] text-gray-100 pt-6 pb-3">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row with logo and company info */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-6">
          {/* Logo and centered slogan */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <img
              src={logo}
              alt="Great Steppe Logistics"
              className="h-12"
            />
            <p className="text-gray-300 text-sm leading-relaxed mt-2 text-center">
            We deliver your value
            </p>
          </div>
        </div>

        {/* Social Icons in the bottom center */}
        <div className="flex justify-center items-center space-x-6 mt-4 mb-4">
          <a
            href="https://wa.me/77771544455"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:scale-110 transition-transform"
          >
            <FaWhatsapp className="h-8 w-8 text-white hover:text-gray-300" />
          </a>
          <a
            href="tel:+77015367873"
            aria-label="Phone"
            className="hover:scale-110 transition-transform"
          >
            <PhoneIcon className="h-8 w-8 text-white hover:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin className="h-8 w-8 text-white hover:text-gray-300" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-3 text-center text-sm text-gray-300">
          © All Rights Reserved. Great Steppe Logistics
        </div>
      </div>
    </footer>
  );
};

export default Footer;
