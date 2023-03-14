import React from "react";

import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="border border-[#333333] rounded-full w-[200px] h-[200px] absolute mt-52 animate-ping" />
      <div className="border border-[#333333] rounded-full w-[300px] h-[300px] absolute mt-52 animate-ping" />
      <div className="border border-[#333333] rounded-full w-[500px] h-[500px] absolute mt-52 animate-ping" />
      <div className="border rounded-full border-[#63048B] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse " />
      <div className="border rounded-full border-[#333333]] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;
