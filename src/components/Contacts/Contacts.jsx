// src/pages/Contacts.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";

const Contacts = () => {
  const { t } = useTranslation();

  // scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative text-black h-[40vh] flex items-end justify-center"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-100" />
        <div
          className="relative text-center mb-6"
          style={{ transform: "translateY(-60px)" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("contacts.title")}
          </h1>
          <div className="mt-2 h-1 w-16 bg-green-600 mx-auto" />
        </div>
      </div>

      {/* Contacts Section */}
      <div className="bg-white flex-grow pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps?q=43.25156659873732,76.93376998601416&z=17&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                title={t("contacts.mapTitle")}
              />
            </div>

            {/* Details */}
            <div className="text-gray-800 flex flex-col justify-center md:pl-8 space-y-2">
              <p className="text-center md:text-left">
                {t("contacts.address")}
              </p>
              <p className="text-center md:text-left">
                {t("contacts.postal")}
              </p>
              <p className="text-center md:text-left">
                {t("contacts.phone")}
              </p>
              <p className="text-center md:text-left">
                {t("contacts.email")}
              </p>
              <div className="mt-2 h-1 w-full bg-green-600" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
