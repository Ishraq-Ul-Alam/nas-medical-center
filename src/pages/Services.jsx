import React from "react";

// ✅ Import local images
import GPConsultation from "../assets/genreal p.jpg";
import Immunisation from "../assets/immune.jpg";
import SkinChecks from "../assets/skin.jpg";

const servicesData = [
  {
    title: "General Consultation",
    description:
      "Comprehensive health assessments and treatment plans for all ages.",
    imgUrl: GPConsultation, // ✅ use local image
  },
  {
    title: "Immunization & Vaccination",
    description: "Protect yourself and your family with recommended vaccines.",
    imgUrl: Immunisation, // ✅ use local image
  },
  {
    title: "Women’s Health",
    description:
      "Expert care for women including reproductive health and screenings.",
    imgUrl:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Chronic Disease Management",
    description:
      "Ongoing care plans for diabetes, hypertension, asthma, and more.",
    imgUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Skin Checks & Minor Procedures",
    description:
      "Assessment and treatment for skin conditions and minor surgical procedures.",
    imgUrl: SkinChecks, // ✅ use local image
  },
];

const Services = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        Our Services
      </h1>
      <ol className="space-y-10">
        {servicesData.map(({ title, description, imgUrl }, idx) => (
          <li
            key={title}
            className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 bg-green-50 p-6 rounded-lg shadow-md"
          >
            <img
              src={imgUrl}
              alt={title}
              className="w-full md:w-48 h-32 object-cover rounded-md shadow-sm"
              loading="lazy"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-green-800 mb-2">
                {idx + 1}. {title}
              </h2>
              <p className="text-green-700">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Services;
