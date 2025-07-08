import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/auto_transfer_rus.jpg";
import {
  FaTruck,
  FaBolt,
  FaCarSide,
  FaHome,
  FaSatellite,
  FaInbox,
  FaCompass,
  FaDollarSign,
  FaClipboard,
  FaBox,
  FaHandshake,
  FaFileInvoice,
} from "react-icons/fa";

const AutoServices = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceItems = [1, 2, 3, 4, 5, 6];

  const advantages = [
    { key: "flexibility", Icon: FaTruck },
    { key: "speed", Icon: FaBolt },
    { key: "variety", Icon: FaCarSide },
    { key: "door", Icon: FaHome },
    { key: "tracking", Icon: FaSatellite },
  ];

  const stages = [
    { key: "1", Icon: FaInbox },
    { key: "2", Icon: FaCompass },
    { key: "3", Icon: FaDollarSign },
    { key: "4", Icon: FaClipboard },
    { key: "5", Icon: FaBox },
    { key: "6", Icon: FaSatellite },
    { key: "7", Icon: FaHandshake },
    { key: "8", Icon: FaFileInvoice },
  ];

  const details = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* Hero for md+ */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(2.5)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            {t("auto.title")}
          </h1>
        </div>
      </div>

      {/* Hero for sm */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-10 md:hidden text-center">
        <h1 className="text-4xl font-bold uppercase">{t("auto.title")}</h1>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <nav className="text-gray-500 text-sm">
            <ul className="flex space-x-2">
              <li>
                <a href="/" className="hover:text-green-600">
                  {t("auto.breadcrumb.home")}
                </a>
              </li>
              <li>›</li>
              <li>
                <a href="/services" className="hover:text-green-600">
                  {t("auto.breadcrumb.services")}
                </a>
              </li>
              <li>›</li>
              <li className="text-gray-700">{t("auto.breadcrumb.current")}</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold">{t("auto.services.heading")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {serviceItems.map((id) => (
              <div
                key={id}
                className="bg-gray-100 p-6 rounded-lg shadow transition hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {t("auto.services.items." + id + ".prefix", { id })}
                </h3>
                <p className="text-gray-700">
                  {t("auto.services.items." + id + ".title")}
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
          <h2 className="text-2xl font-bold mb-8 text-center">
            {t("auto.advantages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map(({ key, Icon }) => (
              <div key={key} className="flex items-start">
                <div className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0 bg-[#0A5225]">
                  <Icon size={28} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {t(`auto.advantages.items.${key}.title`)}
                  </h3>
                  <p className="text-gray-700 text-justify">
                    {t(`auto.advantages.items.${key}.text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Stages */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {t("auto.stages.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map(({ key, Icon }) => (
              <div key={key} className="flex items-center">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0A5225]"
                >
                  <Icon className="text-white" size={28} />
                </div>
                <p className="ml-4 text-gray-700">
                  {t(`auto.stages.items.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Details */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-8">
          {details.map((id) => (
            <div key={id}>
              <h3 className="text-xl font-bold mb-4">
                {t(`auto.details.${id}.heading`)}
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                {t(`auto.details.${id}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AutoServices;
