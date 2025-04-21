import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import logo from "../../assets/logo_white.png";

import kz_flag from "../../assets/images/kz_flag.png";
import ru_flag from "../../assets/images/ru_flag.png";
import eng_flag from "../../assets/images/eng_flag.png";
import ch_flag from "../../assets/images/ch_flag.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState("Рус");

  // State to track whether to hide only the top bar (phone & email)
  const [hideTopBar, setHideTopBar] = useState(false);
  const { t, i18n } = useTranslation();

  const languageImages = {
    Рус: ru_flag,
    Қаз: kz_flag,
    Eng: eng_flag,
    中文: ch_flag,
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // If we're about to open the mobile menu, close the language dropdown
    if (!menuOpen) {
      setLanguageMenuOpen(false);
    }
  };

  // Language dropdown toggle
  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

const changeLanguage = (lang) => {
  setLanguage(lang);
  setLanguageMenuOpen(false);
  i18n.changeLanguage(lang);
};


  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-green-600 text-white shadow-md">
      <div className={`bg-green-650 transition-transform duration-300`}>
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

      <nav className="max-w-7xl mx-auto my-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img src={logo} alt="Logo" className="h-10 object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex font-semibold items-center space-x-8">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Главная
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Услуги
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            О нас
          </Link>
          <Link
            to="/contacts"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Контакты
          </Link>

          {/* Language Selector (Desktop) */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setLanguageMenuOpen(true)}
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

            {/* Dropdown */}
            {languageMenuOpen && (
              <div className="absolute right-0 top-full bg-white text-gray-900 shadow-lg rounded-lg w-40 z-50">
                {Object.keys(languageImages).map((lang) => (
                  <button
                    key={lang}
                    className="flex items-center px-4 py-2 text-left w-full hover:bg-gray-100"
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
          <button
            onClick={toggleMenu}
            className="text-current focus:outline-none"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-green-700 text-white z-40">
            {/* Close button in top-right corner */}
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu}>
                <svg
                  className="h-8 w-8"
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

            <div className="pt-8 px-6">
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

              {/* Language selector in mobile menu */}
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
