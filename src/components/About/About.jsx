import React from "react";
import backgroundImage from "../../assets/aboutus.jpg";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpg";
import Footer from "../Footer/Footer";
import {
  CheckCircleIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";


const fadeAnimations = `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
`;

const AboutUs = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold">О НАС</h1>
            <div className="mt-2 h-1 w-16 bg-green-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={image1}
                alt="Работник с краном"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Наша приверженность к качеству
              </h2>
              <div className="mt-2 h-1 w-full bg-green-500"></div>
              <p className="text-gray-600 leading-relaxed">
                В компании Great Steppe Logistics мы гордимся предоставлением
                высококачественных услуг в сфере логистики и транспортировки.
                От перевозки контейнеров до управления цепочками поставок, мы
                обеспечиваем эффективность и надежность во всех аспектах нашей
                работы.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ваш надежный логистический партнер
              </h2>
              <div className="mt-2 h-1 w-full bg-green-500"></div>
              <p className="text-gray-600 leading-relaxed">
                Независимо от того, требуется ли перевозка грузов по Казахстану
                или за его пределами, мы готовы помочь на каждом этапе. Наша
                команда профессионалов стремится удовлетворить ваши
                потребности и превзойти ожидания.
              </p>
            </div>
            <div>
              <img
                src={image2}
                alt="Контейнеры для перевозок"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="my-16 flex justify-center">
        <hr className="border-gray-300 w-3/5" />
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-8 mb-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Почему выбирают нас?</h2>
          <p className="text-gray-600 text-lg mt-4">
            Причины выбрать нас в качестве вашего логистического партнера
          </p>
          <div className="mt-2 h-1 w-16 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Надежность */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">Надежность</h3>
              <p className="text-gray-600 mt-2">
                Мы понимаем, насколько важно для бизнеса обеспечить безопасность
                и своевременность грузоперевозок. Great Steppe Logistics гордится
                своей репутацией надежного партнера. Мы гарантируем, что ваш
                груз будет доставлен в целости и сохранности в установленные
                сроки. Наши процессы контролируются на каждом этапе, что
                позволяет минимизировать риски и избежать неожиданных задержек.
              </p>
            </div>
          </div>

          {/* Индивидуальные решения */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <PuzzlePieceIcon className="h-8 w-8 text-green-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">
                Индивидуальные решения
              </h3>
              <p className="text-gray-600 mt-2">
                Мы понимаем, что каждый бизнес уникален и требует индивидуального
                подхода. Именно поэтому мы тесно сотрудничаем с нашими клиентами,
                разрабатывая логистические стратегии, которые идеально подходят
                для их потребностей. Наши эксперты готовы создать
                индивидуальные решения, которые обеспечат бесперебойную работу
                вашей цепочки поставок.
              </p>
            </div>
          </div>

          {/* Интегрированный подход */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <ChartBarIcon className="h-8 w-8 text-green-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">
                Интегрированный подход
              </h3>
              <p className="text-gray-600 mt-2">
                В отличие от многих других компаний, мы предлагаем не только
                транспортные услуги, но и полный спектр логистических решений.
                От обработки документации до складирования мы берем на себя все
                этапы, связанные с перемещением вашего груза. Это позволяет вам
                сосредоточиться на развитии бизнеса, доверив нам все аспекты
                логистики.
              </p>
            </div>
          </div>

          {/* Опыт и профессионализм */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AcademicCapIcon className="h-8 w-8 text-green-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">
                Опыт и профессионализм
              </h3>
              <p className="text-gray-600 mt-2">
                С момента основания в 2020 году компания Great Steppe Logistics
                накопила обширный опыт работы с различными отраслями и типами
                грузов. Наша команда состоит из высококвалифицированных
                специалистов, которые постоянно учатся и отслеживают новые
                тенденции в логистике. Это позволяет нам быстро адаптироваться к
                изменяющимся условиям и предоставлять нашим клиентам лучший
                сервис.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
