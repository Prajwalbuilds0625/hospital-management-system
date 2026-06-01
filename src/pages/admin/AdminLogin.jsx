import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      setError("");
      navigate("/admin-dashboard");
    } else {
      setError("Invalid admin username or password");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Admin Login</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleLogin}>
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Admin Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                className="form-control mb-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn btn-dark w-100">Login</button>
            </form>

            <p className="text-center mt-3 mb-0">
              Username: <b>admin</b> | Password: <b>admin123</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;