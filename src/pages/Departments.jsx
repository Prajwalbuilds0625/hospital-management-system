function Departments() {
  const departments = [
    { icon: "❤️", name: "Cardiology", desc: "Heart care and treatment" },
    { icon: "🧠", name: "Neurology", desc: "Brain and nervous system care" },
    { icon: "🦴", name: "Orthopedics", desc: "Bone and joint treatment" },
    { icon: "👶", name: "Pediatrics", desc: "Child healthcare services" },
    { icon: "🚑", name: "Emergency", desc: "24/7 emergency support" },
    { icon: "🩺", name: "General Medicine", desc: "General health checkups" },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Departments</h2>

      <div className="row">
        {departments.map((dept, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow h-100 text-center p-4">
              <h1>{dept.icon}</h1>
              <h4>{dept.name}</h4>
              <p>{dept.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;