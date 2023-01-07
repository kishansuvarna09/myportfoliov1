import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '/public/assets/profile.jpg';
import Link from 'next/link';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" relative h-screen flex flex-col text-center md:text-left md:flex-row justify-center items-center max-w-7xl px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      {/* <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src=""
        className="md:mb-0 flex-shrik-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      /> */}
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl lg:text-3xl tracking-[2px]">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{' '}
          {/* <span>
            <Link href="https://quietgrowth.com" passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sky-600 transition duration-300"
              >
                <span className="text-red-300 tracking-[5px] max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600">
                  QuietGrowth
                </span>
              </a>
            </Link>
          </span> */}
          <Link href="https://quietgrowth.com" passHref legacyBehavior>
            <a
              className="group text-red-300 transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r tracking-[5px] from-red-100 to-red-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                QuietGrowth
              </span>
            </a>
          </Link>
        </h4>
      </div>
    </motion.div>
  );
};

export default About;
