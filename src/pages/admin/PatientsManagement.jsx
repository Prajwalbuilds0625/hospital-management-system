function PatientsManagement() {
  const patients = [
    {
      id: 1,
      name: "Rahul Verma",
      age: 28,
    },
    {
      id: 2,
      name: "Sneha Joshi",
      age: 35,
    },
    {
      id: 3,
      name: "Aditya Patil",
      age: 42,
    },
  ];

  return (
    <div className="container py-5">

      <h2 className="mb-4">
        Patients Management
      </h2>

      <table className="table table-bordered table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>

          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default PatientsManagement;