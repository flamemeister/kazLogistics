import React, { useEffect, useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo_white.png";

const Footer = () => {
  const [showMobileSocials, setShowMobileSocials] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.offsetHeight;
      const isAtBottom = windowHeight + currentScrollY >= pageHeight - 10;
      
      if (isAtBottom) {
        setShowMobileSocials(true);
      } else if (currentScrollY < lastScrollY) {
        setShowMobileSocials(true);
      } else {
        setShowMobileSocials(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Socials */}
      <div
        className={`
          fixed
          bottom-0
          left-0
          right-0
          md:hidden
          z-50
          bg-green-600
          flex
          justify-around
          items-center
          py-4
          transition-transform
          duration-300
          ${showMobileSocials ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <a
          href="https://wa.me/77027714828"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-white flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <FaWhatsapp className="h-10 w-10" />
          <span className="text-sm">WhatsApp</span>
        </a>
        <a
          href="tel:+77027714828"
          aria-label="Phone"
          className="text-white flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <PhoneIcon className="h-10 w-10" />
          <span className="text-sm">Телефон</span>
        </a>
        <a
          href="https://www.linkedin.com/company/great-steppe-logistics-llp/about/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <FaLinkedin className="h-10 w-10" />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>

      {/* Desktop Footer (hidden on mobile) */}
      <footer className="hidden md:block bg-[#0A5225] text-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
          {/* Copyright */}
          <p className="text-base">
            &copy; 2024 <span className="font-normal">Great Steppe Logistics</span>
          </p>

          {/* Desktop Social Icons */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
            <a
              href="https://wa.me/77771544455"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:scale-110 transition-transform"
            >
              <FaWhatsapp className="h-10 w-10 text-white hover:text-gray-300" />
            </a>
            <a
              href="tel:+77027714828"
              aria-label="Phone"
              className="hover:scale-110 transition-transform"
            >
              <PhoneIcon className="h-10 w-10 text-white hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/great-steppe-logistics-llp/about/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin className="h-10 w-10 text-white hover:text-gray-300" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
