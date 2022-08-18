import React from "react";
import { BsLinkedin, BsGithub} from 'react-icons/bs'

type Props = {};

const HeaderSocials = (props: Props) => {
  return (
    <div className="header__socials">
      <a href="https://in.linkedin.com/in/kishansuvarna09" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/kishansuvarna09" target="_blank"><BsGithub /></a>
    </div>
  );
};

export default HeaderSocials;
