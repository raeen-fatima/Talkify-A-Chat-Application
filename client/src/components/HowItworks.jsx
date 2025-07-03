import React from "react";
import { FaUserPlus, FaComments, FaRocket, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: FaUserPlus,
      title: "Create an Account",
      description: "Sign up in seconds using your email and start exploring Talkify.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: FaComments,
      title: "Connect Instantly",
      description: "Find friends or teammates and start real-time conversations.",
      color: "from-pink-400 to-purple-500",
    },
    {
      icon: FaRocket,
      title: "Start Messaging",
      description: "Enjoy seamless, secure, and fast messaging anytime, anywhere.",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: FaLock,
      title: "Stay Protected",
      description: "Your data is encrypted and fully secure with Talkify.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f1f8e9] via-[#e0f7fa] to-[#fffde7]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Getting started with Talkify is quick and effortless.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-white/60 backdrop-blur-xl border border-teritory rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Gradient Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} text-white shadow-lg mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>

                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition duration-300`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
