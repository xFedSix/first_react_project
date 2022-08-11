import React from "react";
import "./styles.scss";

const ButtonClick = () => {
  console.log("Click");
};
const ButtonComponent = (props) => {
  const { label, buttonClass } = props;
  return (
    <>
      <button onClick={ButtonClick} className={buttonClass}>
        {label}
      </button>
    </>
  );
};

export default ButtonComponent;
