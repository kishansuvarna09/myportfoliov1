import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const ProjectContainer = ({ title }) => {
  return <div className="w-full h-[15rem] rounded-md">Project {title}</div>;
};
const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen max-w-7xl mx-auto"
    >
      <div className="absolute flex flex-col w-full text-center md:text-left justify-start items-center gap-10 lg:gap-20 top-24">
        {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
        <div className="grid-projects w-full absolute px-5 overflow-scroll">
          <ProjectContainer title="A" />
        </div> */}
        <h3 className="sectionTitle">Projects</h3>
        <div className="w-full h-full">Currently broken</div>
      </div>
    </motion.div>
  );
};

export default Projects;
