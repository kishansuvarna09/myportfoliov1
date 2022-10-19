import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AboutCard from "./AboutCard";

type Props = {};

const about = (props: Props) => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              title="Experience"
              description="6+ Years Working"
              icon={<FaAward className="about__icon" />}
            />
            <AboutCard
              title="Clients"
              description="10+ Worldwide"
              icon={<FiUsers className="about__icon" />}
            />
            <AboutCard
              title="Projects"
              description="50+ Completed"
              icon={<VscFolderLibrary className="about__icon" />}
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iure
            iusto accusamus optio dolore itaque qui impedit assumenda nobis
            quaerat nihil consequuntur animi expedita. Fugit necessitatibus
            voluptates ullam iure ducimus.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
