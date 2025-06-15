import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Contact Us</h1>

        <div className="space-y-4">
          <p><strong>NAS Medical Centre</strong></p>
          <p>Address: 123 Haldon Street, Lakemba NSW 2195, Australia</p>
          <p>Phone: (02) 9876 5432</p>
          <p>Email: info@nasmedical.com.au</p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Find Us</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="NAS Medical Centre Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13243.866738732672!2d151.072103!3d-33.919312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb7e5f2c1a81%3A0x7d038a9dbf2cf9f2!2sLakemba%20NSW%202195!5e0!3m2!1sen!2sau!4v1620101010101"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
