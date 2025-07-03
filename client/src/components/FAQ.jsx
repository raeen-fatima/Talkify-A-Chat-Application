import React, { useState } from "react";

const faqs = [
  {
    question: "What is Talkify?",
    answer:
      "Talkify is a real-time messaging platform that helps you connect instantly with your team and friends.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes! We offer a free plan with basic features so you can get started without any commitment.",
  },
  {
    question: "How secure is Talkify?",
    answer:
      "Your data is encrypted and stored securely following industry best practices.",
  },
  {
    question: "Can I use Talkify on mobile devices?",
    answer:
      "Absolutely! Talkify works seamlessly across desktops, tablets, and smartphones.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
