import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div>
        <SocialIcon url="https://github.com/kishansuvarna09" />
        <SocialIcon url="https://github.com/kishansuvarna09" />
        <SocialIcon url="https://github.com/kishansuvarna09" />
      </div>
      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </div>
    </header>
  );
};

export default Header;
