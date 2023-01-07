import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Kishan Suvarna",
      'Gu-who-loves-Coffee.jsx',
      'Gu-who-loves-Beer.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </div>
  );
};

export default Hero;
