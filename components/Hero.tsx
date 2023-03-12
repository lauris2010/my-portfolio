import React from "react";

import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

// import { urlFor } from '@/sanity'
import { PageInfo } from "@/typings";

import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero() {
  const [text] = useTypewriter({
    words: [`Hi, my name is laurynas`, "<puffPass />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 text-center overflow-hidden justify-center items-center">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        // src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[13px]">
          role
        </h2>
        <h1 className="text-4xl lg:5xl font-semibold px-10">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
