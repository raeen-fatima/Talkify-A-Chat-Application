import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f1f8e9] via-[#fffde7] to-[#e3f2fd]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg p-6 md:p-10"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions or need help? Fill out the form and we’ll get back to you shortly.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded font-medium hover:bg-secondary transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-80 md:h-full overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <iframe
            title="Delhi Location"
            width="100%"
            height="100%"
            className="border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112132.7397808186!2d77.1024901!3d28.7040592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7e4a9b17a9%3A0x48f7fce1e2bb72d9!2sDelhi!5e0!3m2!1sen!2sin!4v1688190844473!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
