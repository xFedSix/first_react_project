import React from "react";
import { BTN_TEXT } from "./constants";
import "./styles.scss";

const ButtonComponent = (props) => {
  // const { text1, text2 } = props;
  return (
    <>
      <button className="btnClass1">{BTN_TEXT.text1}</button>
      <button className="btnClass2">{BTN_TEXT.text2}</button>
    </>
  );
};

export default ButtonComponent;
