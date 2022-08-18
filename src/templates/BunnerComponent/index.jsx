import React from "react";
import ButtonComponent from "../../components/ButtonComponent";
import Arrow from "./images/arrow.svg";
import "./styles.scss";

const BunnerComponent = (props) => {
  const { title, subtitle } = props;
  return (
    <>
      <div className="main">
        <div className="title">
          <h1 className="main__title">{title}</h1>
          <p className="main__subtitle">{subtitle}</p>
        </div>
        <div className="buttons">
          <ButtonComponent label="OUR SERVICES" buttonClass="main-button" />
          <ButtonComponent label="HIRE IS NOW" buttonClass="main-button" />
        </div>
        <div className="headline__image">
          <img alt="arrow" src={Arrow}></img>
        </div>
      </div>
    </>
  );
};

export default BunnerComponent;
