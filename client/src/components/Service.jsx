import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "Real-time Messaging",
    desc: "Fast chat with receipts.",
    icon: FaComments,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Group Collaboration",
    desc: "Organize teams with channels.",
    icon: FaUsers,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Advanced Security",
    desc: "End-to-end encrypted chats.",
    icon: FaShieldAlt,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Mobile Access",
    desc: "Stay connected anywhere.",
    icon: FaMobileAlt,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Scalable Performance",
    desc: "Blazing fast growth-ready.",
    icon: FaRocket,
    color: "from-pink-400 to-red-500",
  },
  {
    title: "Insightful Analytics",
    desc: "Smart engagement dashboards.",
    icon: FaChartLine,
    color: "from-teal-400 to-cyan-500",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fffde7]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Services
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="group relative bg-light backdrop-blur-md border border-light rounded shadow-sm p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`mb-3 w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-md`}
                >
                  <Icon className="text-lg" />
                </div>
                <h3 className="text-sm font-semibold mb-1 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
