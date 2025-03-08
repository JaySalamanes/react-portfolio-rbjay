import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b py-10 border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-4xl pb-5 text-center"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-col items-center justify-center tracking-tight">
          <p className="text-sm text-neutral-400 mb-2">{CONTACT.address}</p>
          <span className="text-md text-neutral-400 mb-2">
            {CONTACT.phoneNo}
          </span>
          <p className="text-md text-neutral-400 border-b border-white mb-2">
            {CONTACT.email}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
