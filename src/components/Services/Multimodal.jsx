import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/Multimodal.jpg";
import {
  FaShieldAlt,
  FaDollarSign,
  FaCube,
  FaLeaf,
  FaRoute,
  FaExchangeAlt,
  FaClipboard,
  FaTrain,
  FaBoxOpen,
  FaWarehouse,
  FaHandshake,
  FaFileInvoice,
  FaMapMarkerAlt,

} from "react-icons/fa";

const MultimodalServices = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [1, 2, 3, 4];
  const advantages = [
    "flexibility",
    "cost",
    "speed",
    "coverage",
    "tracking",
    "security",
  ];
  const stages = [
    "app",
    "delivery",
    "route",
    "tracking",
    "rate",
    "handover",
    "docs",
    "closing",
  ];

  const AdvIcon = {
    flexibility: FaShieldAlt,
    cost: FaDollarSign,
    speed: FaCube,
    coverage: FaLeaf,
    tracking: FaRoute,
    security: FaExchangeAlt,
  };

  const StageIcon = {
    app: FaClipboard,
    delivery: FaTrain,
    route: FaRoute,
    tracking: FaMapMarkerAlt,
    rate: FaDollarSign,
    handover: FaHandshake,
    docs: FaFileInvoice,
    closing: FaWarehouse,
  };

  return (
    <div>
      {/* Hero */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            {t("multimodal.title")}
          </h1>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-20 md:hidden text-center">
        <h1 className="text-3xl font-bold uppercase">{t("multimodal.title")}</h1>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <nav className="text-gray-500 text-sm">
            <ul className="flex space-x-2">
              <li>
                <a href="/" className="hover:text-green-600">
                  {t("multimodal.breadcrumb.home")}
                </a>
              </li>
              <li>›</li>
              <li>
                <a href="/services" className="hover:text-green-600">
                  {t("multimodal.breadcrumb.services")}
                </a>
              </li>
              <li>›</li>
              <li className="text-gray-700">{t("multimodal.breadcrumb.current")}</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            {t("multimodal.services.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((id) => (
              <div
                key={id}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {t(`multimodal.services.items.${id}.prefix`)}
                </h3>
                <p className="text-gray-700">
                  {t(`multimodal.services.items.${id}.title`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Advantages */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-left">
            {t("multimodal.advantages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((key) => {
              const Icon = AdvIcon[key];
              return (
                <div key={key} className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0 bg-[#0A5225]">
                    <Icon size={28} />
                  </div>
                  <div className="max-w-sm md:max-w-md">
                    <h3 className="text-lg font-bold text-gray-800">
                      {t(`multimodal.advantages.items.${key}.title`)}
                    </h3>
                    <p className="text-gray-700 text-justify hyphens-auto">
                      {t(`multimodal.advantages.items.${key}.text`)}
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
          <h2 className="text-2xl font-bold mb-8 text-left">
            {t("multimodal.stages.heading")}
          </h2>
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
                  <p className="ml-4 text-gray-700">
                    {t(`multimodal.stages.items.${key}`)}
                  </p>
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
          <h2 className="text-2xl font-bold mb-8">
            {t("multimodal.text.intro.heading")}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            {t("multimodal.text.intro.p1")}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            {t("multimodal.text.intro.p2")}
          </p>

          <h3 className="text-xl font-bold mt-6">
            {t("multimodal.text.benefits.heading")}
          </h3>
          <ul className="list-decimal list-inside text-gray-700 mt-4 space-y-2 text-justify">
            {t("multimodal.text.benefits.list", { returnObjects: true }).map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>

          <p className="text-gray-700 leading-relaxed mt-6 text-justify">
            {t("multimodal.text.combos.intro")}
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-justify">
            {t("multimodal.text.combos.list", { returnObjects: true }).map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>

          <p className="text-gray-700 leading-relaxed mt-6 text-justify">
            {t("multimodal.text.combos.outro")}
          </p>
          <p className="text-gray-700 leading-relaxed mt-6 text-justify">
            {t("multimodal.text.final")}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MultimodalServices;
