import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/avia_transfer_2.png";
import {
  FaRocket,
  FaShieldAlt,
  FaCalendarCheck,
  FaGlobe,
  FaBoxes,
  FaExchangeAlt,
  FaClipboardList,
  FaRoute,
  FaCalculator,
  FaFileAlt,
  FaTruckMoving,
  FaSatelliteDish,
  FaHandshake,
  FaFileInvoice,
} from "react-icons/fa";

const AviaServices = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceItems = [1, 2, 3, 4, 5, 6];
  const advantages = [
    "speed",
    "safety",
    "schedule",
    "coverage",
    "space",
    "intermodal",
  ];
  const stages = ["app", "route", "rate", "docs", "delivery", "tracking", "handover", "closing"];
  const details = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(1.5)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            {t("avia.title")}
          </h1>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-10 md:hidden text-left">
        <h1 className="text-4xl font-bold uppercase">{t("avia.title")}</h1>
      </div>

      {/* Breadcrumbs */}
      <nav className="bg-white py-4 text-gray-500 text-sm">
        <ul className="flex space-x-2 max-w-6xl mx-auto px-4 md:px-8">
          <li><a href="/" className="hover:text-green-600">{t("avia.breadcrumb.home")}</a></li>
          <li>›</li>
          <li><a href="/services" className="hover:text-green-600">{t("avia.breadcrumb.services")}</a></li>
          <li>›</li>
          <li className="text-gray-700">{t("avia.breadcrumb.current")}</li>
        </ul>
      </nav>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold">{t("avia.services.heading")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {serviceItems.map((id) => (
              <div key={id} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {t(`avia.services.items.${id}.prefix`)}
                </h3>
                <p className="text-gray-700">
                  {t(`avia.services.items.${id}.title`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-8" />

      {/* Advantages */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-left">
            {t("avia.advantages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((key) => {
              const Icon = {
                speed: FaRocket,
                safety: FaShieldAlt,
                schedule: FaCalendarCheck,
                coverage: FaGlobe,
                space: FaBoxes,
                intermodal: FaExchangeAlt,
              }[key];
              return (
                <div key={key} className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0 bg-[#0A5225]">
                    <Icon size={28} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-800">
                      {t(`avia.advantages.items.${key}.title`)}
                    </h3>
                  <p className="text-gray-700 text-left">
                      {t(`avia.advantages.items.${key}.text`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-8" />

      {/* Stages */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-left">
            {t("avia.stages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
            {stages.map((key) => {
              const Icon = {
                app: FaClipboardList,
                route: FaRoute,
                rate: FaCalculator,
                docs: FaFileAlt,
                delivery: FaTruckMoving,
                tracking: FaSatelliteDish,
                handover: FaHandshake,
                closing: FaFileInvoice,
              }[key];
              return (
                <div key={key} className="flex items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#0A5225] rounded-full">
                    <Icon size={28} className="text-white" />
                  </div>
                  <p className="ml-4 text-gray-700">
                    {t(`avia.stages.items.${key}`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-8" />

      {/* Details */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-8">
          {details.map((id) => {
            const text = t(`avia.details.${id}.text`);
            const isList = text.includes("-");

            return (
              <div key={id}>
                <h3 className="text-xl font-bold">
                  {t(`avia.details.${id}.heading`)}
                </h3>

                {isList ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                    {text
                      .split("-")
                      .filter((line) => line.trim() !== "")
                      .map((line, idx) => (
                        <li key={idx}>{line.trim()}</li>
                      ))}
                  </ul>
                ) : (
                    <p className="text-gray-700 leading-relaxed text-justify">
                    {text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AviaServices;
