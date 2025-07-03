import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaLock,
  FaUsers,
  FaBolt,
  FaCloud,
  FaSmile,
} from "react-icons/fa";

const features = [
  {
    title: "Real-Time Chat",
    description: "Instant messaging.",
    icon: FaBolt,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Group Chat",
    description: "Collaborate easily.",
    icon: FaUsers,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Secure",
    description: "End-to-end encryption.",
    icon: FaLock,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Cloud Sync",
    description: "Access anywhere.",
    icon: FaCloud,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Notifications",
    description: "Stay updated.",
    icon: FaComments,
    color: "from-red-400 to-pink-500",
  },
  {
    title: "User-Friendly",
    description: "Intuitive UI.",
    icon: FaSmile,
    color: "from-teal-400 to-cyan-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f1f8e9] via-[#e0f7fa] to-[#fffde7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: Image & Description */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src="https://st3.depositphotos.com/1092019/12817/i/450/depositphotos_128176210-stock-photo-index-card-with-inscription-features.jpg"
              alt="Talkify Collaboration"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Everything You Need to Communicate
            </h2>
            <p className="text-gray-700 text-lg">
              Talkify combines modern messaging, collaboration, and security in one platform and is designed to enhance your communication experience and to keep your data safe and secure.
            </p>
            <p className="text-gray-600 text-sm">
              From real-time chat to secure group conversations, we provide the tools you need to stay connected and productive and to keep your data safe and secure. so you can focus on what matters most.
            </p>

          </div>
        </motion.div>
        <motion.div
  className="text-center mb-10"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
    Explore Our Features
  </h2>
  <p className="text-gray-600 text-base mt-2 max-w-2xl mx-auto">
    A powerful suite of tools to make your conversations more productive and secure.
  </p>
</motion.div>


        {/* Compact Square Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative flex flex-col items-center justify-center text-center p-4 w-full aspect-square bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
              >
                <div
                  className={`mb-2 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
