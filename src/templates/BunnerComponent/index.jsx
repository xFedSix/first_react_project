import React from "react";
import ButtonComponent from "../../components/ButtonComponent";

import "./styles.scss";

const BunnerComponent = (props) => {
  const { title, subtitle } = props;
  return (
    <>
      <div className="main">
        <h1 className="main-title">{title}</h1>
        <p className="main-title">{subtitle}</p>
        <div className="button">
          <ButtonComponent label="OUR SERVICES" buttonClass="main-button" />
          <ButtonComponent label="HIRE IS NOW" buttonClass="button__colored" />
        </div>
      </div>
    </>
  );
};

export default BunnerComponent;
