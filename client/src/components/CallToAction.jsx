import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Supercharge Your Communication?
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Join Talkify today and experience seamless, real-time collaboration with your team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/register"
            className="px-6 py-3 rounded bg-white text-primary font-semibold hover:bg-gray-100 transition"
          >
            Get Started Free
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded border border-white font-semibold hover:bg-white hover:text-primary transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
