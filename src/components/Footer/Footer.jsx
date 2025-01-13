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
      // ^ adjust the offset (e.g. `-10`) as needed

      if (isAtBottom) {
        // If the user is at (or near) the bottom, show the navbar
        setShowMobileSocials(true);
      } else if (currentScrollY < lastScrollY) {
        // User is scrolling UP
        setShowMobileSocials(true);
      } else {
        // User is scrolling DOWN (and not at bottom)
        setShowMobileSocials(false);
      }

      lastScrollY = currentScrollY;
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 
        =========================
        Mobile Socials as Bottom Navbar
        =========================
      */}
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
          py-3
          transition-transform
          duration-300
          ${showMobileSocials ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <a
          href="https://wa.me/77771544455"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-white flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <FaWhatsapp className="h-6 w-6" />
          <span className="text-xs">WhatsApp</span>
        </a>
        <a
          href="tel:+77015367873"
          aria-label="Phone"
          className="text-white flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <PhoneIcon className="h-6 w-6" />
          <span className="text-xs">Телефон</span>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <FaLinkedin className="h-6 w-6" />
          <span className="text-xs">LinkedIn</span>
        </a>
      </div>

      {/* 
        =========================
        Desktop Footer (unchanged)
        =========================
      */}
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
                Delivering your value
              </p>
            </div>
          </div>

          {/* Social Icons for Desktop */}
          <div className="hidden md:flex justify-center items-center space-x-6 mt-4 mb-4">
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
    </>
  );
};

export default Footer;
