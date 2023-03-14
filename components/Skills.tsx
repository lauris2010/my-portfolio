import React from "react";

import { motion } from "framer-motion";

import { Skill as SkillType } from "@/typings";

import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{
        once: true,
      }}
      className=" flex relative flex-col md:text-left xl:flex-row max-w-[2000px] justify-center mx-auto text-center xl:px-10 min-h-screen xl:space-y-0 items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skills={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skills={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
