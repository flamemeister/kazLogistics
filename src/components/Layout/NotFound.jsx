import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
// Reuse your hero background image
import backgroundImage from "../../assets/aboutus.jpg";

const fadeInAnimations = `
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes typing {
  from { width: 0 }
  to { width: 220px } /* adjust to the length of your text */
}
@keyframes blink {
  0%, 50% { border-color: white; }
  51%, 100% { border-color: transparent; }
}
`;

const NotFound = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Inject keyframe animations */}
      <style>{fadeInAnimations}</style>

      {/* ===== HERO SECTION ===== */}
      <div
        className="relative bg-cover bg-center text-white h-[50vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        {/* Hero content */}
        <div className="relative flex items-center justify-center h-full">
          <div
            className="text-center px-4"
            style={{
              animation: "fadeIn 0.8s ease-out forwards",
            }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wider">
              404
            </h1>
            <div className="mt-2 h-1 w-16 bg-green-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-grow flex flex-col items-center justify-center bg-white py-10">
        <div
          className="text-center max-w-xl px-4"
          style={{
            animation: "fadeIn 0.8s ease-out 0.3s forwards",
            opacity: 0,
          }}
        >
          {/* Typing effect container */}
          <div className="relative text-gray-800 text-2xl md:text-3xl font-bold inline-block mb-6">
            <span
              className="border-r-2 border-white overflow-hidden whitespace-nowrap"
              style={{
                animation: "typing 2s steps(22) 0.5s forwards, blink 1s infinite step-end alternate 2.5s",
                whiteSpace: "nowrap",
                width: "0px",
              }}
            >
              Страница не найдена
            </span>
          </div>
          <p className="text-gray-600 text-lg mb-8 mt-2">
            Кажется, вы оказались не там. Проверьте адрес или вернитесь на главную.
          </p>
          <Link
            to="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md 
                       transition-colors font-semibold"
          >
            На главную
          </Link>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default NotFound;
