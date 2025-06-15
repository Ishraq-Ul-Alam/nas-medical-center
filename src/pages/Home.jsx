import React, { useState, useEffect } from "react";
import HeroSlider from "../components/HeroSlider";

// Import local images
import c1 from "../assets/c1.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";

const dynamicImages = [c1, c3, c4];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [missionVisible, setMissionVisible] = useState(false);

  useEffect(() => {
    setMissionVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % dynamicImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="max-w-6xl mx-auto px-4">
      <HeroSlider />

      {/* Mission Section */}
      <section
        className={`my-12 p-6 bg-green-50 rounded-lg shadow-lg text-center transition-opacity duration-1000 ease-in-out transform ${
          missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Mission</h2>
        <p className="text-green-700 max-w-3xl mx-auto text-lg leading-relaxed">
          At NAS Medical Centre Lakemba, our mission is to provide compassionate,
          comprehensive, and accessible healthcare to our community. We are dedicated to
          improving the health and well-being of our patients through personalized care,
          professional expertise, and a supportive environment.
        </p>
      </section>

      {/* Caring in Action - Local Images */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
          Caring in Action
        </h2>
        <div className="relative w-full max-w-4xl mx-auto h-64 rounded-lg overflow-hidden shadow-lg">
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {dynamicImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full flex-shrink-0 h-full object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
