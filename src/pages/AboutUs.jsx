// src/pages/AboutUs.jsx
import React from "react";

const doctors = [
  {
    name: "Dr Noorjahan Shelly",
    title: "General Practitioner, Female",
    qualification: "FRACGP",
  },
  {
    name: "MD Akthar Hossain",
    title: "General Practitioner, Male",
    qualification: "FRACGP",
  },
  {
    name: "Dr. Nazma Rahman",
    title: "General Practitioner, Female",
    qualification: "FRACGP",
  },
];

const AboutUs = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-green-700 mb-4">Our Doctors</h1>
      <div className="space-y-6">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-4 bg-white shadow-md"
          >
            <h2 className="text-xl font-bold">{doc.name}</h2>
            <p className="text-gray-700">{doc.title}</p>
            <p className="text-gray-600 italic">{doc.qualification}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
