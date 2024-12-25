import React from 'react';
import backgroundImage from '../../assets/images/image5.jpg';
import { TruckIcon, GlobeAltIcon, ClockIcon, ClipboardDocumentIcon } from '@heroicons/react/24/solid';
import Footer from "../Footer/Footer";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[50vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Наши услуги</h1>
            <div className="mt-2 h-1 w-16 bg-green-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 mb-8">
            Высокая скорость доставки, приемлемая стоимость. Мы можем предоставить современные автотранспортные средства для перевозки железнодорожных и морских контейнеров, генеральных и сборных грузов.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Услуга 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <TruckIcon className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="text-xl font-bold mt-4">Услуга 1</h3>
              <p className="text-gray-600 mt-2">
                Краткое описание предоставляемой услуги.
              </p>
            </div>
            {/* Услуга 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <GlobeAltIcon className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="text-xl font-bold mt-4">Услуга 2</h3>
              <p className="text-gray-600 mt-2">
                Краткое описание предоставляемой услуги.
              </p>
            </div>
            {/* Услуга 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <ClockIcon className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="text-xl font-bold mt-4">Услуга 3</h3>
              <p className="text-gray-600 mt-2">
                Краткое описание предоставляемой услуги.
              </p>
            </div>
            {/* Услуга 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <ClipboardDocumentIcon className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="text-xl font-bold mt-4">Услуга 4</h3>
              <p className="text-gray-600 mt-2">
                Краткое описание предоставляемой услуги.
              </p>
            </div>
          </div>
        </div>
      </div>
      < Footer/>
    </div>
  );
};

export default Services;
