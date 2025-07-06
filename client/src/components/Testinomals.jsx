import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Talkify transformed how our team communicates. It's fast, secure, and incredibly user-friendly.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Kim",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The real-time messaging and group collaboration features have boosted our productivity.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Marketing Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I love how customizable Talkify is. Our branding fits right in, and the experience is smooth.",
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#f1f8e9] via-[#e0f7fa] to-[#fff3e0]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We take pride in delivering the best chat experience for our users.
        </motion.p>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="px-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative bg-light/60  shadow-lg p-8 md:p-10 flex flex-col items-center text-center border border-primary/80 backdrop-blur-lg ">
                <FaQuoteLeft className="text-primary text-3xl mb-4" />
                <p className="text-gray-700 text-lg mb-6">{t.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
