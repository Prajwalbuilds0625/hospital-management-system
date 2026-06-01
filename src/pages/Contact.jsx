import { useState } from "react";

function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Contact Us</h2>

      <div className="row">
        <div className="col-md-5 mb-4">
          <div className="card shadow p-4 h-100">
            <h4>Hospital Information</h4>
            <p><strong>Address:</strong> Pune, Maharashtra</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> medicarehospital@gmail.com</p>
            <p><strong>Emergency:</strong> Available 24/7</p>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card shadow p-4">

            {success && (
              <div className="alert alert-success text-center">
                Message Sent Successfully! We will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input className="form-control mb-3" placeholder="Your Name" required />
              <input className="form-control mb-3" type="email" placeholder="Your Email" required />
              <textarea className="form-control mb-3" rows="5" placeholder="Your Message" required></textarea>

              <button className="btn btn-primary">
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;