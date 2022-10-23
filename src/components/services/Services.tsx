import React from "react";
import "./services.css";
import ServiceList from "./ServiceList";
import { UiUXList, WebDevelopmentList, ContentCreationList } from "./data";

type Props = {};

const services = (props: Props) => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ServiceList list={UiUXList} />
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ServiceList list={WebDevelopmentList} />
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ServiceList list={ContentCreationList} />
        </article>
      </div>
    </section>
  );
};

export default services;
