import React from 'react'

import { motion } from 'framer-motion'

import { urlFor } from '@/sanity'
import { Experience } from '@/typings'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain "
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology, i) => (
            <img
              key={i}
              className="h-10 w-10 rounded-full object-contain"
              src={urlFor(technology.image).url()}
              alt={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-large">
          {experience.points.map((points, i) => (
            <li key={i}>{points}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard