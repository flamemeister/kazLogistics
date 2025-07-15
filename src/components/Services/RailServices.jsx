// src/pages/RailServices.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/train_transfer_2.png";
import {
  FaBoxOpen,
  FaDollarSign,
  FaShieldAlt,
  FaLeaf,
  FaRoute,
  FaExchangeAlt,
  FaClipboardList,
  FaRoute as FaStageRoute,
  FaDollarSign as FaStageRate,
  FaFileAlt,
  FaTruckMoving,
  FaMapMarkerAlt,
  FaHandshake,
  FaFileInvoice,
} from "react-icons/fa";

const RailServices = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [1, 2, 3, 4, 5, 6];
  const advantages = ["capacity", "economy", "safety", "eco", "routes", "intermodal"];
  const stages = ["app", "route", "rate", "docs", "delivery", "tracking", "handover", "closing"];
  const details = [1, 2, 3, 4, 5, 6];

  const AdvIcon = {
    capacity: FaBoxOpen,
    economy: FaDollarSign,
    safety: FaShieldAlt,
    eco: FaLeaf,
    routes: FaRoute,
    intermodal: FaExchangeAlt,
  };

  const StageIcon = {
    app: FaClipboardList,
    route: FaStageRoute,
    rate: FaStageRate,
    docs: FaFileAlt,
    delivery: FaTruckMoving,
    tracking: FaMapMarkerAlt,
    handover: FaHandshake,
    closing: FaFileInvoice,
  };

  return (
    <div>
      {/* Hero */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(1.7)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative flex items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            {t("rail.title")}
          </h1>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-10 md:hidden flex flex-col items-center justify-center text-center">
        <div className="mt-20" />
        <h1 className="text-4xl font-bold uppercase mb-1 mt-6">{t("rail.title")}</h1>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <nav className="text-gray-500 text-sm">
            <ul className="flex space-x-2">
              <li>
                <a href="/" className="hover:text-green-600">{t("rail.breadcrumb.home")}</a>
              </li>
              <li>›</li>
              <li>
                <a href="/services" className="hover:text-green-600">{t("rail.breadcrumb.services")}</a>
              </li>
              <li>›</li>
              <li className="text-gray-700">{t("rail.breadcrumb.current")}</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">{t("rail.services.heading")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((id) => (
              <div
                key={id}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {t(`rail.services.items.${id}.prefix`)}
                </h3>
                <p className="text-gray-700">{t(`rail.services.items.${id}.title`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Advantages */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-left">{t("rail.advantages.heading")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((key) => {
              const Icon = AdvIcon[key];
              return (
                <div key={key} className="flex items-start space-x-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                    style={{ backgroundColor: "#0A5225" }}
                  >
                    <Icon size={28} />
                  </div>
                  <div className="max-w-sm md:max-w-md">
                    <h3 className="text-lg font-bold text-gray-800">
                      {t(`rail.advantages.items.${key}.title`)}
                    </h3>
                    <p className="text-gray-700 text-justify hyphens-auto">
                      {t(`rail.advantages.items.${key}.text`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Stages */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-left">{t("rail.stages.heading")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map((key) => {
              const Icon = StageIcon[key];
              return (
                <div key={key} className="flex items-center">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: "#0A5225" }}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <p className="ml-4 text-gray-700">{t(`rail.stages.items.${key}`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Text Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {details.map((id) => (
            <div key={id} className={id > 1 ? "mt-12" : ""}>
              <h2 className={id === 1 ? "text-2xl font-bold mb-3" : "text-2xl font-bold mb-3"}>
                {t(`rail.details.${id}.heading`)}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                {t(`rail.details.${id}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RailServices;
