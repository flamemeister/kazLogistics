import React from "react";
import { useNavigate } from "react-router-dom"; 
import Footer from "../Footer/Footer";
import backgroundImage from "../../assets/images/nonhabaryte_transfer.jpg";
import { FaFileAlt, FaTruck, FaDollarSign, FaClipboard, FaShieldAlt, FaLeaf, FaRoute, FaExchangeAlt, FaMapMarkerAlt, FaCube, FaTrain, FaBoxOpen, FaWarehouse} from "react-icons/fa";


const NonhabaryteServices = () => {
  const navigate = useNavigate(); 

  const services = [
    {
      id: 1,
      title: "Планирование и координация",
    },
    {
      id: 2,
      title: "Определение оптимального маршрута и выбор подходящих транспортных средств и оборудования",
    },
    {
      id: 3,
      title: "Получение необходимых разрешений и лицензий для перевозки груза",
    },
    {
      id: 4,
      title: "Упаковка и загрузка с помощью специального оборудования",
    },
    {
      id: 5,
      title: "Транспортировка груза до места назначения",
    },
    {
      id: 6,
      title: "Предоставление информации по местонахождению Вашего груза на различных этапах перевозки в режиме реального времени",
    },
    {
      id: 7,
      title: "Разгрузка и размещение",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative flex items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">НЕГАБАРИТНЫЕ ПЕРЕВОЗКИ</h1>
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
              <li className="text-gray-700">Негабартиные перевозки</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mt-8">
            Наши услуги негабаритных перевозок включают:
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
    <h2 className="text-2xl font-bold mb-8 text-center">Преимущества негабаритных перевозок</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
        <FaShieldAlt size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Доставка больших грузов</h3>
          <p className="text-gray-700">
          Негабаритные перевозки позволяют доставить грузы, которые превышают стандартные размеры или вес. Это могут быть крупные машины, строительное оборудование, промышленные компоненты, суда и другие крупногабаритные предметы, которые невозможно или затруднительно перевозить с помощью обычных средств транспорта.          </p>
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
          <h3 className="text-lg font-bold text-gray-800">Специализированные транспортные средства</h3>
          <p className="text-gray-700">
          Негабаритные грузы требуют специализированных транспортных средств, которые обладают достаточной грузоподъемностью и прочностью для перевозки таких грузов. Это включает тяжеловесные грузовики, низкорамные платформы, гусеничные транспортеры и другие специализированные транспортные средства, которые могут обеспечить безопасную и эффективную перевозку негабаритных грузов.          </p>
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
          <h3 className="text-lg font-bold text-gray-800">Профессиональное обслуживание</h3>
          <p className="text-gray-700">
          Негабаритные перевозки требуют высокого уровня профессионализма и экспертизы со стороны логистических компаний и перевозчиков. Они должны иметь опыт в организации и выполнении таких сложных перевозок, а также знать законодательство и требования, связанные с перевозкой негабаритных грузов. </p>
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
          <h3 className="text-lg font-bold text-gray-800">Специальные разрешения и сопровождение</h3>
          <p className="text-gray-700">
          Перевозка негабаритных грузов обычно требует получения специальных разрешений и лицензий от государственных и регулирующих органов. Это включает разрешения на движение по определенным маршрутам, временное закрытие дорог для обеспечения безопасности и сопровождение со стороны специальных эскортных служб или полиции.   </p>
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
          <h3 className="text-lg font-bold text-gray-800">Глобальная доставка</h3>
          <p className="text-gray-700">
          Негабаритные перевозки позволяют доставить грузы по всему миру. Это особенно важно для проектов и компаний, работающих в области строительства, энергетики, нефтегазовой промышленности и других секторах, где крупногабаритное оборудование и материалы могут требоваться в удаленных и недоступных местах.      </p>
        </div>
      </div>
      {/* <div className="flex items-start">
        <div
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shrink-0"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaShieldAlt size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">Улучшенная безопасность и защита груза</h3>
          <p className="text-gray-700">
          Мультимодальные перевозки предоставляют возможность использовать различные меры безопасности для защиты груза на каждом этапе доставки. Каждый вид транспорта имеет свои собственные протоколы и системы безопасности, что увеличивает защиту и уменьшает риск потери или повреждения груза. </p>
        </div>
      </div> */}
    </div>
  </div>
</div>


<hr className="border-gray-200 my-8" />


{/* Stages Section */}
<div className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    <h2 className="text-2xl font-bold mb-8 text-center text-[#0A5225]">Этапы железнодорожной перевозки</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaClipboard size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Подача заявки и согласование условий</p>
      </div>
      {/* Step 2 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaRoute size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Разработка маршрута перевозки</p>
      </div>
      {/* Step 3 */}
      <div className="flex items-center">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#0A5225" }}
        >
          <FaDollarSign size={28} className="text-white" />
        </div>
        <p className="ml-4 text-gray-700">Заключение договора и расчет стоимости</p>
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
        <p className="ml-4 text-gray-700">Разгрузка груза на складе назначения</p>
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
      Негабаритные перевозки – доставка грузов любой сложности
    </h2>
    <p className="text-gray-700 leading-relaxed mb-6">
      Одно из направлений деятельности логистической компании Great Steppe Logistics — перевозка негабаритных грузов. К числу таких относятся: перевозка тяжеловесных грузов, перевозка крупного груза, перевозка техники. Опыт, который мы имеем в этой области, и профессионализм, который мы демонстрируем в работе, позволяют нам доставлять товары вовремя и в идеальном состоянии. Преимуществом нашей команды является детальное и актуальное знание таможенных и экспедиторских документов, необходимых при автомобильных перевозках грузов. Наши специалисты также оформляют специальные разрешения на перевозку негабаритных грузов. Благодаря нам вы избежите неожиданных помех и получите удовольствие от оперативного выполнения заказа.
    </p>
    <h3 className="text-xl font-bold mt-6 text-[#0A5225]">
      Что такое негабаритный транспорт?
    </h3>
    <p className="text-gray-700 leading-relaxed mb-6">
      Негабаритные перевозки — это перевозки грузов, габариты которых (вместе с транспортными средствами, используемыми для этой цели) превышают установленные законом нормы для негабаритных перевозок, т.е.:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
      <li>длиннее 16,5 метров,</li>
      <li>шириной более 2,5 метров,</li>
      <li>выше 4 метров,</li>
      <li>тяжелее 42 тонн.</li>
    </ul>
    <p className="text-gray-700 leading-relaxed mt-6">
      Правила, регулирующие негабаритные перевозки, применяются, когда превышен хотя бы один из вышеуказанных размеров. Затем транспортное средство или комбинация транспортных средств относятся к одной из семи категорий, которые определяют поведение персонала во время перевозки, включая количество пилотов, необходимых для сопровождения водителя на протяжении всего пути.
    </p>
    <h3 className="text-xl font-bold mt-6 text-[#0A5225]">
      Как организована негабаритная перевозка?
    </h3>
    <p className="text-gray-700 leading-relaxed mb-6">
      Наше сотрудничество с клиентом мы начинаем с точного определения специфики негабаритного транспорта, технических и логистических требований, оценки риска, связанного с перевозкой груза, а также определения деталей маршрута. Наши специалисты составляют подробный график перевозок и готовят план погрузки и разгрузки товара. Кроме того, они заботятся о страховании груза от непредвиденных повреждений.
    </p>
    <p className="text-gray-700 leading-relaxed mb-6">
      В Great Steppe Logistics мы придаём большое значение безопасной перевозке негабаритных грузов, что позволяет нам поддерживать высокое качество услуг независимо от типа груза и протяжённости маршрута. Негабаритные перевозки — популярный запрос промышленных предприятий и строительных компаний. Весь процесс организации негабаритных перевозок происходит по согласованию с клиентом, чьи индивидуальные потребности и ожидания всегда ставятся на первое место. Более подробную информацию о перевозке нужного вам груза вы можете получить у наших специалистов.
    </p>
  </div>
</div>





      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NonhabaryteServices;
