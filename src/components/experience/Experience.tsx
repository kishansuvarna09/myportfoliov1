import React from "react";
import "./experience.css";
import ExperienceCard from "./ExperienceCard";
import { frontendExperiences, backendExperiences } from "./data";

type Props = {};

const experience = (props: Props) => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <ExperienceCard
          title="Frontend Development"
          experiences={frontendExperiences}
        />
        <ExperienceCard
          title="Backend Development"
          experiences={backendExperiences}
        />
      </div>
    </section>
  );
};

export default experience;
