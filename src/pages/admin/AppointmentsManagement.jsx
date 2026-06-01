function AppointmentsManagement() {
  const appointments = [
    {
      id: 1,
      patient: "Rahul Verma",
      doctor: "Dr. Sharma",
      date: "12-06-2026",
    },
    {
      id: 2,
      patient: "Sneha Joshi",
      doctor: "Dr. Patel",
      date: "15-06-2026",
    },
    {
      id: 3,
      patient: "Aditya Patil",
      doctor: "Dr. Kumar",
      date: "20-06-2026",
    },
  ];

  return (
    <div className="container py-5">

      <h2 className="mb-4">
        Appointments Management
      </h2>

      <table className="table table-bordered table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patient}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.date}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AppointmentsManagement;