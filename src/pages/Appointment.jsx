import { useState } from "react";

function Appointment() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Book Appointment</h2>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow p-4">

            {success && (
              <div className="alert alert-success text-center">
                Appointment Booked Successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input className="form-control mb-3" type="text" placeholder="Full Name" required />
              <input className="form-control mb-3" type="email" placeholder="Email Address" required />
              <input className="form-control mb-3" type="tel" placeholder="Phone Number" required />

              <select className="form-control mb-3" required>
                <option value="">Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
              </select>

              <input className="form-control mb-3" type="date" required />

              <textarea
                className="form-control mb-3"
                rows="4"
                placeholder="Describe your problem"
                required
              ></textarea>

              <button className="btn btn-primary w-100">
                Submit Appointment
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;