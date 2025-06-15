import React, { useState, useEffect } from "react";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";


const images = [hero2, hero3];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full object-cover h-64 md:h-96"
      />
      <div className="text-center p-4 bg-green-100">
        <h2 className="text-2xl font-semibold text-green-800">NAS Medical Centre</h2>
        <p className="mt-2 text-gray-700">
          Your trusted family GP clinic in Sydney. Book your appointment through HotDoc or HealthEngine today.
        </p>
      </div>
    </div>
  );
};

export default HeroSlider;
