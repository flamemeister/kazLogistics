import React, { useEffect, useState } from "react";

/**
 * Loader that fills the word "KazLogistics" from left (0%) to right (100%)
 * over ~0.5 seconds, then fades out.
 *
 * We ensure the "g" descender is shown by:
 *   1) Using a comfortable line-height.
 *   2) Expanding clip-path on bottom (and top) so the glyph isn't cut.
 */
const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);  // from 0..100
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 0.5s total => 50 increments (each +2%) * 10ms
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 100) current = 100;
      setProgress(current);

      if (current === 100) {
        clearInterval(interval);
        // Brief pause at 100% before fade-out
        setTimeout(() => {
          setFadeOut(true);
          // After fade-out finishes, call onComplete
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
      <div className="text-center">
        {/* Use comfortable line-height to accommodate descenders */}
        <div className="relative inline-block leading-[1.15]">
          {/* Gray text behind */}
          <span className="text-3xl md:text-5xl font-extrabold text-gray-300 block">
            KazLogistics
          </span>

          {/* Green text on top, clipped from right => left
              We expand top/bottom by ~0.15em so descenders won't be cut off */}
          <span
            className="absolute inset-0 text-3xl md:text-5xl font-extrabold text-green-600 block"
            style={{
              whiteSpace: "nowrap",
              clipPath: `inset(-0.15em ${100 - progress}% -0.15em 0)`,
              // top = -0.15em, right = (100 - progress)%, bottom = -0.15em, left = 0
            }}
          >
            KazLogistics
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
