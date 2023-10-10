import React from "react";

import { motion } from "framer-motion";

import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import Link from "next/link";

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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="w-full flex space-x-5 mb-12 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#360b47]">
        {sortedProjects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen "
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="lg:w-74 lg:h-96 "
              src={urlFor(project.image).url()}
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#63048B] underline-offset-4">
                  Case study {i + 1} of {projects.length}
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((tech) => (
                  <img
                    className="h-10 w-10 rounded-full object-contain "
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt={urlFor(tech.image).url()}
                  />
                ))}
              </div>
              <p className="text-xs md:text-sm xl:text-md md:text-center">
                {project.summary}
              </p>
              <div className="flex items-center space-x-2 justify-center">
                {project?.linkToBuild ? (
                  <div>
                    <Link href={project?.linkToBuild}>
                      <button className="heroButton">link to build</button>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                {project?.linkToGithub ? (
                  <div>
                    <Link href={project?.linkToGithub}>
                      <button className="heroButton">link to repository</button>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#63048B]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
