import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { SlideBottom } from "../../utility/animation";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className="container flex justify-between items-center py-4 md:py-8 uppercase font-semibold relative z-20 text-xs md:text-lg">
        {/* Logo */}
        <motion.a
          variants={SlideBottom(0.4)}
          initial="hidden"
          animate="visible"
          href="#"
        >
          <img src={Logo} alt="Logo" className="w-14" />
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <motion.a
            variants={SlideBottom(0.2)}
            initial="hidden"
            animate="visible"
            href="#explore"
          >
            Explore
          </motion.a>
          <motion.a
            variants={SlideBottom(0.6)}
            initial="hidden"
            animate="visible"
            href="#journal"
          >
            Journal
          </motion.a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-4 z-20">
            <a
              href="#explore"
              className="hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              Explore
            </a>
            <a
              href="#journal"
              className="hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              Journal
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
