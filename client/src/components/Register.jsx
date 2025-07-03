import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}api/auth/register`,
        formData
      );
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fff3e0]">
      <div className="relative w-full max-w-md bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl border border-primary">
        {/* Cross Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-3xl font-extrabold mb-4 text-center text-primary">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign up to start using Talkify.
        </p>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 rounded hover:bg-secondary transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
