import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/auto_transfer.jpg";
import {
  FaFileInvoice,
  FaInbox,
  FaBolt,
  FaCompass,
  FaCarSide,
  FaHome,
  FaSatellite,
  FaDollarSign,
  FaClipboard,
  FaTruck,
  FaBox,
  FaHandshake,
} from "react-icons/fa";

const AutoServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title:
        "Перевозки грузов с полной и частичной загрузкой грузового автомобиля (LTL, FTL)",
    },
    {
      id: 2,
      title: "Подбор оптимального маршрута и транспорта",
    },
    {
      id: 3,
      title: "Перевозки тяжеловесных, негабаритных и проектных грузов",
    },
    {
      id: 4,
      title: "Перевозки опасных грузов",
    },
    {
      id: 5,
      title: "Оформление таможенных документов",
    },
    {
      id: 6,
      title:
        "Регулярное получение информации о местонахождении и состоянии груза",
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image (Visible on md and larger screens) */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(2.5)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            Автоперевозки
          </h1>
        </div>
      </div>

      {/* Hero Section - mobile version (Visible on small screens only) */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-20 md:hidden flex flex-col items-center justify-center text-center">
        <div className="mt-24"></div> 
        <h1 className="text-4xl font-bold uppercase mb-1 mt-6">
          Автоперевозки
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
    <h2 className="text-2xl font-bold mb-8 text-center">
      Преимущества автоперевозок
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaTruck size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">
            Гибкость и доступность
          </h3>
          <p className="text-gray-700 text-justify">
            Автомобильные перевозки предоставляют гибкие возможности доставки
            грузов в различные места, даже в отдаленные или труднодоступные
            районы. Автотранспортная инфраструктура широко распространена, что
            делает автоперевозки доступными для большинства мест назначения.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaBolt size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Быстрая доставка</h3>
          <p className="text-gray-700 text-justify">
            Автомобильные перевозки обычно обеспечивают быструю доставку грузов,
            особенно на небольшие расстояния. Отсутствие зависимости от
            расписаний других видов транспорта и возможность прямой доставки
            позволяют сократить время доставки груза до конечного пункта.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaCarSide size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">
            Разнообразие типов и размеров автомобилей
          </h3>
          <p className="text-gray-700 text-justify">
            Автомобили различных типов и размеров могут быть использованы для
            перевозки различных видов грузов. Открытые грузовики, фургоны,
            рефрижераторы, цистерны и другие типы автомобилей предлагают
            возможность выбора подходящего грузового пространства в зависимости
            от специфики груза.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaHome size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">
            Дверь-в-дверь доставка
          </h3>
          <p className="text-gray-700 text-justify">
            Автоперевозки обеспечивают возможность дверь-в-дверь доставки груза,
            что означает, что груз забирается непосредственно от отправителя и
            доставляется прямо к получателю. Это минимизирует необходимость в
            перегрузке груза и обеспечивает более прямой и удобный путь
            доставки.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaSatellite size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">
            Отслеживание груза
          </h3>
          <p className="text-gray-700 text-justify">
            Современные технологии позволяют отслеживать автомобили и грузы в
            режиме реального времени. Это обеспечивает лучший контроль и
            видимость над перемещением груза, а также позволяет оперативно
            реагировать на изменения в условиях доставки.
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
                <FaInbox size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Получение заявки</p>
            </div>
            {/* Step 2 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaCompass size={28} className="text-white" />
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
                <FaClipboard size={28} className="text-white" />
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
                <FaBox size={28} className="text-white" />
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
                <FaSatellite size={28} className="text-white" />
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

export default AutoServices;
