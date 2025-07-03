import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaRegCommentDots,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-[#f1f8e9] via-[#fffde7] to-[#e3f2fd] min-h-screen">
      {/* Header */}
      <section className="py-10 mt-16 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We’re here to help. Feel free to reach out anytime!
        </motion.p>
      </section>

      {/* Contact Details */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
        {[
          {
            icon: <FaMapMarkerAlt className="text-3xl text-primary mb-2" />,
            title: "Our Location",
            desc: "Delhi, India",
          },
          {
            icon: <FaPhoneAlt className="text-3xl text-primary mb-2" />,
            title: "Phone",
            desc: "+91 123 456 7890",
          },
          {
            icon: <FaEnvelope className="text-3xl text-primary mb-2" />,
            title: "Email",
            desc: "support@talkify.com",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/70 backdrop-blur-md border border-light rounded-xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Form + Illustration */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
        {/* Form */}
        <motion.div
          className="bg-forthary/80 backdrop-blur-lg border border-primary rounded-xl shadow-lg p-8 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-black mb-2 text-center">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-primary" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-primary" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div className="relative">
              <FaRegCommentDots className="absolute left-3 top-3 text-primary" />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full pl-10 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-secondary transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg"
            alt="Contact Illustration"
            className="w-full border border-forthary rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          className="overflow-hidden rounded-xl border border-forthary shadow-lg hover:scale-[1.02] transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Delhi Location"
            width="100%"
            height="400"
            className="border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112132.7397808186!2d77.1024901!3d28.7040592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7e4a9b17a9%3A0x48f7fce1e2bb72d9!2sDelhi!5e0!3m2!1sen!2sin!4v1688190844473!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </section>

    </div>
  );
};

export default Contact;
