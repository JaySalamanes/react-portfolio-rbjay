import React from "react";
import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import video from "../assets/videoprofile.mp4";

const container = (delay) => ({
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Hero = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap justify-center pb-15">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-6xl pb-16 tracking-tight font-thin lg:mt-16 lg:text-7xl "
            >
              Rb Jay Salamanes
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              className=" bg-gradient-to-r from-pink-300 to-purple-600 text-transparent bg-clip-text text-4xl tracking-tight"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              whileInView="visible"
              className=" font-light tracking-tight max-w-xl mt-8 text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full max-lg:mt-15 lg:w-1/2">
          <div className="flex h-full  w-full justify-center">
            <motion.video
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="rounded-lg"
              autoPlay
              muted
              loop
              src={video}
              alt="profile"
            ></motion.video>
            {/* <motion.img
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className=" rounded-lg"
              src={profile}
              alt="profile"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
