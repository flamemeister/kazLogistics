import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.png"; // Adjust path if needed

const Navbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState("Каз"); // Default to Kazakh

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) setLanguageMenuOpen(false); // Close language menu if mobile menu is toggled
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        navScrolled ? "bg-white text-gray-900 shadow-md" : "bg-transparent text-white"
      }`}
    >
      {/* Top bar */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          navScrolled ? "opacity-0 h-0" : "opacity-100 h-auto"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-center md:justify-end items-center space-x-4 text-sm">
          <a href="tel:+77273528880" className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-1" />
            +7 (727) 344 00 40
          </a>
          <a href="mailto:info@gslog.kz" className="flex items-center">
            <EnvelopeIcon className="h-5 w-5 mr-1" />
            info@gslog.kz
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="KazakhTransTrade Logo" className="h-10 object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="transition-colors duration-200">
            Главная
          </Link>
          <Link to="/services/all" className="transition-colors duration-200">
            Услуги
          </Link>
          <Link to="/about" className="transition-colors duration-200">
            О нас
          </Link>
          <Link to="/contacts" className="transition-colors duration-200">
            Контакты
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <button onClick={toggleLanguageMenu} className="flex items-center">
              {language}{" "}
              <svg
                className="h-4 w-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-900 shadow-lg rounded-lg w-28">
                <button
                  className="block px-4 py-2 text-left"
                  onClick={() => changeLanguage("Каз")}
                >
                  Қазақша
                </button>
                <button
                  className="block px-4 py-2 text-left"
                  onClick={() => changeLanguage("Рус")}
                >
                  Русский
                </button>
                <button
                  className="block px-4 py-2 text-left"
                  onClick={() => changeLanguage("Eng")}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-current focus:outline-none">
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-green-600 text-white z-40 p-6">
            <div className="flex justify-between items-center mb-6">
              <img src={logo} alt="Logo" className="h-8" />
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-6 text-lg font-semibold">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services/all" onClick={toggleMenu}>
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" onClick={toggleMenu}>
                  Контакты
                </Link>
              </li>
              <li>
                <div>
                  <button className="block text-lg font-semibold" onClick={() => changeLanguage("Каз")}>
                    Қазақша
                  </button>
                  <button className="block text-lg font-semibold" onClick={() => changeLanguage("Рус")}>
                    Русский
                  </button>
                  <button className="block text-lg font-semibold" onClick={() => changeLanguage("Eng")}>
                    English
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
