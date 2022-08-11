import React from "react";
import "./styles.scss";

const ButtonComponent = (props) => {
  const { label, buttonClass } = props;
  return (
    <>
      <button
        onClick={() => {
          alert("HI");
        }}
        className={buttonClass}
      >
        {label}
      </button>
    </>
  );
};

export default ButtonComponent;
