import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState("Каз");

  const languageImages = {
    Каз: "src/assets/images/kazakhstan.png",
    Рус: "src/assets/images/russia.png",
    Eng: "src/assets/images/united-kingdom.png",
    中文: "src/assets/images/china.png",
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) setLanguageMenuOpen(false);
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
        navScrolled ? "bg-green-600 text-gray-900 shadow-md" : "bg-transparent text-white"
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
          <img
            src="src/assets/logo_white.png"
            alt="Logo"
            className="h-10 object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex text-white font-semibold items-center space-x-8">
          <Link to="/" className="transition-colors duration-200">
            Главная
          </Link>
          <Link to="/services" className="transition-colors duration-200">
            Услуги
          </Link>
          <Link to="/about" className="transition-colors duration-200">
            О нас
          </Link>
          <Link to="/contacts" className="transition-colors duration-200">
            Контакты
          </Link>

          {/* Language Selector (Desktop) */}
          <div
            className="relative"
            onMouseLeave={() => setLanguageMenuOpen(false)}
          >
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center space-x-2"
            >
              <img
                src={languageImages[language]}
                alt={language}
                className="h-6 w-6 object-contain"
              />
              <span>{language}</span>
              <svg
                className="h-4 w-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-900 shadow-lg rounded-lg w-40">
                {Object.keys(languageImages).map((lang) => (
                  <button
                    key={lang}
                    className="flex items-center px-4 py-2 text-left w-full"
                    onClick={() => changeLanguage(lang)}
                  >
                    <img
                      src={languageImages[lang]}
                      alt={lang}
                      className="h-6 w-6 mr-2 object-contain"
                    />
                    {lang}
                  </button>
                ))}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-green-600 text-white z-40">
            {/* Close Button in top-right corner */}
            <div className="absolute top-4 right-4">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 
              We do NOT vertically center everything. 
              Instead, we only center horizontally. 
            */}
            <div className="pt-16 px-6">
              {/* Logo near the top, left as-is or slightly spaced */}
              <div className="mb-6">
                <img
                  src="src/assets/logo_white.png"
                  alt="Logo"
                  className="h-10"
                />
              </div>

              <ul className="space-y-6 text-lg font-semibold text-center">
                <li>
                  <Link to="/" onClick={toggleMenu}>
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/services" onClick={toggleMenu}>
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
              </ul>

              <div className="mt-8 text-center">
                {Object.keys(languageImages).map((lang) => (
                  <button
                    key={lang}
                    className="block text-lg font-semibold mb-2 mx-auto flex items-center space-x-2 justify-center"
                    onClick={() => {
                      changeLanguage(lang);
                      toggleMenu();
                    }}
                  >
                    <img
                      src={languageImages[lang]}
                      alt={lang}
                      className="h-6 w-6 object-contain"
                    />
                    <span>{lang}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
