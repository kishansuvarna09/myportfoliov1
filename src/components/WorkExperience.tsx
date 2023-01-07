import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex flex-col text-center md:text-left justify-center items-center max-w-7xl px-10 mx-auto gap-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="text-2xl text-center max-w-[800px] text-gray-400">
        I've been doing web development for about 6 years now, and I'm always
        eager to learn more in this fast paced industry.
      </div>
      <div>
        <h3>Here are a few technologies I’ve been working with recently:</h3>
        <div className="py-5 space-y-5">
          <div>JavaScript (ES6+)</div>
          <div>Typescript</div>
          <div>React</div>
          <div>NextJS</div>
          <div>Node.js</div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
