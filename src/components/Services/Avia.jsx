import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/avia_service.jpg";
import {
  FaRoad,
  FaTruck,
  FaDollarSign,
  FaClipboard,
  FaBox,
  FaMapMarkerAlt
} from "react-icons/fa";

const AutoServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Организация перевозок в режиме 'от двери до двери'",
    },
    {
      id: 2,
      title: "Перевозка сборных грузов",
    },
    {
      id: 3,
      title: "Перевозка негабаритных и тяжеловесных грузов",
    },
    {
      id: 4,
      title: "Страхование груза",
    },
    {
      id: 5,
      title: "Оформление транспортной документации",
    },
    {
      id: 6,
      title: "Мониторинг и отслеживание груза",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[50vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">Автоперевозки</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <nav className="text-gray-500 text-sm">
            <ul className="flex space-x-2">
              <li>
                <a href="/" className="hover:text-green-600">
                  Главная страница
                </a>
              </li>
              <li>›</li>
              <li>
                <a href="/services" className="hover:text-green-600">
                  Услуги
                </a>
              </li>
              <li>›</li>
              <li className="text-gray-700">Автоперевозки</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги автоперевозок включают:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {`0${service.id}`}
                </h3>
                <p className="text-gray-700">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Advantages Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Преимущества автоперевозок</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoad size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Гибкость маршрутов</h3>
                <p className="text-gray-700">
                  Возможность доставки в удаленные регионы и в любую точку страны.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaTruck size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Универсальность</h3>
                <p className="text-gray-700">
                  Подходит для перевозки большинства типов грузов, включая негабаритные.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaDollarSign size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Экономичность</h3>
                <p className="text-gray-700">
                  Более низкая стоимость по сравнению с другими видами перевозок.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaClipboard size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Легкость оформления</h3>
                <p className="text-gray-700">
                  Быстрая и простая подготовка документов.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaBox size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Доступность</h3>
                <p className="text-gray-700">
                  Широкая сеть дорог делает автоперевозки доступными для большинства клиентов.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaMapMarkerAlt size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Отслеживание</h3>
                <p className="text-gray-700">
                  Возможность мониторинга местоположения груза в реальном времени.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AutoServices;
