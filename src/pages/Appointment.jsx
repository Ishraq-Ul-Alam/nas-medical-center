const Appointment = () => {
  return (
    <section id="appointments" className="section bg-gray-100">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
        <p className="mb-4">You can book an appointment using HotDoc or HealthEngine:</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.hotdoc.com.au/medical-centres/lakemba-NSW-2195/nas-medical-centre/doctors"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book via HotDoc
          </a>
          <a
            href="https://healthengine.com.au/medical-centre/nsw/lakemba/nas-medical-centre/s65756"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book via HealthEngine
          </a>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
