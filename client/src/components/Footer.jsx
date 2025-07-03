// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl text-black font-bold mb-3">Talkify</h3>
          <p className="text-gray-300 leading-relaxed">
            Real-time messaging to keep your team connected and productive.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg text-black font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg text-black  font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/blog"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-black text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-yellow-400 transition-colors duration-200 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-yellow-400 transition-colors duration-200 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-yellow-400 transition-colors duration-200 text-xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-black mt-10 text-center  text-sm border-t border-black pt-4">
        © {new Date().getFullYear()} Talkify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
