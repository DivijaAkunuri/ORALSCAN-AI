import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import RoleSelector from "./RoleSelector";

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [selectedRole, setSelectedRole] = useState("Doctor");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedRole === "Doctor") {
      navigate("/doctor");
    } else {
      navigate("/patient");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white px-8">
      <div className="w-full max-w-lg">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to continue your oral cancer screening workflow.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Select Role
            </label>

            <RoleSelector
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="doctor@hospital.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:border-blue-600"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-blue-700 text-sm hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Sign In
          </button>

        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?

          <Link
            to="/register"
            className="ml-2 text-blue-700 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}