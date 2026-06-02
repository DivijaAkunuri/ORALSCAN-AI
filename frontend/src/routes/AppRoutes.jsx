import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Doctor Pages
import Dashboard from "../pages/doctor/Dashboard";

// Patient Pages
import PatientDashboard from "../pages/patient/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication Routes */}
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Doctor Dashboard */}
        <Route
          path="/doctor"
          element={<Dashboard />}
        />

        {/* Patient Dashboard */}
        <Route
          path="/patient"
          element={<PatientDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}