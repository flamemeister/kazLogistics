import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/depo_transfer.jpg";
import {
  FaShieldAlt,
  FaRoute,
  FaCube,
  FaLeaf,
  FaDollarSign,
} from "react-icons/fa";

const advantageIcons = {
  safeStorage: FaShieldAlt,
  efficientInventory: FaRoute,
  optimization: FaCube,
  maintenance: FaLeaf,
  costReduction: FaDollarSign,
};

const ProjectiveServices = () => {
  const { t } = useTranslation(); // default namespace "translation"

  // IDs for the “services” list
  const serviceIds = [1, 2, 3, 4, 5, 6, 7];
  // Keys for the “advantages” list
  const advantageKeys = [
    "safeStorage",
    "efficientInventory",
    "optimization",
    "maintenance",
    "costReduction",
  ];
  // Intro text block (returns an object with heading, p1, p2)
  const intro = t("containerDepot.text.intro", { returnObjects: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero (desktop) */}
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
            {t("containerDepot.title")}
          </h1>
        </div>
      </div>

      {/* Hero (mobile) */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-10 md:hidden text-center">
        <h1 className="text-4xl font-bold uppercase">
          {t("containerDepot.title")}
        </h1>
      </div>

      {/* Breadcrumbs */}
      <nav className="bg-white py-4 text-gray-500 text-sm">
        <ul className="flex space-x-2 max-w-6xl mx-auto px-4 md:px-8">
          <li>
            <a href="/" className="hover:text-green-600">
              {t("containerDepot.breadcrumb.home")}
            </a>
          </li>
          <li>›</li>
          <li>
            <a href="/services" className="hover:text-green-600">
              {t("containerDepot.breadcrumb.services")}
            </a>
          </li>
          <li>›</li>
          <li className="text-gray-700">
            {t("containerDepot.breadcrumb.current")}
          </li>
        </ul>
      </nav>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold">
            {t("containerDepot.services.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {serviceIds.map((id) => (
              <div
                key={id}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {t(`containerDepot.services.items.${id}.prefix`)}
                </h3>
                <p className="text-gray-700">
                  {t(`containerDepot.services.items.${id}.title`)}
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
            {t("containerDepot.advantages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantageKeys.map((key) => {
              const Icon = advantageIcons[key];
              const { title, text } = t(
                `containerDepot.advantages.items.${key}`,
                { returnObjects: true }
              );
              return (
                <div key={key} className="flex items-start space-x-4">
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center text-white rounded-full bg-[#0A5225]">
                    <Icon size={28} />
                  </div>
                  <div className="max-w-sm md:max-w-md text-left">
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

      {/* Text Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-4">{intro.heading}</h2>
          <p className="text-gray-700 text-justify mb-6">{intro.p1}</p>
          <p className="text-gray-700 text-justify">{intro.p2}</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectiveServices;
