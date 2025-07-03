import React from "react";
import FeaturesSection from "../components/FeatureSection";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testinomals";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaComments, FaUsers, FaLock, FaRocket, FaCogs, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Services from "../components/Service";

function ServicePage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-44 bg-gradient-to-br from-[#f1f8e9] via-[#e0f7fa] to-[#fffde7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              <Typewriter
                words={[
                  "Empower Your Conversations",
                  "Connect Instantly",
                  "Collaborate Seamlessly",
                  "Grow Your Business"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Discover the power of seamless real-time messaging, secure group chats, and intuitive collaboration tools.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaComments className="text-primary text-xl" />
                <span className="text-gray-800 font-medium">Instant Messaging</span>
              </div>
              <div className="flex items-center gap-3">
                <FaUsers className="text-primary text-xl" />
                <span className="text-gray-800 font-medium">Team Collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLock className="text-primary text-xl" />
                <span className="text-gray-800 font-medium">Secure Data</span>
              </div>
              <div className="flex items-center gap-3">
                <FaRocket className="text-primary text-xl" />
                <span className="text-gray-800 font-medium">Fast Performance</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className=" rounded-2xl overflow-hidden shadow-xl border border-primary/80 backdrop-blur-xl bg-white/20">
              <img
                src="https://repository-images.githubusercontent.com/255596263/1d954b80-83ee-11ea-846e-92612af21968"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-primary"
          >
            <img
              src="https://www.hostpapa.com/blog/app/uploads/2023/05/Best-Chat-Apps-on-The-Internet-Header.jpg"
              alt="About Talkify"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Why Choose Talkify?
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Talkify is designed to help you build stronger connections through instant communication.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <FaCogs className="text-primary text-2xl mb-2" />,
                  title: "Customizable",
                  desc: "Tailor your experience easily."
                },
                {
                  icon: <FaChartLine className="text-primary text-2xl mb-2" />,
                  title: "Analytics",
                  desc: "Measure engagement and growth."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="p-4 bg-white/70 backdrop-blur-lg rounded-lg shadow border border-light/100 hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.icon}
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-r from-[#fffde7] via-[#e0f7fa] to-[#f1f8e9]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h3
            className="text-3xl md:text-4xl font-extrabold text-primary mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            More Ways to Connect
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMobileAlt className="text-primary text-3xl mb-4" />,
                title: "Mobile Ready",
                desc: "Stay connected on any device."
              },
              {
                icon: <FaUsers className="text-primary text-3xl mb-4" />,
                title: "Community Building",
                desc: "Grow your audience and engage easily."
              },
              {
                icon: <FaLock className="text-primary text-3xl mb-4" />,
                title: "Advanced Security",
                desc: "Protect your conversations."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white/70 backdrop-blur-lg rounded-lg shadow-lg border border-light hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {service.icon}
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* Pricing */}
      <Pricing />

      {/* Features */}
      <FeaturesSection />




      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ServicePage;
