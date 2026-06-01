function About() {
  return (
    <div>
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>About MediCare Hospital</h1>
          <p className="lead">Providing trusted healthcare with care, technology, and expert doctors.</p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              className="img-fluid rounded shadow"
              alt="Hospital Team"
            />
          </div>

          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              MediCare Hospital is dedicated to delivering quality healthcare services
              with modern facilities, experienced doctors, and patient-friendly support.
            </p>
            <p>
              Our aim is to provide quick, reliable, and affordable medical care for
              every patient.
            </p>

            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Mission & Vision</h2>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card shadow p-4 h-100">
                <h4>🎯 Our Mission</h4>
                <p>
                  To provide excellent healthcare services with compassion,
                  safety, and advanced medical support.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow p-4 h-100">
                <h4>🌟 Our Vision</h4>
                <p>
                  To become a trusted hospital known for quality treatment,
                  patient care, and modern healthcare facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;