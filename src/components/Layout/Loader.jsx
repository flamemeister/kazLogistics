import React, { useEffect, useState } from "react";
import bgImage from "../../assets/logo_white.png";

/**
 * Loader that fills a PNG icon from left (0%) to right (100%)
 * over ~0.5 seconds, then fades out.
 */
const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0); 
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 100) current = 100;
      setProgress(current);

      if (current === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            onComplete && onComplete();
          }, 300);
        }, 100);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center 
        bg-white transition-opacity duration-300
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <div className="relative w-48 h-48">
        {/* PNG Icon background */}
        <img
          src={bgImage}
          alt="Loader Icon"
          className="absolute inset-0 w-full h-full"
          style={{
            filter: "grayscale(100%)", 
          }}
        />
        {/* Green fill overlay */}
        <div
          className="absolute inset-0 bg-green-600"
          style={{
            maskImage: `url(${bgImage})`,
            WebkitMaskImage: `url(${bgImage})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            clipPath: `inset(0 ${100 - progress}% 0 0)`, 
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
