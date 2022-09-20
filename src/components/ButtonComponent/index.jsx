import React from "react";
import "./styles.scss";

const ButtonComponent = ({ label, buttonClass, buttonClick }) => {
  return (
    <>
      <button onClick={buttonClick} className={buttonClass}>
        {label}
      </button>
    </>
  );
};

export default ButtonComponent;
