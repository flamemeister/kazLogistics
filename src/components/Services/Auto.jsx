import React from "react";
import { useNavigate } from "react-router-dom"; 
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/avia_service.jpg";
import { FaFileAlt, FaTruck, FaDollarSign, FaClipboard, FaBox, FaMapMarkerAlt } from "react-icons/fa";
import { FaPlane, FaShieldAlt, FaClock, FaMapMarkedAlt, FaCogs, FaCube } from "react-icons/fa";

const AutoServices = () => {
  const navigate = useNavigate(); 

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
      title: "Организацию перевозок нестандартных видов грузов: опасных, ценных и грузов требующих соблюдения температурного режима",
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
        className="relative bg-cover bg-center text-white h-[50vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">Авиаперевозки</h1>
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
              <li className="text-gray-700">Авиаперевозки</li>
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
    <h2 className="text-2xl font-bold mb-8 text-center">Преимущества авиаперевозок</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaPlane size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Быстрая доставка</h3>
          <p className="text-gray-700">
            Авиаперевозки являются наиболее быстрым способом доставки грузов на большие расстояния. Грузы могут быть доставлены за считанные часы или дни.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaShieldAlt size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Безопасность и надежность</h3>
          <p className="text-gray-700">
            Аэропорты и авиалинии строго контролируются, что снижает риск потери или повреждения груза.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaClock size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Гибкость графика</h3>
          <p className="text-gray-700">
            Воздушные грузовые рейсы предлагают регулярное расписание с высокой частотой полетов.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaMapMarkedAlt size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Широкая география перевозок</h3>
          <p className="text-gray-700">
            Авиалинии предлагают широкий охват маршрутов, охватывающий практически весь мир.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaCogs size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Эффективность использования пространства</h3>
          <p className="text-gray-700">
            Воздушные грузовые суда обычно имеют большую грузоподъемность и позволяют организовать пространство более эффективно.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaCube size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Межмодальные перевозки</h3>
          <p className="text-gray-700">
            Авиаперевозки хорошо сочетаются с другими видами транспорта, такими как автоперевозки и железнодорожные перевозки.
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
    <h2 className="text-2xl font-bold mb-8 text-center">Этапы перевозки</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaFileAlt size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Получение заявки</p>
      </div>
      {/* Step 2 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaTruck size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Разработка оптимального логистического маршрута</p>
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
        <p className="ml-4 text-gray-700">Оформление необходимых документов</p>
      </div>
      {/* Step 5 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaBox size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Доставка груза до места назначения</p>
      </div>
      {/* Step 6 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaMapMarkerAlt size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Отслеживание местонахождения груза</p>
      </div>
    </div>
  </div>
</div>

<hr className="border-gray-200 my-8" />

      {/* Text Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8">Авиаперевозки грузов – быстро и безопасно</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Грузовые авиаперевозки — это перевозки грузов с помощью авиаперевозчика. Авиасэкспедитор — это компания, которая занимается организацией авиаперевозок, согласованием тарифов и действует от имени заказчика, согласовывая с перевозчиком все детали перевозки. В Nur Zhol Company мы работаем с лучшими перевозчиками.
          </p>
          <h3 className="text-xl font-bold mt-6">Преимущества воздушного транспорта:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Самая быстрая служба доставки</li>
            <li>Высокая предсказуемость сроков доставки</li>
            <li>Безопасная перевозка благодаря строгим мерам безопасности в аэропортах</li>
            <li>Ускоренное таможенное оформление за счет быстрой выгрузки авиагруза</li>
            <li>Товары могут быть доставлены воздушным транспортом практически в любой пункт назначения</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">Особенности отправления грузов воздушным транспортом:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Стоимость авиаперевозок выше, чем другие перевозки</li>
            <li>Нерентабельно для перевозки легких и недорогих грузов</li>
            <li>Есть некоторые ограниченные продукты, которые нельзя перевозить по воздуху, но можно перевозить автомобильным или морским транспортом</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">Почему авиаперевозки являются самым дорогим видом грузоперевозок?</h3>
          <p className="text-gray-700 leading-relaxed mt-4">
            Стоимость авиаперевозки зависит не только от маршрута и габаритов отправления, но и от стоимости топлива и обслуживания самолета. Таким образом, ставки на международные авиаперевозки выше, чем, например, на железнодорожные перевозки. Тем не менее, даже при более высоких затратах авиаперевозки по-прежнему наиболее рекомендуются для перевозки дорогостоящих товаров, срочных грузов или документов, поскольку это один из самых безопасных видов транспорта.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AutoServices;
