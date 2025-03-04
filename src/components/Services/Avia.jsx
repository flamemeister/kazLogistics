import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/avia_transfer_2.png";
import logo from "../../assets/images/logo.png";
import {
  FaRocket,
  FaShieldAlt,
  FaCalendarCheck,
  FaGlobe,
  FaBoxes,
  FaExchangeAlt,
  FaClipboardList,
  FaRoute,
  FaCalculator,
  FaFileAlt,
  FaTruckMoving,
  FaSatelliteDish,
} from "react-icons/fa";

const AviaServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Организацию экспортных и импортных перевозок грузов",
    },
    {
      id: 2,
      title: "Организацию международных транзитных и трансферных услуг",
    },
    {
      id: 3,
      title:
        "Организацию перевозок нестандартных видов грузов: опасных, ценных и грузов требующих соблюдения температурного режима",
    },
    {
      id: 4,
      title: "Подбор оптимального маршрута и воздушного судна",
    },
    {
      id: 5,
      title: "Оформление таможенных документов",
    },
    {
      id: 6,
      title: "Страхование груза",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(1.5)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            Авиаперевозки
          </h1>
        </div>
      </div>

      {/* Hero Section without Background Image (Visible on small screens) */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-10 md:hidden flex flex-col items-center justify-center text-center">
        <div className="mt-20"></div> 
        <h1 className="text-4xl font-bold uppercase mb-1 mt-6">
          Авиаперевозки
        </h1>
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
              <li className="text-gray-700">Авиаперевозки</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги авиаперевозок включают:
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
            Преимущества авиаперевозок
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Advantage 1 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRocket size={28} aria-label="Быстрая доставка" />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Быстрая доставка
                </h3>
                <p className="text-gray-700 text-left">
                  Авиаперевозки являются наиболее быстрым способом доставки
                  грузов на большие расстояния. Грузы могут быть доставлены за
                  считанные часы или дни.
                </p>
              </div>
            </div>
            {/* Advantage 2 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaShieldAlt size={28} aria-label="Безопасность и надежность" />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Безопасность и надежность
                </h3>
                <p className="text-gray-700 text-left">
                  Аэропорты и авиалинии строго контролируются, что снижает риск
                  потери или повреждения груза.
                </p>
              </div>
            </div>
            {/* Advantage 3 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaCalendarCheck size={28} aria-label="Гибкость графика" />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Гибкость графика
                </h3>
                <p className="text-gray-700 text-left">
                  Воздушные грузовые рейсы предлагают регулярное расписание с
                  высокой частотой полетов.
                </p>
              </div>
            </div>
            {/* Advantage 4 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaGlobe size={28} aria-label="Широкая география перевозок" />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Широкая география перевозок
                </h3>
                <p className="text-gray-700 text-left">
                  Авиалинии предлагают широкий охват маршрутов, охватывающий
                  практически весь мир.
                </p>
              </div>
            </div>
            {/* Advantage 5 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaBoxes
                  size={28}
                  aria-label="Эффективность использования пространства"
                />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Эффективность использования пространства
                </h3>
                <p className="text-gray-700 text-left">
                  Воздушные грузовые суда обычно имеют большую грузоподъемность
                  и позволяют организовать пространство более эффективно.
                </p>
              </div>
            </div>
            {/* Advantage 6 */}
            <div className="flex items-start space-x-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaExchangeAlt size={28} aria-label="Межмодальные перевозки" />
              </div>
              <div className="max-w-sm md:max-w-md">
                <h3 className="text-lg font-bold text-gray-800">
                  Межмодальные перевозки
                </h3>
                <p className="text-gray-700 text-left">
                  Авиаперевозки хорошо сочетаются с другими видами транспорта,
                  такими как автоперевозки и железнодорожные перевозки.
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
                <FaClipboardList
                  size={28}
                  className="text-white"
                  aria-label="Получение заявки"
                />
              </div>
              <p className="ml-4 text-gray-700">Получение заявки</p>
            </div>
            {/* Step 2 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoute
                  size={28}
                  className="text-white"
                  aria-label="Разработка оптимального маршрута"
                />
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
                <FaCalculator
                  size={28}
                  className="text-white"
                  aria-label="Расчет ставки"
                />
              </div>
              <p className="ml-4 text-gray-700">Расчет ставки</p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaFileAlt
                  size={28}
                  className="text-white"
                  aria-label="Оформление необходимых документов"
                />
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
                <FaTruckMoving
                  size={28}
                  className="text-white"
                  aria-label="Доставка груза до места назначения"
                />
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
                <FaSatelliteDish
                  size={28}
                  className="text-white"
                  aria-label="Отслеживание местонахождения груза"
                />
              </div>
              <p className="ml-4 text-gray-700">
                Отслеживание местонахождения груза
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Text Section (NOW UPDATED) */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* 1. Main heading + paragraph */}
          <h2 className="text-2xl font-bold mb-8">
            Автоперевозки грузов – широкие возможности и высокая геодоступность
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Автомобильный грузовой транспорт — решение, предлагающее наибольшую
            гибкость и возможность выбора места доставки товара. В «Great Steppe
            Logistics» мы обслуживаем потребности как индивидуальных, так и
            бизнес-клиентов и предлагаем широкий спектр услуг по грузовым
            международным и по ключевым направлениям. Наша компания располагает
            обширной сетью филиалов и представительств, находящихся на
            территории СНГ, Балтии, КНР, западной и центральной Европы, что
            гарантирует нашим заказчикам своевременную доставку и качественный
            сервис.
          </p>

          {/* 2. Heading + paragraph */}
          <h3 className="text-xl font-bold mt-6">
            Международные и внутренние перевозки сборных грузов – что такое LTL?
          </h3>
          <p className="text-gray-700 leading-relaxed mt-4 text-justify">
            Услуги сборных грузов (LTL) экономически выгодны заказчикам, у
            которых сравнительно небольшой груз. Совместно используя
            автомобильный транспорт с другими грузоотправителями, вы можете
            сэкономить на доставке. Сумма к оплате будет меньше, чем целый
            грузовик сборных грузов. Оплатить нужно только за необходимое вам
            место в транспортном средстве.
          </p>

          {/* 3. Heading + paragraph */}
          <h3 className="text-xl font-bold mt-6">
            Автоперевозки грузов – широкие возможности и высокая геодоступность
          </h3>
          <p className="text-gray-700 leading-relaxed mt-4 text-justify">
            Перевозка с полной загрузкой, также известная как FTL (Full Truck
            Load), означает перевозку грузов, которые занимают все пространство
            транспортного средства. Выбирайте услугу полной загрузки грузовика
            (FTL) для одновременной международной или внутренней перевозки
            грузов от 10 и более поддонов.
          </p>

          {/* 4. Heading + paragraph */}
          <h3 className="text-xl font-bold mt-6">
            Международные перевозки – что такое услуга FTL?
          </h3>
          <p className="text-gray-700 leading-relaxed mt-4 text-justify">
            Автомобильный грузовой транспорт — решение, предлагающее наибольшую
            гибкость и возможность выбора места доставки товара. В «Great Steppe
            Logistics» мы обслуживаем потребности как индивидуальных, так и
            бизнес-клиентов и предлагаем широкий спектр услуг по грузовым
            международным и по ключевым направлениям. Наша компания располагает
            обширной сетью филиалов и представительств, находящихся на
            территории СНГ, Балтии, КНР, западной и центральной Европы, что
            гарантирует нашим заказчикам своевременную доставку и качественный
            сервис.
          </p>

          {/* 5. Heading + paragraph */}
          <h3 className="text-xl font-bold mt-6">Таможенные сборы</h3>
          <p className="text-gray-700 leading-relaxed mt-4 text-justify">
            В случае перевозки автомобильным транспортом товаров через границы,
            пошлина рассчитывается исходя из содержимого отправления и
            объявленной стоимости. Грузополучатель обязан уплатить таможенные
            пошлины за выпуск грузовой партии таможней. Как узнать срок
            доставки? Срок доставки зависит от выбранного маршрута и службы
            доставки. Специализированные службы доставки имеют самые короткие
            сроки доставки, так как при автомобильных перевозках груз
            доставляется непосредственно от пункта выдачи до места доставки.
            Логистические услуги автомобильного транспорта также включают в себя
            остановки и проверки на складах поставщиков логистических услуг, что
            увеличивает сроки доставки. Всякий раз, когда вы заказываете у нас
            какие-либо услуги по доставке грузов, расчетное время доставки будет
            указано в процессе бронирования до завершения вашего заказа. Чтобы
            сократить время доставки, мы рекомендуем заказать доставку фургоном
            или полным грузовиком, поскольку это прямые решения. Также стоит
            помнить, что в некоторых редких случаях время транзита может
            превышать расчетный временной интервал из-за дорожного движения,
            погодных условий и других непредвиденных обстоятельств, связанных с
            транспортной логистикой.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AviaServices;
