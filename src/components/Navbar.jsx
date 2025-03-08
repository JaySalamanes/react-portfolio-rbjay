import React from "react";
import kevinRushLogo from "../assets/kevinRushLogo.png"; // Move up one level to access `assets`
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: -200, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0">
        <a href="#">
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-2xl"
          >
            Rb.
          </motion.h1>
        </a>
      </div>
      <motion.div
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className=" m-8 flex justify-center items-center gap-4"
      >
        <a href="https://www.linkedin.com/in/rbjay-salamanes/" target="blank_">
          <FaLinkedin />
        </a>
        <a href="https://github.com/JaySalamanes" target="blank_">
          {" "}
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/me.rbjay.salamanes" target="blank_">
          <FaFacebook />
        </a>
        <a href="https://x.com/?lang=en" target="blank_">
          {" "}
          <FaTwitter />
        </a>
      </motion.div>
    </div>
  );
};

export default Navbar;
