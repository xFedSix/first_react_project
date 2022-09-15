import React from "react";

const ContactUsComponent = ({ title, subtitle, image }) => {
  return (
    <div className="card">
      <img alt="img" className="card__image" src={image}></img>
      <h2 className="card__title">{title}</h2>
      <p className="card__subtitle">{subtitle}</p>
    </div>
  );
};

export default ContactUsComponent;
