import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;

    const user = { name, email, phone, password };

    localStorage.setItem("patientUser", JSON.stringify(user));

    setSuccess(true);

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Patient Registration</h2>

            {success && (
              <div className="alert alert-success text-center">
                Registration Successful! Redirecting to Login...
              </div>
            )}

            <form onSubmit={handleRegister}>
              <input name="name" className="form-control mb-3" type="text" placeholder="Full Name" required />
              <input name="email" className="form-control mb-3" type="email" placeholder="Email Address" required />
              <input name="phone" className="form-control mb-3" type="tel" placeholder="Phone Number" required />
              <input name="password" className="form-control mb-3" type="password" placeholder="Create Password" required />

              <button className="btn btn-warning w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;