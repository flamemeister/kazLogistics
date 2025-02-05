import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/train_transfer_2.png";
import {
  FaFileInvoice,
  FaClipboardList,
  FaDollarSign,
  FaFileAlt,
  FaRoute,
  FaBoxOpen,
  FaShieldAlt,
  FaLeaf,
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaHandshake,
  FaTruckMoving,
} from "react-icons/fa";

const RailServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Перевозку грузов в универсальных и специализированных вагонах",
    },
    {
      id: 2,
      title: "Перевозку сухих, навалочных, тарно-штучных и жидких грузов",
    },
    {
      id: 3,
      title: "Перевозку негабаритных проектных грузов",
    },
    {
      id: 4,
      title: "Полный контроль передвижения груза по всем маршрутам следования",
    },
    {
      id: 5,
      title: "Предоставление вагонов",
    },
    {
      id: 6,
      title: "Оформление таможенных документов",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(1.7)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            ЖД перевозки
          </h1>
        </div>
      </div>

      {/* Hero Section without Background Image (mobile) */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-10 md:hidden flex flex-col items-center justify-center text-center">
        <div className="mt-20"></div> 
        <h1 className="text-4xl font-bold uppercase mb-1 mt-6">ЖД перевозки</h1>
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
              <li className="text-gray-700">ЖД перевозки</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги ж/д перевозок включают:
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
          <h2 className="text-2xl font-bold mb-8 text-center">
            Преимущества ж/д перевозок
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaBoxOpen size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Высокая грузоподъемность
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  Железнодорожные составы способны перевозить большие объемы
                  грузов, включая тяжелые и крупногабаритные, которые затруднены
                  или невозможны для иных видов транспорта.
                </p>
              </div>
            </div>
            {/* Advantage 2 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaDollarSign size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Экономическая эффективность
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  ЖД перевозки обычно обходятся дешевле авиаперевозок и
                  эффективны при крупных партиях и длительных расстояниях,
                  особенно с долгосрочными контрактами.
                </p>
              </div>
            </div>
            {/* Advantage 3 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaShieldAlt size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Безопасность и надежность
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  Высокие стандарты контроля и охраны снижают риск повреждений и
                  краж. Вагоны обычно закрытого типа, а доступ к ним строго
                  контролируется.
                </p>
              </div>
            </div>
            {/* Advantage 4 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaLeaf size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Экологическая эффективность
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  По сравнению с автоперевозками и авиаперевозками,
                  железнодорожный транспорт расходует меньше топлива на тонну
                  груза, сокращая выбросы и нанося меньший вред окружающей
                  среде.
                </p>
              </div>
            </div>
            {/* Advantage 5 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoute size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Гибкость маршрутов
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  Разветвленная железнодорожная сеть охватывает большую часть
                  территорий. Это способствует доставке грузов даже в удаленные
                  районы, где нет других транспортных возможностей.
                </p>
              </div>
            </div>
            {/* Advantage 6 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaExchangeAlt size={28} />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Межмодальные перевозки
                </h3>
                <p className="text-gray-700 text-justify hyphens-auto">
                  Комбинирование ЖД с другими видами транспорта (авто, морской)
                  позволяет оптимизировать логистику, ускорить сроки доставки и
                  снизить транспортные расходы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Stages Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Этапы перевозки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaClipboardList size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Получение заявки</p>
            </div>
            {/* Step 2 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoute size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Разработка оптимального маршрута
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaDollarSign size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Расчет ставки</p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaFileAlt size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Оформление необходимых документов
              </p>
            </div>
            {/* Step 5 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaTruckMoving size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Доставка груза до места назначения
              </p>
            </div>
            {/* Step 6 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaMapMarkerAlt size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Отслеживание местонахождения груза
              </p>
            </div>
            {/* Step 7 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaHandshake size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Выдача груза получателю</p>
            </div>
            {/* Step 8 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaFileInvoice size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Получение закрывающих документов
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Text Section (Single-Column Layout) */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* 1. ЖД перевозки – экономично и мощно */}
          <h2 className="text-2xl font-bold mb-3">
            Железнодорожные перевозки – экономично и мощно
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Железнодорожный транспорт сегодня является наиболее экономичным
            решением, когда нужно перевезти крупногабаритные, тяжеловесные грузы
            или большие партии товаров на дальние расстояния. В Казахстане, как
            и во многих странах, ЖД-транспорт широко используют для перевозки
            сырья (уголь, сталь, опасные химические вещества), а также жидких
            грузов. Помимо этого, ЖД считается одним из самых безопасных видов
            логистических услуг. Компания «Great Steppe Logistics» поможет
            организовать доставку груза железной дорогой или любым другим
            подходящим видом транспорта. Мы, как один из лидеров рынка перевозок
            в Республике Казахстан, гарантируем квалифицированную организацию
            процесса и своевременную доставку вашего груза.
          </p>

          {/* 2. Можно ли перевозить опасные грузы по железной дороге? */}
          <h2 className="text-2xl font-bold mb-3">
            Можно ли перевозить опасные грузы по железной дороге?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Поезда часто используются для транспортировки опасных материалов:
            нефти, промышленных газов, серной кислоты и прочих. Перевозка
            опасных грузов по железной дороге строго регламентируется
            международными нормами, которые разрешают перевозить такие грузы (в
            том числе в больших объёмах) более безопасно, чем на некоторых
            других видах транспорта.
          </p>

          {/* 3. Какой максимальный вес разрешен для железнодорожных перевозок? */}
          <h2 className="text-2xl font-bold mb-3">
            Какой максимальный вес разрешен для железнодорожных перевозок?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Современные вагоны могут поднимать груз массой до 70 тонн. А так как
            поезд способен включать 50 и более вагонов, суммарная
            грузоподъемность может достигать 3500 тонн и выше. Выбор конкретного
            типа вагона зависит от размеров и типа перевозимого груза, что
            позволяет оптимально распределить нагрузку.
          </p>

          {/* 4. Сколько стоят железнодорожные перевозки? */}
          <h2 className="text-2xl font-bold mb-3">
            Сколько стоят железнодорожные перевозки?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Стоимость услуг ЖД-транспорта зависит от характеристик (габариты,
            вес, тип) и начального/конечного пунктов маршрута. Так как поезда
            курсируют только по существующим грузовым железнодорожным коридорам,
            зачастую используется мультимодальный подход — с привлечением
            автотранспорта, чтобы добраться от станции до конечного адреса или
            наоборот.
          </p>

          {/* 5. Международные железнодорожные грузовые перевозки */}
          <h2 className="text-2xl font-bold mb-3">
            Международные железнодорожные грузовые перевозки дешевле
            автомобильных?
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Железнодорожные перевозки востребованы, но иногда обходятся дороже
            автомобильных из-за затрат на погрузку, разгрузку и обслуживание.
            Если пункты отправления и назначения не связаны напрямую с
            железнодорожными станциями, нужно организовывать мультимодальные
            перевозки с использованием автотранспорта. Тем не менее, при крупных
            объёмах грузов и больших расстояниях ЖД чаще оказывается дешевле
            благодаря меньшему расходу топлива на тонну груза.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 text-justify">
            Одно из ключевых преимуществ ЖД-транспорта перед морским и
            автомобильным — сокращение сроков при перевозке крупногабаритных
            грузов, особенно из Китая. Здесь поезд может быть почти вдвое
            быстрее морских путей. Однако авиаперевозки по-прежнему остаются
            самым быстрым способом доставки. Чтобы узнать точную стоимость и
            задать вопросы специалисту, просто оставьте заявку на сайте!
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RailServices;
