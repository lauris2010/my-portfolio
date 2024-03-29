import React from "react";

import { motion } from "framer-motion";

import { urlFor } from "@/sanity";
import { Skill } from "@/typings";

type Props = {
  directionLeft?: boolean;
  skills: Skill;
};

const Skills = ({ directionLeft, skills }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: true,
        }}
        className="rounded-full border border-gray-500 object-scale-down w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out md:w-28 md:h-28 xl:w-32 xl:h-32"
        src={urlFor(skills.image).url()}
      />
    </div>
  );
};

export default Skills;
