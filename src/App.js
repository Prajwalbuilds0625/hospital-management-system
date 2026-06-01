import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Departments from "./pages/Departments";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import DoctorsManagement from "./pages/admin/DoctorsManagement";
import PatientsManagement from "./pages/admin/PatientsManagement";
import AppointmentsManagement from "./pages/admin/AppointmentsManagement";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin/doctors" element={<DoctorsManagement />} />
        <Route path="/admin/patients" element={<PatientsManagement />} />
        <Route path="/admin/appointments" element={<AppointmentsManagement />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;