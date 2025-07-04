import React from "react";
import { motion } from "framer-motion";
import { 
  FaComments, FaUsers, FaShieldAlt, 
  FaMobileAlt, FaRocket, FaChartLine 
} from "react-icons/fa";

const services = [
  {
    title: "Real-time Messaging",
    desc: "Lightning-fast chat with delivery receipts.",
    icon: FaComments,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Group Collaboration",
    desc: "Organize your team with channels.",
    icon: FaUsers,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Advanced Security",
    desc: "End-to-end encryption for all chats.",
    icon: FaShieldAlt,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Mobile Access",
    desc: "Stay connected anywhere on any device.",
    icon: FaMobileAlt,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Scalable Performance",
    desc: "Built for growth and blazing speed.",
    icon: FaRocket,
    color: "from-pink-400 to-red-500",
  },
  {
    title: "Insightful Analytics",
    desc: "Measure engagement with smart dashboards.",
    icon: FaChartLine,
    color: "from-teal-400 to-cyan-500",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#e0f7fa] via-[#f1f8e9] to-[#fffde7]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold font-rocker text-center text-primary mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="group relative bg-forthary/60 backdrop-blur-lg border border-secondary rounded shadow-lg p-6 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Gradient Icon Circle */}
                <div className={`mb-4 w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>

                {/* Decorative Gradient Overlay on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                  <div className={`w-full h-full bg-gradient-to-br ${service.color} opacity-20`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
