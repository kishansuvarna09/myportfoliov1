import React from "react";
import { FaAward } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const AboutCard = ({ title, description, icon }: Props) => {
  return (
    <article className="about__card">
      {icon}
      <h5>{title}</h5>
      <small>{description}</small>
    </article>
  );
};

export default AboutCard;
