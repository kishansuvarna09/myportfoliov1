import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

const About = (props: Props) => {
  const [daysSinceCoding, setDaysSinceCoding] = useState('');
  //   var date1 = new Date('06/30/2019');
  //   var date2 = new Date();
  //   console.log('dates:', date1, date2);
  const [codingOriginText] = useTypewriter({
    words: ['back in 2016', `${daysSinceCoding} days ago`],
    loop: true,
    delaySpeed: 1000,
  });

  useEffect(() => {
    const _timeDiff = new Date().getTime() - new Date('06/06/2016').getTime();
    const _days = Math.floor(_timeDiff / (1000 * 3600 * 24))
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setDaysSinceCoding(_days);
  }, []);
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
        <h4 className="text-base sm:text-lg lg:text-2xl">
          Hello! My name is Kishan. I’m a software engineer specializing in
          building (and occasionally designing) exceptional digital experiences.
          <br />
          <br /> I enjoy creating things that live on the internet. My interest
          in web development started{' '}
          <span className="inline-block min-w-[10rem] text-[#F7AB0A] font-semibold">
            <span>{codingOriginText}</span>
            <Cursor cursorColor="#F7AB0A" />
          </span>
          when I decided to try build a food recipies website with HTML & CSS!
        </h4>
        <h4 className="text-base sm:text-lg lg:text-2xl">
          Currently, I’m focused on building accessible, human-centered products
          at&nbsp;
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
