import React from "react";
import CV from "../../assets/resume.pdf";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="cta">
      <a href={CV} download="Kishan Suvarna - Resume" className="btn">
        Download
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
