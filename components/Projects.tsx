import React from "react";

import { motion } from "framer-motion";
import { Project } from "@/typings";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute md:top-20 top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <ProjectCard projects={projects} />
      <div className="w-full absolute top-[30%] -z- bg-[#63048B]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
