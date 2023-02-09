import React from "react";
import { motion } from "framer-motion";
export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});
export const TextAnimation = ({ text }) => {
  return (
    <motion.div
      variants={textVariant(0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="animatedText"
    >
      <span>{text}</span>
    </motion.div>
  );
};
