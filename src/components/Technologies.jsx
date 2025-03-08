import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconAnimate = (index) => ({
  initial: { y: 0 },
  animate: {
    y: [-30, 30, -30], // Moves up, then down, then back up (like a wave)
    transition: {
      duration: 3, // Smooth swaying speed
      ease: "easeInOut", // Natural wave-like motion
      repeat: Infinity, // Loop forever
      repeatType: "mirror", // Smooth back-and-forth movement
      delay: index * 0.2, // Staggered delay to create the dragon effect
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="my-20 text-center text-4xl tracking-tight"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconAnimate(1)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <RiReactjsLine className="text-6xl text-cyan-500" /> {/* React */}
        </motion.div>

        <motion.div
          variants={iconAnimate(2)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiTailwindcss className="text-6xl text-cyan-500" />{" "}
          {/* Tailwind CSS */}
        </motion.div>

        <motion.div
          variants={iconAnimate(3)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiJavascript className="text-6xl text-yellow-500" />{" "}
          {/* JavaScript */}
        </motion.div>

        <motion.div
          variants={iconAnimate(4)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiMongodb className="text-6xl text-green-500" /> {/* MongoDB */}
        </motion.div>

        <motion.div
          variants={iconAnimate(5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <FaCss3Alt className="text-6xl text-blue-500" /> {/* CSS */}
        </motion.div>

        <motion.div
          variants={iconAnimate(6)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiPhp className="text-6xl text-indigo-500" /> {/* PHP */}
        </motion.div>

        <motion.div
          variants={iconAnimate(7)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <FaJava className="text-6xl text-red-500" /> {/* Java */}
        </motion.div>

        <motion.div
          variants={iconAnimate(8)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <FaNodeJs className="text-6xl text-green-500" /> {/* Node.js */}
        </motion.div>

        <motion.div
          variants={iconAnimate(9)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiLaravel className="text-6xl text-red-500" /> {/* Laravel */}
        </motion.div>

        <motion.div
          variants={iconAnimate(10)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <FaHtml5 className="text-6xl text-orange-500" /> {/* HTML */}
        </motion.div>

        <motion.div
          variants={iconAnimate(11)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiMysql className="text-6xl text-blue-500" /> {/* MySQL */}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
