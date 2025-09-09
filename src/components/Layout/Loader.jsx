import React, { useEffect, useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp, FaLinkedin, FaWeixin } from "react-icons/fa";
import logo from "../../assets/logo_white.png";
import wechatQr from "../../assets/images/we_chat.jpeg";

const Footer = () => {
  const [showMobileSocials, setShowMobileSocials] = useState(true);
  const [showWeChat, setShowWeChat] = useState(false);

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

    const onKeyDown = (e) => {
      if (e.key === "Escape") setShowWeChat(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      {/* WeChat Modal */}
      {showWeChat && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]"
          onClick={() => setShowWeChat(false)} // клик по фону закрывает
        >
          <div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // избегаем закрытия при клике по картинке
          >
            {/* картинка ровно в модальном окне, без текста/отступов */}
            <img
              src={wechatQr}
              alt="WeChat QR"
              className="block w-[min(90vw,420px)] h-[min(90vh,420px)] object-contain"
              draggable={false}
            />
            <button
              onClick={() => setShowWeChat(false)}
              className="absolute top-3 right-3 text-white/90 hover:text-white text-2xl leading-none"
              aria-label="Close"
              title="Close"
            >
              {/* крестик на overlay — можно убрать, если не нужен */}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Socials */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 md:hidden z-50
          bg-green-600 flex justify-around items-center py-4
          transition-transform duration-300
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

        {/* LinkedIn перед WeChat (как просили) */}
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

        {/* WeChat последним */}
        <button
          onClick={() => setShowWeChat(true)}
          aria-label="WeChat"
          className="text-white flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <FaWeixin className="h-10 w-10" />
          <span className="text-sm">WeChat</span>
        </button>
      </div>

      {/* Desktop Footer */}
      <footer className="hidden md:block bg-[#0A5225] text-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
          <p className="text-base">
            &copy; 2025 <span className="font-normal">Great Steppe Logistics</span>
          </p>

          {/* Центр: порядок — WhatsApp, Phone, LinkedIn, WeChat */}
          <div className="absolute left-1/2 -translate-x-1/2 flex space-x-6">
            <a
              href="https://wa.me/77027714828"
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

            {/* WeChat после LinkedIn */}
            <button
              onClick={() => setShowWeChat(true)}
              aria-label="WeChat"
              className="hover:scale-110 transition-transform"
            >
              <FaWeixin className="h-10 w-10 text-white hover:text-gray-300" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
