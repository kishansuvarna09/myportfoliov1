import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

interface ExperiencesProps {
  subject: String;
  level: String;
}

type Props = {
  title: String;
  experiences: ExperiencesProps[];
};

const ExperienceCard = ({ title, experiences }: Props) => {
  return (
    <div className="experience__frontend">
      <h3>{title}</h3>
      <div className="experience__content">
        {experiences.map((experience) => (
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>{experience.subject}</h4>
              <small className="text-light">{experience.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
