import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// استيراد الصفحات - تأكد إن الملفات موجودة في المجلد الصحيح
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import SecretaryDashboard from "./pages/SecretaryDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/secretary" element={<SecretaryDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default App;
