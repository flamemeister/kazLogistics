import React from "react";
import backgroundImage from "../../assets/images/image7.jpg";
import Footer from "../Footer/Footer";
import { CheckCircleIcon, PuzzlePieceIcon, ChartBarIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">О НАС</h1>
          <div className="mt-2 h-1 w-16 bg-[#0A5225] mx-auto" />

        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Кто мы такие
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#0A5225] mx-auto" />
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Мы, Great Steppe Logistics, — казахстанская компания, динамично развивающаяся в сфере транспортно-логистических услуг. Наша команда объединяет профессионалов с многолетним опытом работы в ведущих международных логистических компаниях. Используя накопленный опыт и знания, мы приняли решение направить их на создание собственной компании, основанной на высоких стандартах и индивидуальном подходе к клиентам.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Наша миссия
            </h2>
            <div className="mt-2 h-1 w-16 bg-[#0A5225]" />
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Наша миссия - это создание ценностей в наших продуктах для наших партнеров за счет качественного сервиса. Мы стремимся обеспечивать высокий уровень надежности на всех этапах логистической цепочки, предлагая профессиональное обслуживание, на которое можно положиться даже в самых сложных условиях.
            </p>
          </div>
          <div>
            <img
              src="../../assets/images/mission.jpg"
              alt="Наша миссия"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Наши принципы
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#0A5225] mx-auto" />
          <p className="text-gray-600 text-lg leading-relaxed mb-8 mt-4">
            Ключевые принципы нашей работы заключаются в доверии, ответственности и стремлении к долгосрочному сотрудничеству. Мы выстраиваем отношения с клиентами на основе взаимного уважения и прозрачности, что позволяет нам становиться надежным партнером для каждого. Индивидуальный подход занимает центральное место в нашей работе. Мы внимательно изучаем потребности каждого клиента, чтобы разрабатывать решения, максимально адаптированные к их задачам и ожиданиям. Высокие стандарты качества и надежности являются неотъемлемой частью нашей деятельности. На каждом этапе логистической цепочки мы обеспечиваем профессиональное обслуживание, которое гарантирует устойчивый результат даже в самых сложных условиях.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircleIcon className="h-8 w-8 text-[#0A5225] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Доверие</h3>
              <p className="text-gray-600">
                Мы строим отношения на основе взаимного уважения и прозрачности.
              </p>
            </div>
            <div className="text-center">
              <PuzzlePieceIcon className="h-8 w-8 text-[#0A5225] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ответственность</h3>
              <p className="text-gray-600">
                Мы гарантируем высокий уровень надежности на каждом этапе.
              </p>
            </div>
            <div className="text-center">
              <ChartBarIcon className="h-8 w-8 text-[#0A5225] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Индивидуальный подход</h3>
              <p className="text-gray-600">
                Мы адаптируем наши решения под задачи и ожидания клиентов.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Благодарим за ваш выбор
          </h2>
          <div className="mt-2 h-1 w-16 bg-[#0A5225] mx-auto" />
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Следуя этим принципам, мы не просто предоставляем услуги, а создаем ценность для наших партнеров, помогая им достигать их целей. Благодарим за выбор компании Great Steppe Logistics. Мы высоко ценим ваше доверие и с нетерпением ждем плодотворного сотрудничества.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
