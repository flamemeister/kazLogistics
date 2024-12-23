import React from "react";
import backgroundImage from "../../assets/aboutus.jpg";
import Footer from "../Footer/Footer";

// Example icon imports (use any you like)
import {
  TruckIcon,
  GlobeAltIcon,
  MapIcon,
  ShieldCheckIcon,
  FireIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

/**
 * ExampleService: 
 * - Same hero (backgroundImage, text, overlay).
 * - Entirely new layout for content:
 *   1. Quick intro row
 *   2. 6-card grid with big icons
 *   3. CTA section
 *   4. Footer
 */
const ExampleService = () => {
  return (
    <div className="bg-white">
      {/* ===== HERO (unchanged) ===== */}
      <div
        className="relative bg-cover bg-center text-white h-[50vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        {/* Centered hero text */}
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold uppercase">
              ЖД Перевозки
            </h1>
            <div className="mt-2 h-1 w-16 bg-green-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* ===== INTRO SECTION (new style) ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Быстрые и Надёжные Транспортные Решения
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Мы предлагаем полный комплекс услуг по железнодорожной перевозке грузов: 
            от анализа маршрута до оперативной доставки. Заботимся о каждом этапе 
            логистики, чтобы вы могли сосредоточиться на росте вашего бизнеса.
          </p>
          <div className="mt-2 h-1 w-16 bg-green-500 mx-auto" />
        </div>
      </section>

      {/* ===== 6-CARD ICON GRID SECTION ===== */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <TruckIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Грузоперевозки
              </h3>
              <p className="text-gray-600 text-center">
                Перевозим разные типы грузов по всей железнодорожной сети.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <GlobeAltIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Международные решения
              </h3>
              <p className="text-gray-600 text-center">
                Организуем поставки в страны СНГ, Азию и другие регионы мира.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <MapIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Оптимизация маршрута
              </h3>
              <p className="text-gray-600 text-center">
                Разрабатываем кратчайшие и самые экономичные пути следования.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <ShieldCheckIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Безопасность
              </h3>
              <p className="text-gray-600 text-center">
                Строгий контроль и надзор на каждом этапе перевозки.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <FireIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Срочные отгрузки
              </h3>
              <p className="text-gray-600 text-center">
                Ускоренные отправки и приоритетная доставка важных грузов.
              </p>
            </div>
            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <BuildingLibraryIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Складские услуги
              </h3>
              <p className="text-gray-600 text-center">
                Возможность хранения, упаковки и консолидации грузов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER (unchanged) ===== */}
      <Footer />
    </div>
  );
};

export default ExampleService;