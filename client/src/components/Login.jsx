import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}api/auth/login`,
        credentials
      );
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f1f8e9] via-[#e0f7fa] to-[#fff3e0] px-4">
      <div className="relative max-w-md w-full bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-lg border border-primary">
        {/* Cross Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Login to Talkify</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
