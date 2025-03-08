import React from "react";
import { PROJECTS } from "../constants";
import project1 from "../assets/projects/project-1.jpg";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="text-center text-4xl py-20"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap mb-10  lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-full lg:w-1/4 max-md:mb-3 "
            >
              <img
                className="rounded-xl"
                src={project.image}
                width={"200px"}
                height={"200px"}
                alt="project1"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1, delay: 1 }}
              className=" w-full max-w-xl lg:w-3/4 p-2 max-md:mb-5"
            >
              <h6 className="text-white font-semibold mb-3">{project.title}</h6>
              <p className="text-neutral-400 mb-8">{project.description}</p>
              {project.technologies.map((item, index) => (
                <span
                  key={index}
                  className=" mr-2 text-sm rounded-xl bg-neutral-800 py-1.5 px-2 text-purple-400"
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

export default Project;
