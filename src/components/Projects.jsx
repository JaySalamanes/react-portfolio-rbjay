import React from "react";
import { PROJECTS, PROJECTS2 } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: -200, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Projects2 = () => {
  return (
    <section className="pt-16">
      <div className="px-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -200 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-3xl lg:text-4xl font-medium text-center mb-8"
        >
          Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center ">
          {PROJECTS2.map((project) => (
            <motion.div
              whileInView={{ opacity: 2, y: 0 }}
              initial={{ opacity: 0, y: -200 }}
              transition={{ duration: 2, delay: 1 }}
              key={project.id}
              className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="flex-grow overflow-hidden rounded-lg border  border-purple-300/20 ">
                <a href={project.link} target="_black">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-60 w-full object-cover"
                  />
                </a>
                <div className="p-6">
                  <h3 className="mb-2 text-medium font-medium lg:text-[20px]">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-md font-light text-neutral-200">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <strong>Tech Stack:</strong>
                    <ul className="mt-5">
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mr-2 mb-5 inline-block rounded-full border-2 border-purple-500/30 px-3  py-1 text-sm font-semibold"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;
