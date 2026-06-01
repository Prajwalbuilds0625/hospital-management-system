function DoctorsManagement() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      specialization: "Cardiologist",
    },
    {
      id: 2,
      name: "Dr. Priya Patel",
      specialization: "Neurologist",
    },
    {
      id: 3,
      name: "Dr. Amit Kumar",
      specialization: "Orthopedic",
    },
  ];

  return (
    <div className="container py-5">

      <h2 className="mb-4">
        Doctors Management
      </h2>

      <table className="table table-bordered table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
          </tr>
        </thead>

        <tbody>

          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DoctorsManagement;