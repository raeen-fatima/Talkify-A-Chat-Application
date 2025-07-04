import React from "react";
import { motion } from "framer-motion";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Boost Your Productivity with Real-time Collaboration",
      excerpt:
        "Discover how instant messaging platforms like Talkify can enhance team communication and speed up decision-making.",
      image: "https://ik.imagekit.io/ably/ghost/prod/2023/02/in-game-chat-key-features--1-.png",
      link: "#",
    },
    {
      id: 2,
      title: "Top 5 Features Every Chat App Should Have",
      excerpt:
        "From secure authentication to file sharing, explore must-have features for a seamless messaging experience.",
      image: "https://images.ctfassets.net/0nm5vlv2ad7a/1rZfpnFtDFEusSAO6NE0z9/d21eb9f1fbd33df06fa60d44e2f34444/top-chat-app-features.png",
      link: "#",
    },
    {
      id: 3,
      title: "Why Data Privacy Matters in Messaging Apps",
      excerpt:
        "Learn about encryption, compliance, and why protecting user data is essential for trust and growth.",
      image: "https://www.apphitect.ae/blog/wp-content/uploads/2024/03/build-chat-application.png",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f1f8e9] via-[#e0f7fa] to-[#fffde7]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold font-rocker text-center text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest Insights & Resources
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="group relative  overflow-hidden border border-primary/20 backdrop-blur-md bg-light/60 shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-700 mb-4 flex-1">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  className="inline-flex items-center text-primary hover:underline font-medium mt-auto"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
