import React from "react";

import TitleComponent from "../../components/TitleComponent";
import CardComponent from "../../components/CardComponent";

import { ABOUT_US_DATA, TITLE } from "./constants";

import "./styles.scss";

const AboutUs = () => {
  return (
    <>
      <TitleComponent title={TITLE.title} subtitle={TITLE.subtitle} />
      <div className="about-us row">
        {ABOUT_US_DATA.map(({ id, image, title, subtitle }) => (
          <div key={id} className="col-4">
            <CardComponent image={image} title={title} subtitle={subtitle} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
