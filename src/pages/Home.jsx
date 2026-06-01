function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <div className="container text-center">
          <h1 className="display-2 fw-bold">
            MediCare Hospital
          </h1>

          <p className="lead fs-3">
            Advanced Healthcare For A Better Tomorrow
          </p>

          <button className="btn btn-primary btn-lg me-3">
            Book Appointment
          </button>

          <button className="btn btn-light btn-lg">
            Our Doctors
          </button>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center mb-5">
          Why Choose Us
        </h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h3>👨‍⚕️ Expert Doctors</h3>
              <p>
                Highly qualified specialists
                across all departments.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h3>🏥 Modern Facilities</h3>
              <p>
                Latest medical equipment and
                advanced treatment methods.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h3>🚑 24/7 Emergency</h3>
              <p>
                Emergency services available
                around the clock.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-light py-5">

        <div className="container">

          <h2 className="text-center mb-5">
            Hospital Statistics
          </h2>

          <div className="row text-center">

            <div className="col-md-3">
              <h1 className="fw-bold text-primary">
                50+
              </h1>
              <p>Doctors</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold text-primary">
                1000+
              </h1>
              <p>Patients</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold text-primary">
                20+
              </h1>
              <p>Departments</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold text-primary">
                24/7
              </h1>
              <p>Emergency</p>
            </div>

          </div>

        </div>

      </section>
      <section className="container py-5">

  <h2 className="text-center mb-5">
    Meet Our Specialists
  </h2>

  <div className="row">

    <div className="col-md-4 mb-4">
      <div className="card shadow text-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="card-img-top"
          alt="Doctor"
        />

        <div className="card-body">
          <h4>Dr. Rajesh Sharma</h4>
          <p>Cardiologist</p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card shadow text-center">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="card-img-top"
          alt="Doctor"
        />

        <div className="card-body">
          <h4>Dr. Priya Patel</h4>
          <p>Neurologist</p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card shadow text-center">
        <img
          src="https://randomuser.me/api/portraits/men/56.jpg"
          className="card-img-top"
          alt="Doctor"
        />

        <div className="card-body">
          <h4>Dr. Amit Kumar</h4>
          <p>Orthopedic Specialist</p>
        </div>
      </div>
    </div>

  </div>

</section>
<section className="bg-light py-5">

  <div className="container">

    <h2 className="text-center mb-5">
      Patient Testimonials
    </h2>

    <div className="row">

      <div className="col-md-4 mb-4">
        <div className="card shadow p-4">
          <p>
            Excellent treatment and caring staff.
            Highly recommended.
          </p>

          <h5>- Rahul Verma</h5>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow p-4">
          <p>
            Doctors were very professional and
            explained everything clearly.
          </p>

          <h5>- Sneha Joshi</h5>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow p-4">
          <p>
            Great facilities and quick emergency
            response.
          </p>

          <h5>- Aditya Patil</h5>
        </div>
      </div>

    </div>

  </div>

</section>
<section className="bg-danger text-white text-center py-5">

  <div className="container">

    <h2>
      24/7 Emergency Services
    </h2>

    <h3>
      Call: +91 9876543210
    </h3>

  </div>

</section>
    </>
  );
}

export default Home;