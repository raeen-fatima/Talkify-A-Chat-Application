import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
    <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fff3e0] flex items-center justify-center px-4 py-12">
        
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className= "text-primary font-merienda">Talkify</span> Chat App
          </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 font-condiment">
          Real-time messaging platform to connect you with your team and friends instantly.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded shadow hover:bg-secondary transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="inline-block px-6 py-3 border border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
    </>
  );

};

export default Hero;
