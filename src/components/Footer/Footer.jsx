import React from "react";
import FooterImg from "../../assets/footer.jpg";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// Background Image Style
const bgImg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      style={bgImg}
      className="mt-16 h-[300px] bg-brandDark relative flex flex-col justify-end items-center"
    >
      {/* Radial Overlay */}
      <div
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(11, 11, 13, 0.5) 70%, rgba(11, 11, 13, 0.8) 90%)",
        }}
      ></div>

      {/* Divider Line */}
      <div className="absolute top-0 left-0 w-full border-t border-gray-700"></div>

      {/* Footer Content */}
      <div className="relative z-20 text-center space-y-4 mb-6">
        <p className="text-gray-300 text-sm md:text-base hover:text-white transition duration-300 cursor-pointer">
          Created by Akram Hasan
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 justify-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl hover:text-blue-500 transition transform duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl hover:text-blue-400 transition transform duration-300 hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl hover:text-pink-500 transition transform duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl hover:text-blue-600 transition transform duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
