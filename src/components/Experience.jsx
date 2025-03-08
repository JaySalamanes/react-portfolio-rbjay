import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div className="flex mb-15 flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-full p-2 lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-full max-w-xl  p-2 lg:w-3/4"
            >
              <h6 className="mb-4 font-semibold">
                {experience.role}{" "}
                <span className="text-sm text-purple-200 ">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-8 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((item, index) => (
                <span
                  className=" mr-2 text-sm rounded-xl bg-neutral-800 py-1.5 px-2 text-purple-400"
                  key={index}
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
