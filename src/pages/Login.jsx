import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const storedUser = JSON.parse(localStorage.getItem("patientUser"));

    if (!storedUser) {
      setError("No registered patient found. Please register first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      setError("");
      setSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setSuccess(false);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Patient Login</h2>

            {error && (
              <div className="alert alert-danger text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="alert alert-success text-center">
                Login Successful! Redirecting to Home...
              </div>
            )}

            <form onSubmit={handleLogin}>
              <input name="email" className="form-control mb-3" type="email" placeholder="Email Address" required />
              <input name="password" className="form-control mb-3" type="password" placeholder="Password" required />

              <button className="btn btn-primary w-100">Login</button>
            </form>

            <p className="text-center mt-3">
              New patient? Please register first.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;