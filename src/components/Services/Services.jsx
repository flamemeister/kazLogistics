import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import card1Ru from "../../assets/images/auto_card_rus.jpeg";
import card2Ru from "../../assets/images/air_card_rus.jpeg";
import card3Ru from "../../assets/images/train_card_rus.jpeg";
import card4Ru from "../../assets/images/container_card_rus.jpeg";
import card5Ru from "../../assets/images/multimodal_card_rus.jpeg";
import card6Ru from "../../assets/images/nonhabaryte_card_rus.jpeg";
import card7Ru from "../../assets/images/depo_card_rus.jpeg";

import card1En from "../../assets/images/auto_card_eng.jpeg";
import card2En from "../../assets/images/air_card_eng.jpeg";
import card3En from "../../assets/images/train_card_eng.jpeg";
import card4En from "../../assets/images/container_card_eng.jpeg";
import card5En from "../../assets/images/multimodal_card_eng.jpeg";
import card6En from "../../assets/images/nonhabaryte_card_eng.jpeg";
import card7En from "../../assets/images/depo_card_eng.jpeg";

import card8 from "../../assets/images/go_back.png";

const Services = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const services = [
  {
    id: 1,
    image: lang === "en" ? card1En : card1Ru,
    link: "/services/auto",
  },
  {
    id: 2,
    image: lang === "en" ? card2En : card2Ru,
    link: "/services/air",
  },
  {
    id: 3,
    image: lang === "en" ? card3En : card3Ru,
    link: "/services/railway",
  },
  {
    id: 4,
    image: lang === "en" ? card4En : card4Ru,
    link: "/services/container",
  },
  {
    id: 5,
    image: lang === "en" ? card5En : card5Ru,
    link: "/services/multimodal",
  },
  {
    id: 6,
    image: lang === "en" ? card6En : card6Ru,
    link: "/services/nonhabaryte",
  },
  {
    id: 7,
    image: lang === "en" ? card7En : card7Ru,
    link: "/services/projective",
  },
  {
    id: 8,
    image: card8,
    link: null,
  },
];


  return (
    <div>
      <div className="pt-32" />

      <div className="bg-white text-black py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t("services.title")}
          </h1>
          <div className="mt-2 h-1 w-16 bg-[#0A5225] mx-auto" />
        </div>
      </div>

      <div className="bg-white pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(({ id, image, link }) =>
              link ? (
                <Link
                  to={link}
                  key={id}
                  className="group block rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <img
                    src={image}
                    alt={t(`services.alt.${id}`)}
                    className="w-full h-full object-cover"
                  />
                </Link>
              ) : (
                <div
                  key={id}
                  onClick={() => navigate(-1)}
                  className="cursor-pointer group block rounded-lg shadow-lg bg-green-600 text-white flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-lg font-bold">
                    {t("services.back")}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-gray-800">
          <h2 className="text-2xl font-bold text-center mb-6">
            {t("services.welcomeTitle")}
          </h2>
          <p className="leading-relaxed mb-6 text-justify">
            {t("services.intro")}
          </p>
          <ul className="list-disc pl-6 space-y-4 text-justify">
            <li>
              <strong>{t("services.rail.label")}</strong>:{" "}
              {t("services.rail.description")}
            </li>
            <li>
              <strong>{t("services.road.label")}</strong>:{" "}
              {t("services.road.description")}
            </li>
            <li>
              <strong>{t("services.multimodal.label")}</strong>:{" "}
              {t("services.multimodal.description")}
            </li>
            <li>
              <strong>{t("services.air.label")}</strong>:{" "}
              {t("services.air.description")}
            </li>
            <li>
              <strong>{t("services.project.label")}</strong>:{" "}
              {t("services.project.description")}
            </li>
            <li>
              <strong>{t("services.oversize.label")}</strong>:{" "}
              {t("services.oversize.description")}
            </li>
          </ul>
          <p className="leading-relaxed mt-6 text-justify">
            {t("services.outro")}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
