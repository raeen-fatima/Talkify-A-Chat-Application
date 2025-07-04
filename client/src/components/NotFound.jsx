import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffde7] via-[#f1f8e9] to-[#e3f2fd] flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-secondary transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
