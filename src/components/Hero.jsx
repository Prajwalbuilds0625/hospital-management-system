function Home() {
  return (
    <>

      <section className="bg-primary text-white text-center p-5">

        <div className="container">

          <h1 className="display-3 fw-bold">
            Welcome To MediCare Hospital
          </h1>

          <p className="lead">
            Trusted Healthcare Services For Your Family
          </p>

        </div>

      </section>

      <div className="container py-5">

        <h2 className="text-center mb-5">
          Our Services
        </h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h4>Cardiology</h4>
              <p>Heart related treatments.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h4>Neurology</h4>
              <p>Brain and nervous system care.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h4>Orthopedics</h4>
              <p>Bone and joint treatments.</p>
            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export default Home;