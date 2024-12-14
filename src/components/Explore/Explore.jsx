import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import Img4 from "../../assets/4.webp";
import Img5 from "../../assets/5-.jpg";
import Img6 from "../../assets/6-.jpg";

// Initial Explore Data
const ExploreData = [
  {
    id: 1,
    title: "Nearoyfjordan",
    place: "Norway",
    description: "A serene landscape of fjords and majestic mountains in Norway.",
    image: Img1,
  },
  {
    id: 2,
    title: "Antelop Canyon",
    place: "United States",
    description: "A stunning slot canyon with mesmerizing rock formations.",
    image: Img2,
  },
  {
    id: 3,
    title: "Lakes",
    place: "Austria",
    description: "Crystal-clear lakes surrounded by picturesque alpine villages.",
    image: Img3,
  },
  {
    id: 4,
    title: "Sahara Desert",
    place: "Africa",
    description: "The golden sands of the largest desert in the world.",
    image: Img4,
  },
  {
    id: 5,
    title: "Amazon Rainforest",
    place: "South America",
    description: "A lush, vibrant ecosystem teeming with life and biodiversity.",
    image: Img5,
  },
  {
    id: 6,
    title: "Swiss Alps",
    place: "Switzerland",
    description: "Snow-covered peaks and idyllic villages in the Swiss Alps.",
    image: Img6,
  },
];

// Framer Motion variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Explore = () => {
  const [visibleCards, setVisibleCards] = useState(3); // Number of visible cards
  const [loading, setLoading] = useState(false); // Loading state for "Load More"
  const gridRef = useRef(null); // Reference for the grid container

  const loadMoreCards = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCards((prev) => prev + 3); // Load 3 more cards
      setLoading(false);

      // Scroll animation to the last loaded card
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 1000); // Simulated fetch delay
  };

  return (
    <div id="explore" className="flex flex-col justify-center bg-gray-900 text-white py-10 px-5 min-h-screen">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore the World</h1>
        <p className="text-gray-400">
          We look to provide the most authentic content from athletes,
          adventurers, and explorers around the world. Our long-term mission is
          to inspire and enable all people to experience and protect the
          wilderness.
        </p>
      </div>

      {/* Animated Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {ExploreData.slice(0, visibleCards).map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is in view
          >
            <div className="group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:brightness-75 transition duration-500"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-2xl font-semibold mb-2 text-white">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-400">{item.place}</p>
                <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCards < ExploreData.length && (
        <div className="flex justify-center items-center mt-12">
          <button
            onClick={loadMoreCards}
            className={`flex items-center justify-center bg-blue-900 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300`}
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              <span className="font-bold text-lg">Load More</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Explore;
