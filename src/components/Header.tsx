import React from 'react';
import { motion } from 'framer-motion';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

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
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.2 },
          }}
        >
          <Link
            href="https://github.com/kishansuvarna09"
            passHref
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.5 },
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <a href="mailto:kishansuvarna09@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
