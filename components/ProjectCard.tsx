import React from "react";
import { motion } from "framer-motion";

import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const ProjectCard = ({ projects }: Props) => {
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  return (
    <div className="w-full flex h-[900px] mb-20 overflow-x-scroll mt-6 overflow-y-hidden snap-x snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thin z-20 scrollbar-thumb-[#360b47]">
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
            className="lg:w-74 lg:h-96 md:w-74 md:h-74 object-contain"
            src={urlFor(project.image).url()}
          />
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-2xl font-semibold text-center">
              <span className="underline decoration-[#63048B] underline-offset-4">
                Projects {i + 1} of {projects.length}
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
            <p className="text-xs md:text-xs xl:text-sm lg:text-sm lg:text-center text-left  ">
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
  );
};

export default ProjectCard;
