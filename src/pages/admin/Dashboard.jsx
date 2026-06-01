import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">
        Admin Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h2>👨‍⚕️</h2>
            <h4>Doctors</h4>
            <Link
              to="/admin/doctors"
              className="btn btn-primary"
            >
              Manage Doctors
            </Link>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h2>🧑‍🤝‍🧑</h2>
            <h4>Patients</h4>
            <Link
              to="/admin/patients"
              className="btn btn-success"
            >
              Manage Patients
            </Link>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h2>📅</h2>
            <h4>Appointments</h4>
            <Link
              to="/admin/appointments"
              className="btn btn-warning"
            >
              Manage Appointments
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;