import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          MediCare Hospital
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/doctors">
                Doctors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/departments">
                Departments
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/appointment">
                Appointment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-light ms-2" to="/login">
                Patient Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-warning ms-2" to="/register">
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-dark ms-2" to="/admin-login">
                Admin
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;