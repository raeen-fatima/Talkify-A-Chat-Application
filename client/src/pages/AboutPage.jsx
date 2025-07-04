import React from "react";
import HowItWorks from "../components/HowItworks";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaHandsHelping, FaLightbulb, FaHeart } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fffde7] p-8 pt-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-rocker text-primary mb-4">
            About Talkify
          </h1>
          <p className="text-gray-700 text-lg">
            The modern communication platform empowering you to connect and collaborate.
          </p>
      </div>
      

      {/* Our Story */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold font-rocker text-primary mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg mb-2">
              Founded with a vision to simplify communication, Talkify has grown into a global platform.
            </p>
            <p className="text-gray-600">
              We embrace innovation and customer-focus to create an experience that feels personal and powerful.
            </p>
          </motion.div>
          <motion.img
            src="https://meritstory.com/wp-content/uploads/2023/06/video-cover-blog-single.jpg"
            alt="Our Story"
            className="shadow-lg hover:scale-105 border border-gray-200 transition-transform duration-300 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fffde7]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://thumbs.dreamstime.com/b/card-text-our-mission-white-background-near-office-supplies-alarm-clock-business-card-text-our-mission-231602401.jpg"
            alt="Our Mission"
            className=" shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold font-rocker text-primary mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-2">
              To build an inclusive and powerful platform that helps teams thrive.
            </p>
            <p className="text-gray-600">
              We deliver reliable, innovative tools to make communication effortless.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-primary font-rocker mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg mb-2">
              We envision a world where distance is irrelevant, and ideas flow freely.
            </p>
            <p className="text-gray-600">
              Talkify strives to lead this transformation with integrity and purpose.
            </p>
          </motion.div>
          <motion.img
            src="https://images.unsplash.com/photo-1738152878182-869a3fc9e220?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our Vision"
            className=" shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#f1f8e9]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold font-rocker text-primary mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandsHelping className="text-4xl text-primary mb-4" />,
                title: "Collaboration",
                desc: "We build better together."
              },
              {
                icon: <FaLightbulb className="text-4xl text-primary mb-4" />,
                title: "Innovation",
                desc: "Always exploring new ideas."
              },
              {
                icon: <FaHeart className="text-4xl text-primary mb-4" />,
                title: "Integrity",
                desc: "Trust and transparency guide us."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/70 backdrop-blur-md border border-gray-200 rounded shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {value.icon}
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold font-rocker text-primary mb-12">Meet our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Alice", "Bob", "Charlie"].map((name, index) => (
              <motion.div
                key={name}
                className="p-6 bg-primary/80 backdrop-blur-md border border-gray-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 5}`}
                  alt={name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-300">Team Member</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AboutPage;
// This code defines an AboutPage component for a React application. It includes sections for the company's story, mission, vision, core values, and team members, all styled with Tailwind CSS and animated using Framer Motion. The page also features a navigation bar and footer components.