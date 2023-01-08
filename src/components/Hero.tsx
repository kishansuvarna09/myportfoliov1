import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
// import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      'Eternal amateur at everything.',
      'I build things for the web.',
      'Guy-who-loves-Beer.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      {/* <BackgroundCircles /> */}
      {/* <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover  space-y-16"
        src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      /> */}

      <div className="py-5 z-20">
        <h2 className="text-2xl md:text-3xl uppercase text-gray-500 tracking-[15px] p-5 ">
          Hi, my name is{' '}
          <span className="block md:inline text-5xl font-bold tracking-[15px] py-10 md:p-0 brightness-200">
            Kishan Suvarna.
          </span>
        </h2>
      </div>
      <h1 className="text-3xl font-semibold px-10 py-5 ">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
