import React from "react";

const CardComponent = ({ title, subtitle, image }) => {
  return (
    <div className="card">
      <img alt="img" className="about__image" src={image}></img>
      <h2 className="about__title">{title}</h2>
      <p className="about__subtitle">{subtitle}</p>
    </div>
  );
};

export default CardComponent;
