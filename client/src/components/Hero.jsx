import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] via-[#fefefe] to-[#e0f2fe] overflow-hidden px-4 py-16">
        {/* Optional Subtle Background Shape */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40 pointer-events-none"
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Welcome to{" "}
            <span className="text-primary">Talkify</span> Chat App
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Real-time messaging platform to connect you with your team and friends instantly.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/register"
                className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-secondary transition"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/about"
                className="inline-block px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Hero;
