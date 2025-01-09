import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/image5.jpg";
import Footer from "../Footer/Footer";
import card1 from "../../assets/images/auto.png";
import card2 from "../../assets/images/air.png";
import card3 from "../../assets/images/train.png";
import card4 from "../../assets/images/container.png";
import card5 from "../../assets/images/multimodal.png";
import card6 from "../../assets/images/non-habaryte.png";
import card7 from "../../assets/images/projective.png";

const Services = () => {
  const services = [
    { id: 1, image: card1, link: "/services/auto" },
    { id: 2, image: card2, link: "/services/air" },
    { id: 3, image: card3, link: "/services/railway" },
    { id: 4, image: card4, link: "/services/container" },
    { id: 5, image: card5, link: "/services/multimodal" },
    { id: 6, image: card6, link: "/services/non-habaryte" },
    { id: 7, image: card7, link: "/services/projective" },
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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Наши услуги</h1>
            <div className="mt-2 h-1 w-16 bg-green-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                to={service.link}
                key={service.id}
                className="group block rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-full h-full">
                  <img
                    src={service.image}
                    alt={`Service ${service.id}`}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
