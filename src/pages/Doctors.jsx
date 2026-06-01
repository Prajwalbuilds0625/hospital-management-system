function Doctors() {
  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      dept: "Cardiologist",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dr. Priya Patel",
      dept: "Neurologist",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Dr. Amit Kumar",
      dept: "Orthopedic Specialist",
      img: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      name: "Dr. Neha Joshi",
      dept: "Pediatrician",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Dr. Sameer Khan",
      dept: "General Physician",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Dr. Anjali Mehta",
      dept: "Dermatologist",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Expert Doctors</h2>

      <div className="row">
        {doctors.map((doctor, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow text-center h-100">
              <img src={doctor.img} className="card-img-top" alt={doctor.name} />

              <div className="card-body">
                <h4>{doctor.name}</h4>
                <p className="text-primary fw-bold">{doctor.dept}</p>
                <button className="btn btn-primary">Book Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;