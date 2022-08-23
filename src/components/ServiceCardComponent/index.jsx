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
        {/* <img alt="img" className="service-card__image" src={image}></img>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__subtitle">{subtitle}</p> */}
        {/* <button className="button" onClick={ButtonClick} id={id}>
          READ MORE
        </button> */}
      </div>
    </>
  );
};

export default ServiceCardComponent;
