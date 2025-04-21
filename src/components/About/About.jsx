import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import {
  CheckCircleIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const AboutUs = () => {
  const { t } = useTranslation();

  // ensure top scroll on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pt-32" />

      {/* Hero Section */}
      <div className="bg-white text-black py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t("about.title")}
          </h1>
          <div className="mt-2 h-1 w-16 bg-[#0A5225] mx-auto" />
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-white pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("about.company.heading")}
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#0A5225]" />
          <p className="text-gray-600 text-lg leading-relaxed mt-4 text-justify">
            {t("about.company.text1")}
            <strong>Great Steppe Logistics</strong>
            {t("about.company.text2")}
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("about.mission.heading")}
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#0A5225]" />
          <p className="text-gray-600 text-lg leading-relaxed mt-4 text-justify">
            {t("about.mission.text")}
          </p>
        </div>
      </div>

      {/* Principles */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("about.principles.heading")}
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#0A5225]" />
          <p className="text-gray-600 text-lg leading-relaxed mt-4 text-justify">
            {t("about.principles.text")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <CheckCircleIcon className="h-8 w-8 text-[#0A5225] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t("about.principles.items.trust.title")}
              </h3>
              <p className="text-gray-600 text-justify">
                {t("about.principles.items.trust.text")}
              </p>
            </div>
            <div>
              <PuzzlePieceIcon className="h-8 w-8 text-[#0A5225] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t("about.principles.items.responsibility.title")}
              </h3>
              <p className="text-gray-600 text-justify">
                {t("about.principles.items.responsibility.text")}
              </p>
            </div>
            <div>
              <ChartBarIcon className="h-8 w-8 text-[#0A5225] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t("about.principles.items.individual.title")}
              </h3>
              <p className="text-gray-600 text-justify">
                {t("about.principles.items.individual.text")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("about.closing.heading")}
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#0A5225]" />
          <p className="text-gray-600 text-lg leading-relaxed mt-4 text-justify">
            {t("about.closing.text1")}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4 text-justify">
            {t("about.closing.text2")}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
