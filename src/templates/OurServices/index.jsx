import React from "react";

import TitleComponent from "../../components/TitleComponent";
import { TITLE, OUR_SERVICES_DATA } from "./constants";
import ServiceCardComponent from "../../components/ServiceCardComponent";
import "./styles.scss";

const OurServices = () => {
  return (
      <div className="service">
        <TitleComponent
          title={TITLE.title}
          subtitle={TITLE.subtitle}
        />
        <div className="row p-4">
          {OUR_SERVICES_DATA.map(({ id, image, title, subtitle }) => (
            <div key={id} className="col-lg-4">
              <ServiceCardComponent
                image={image}
                title={title}
                subtitle={subtitle}
              />
            </div>
          ))}
        </div>
      </div>
  );
};

export default OurServices;
