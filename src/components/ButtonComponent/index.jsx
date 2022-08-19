import React from "react";
import "./styles.scss";

const ButtonComponent = (props) => {
  const { label, buttonClass, buttonClick } = props;
  return (
    <>
      <button onClick={buttonClick} className={buttonClass}>
        {label}
      </button>
    </>
  );
};

export default ButtonComponent;
