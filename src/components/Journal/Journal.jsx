import React from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/5.jpg";
import Img2 from "../../assets/6.jpg";

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Journal Data
const JournalData = [
  {
    id: 1,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img1,
  },
  {
    id: 2,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img2,
  },
];

const Journal = () => {
  return (
    <motion.div
      id="journal"
      className="flex flex-col justify-center bg-gray-900 text-white py-12 px-5 min-h-screen relative"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Header Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-10"
        variants={fadeUpVariants}
      >
        <h2 className="text-4xl font-bold mb-4">The Journal</h2>
        <p className="text-gray-400">
          Our favorite stories about public lands and opportunities for you to
          get involved in protecting your outdoor experience.
        </p>
      </motion.div>

      {/* Journal Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={staggerContainer}
      >
        {JournalData.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 group"
            variants={fadeUpVariants}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-gray-400 uppercase mb-2">{item.date}</p>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.about}</p>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* All Post Link */}
      <motion.div className="text-center mt-8" variants={fadeUpVariants}>
        <a href="#" className="text-blue-500 font-bold text-lg hover:underline">
          ALL POST
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Journal;
