import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const BackgroundCircles = (props: Props) => {
  //   return (
  //     <div className="relative flex justify-center items-center">
  //       {/* <div className="absolute h-[200px] w-[200px] border border-[#333333] rounded-full mt-52 animate-ping" />
  //       <div className="absolute h-[300px] w-[300px] border border-[#333333] rounded-full mt-52 " />
  //       <div className="absolute h-[500px] w-[500px] border border-[#333333] rounded-full mt-52 " /> */}
  //       <div className="absolute h-[37em] w-[37em] opacity-20 border border-[#F7AB0A] rounded-full mt-60 animate-pulse" />
  //       {/* <div className="absolute h-[800px] w-[800px] border border-[#333333] rounded-full mt-52 " /> */}
  //     </div>
  //   );

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute h-[200px] w-[200px] border border-[#333333] rounded-full mt-64 animate-ping" />
      <div className="absolute h-[300px] w-[300px] border border-[#333333] rounded-full mt-64 " />
      <div className="absolute h-[500px] w-[500px] border border-[#333333] rounded-full mt-64 " />
      <div className="absolute h-[650px] w-[650px] opacity-20 border border-[#F7AB0A] rounded-full mt-64 animate-pulse" />
      <div className="absolute h-[800px] w-[800px] border border-[#333333] rounded-full mt-64 " />
    </motion.div>
  );
};

export default BackgroundCircles;
