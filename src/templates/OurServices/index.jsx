import React from "react";

import TitleComponent from "../../components/TitleComponent";
import { TITLE, OUR_SERVICES_DATA } from "./constants";
import ButtonComponent from "../../components/ButtonComponent";
import ServiceCardComponent from "../../components/ServiceCardComponent";
import "./styles.scss";

const OurServices = () => {
  return (
    <>
      <div className="service">
        <TitleComponent title={TITLE.title} subtitle={TITLE.subtitle} />
        <div className="service__cards">
          {OUR_SERVICES_DATA.map(({ id, image, title, subtitle }) => (
            <ServiceCardComponent
              key={id}
              image={image}
              title={title}
              subtitle={subtitle}
            />
          ))}
        </div>
        <ButtonComponent label="VIEW ALL" buttonClass="button--colored" />
      </div>
    </>
  );
};

export default OurServices;
