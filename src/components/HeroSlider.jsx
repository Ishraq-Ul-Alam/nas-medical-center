import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img src={hero2} alt="Slide 1" />
        </div>
        <div>
          <img src={hero3} alt="Slide 2" />
        </div>
        
      </Carousel>

      {/* 📌 Text below the slider */}
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
