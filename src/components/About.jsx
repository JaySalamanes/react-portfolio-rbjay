import React from "react";
import profile from "../assets/profile.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="text-center text-4xl"
      >
        About <span className="text-neutral-600">me</span>
      </motion.h1>
      <div className="flex flex-wrap pt-15 max-lg:space-y-15 ">
        <div className=" w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center justify-center"
          >
            <img className="rounded-2xl" src={profile} alt="profile" />
            {/* <video
              className="rounded-2xl"
              autoPlay
              muted
              loop
              src={video}
            ></video> */}
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center lg:justify-start ">
            <p className=" max-w-xl tracking-tight font-light text-neutral-400">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
