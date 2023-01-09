import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SocialIcons from './SocialIcons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center px-2 py-2">
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
          duration: 1,
        }}
        className="flex justify-center items-center p-2 gap-6 text-2xl"
      >
        <Link href="#hero">
          <h5 className="text-3xl font-semibold tracking-[10px] uppercase">
            KS.
          </h5>
        </Link>
      </motion.div>
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
          duration: 1,
        }}
        className="flex justify-center items-center p-2 gap-6 text-2xl"
      >
        <SocialIcons
          iconType="github"
          link="https://github.com/kishansuvarna09"
        />
        <SocialIcons
          iconType="linkedin"
          link="https://www.linkedin.com/in/kishansuvarna09/"
        />

        <SocialIcons
          iconType="instagram"
          link="https://www.instagram.com/kishan_suvarna_"
        />

        <SocialIcons iconType="envelope" isEmailIcon />
      </motion.div>
    </header>
  );
};

export default Header;
