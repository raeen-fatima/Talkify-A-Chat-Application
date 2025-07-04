import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Basic",
    price: "Free",
    features: ["1:1 Chat", "Basic Notifications", "Limited History"],
    highlighted: false,
  },
  {
    title: "Pro",
    price: "$9.99/mo",
    features: ["Unlimited Messages", "Group Chat", "Priority Support", "File Sharing"],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    features: ["Custom Integrations", "Dedicated Manager", "Advanced Security", "Unlimited Storage"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f1f8e9] via-[#e0f7fa] to-[#fffde7]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Flexible Pricing for Every Team
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Choose a plan that scales with your needs.
        </motion.p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              className={`relative group rounded-2xl p-6 backdrop-blur-xl transition duration-300 ${
                plan.highlighted
                  ? "bg-forthary/70 border-2 border-primary shadow-xl"
                  : "bg-teritory/50 border border-light"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4 text-gray-800">{plan.title}</h3>
              <p className="text-3xl font-extrabold mb-6 text-primary">{plan.price}</p>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-gray-700">
                    <FaCheck className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-secondary"
                    : "border border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {plan.price === "Contact Us" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
