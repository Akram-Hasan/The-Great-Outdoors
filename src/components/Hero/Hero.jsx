import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToExploreSection = () => {
    const exploreSection = document.getElementById("explore");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-t from-brandDark from-2% to-transparent to-15% relative">
      {/* Radial Gradient Section */}
      <div
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(11, 11, 13, 0.5) 70%, rgba(11, 11, 13, 0.8) 90%)",
        }}
      ></div>

      {/* Hero Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="container relative z-20 text-center space-y-8"
      >
        <h1 className="text-5xl md:text-8xl font-bold font-merriweather leading-tight">
          Embrace the Wilderness
        </h1>
        <p className="text-lg md:text-2xl">
          Discover, explore, and connect with the great outdoors.
        </p>
        <div
          onClick={scrollToExploreSection}
          className="inline-flex justify-center items-center border-2 border-white h-14 w-14 rounded-full mt-14 md:mt-20 cursor-pointer hover:bg-white hover:text-black transition-colors duration-300"
        >
          <FaArrowDown size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
