import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row with company info and schedule/contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <div>
            {/* If you want to show a footer logo: 
                <img src={footerLogo} alt="KazLogistics" className="h-10 mb-4" />
            */}
            <h3 className="text-xl font-bold mb-2">Great Steppe Logistics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Наша миссия - это создание ценностей в наших продуктах для наших партнеров за счет качественного сервиса
            </p>
          </div>

          {/* Work schedule */}
          <div>
            <h4 className="text-lg font-bold text-green-500 mb-3">График работы</h4>
            <ul className="space-y-1 text-sm">
              <li>Пн - Пт: <span className="text-gray-300">9:00 - 18:00</span></li>
              <li>Обед: <span className="text-gray-300">13:00 - 14:00</span></li>
              <li>Сб-Вс: <span className="text-gray-300">Выходной</span></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-bold text-green-500 mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">+7 777 154 4455</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">info@gslog.kz</span>
              </li>
              <li className="text-gray-300">
              Казахстан, г. Алматы, пр. Сейфуллина, БЦ «Алтын Заман»
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://wa.me/77771544455" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="h-6 w-6 text-green-500 hover:text-green-400" />
          </a>
          <a href="tel:+77771544455" aria-label="Phone">
            <PhoneIcon className="h-6 w-6 text-green-500 hover:text-green-400" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 text-green-500 hover:text-green-400" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © All Rights Reserved. Great Steppe Logistics
        </div>
      </div>
    </footer>
  );
};

export default Footer;