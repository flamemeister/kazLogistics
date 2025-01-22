import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/Multimodal.jpg";
import {
  FaFileAlt,
  FaTruck,
  FaDollarSign,
  FaClipboard,
  FaShieldAlt,
  FaLeaf,
  FaRoute,
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaCube,
  FaTrain,
  FaBoxOpen,
  FaWarehouse,
} from "react-icons/fa";

const MultimodalServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title:
        "Разработку оптимального маршрута и подбор эффективных транспортных средств",
    },
    {
      id: 2,
      title:
        "Предоставление информации по местонахождению Вашего груза на различных этапах перевозки в режиме реального времени",
    },
    {
      id: 3,
      title: "Оформление таможенных документов",
    },
    {
      id: 4,
      title: "Страхование груза",
    },
    // {
    //   id: 5,
    //   title: "Транспортировка груза с помощью морского, воздушного, наземного видов транспорта",
    // },
    // {
    //   id: 6,
    //   title: "Страхование груза",
    // },
    // {
    //   id: 7,
    //   title: "Оформление таможенных документов",
    // },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-screen hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            Мультимодальные перевозки
          </h1>
        </div>
      </div>

      {/* Hero Section without Background Image (Visible on small screens) */}
      <div className="relative bg-green-600 text-white h-screen md:hidden flex items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold uppercase">
          Мультимодальные перевозки
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
              <li className="text-gray-700">Мультимодальные перевозки</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги мультимодальных перевозок включают:
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
            Преимущества контейнерных перевозок
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaShieldAlt size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Гибкость и оптимизация маршрута
                </h3>
                <p className="text-gray-700">
                  Мультимодальные перевозки позволяют выбирать оптимальный
                  маршрут, используя разные виды транспорта для доставки груза.
                  Это позволяет обойти ограничения или препятствия на
                  определенных участках пути и выбрать наиболее эффективные и
                  быстрые варианты доставки.
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
                <h3 className="text-lg font-bold text-gray-800">
                  Снижение затрат
                </h3>
                <p className="text-gray-700">
                  Комбинирование разных видов транспорта может помочь снизить
                  общие затраты на перевозку. Например, использование морского
                  или железнодорожного транспорта для долгих межконтинентальных
                  перевозок и автотранспорта для доставки на короткие расстояния
                  может быть более экономически эффективным, чем полностью
                  полагаться на один вид транспорта.{" "}
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
                <h3 className="text-lg font-bold text-gray-800">
                  Увеличение скорости доставки
                </h3>
                <p className="text-gray-700">
                  Мультимодальные перевозки могут значительно сократить время
                  доставки груза. Путешествие груза начинается сразу после
                  погрузки на первый вид транспорта, а не ожиданием полного
                  заполнения контейнера или отдельного рейса. Это позволяет
                  более быстро доставить груз до пункта назначения.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaLeaf size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Большая географическая доступность
                </h3>
                <p className="text-gray-700">
                  Мультимодальные перевозки позволяют доставлять грузы в
                  удаленные и труднодоступные районы, где отсутствуют
                  определенные виды транспорта. Комбинируя различные виды
                  транспорта, можно обеспечить доставку груза практически в
                  любую точку, что особенно полезно для грузовладельцев,
                  работающих в малонаселенных или отдаленных регионах.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div
                className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaRoute size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Легкость отслеживания и управления
                </h3>
                <p className="text-gray-700">
                  В мультимодальных перевозках используются современные системы
                  отслеживания и координации, которые позволяют контролировать
                  перемещение груза на всех этапах доставки. Это помогает
                  грузовладельцам и логистическим компаниям быть в курсе
                  положения груза и реагировать на любые возникающие проблемы
                  или задержки.{" "}
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
                <h3 className="text-lg font-bold text-gray-800">
                  Улучшенная безопасность и защита груза
                </h3>
                <p className="text-gray-700">
                  Мультимодальные перевозки предоставляют возможность
                  использовать различные меры безопасности для защиты груза на
                  каждом этапе доставки. Каждый вид транспорта имеет свои
                  собственные протоколы и системы безопасности, что увеличивает
                  защиту и уменьшает риск потери или повреждения груза.{" "}
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
          <h2 className="text-2xl font-bold mb-8 text-center text-[#0A5225]">
            Этапы железнодорожной перевозки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaClipboard size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Подача заявки и согласование условий
              </p>
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
                Разработка маршрута перевозки
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
              <p className="ml-4 text-gray-700">
                Заключение договора и расчет стоимости
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaBoxOpen size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Загрузка груза</p>
            </div>
            {/* Step 5 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaTrain size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">Перевозка груза по маршруту</p>
            </div>
            {/* Step 6 */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#0A5225" }}
              >
                <FaWarehouse size={28} className="text-white" />
              </div>
              <p className="ml-4 text-gray-700">
                Разгрузка груза на складе назначения
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* Text Section */}
      {/* Text Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-[#0A5225]">
            Мультимодальные перевозки грузов – эффективное решение
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Мультимодальные перевозки — это способ перевозки грузов на большие
            расстояния, при котором товары и материальные ценности перевозятся
            несколькими видами транспорта. Такой подход наиболее популярен среди
            клиентов, так как даёт возможность упростить таможенную процедуру и
            расширить географию доставки.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Особенностью мультимодальных перевозок является то, что одна
            логистическая компания является организатором перевозки и отвечает
            за сохранность товара по договору, оказывая комплексные услуги в
            сфере погрузочно-разгрузочных работ, страхования грузов и т.д.
          </p>
          <h3 className="text-xl font-bold mt-6 text-[#0A5225]">
            Преимущества модального транспорта
          </h3>
          <ul className="list-decimal list-inside text-gray-700 mt-4 space-y-2">
            <li>
              Продукция доставляется из точки А в точку Б в кратчайшие сроки.
              Это особенно важно, если это доставка скоропортящихся продуктов
              (рефрижераторный транспорт).
            </li>
            <li>
              Транспортные услуги менее затратны, так как заказчик платит только
              одной транспортной компании и не тратит время и деньги на выбор
              других компаний и подключение их для перегрузки.
            </li>
            <li>
              При транспортировке исключаются потери и увеличение сроков
              доставки из-за отсутствия транспорта в месте перегрузки.
              Организация мультимодальных перевозок подразумевает чёткое
              подключение всех видов транспортных средств.
            </li>
            <li>
              Международные перевозки — возможность доставить товары в любую
              точку мира. Мультимодальный подход к перевозкам позволяет
              доставлять товары и материальные ценности на другой континент или
              в отдалённые точки, куда невозможно добраться только автомобильным
              транспортом.
            </li>
            <li>
              Безопасность груза. Так как ответственность за пересылку несёт
              одна компания, исключается возможность утраты и порчи материальных
              ценностей, что немаловажно при перевозке дорогостоящих грузов.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6">
            Мультимодальная логистика предлагает использование различных
            транспортных соединений. Самые популярные среди них следующие:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>автомобиль и корабль;</li>
            <li>автомобиль и железная дорога;</li>
            <li>машина и машина.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6">
            Возможны и другие комбинации, в том числе три и четыре шага для
            достижения максимальной эффективности транспортировки и сокращения
            времени транспортировки.
          </p>
          <p className="text-gray-700 leading-relaxed mt-6">
            Чтобы подобрать оптимальный способ доставки вашего груза, свяжитесь
            с нашими специалистами и получите выгодное для вас решение вопроса!
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MultimodalServices;
