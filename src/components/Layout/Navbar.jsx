import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import logo from "../../assets/logo_new_3.png";

import kz_flag from "../../assets/images/kz_flag.png";
import ru_flag from "../../assets/images/ru_flag.png";
import eng_flag from "../../assets/images/eng_flag.png";
import ch_flag from "../../assets/images/ch_flag.png";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = {
    ru: { label: "Рус", flag: ru_flag },
    kk: { label: "Қаз", flag: kz_flag },
    en: { label: "Eng", flag: eng_flag },
    zh: { label: "中文", flag: ch_flag },
  };

  const currentLang = i18n.language || "kk";

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("i18nextLng", langCode);
    setLanguageMenuOpen(false);
    setMenuOpen(false); // close mobile if open
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) setLanguageMenuOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setHideTopBar(currentScrollY > lastScrollY && currentScrollY > 50);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-green-600 text-white shadow-md">
      {!hideTopBar && (
        <div className="bg-green-650 transition-transform duration-300">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-center md:justify-end items-center space-x-4 text-sm">
            <a href="tel:+77027714828" className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-1" />
              +7 (702) 771 48 28 
            </a>
            <a href="mailto:info@gslog.kz" className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-1" />
              info@gslog.kz
            </a>
          </div>
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img src={logo} alt="Logo" className="h-16 object-contain" />
        </Link>

        <div className="hidden md:flex font-semibold items-center space-x-8">
          <Link to="/" className="hover:text-gray-200">{t("nav.home")}</Link>
          <Link to="/services" className="hover:text-gray-200">{t("nav.services")}</Link>
          <Link to="/about" className="hover:text-gray-200">{t("nav.about")}</Link>
          <Link to="/contacts" className="hover:text-gray-200">{t("nav.contacts")}</Link>

          <div
            className="relative"
            onMouseEnter={() => setLanguageMenuOpen(true)}
            onMouseLeave={() => setLanguageMenuOpen(false)}
          >
            <button className="flex items-center space-x-2">
              <img src={languages[currentLang]?.flag} alt="flag" className="h-6 w-6" />
              <span>{languages[currentLang]?.label}</span>
              <svg className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {languageMenuOpen && (
              <div className="absolute right-0 top-full bg-white text-gray-900 shadow-lg rounded-lg w-40 z-50">
                {Object.entries(languages).map(([code, { label, flag }]) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className="flex items-center px-4 py-2 w-full hover:bg-gray-100"
                  >
                    <img src={flag} alt={label} className="h-6 w-6 mr-2" />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Overlay */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-green-700 text-white z-40">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu}>
                <XMarkIcon className="h-8 w-8" />
              </button>
            </div>

            <div className="pt-8 px-6 text-center">
              <ul className="space-y-6 text-lg font-semibold">
                <li><Link to="/" onClick={toggleMenu}>{t("nav.home")}</Link></li>
                <li><Link to="/services" onClick={toggleMenu}>{t("nav.services")}</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>{t("nav.about")}</Link></li>
                <li><Link to="/contacts" onClick={toggleMenu}>{t("nav.contacts")}</Link></li>
              </ul>

              <div className="mt-8">
                {Object.entries(languages).map(([code, { label, flag }]) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className="block w-full text-lg font-semibold mb-2 flex items-center justify-center space-x-2"
                  >
                    <img src={flag} alt={label} className="h-6 w-6" />
                    <span>{label}</span>
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
