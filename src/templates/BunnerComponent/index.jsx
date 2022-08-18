import React from "react";
import ButtonComponent from "../../components/ButtonComponent";

import "./styles.scss";

const BunnerComponent = (props) => {
  const { title, subtitle, image } = props;
  return (
    <>
      <div className="main">
        <h1 className="main__title">{title}</h1>
        <p className="main__title">{subtitle}</p>
        <div className="button">
          <ButtonComponent label="OUR SERVICES" buttonClass="main-button" />
          <ButtonComponent label="HIRE IS NOW" buttonClass="button--colored" />
        </div>
        <div className="headline__image">
          <img alt="arrow" src={image}></img>
        </div>
      </div>
    </>
  );
};

export default BunnerComponent;
