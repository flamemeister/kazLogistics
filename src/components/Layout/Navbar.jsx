import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.png"; // Adjust path if needed

const Navbar = () => {
  // Track if user has scrolled past a certain point
  const [navScrolled, setNavScrolled] = useState(false);
  // Track mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  // Track dropdown ("Услуги") open/close
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled beyond 80px, make navScrolled = true
      if (window.scrollY > 80) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // If we open the menu, also ensure services menu is closed
    if (!menuOpen) setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const closeServices = () => {
    setServicesOpen(false);
  };

  return (
    <header
      className={`
        fixed w-full z-50 transition-colors duration-300 
        ${navScrolled ? "bg-white text-gray-900 shadow-md" : "bg-transparent text-white"}
      `}
    >
      {/* Top bar with phone & email, disappears after scroll */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${navScrolled ? "opacity-0 h-0" : "opacity-100 h-auto"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-6 text-sm">
          <a href="tel:+77273528880" className="flex items-center hover:opacity-80">
            <PhoneIcon className="h-5 w-5 mr-1" />
            +7 (727) 352 88 80
          </a>
          <a
            href="mailto:info@gslog.kz"
            className="flex items-center hover:opacity-80"
          >
            <EnvelopeIcon className="h-5 w-5 mr-1" />
            info@gslog.kz
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="KazakhTransTrade Logo"
              className="h-10 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="hover:text-green-500 transition-colors duration-200"
          >
            Главная
          </Link>

          {/* Услуги (dropdown) */}
          <div className="relative">
            <button
              onClick={toggleServices}
              className="inline-flex items-center hover:text-green-500 transition-colors duration-200 focus:outline-none"
            >
              Услуги
              <svg
                className="ml-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.67l3.71-3.44a.75.75 0 111.04 1.08l-4.24 3.92a.75.75 0 01-1.04 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/services/all"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeServices}
                    >
                      Все услуги
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/example"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeServices}
                    >
                      Пример услуги
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="hover:text-green-500 transition-colors duration-200"
          >
            О нас
          </Link>
          <Link
            to="/gallery"
            className="hover:text-green-500 transition-colors duration-200"
          >
            Галерея
          </Link>
          <Link
            to="/contacts"
            className="hover:text-green-500 transition-colors duration-200"
          >
            Контакты
          </Link>
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-current focus:outline-none"
          >
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-green-600 text-white z-40 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4">
            <img src={logo} alt="Logo" className="h-8" />
            <button onClick={toggleMenu} className="text-white focus:outline-none">
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
          <ul className="mt-12 space-y-6 text-center">
            <li>
              <Link to="/" onClick={toggleMenu} className="text-lg font-semibold">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/services/all" onClick={toggleMenu} className="text-lg font-semibold">
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="text-lg font-semibold">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/contacts" onClick={toggleMenu} className="text-lg font-semibold">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;