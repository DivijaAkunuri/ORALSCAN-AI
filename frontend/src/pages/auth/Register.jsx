import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import RoleSelector from "../../components/auth/RoleSelector";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [selectedRole, setSelectedRole] = useState("Doctor");

  const [formData, setFormData] = useState({
    fullName: "",
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

    alert("Registration Successful!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-lg rounded-3xl shadow-lg p-10">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-blue-700">
            Create Account
          </h1>

          <p className="text-gray-500 mt-3">
            Join OralScan AI and start screening.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

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
              Full Name
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl pl-11 py-3 focus:outline-none focus:border-blue-500"
                required
              />

            </div>

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
                className="w-full border border-gray-300 rounded-xl pl-11 py-3 focus:outline-none focus:border-blue-500"
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
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:border-blue-500"
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

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Create Account
          </button>

        </form>

        <div className="text-center mt-6 text-gray-600">

          Already have an account?

          <Link
            to="/"
            className="ml-2 text-blue-700 font-semibold"
          >
            Sign In
          </Link>

        </div>

      </div>

    </div>
  );
}