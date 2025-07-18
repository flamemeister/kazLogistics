import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/nonhabaryte_transfer.jpg";
import {
  FaFileAlt,
  FaTruck,
  FaDollarSign,
  FaClipboard,
  FaShieldAlt,
  FaLeaf,
  FaRoute,
  FaCube,
  FaTrain,
  FaBoxOpen,
  FaWarehouse,
  FaFileInvoice,
  FaHandshake,
} from "react-icons/fa";

const stageIcons = {
  app: FaClipboard,
  route: FaRoute,
  rate: FaDollarSign,
  docs: FaBoxOpen,
  delivery: FaTrain,
  tracking: FaWarehouse,
  handover: FaHandshake,
  closing: FaFileInvoice,
};

const NonhabaryteServices = () => {
  const { t } = useTranslation("translation");
  const serviceIds = [1, 2, 3, 4, 5, 6, 7];
  const advantageKeys = ["cargo", "specialized", "professional", "permits", "global"];
  const stageKeys = ["app", "route", "rate", "docs", "delivery", "tracking", "handover", "closing"];

  // Получение текстовых блоков из переводов
  const intro = t("nonhabaryte.text.intro", { returnObjects: true });
  const definition = t("nonhabaryte.text.definition", { returnObjects: true });
  const organization = t("nonhabaryte.text.organization", { returnObjects: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Desktop */}
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
            {t("nonhabaryte.title")}
          </h1>
        </div>
      </div>

      {/* Hero Mobile */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-10 md:hidden text-center">
        <h1 className="text-4xl font-bold uppercase">{t("nonhabaryte.title")}</h1>
      </div>

      {/* Breadcrumbs */}
      <nav className="bg-white py-4 text-gray-500 text-sm">
        <ul className="flex space-x-2 max-w-6xl mx-auto px-4 md:px-8">
          <li>
            <a href="/" className="hover:text-green-600">
              {t("nonhabaryte.breadcrumb.home")}
            </a>
          </li>
          <li>›</li>
          <li>
            <a href="/services" className="hover:text-green-600">
              {t("nonhabaryte.breadcrumb.services")}
            </a>
          </li>
          <li>›</li>
          <li className="text-gray-700">{t("nonhabaryte.breadcrumb.current")}</li>
        </ul>
      </nav>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold">{t("nonhabaryte.services.heading")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {serviceIds.map((id) => (
              <div key={id} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {t(`nonhabaryte.services.items.${id}.prefix`)}
                </h3>
                <p className="text-gray-700">
                  {t(`nonhabaryte.services.items.${id}.title`)}
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
            {t("nonhabaryte.advantages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantageKeys.map((key) => {
              const Icon = {
                cargo: FaShieldAlt,
                specialized: FaDollarSign,
                professional: FaCube,
                permits: FaLeaf,
                global: FaRoute,
              }[key];
              const { title, text } = t(`nonhabaryte.advantages.items.${key}`, { returnObjects: true });
              return (
                <div key={key} className="flex items-start space-x-4">
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center text-white rounded-full bg-[#0A5225]">
                      <Icon size={28} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                    <p className="text-gray-700 text-left">{text}</p>
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
            {t("nonhabaryte.stages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
            {stageKeys.map((key) => {
              const Icon = stageIcons[key];
              return (
                <div key={key} className="flex items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#0A5225] rounded-full">
                    <Icon size={28} className="text-white" />
                  </div>
                  <p className="ml-4 text-gray-700">
                    {t(`nonhabaryte.stages.items.${key}`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-8" />

      {/* Text Blocks */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Intro */}
          <h2 className="text-2xl font-bold mb-4">{intro.heading}</h2>
          <p className="text-gray-700 text-justify mb-8">{intro.p1}</p>

          {/* Definition */}
          <h3 className="text-xl font-bold mb-2">{definition.heading}</h3>
          <p className="text-gray-700 text-justify mb-2">{definition.p1}</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
            {definition.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* Organization */}
          <h3 className="text-xl font-bold mb-2">{organization.heading}</h3>
          <p className="text-gray-700 text-justify mb-4">{organization.p1}</p>
          <p className="text-gray-700 text-justify">{organization.p2}</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NonhabaryteServices;
