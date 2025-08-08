import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/Container shipments.jpg";
import {
  FaShieldAlt,
  FaBoxes,
  FaDollarSign,
  FaClipboardCheck,
  FaExchangeAlt,
  FaSatelliteDish,
  FaInbox,
  FaRoute,
  FaCalculator,
  FaFileAlt,
  FaTruckMoving,
  FaHandshake,
  FaFileInvoice,
} from "react-icons/fa";

const ContainerServices = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [1, 2, 3, 4, 5, 6, 7];
  const advantages = [
    "protection",
    "standard",
    "loading",
    "multimodal",
    "tracking",
  ];
  const stages = [
    "app",
    "route",
    "rate",
    "docs",
    "delivery",
    "tracking",
    "handover",
    "closing",
  ];
  const details = [1, 2, 3, 4, 5];

  const AdvIcon = {
    protection: FaShieldAlt,
    standard: FaBoxes,
    economy: FaDollarSign,
    loading: FaClipboardCheck,
    multimodal: FaExchangeAlt,
    tracking: FaSatelliteDish,
  };

  const StageIcon = {
    app: FaInbox,
    route: FaRoute,
    rate: FaCalculator,
    docs: FaFileAlt,
    delivery: FaTruckMoving,
    tracking: FaSatelliteDish,
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
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            {t("container.title")}
          </h1>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-20 md:hidden text-center">
        <h1 className="text-4xl font-bold uppercase">{t("container.title")}</h1>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <nav className="text-gray-500 text-sm">
            <ul className="flex space-x-2">
              <li>
                <a href="/" className="hover:text-green-600">
                  {t("container.breadcrumb.home")}
                </a>
              </li>
              <li>›</li>
              <li>
                <a href="/services" className="hover:text-green-600">
                  {t("container.breadcrumb.services")}
                </a>
              </li>
              <li>›</li>
              <li className="text-gray-700">
                {t("container.breadcrumb.current")}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            {t("container.services.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((id) => (
              <div
                key={id}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {t(`container.services.items.${id}.prefix`)}
                </h3>
                <p className="text-gray-700">
                  {t(`container.services.items.${id}.title`)}
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
            {t("container.advantages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((key) => {
              const Icon = AdvIcon[key];
              return (
                <div key={key} className="flex items-start space-x-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                    style={{ backgroundColor: "#0A5225" }}
                  >
                    <Icon
                      size={28}
                      aria-label={t(`container.advantages.items.${key}.title`)}
                    />
                  </div>
                  <div className="max-w-sm md:max-w-md text-left">
                    <h3 className="text-lg font-bold text-gray-800">
                      {t(`container.advantages.items.${key}.title`)}
                    </h3>
                    <p className="text-gray-700 text-left">
                      {t(`container.advantages.items.${key}.text`)}
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
            {t("container.stages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
            {stages.map((key) => {
              const Icon = StageIcon[key];
              return (
                <div key={key} className="flex items-center">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: "#0A5225" }}
                  >
                    <Icon
                      className="text-white"
                      size={28}
                      aria-label={t(`container.stages.items.${key}`)}
                    />
                  </div>
                  <p className="ml-4 text-gray-700">
                    {t(`container.stages.items.${key}`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Details */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {details.map((id) => (
            <div key={id} className={id > 1 ? "mt-12" : ""}>
              <h2
                className={
                  id === 1
                    ? "text-2xl font-bold mb-8"
                    : "text-xl font-bold mt-6"
                }
              >
                {t(`container.details.${id}.heading`)}
              </h2>
              <div className="mt-6">
                <p className="text-gray-700 leading-loose mb-6 text-justify">
                  {t(`container.details.${id}.text`)}
                </p>
              </div>

              {id === 2 && (
                <ul className="list-disc list-inside text-gray-700 mt-4 text-justify">
                  {t("container.details.2.list", { returnObjects: true }).map(
                    (li, idx) => (
                      <li key={idx} className="mb-4">
                        {li}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContainerServices;
