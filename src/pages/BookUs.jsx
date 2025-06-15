import React from "react";

const BookUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Book Us
      </h1>

      {/* Booking Links */}
      <section className="bg-green-50 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">Book Your Appointment</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://www.hotdoc.com.au/medical-centres/lakemba-NSW-2195/nas-medical-centre/doctors"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition"
          >
            Book via HotDoc
          </a>
          <a
            href="https://healthengine.com.au/medical-centre/nsw/lakemba/nas-medical-centre/s65756"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition"
          >
            Book via HealthEngine
          </a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-green-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Contact Us</h2>
        <p className="mb-2">
          <strong>Address:</strong> 123 Lakemba St, Lakemba NSW 2195, Australia
        </p>
        <p className="mb-2">
          <strong>Phone:</strong>{" "}
          <a href="tel:+61212345678" className="text-green-700 hover:underline">
            (02) 9758 9947
          </a>
        </p>
        <p className="mb-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:info@nasmedical.com.au" className="text-green-700 hover:underline">
            info@nasmedical.com.au
          </a>
        </p>
        <p className="mb-4">
          <strong>Office Hours:</strong> Mon–Fri: 8am–6pm, Sat: 9am–1pm
        </p>

        {/* Google Map Embed */}
        <div className="mb-4">
          <iframe
            title="NAS Medical Centre Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.944680455463!2d151.05984531520965!3d-33.90058488066759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bcba9de6dd1f%3A0xced7b6abf1efaf03!2sLakemba%20NSW%202195%2C%20Australia!5e0!3m2!1sen!2sus!4v1686798527777!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>

        {/* GPS Coordinates Link */}
        <p>
          <strong>GPS Coordinates:</strong>{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=-33.900585,151.059845"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline"
          >
            -33.900585, 151.059845
          </a>
        </p>
      </section>
    </div>
  );
};

export default BookUs;
