import React from "react";
import ModalConponent from "../ModalConponent";
import CardComponent from "../CardComponent";

const ServiceCardComponent = (props) => {
  const { title, subtitle, image, id } = props;

  return (
    <>
      <div key={id} className="service-card">
        <CardComponent
          key={id}
          image={image}
          title={title}
          subtitle={subtitle}
        />
        <ModalConponent title={title} subtitle={subtitle} image={image} />
      </div>
    </>
  );
};

export default ServiceCardComponent;
