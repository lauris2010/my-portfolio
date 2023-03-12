import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

import { Social } from "@/typings";

const SocialIconNoSSR = dynamic(
  () => import("react-social-icons").then((mod) => mod.SocialIcon),
  {
    ssr: false,
  }
);

type Props = {
  socials: Social[];
};

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIconNoSSR
          url="https://github.com/lauris2010"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIconNoSSR
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
