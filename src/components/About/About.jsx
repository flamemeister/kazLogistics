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
            <h1 className="text-4xl md:text-5xl font-bold">ABOUT US</h1>
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
                alt="Worker with a crane"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Commitment to Excellence
              </h2>
              <div className="mt-2 h-1 w-full bg-green-500"></div>
              <p className="text-gray-600 leading-relaxed">
                At Kazakh Trans Trade, we pride ourselves on delivering the
                highest quality services in the logistics and transportation
                industry. From container transport to supply chain management,
                we ensure efficiency and reliability in everything we do.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your Trusted Logistics Partner
              </h2>
              <div className="mt-2 h-1 w-full bg-green-500"></div>
              <p className="text-gray-600 leading-relaxed">
                Whether transporting goods across Kazakhstan or internationally,
                we are here to help you every step of the way. Our team of
                professionals is dedicated to meeting your needs and exceeding
                your expectations.
              </p>
            </div>
            <div>
              <img
                src={image2}
                alt="Shipping containers"
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
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-600 text-lg mt-4">
            Reasons to choose us as your freight forwarding partner
          </p>
          <div className="mt-2 h-1 w-16 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Reliability */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">Reliability</h3>
              <p className="text-gray-600 mt-2">
                We understand how important it is for business to ensure the
                safety and timeliness of cargo transportation. KazakhTransTrade
                is proud of its reputation as a reliable partner. We guarantee
                that your cargo will be delivered safe and sound, as well as
                within the agreed time frame. Our processes are controlled at
                every stage, which allows us to minimize risks and avoid
                unexpected delays.
              </p>
            </div>
          </div>

          {/* Customized Solutions */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <PuzzlePieceIcon className="h-8 w-8 text-green-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">
                Customized Solutions
              </h3>
              <p className="text-gray-600 mt-2">
                We understand that every business is unique and requires an
                individual approach. That’s why we work closely with our clients
                to develop logistics strategies that perfectly match their
                needs. Our experts are ready to create tailored solutions that
                ensure the smooth operation of your supply chain.
              </p>
            </div>
          </div>

          {/* Integrated Approach */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <ChartBarIcon className="h-8 w-8 text-green-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">
                Integrated Approach
              </h3>
              <p className="text-gray-600 mt-2">
                Unlike many other companies, we offer not only transportation
                services, but also a full range of logistics solutions. From
                documentation processing to warehousing, we take on all stages
                associated with the movement of your cargo. This allows you to
                focus on developing your business, entrusting us with all
                logistics aspects.
              </p>
            </div>
          </div>

          {/* Experience and Professionalism */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AcademicCapIcon className="h-8 w-8 text-green-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">
                Experience and Professionalism
              </h3>
              <p className="text-gray-600 mt-2">
                Since its foundation in 2020, KazakhTransTrade has accumulated
                extensive experience in working with various industries and
                types of cargo. Our team consists of highly qualified
                specialists who are constantly learning and monitoring new
                trends in logistics. This allows us to quickly adapt to changing
                conditions and provide the best service to our clients.
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
