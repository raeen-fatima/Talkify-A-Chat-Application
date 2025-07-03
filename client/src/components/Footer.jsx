import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Talkify</h3>
          <p className="text-gray-300">
            Real-time messaging to keep your team connected.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300">Facebook</a>
            <a href="#" className="hover:text-yellow-300">Twitter</a>
            <a href="#" className="hover:text-yellow-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Talkify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
