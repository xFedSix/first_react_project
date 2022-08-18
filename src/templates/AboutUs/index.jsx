import React from "react";

import TitleComponent from "../../components/TitleComponent";
import AboutUsCard from "../../components/AboutUsCard";

import { ABOUT_US_DATA, TITLE } from "./constants";

import "./styles.scss";

const AboutUs = () => {
  return (
    <>
      <TitleComponent title={TITLE.title} subtitle={TITLE.subtitle} />
      <div className="about-us">
        {ABOUT_US_DATA.map(({ id, image, title, subtitle }) => (
          <AboutUsCard
            key={id}
            image={image}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
    </>
  );
};

export default AboutUs;
