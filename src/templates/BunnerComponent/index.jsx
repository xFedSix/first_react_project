import React from "react";
import ButtonComponent from "../../components/Button";

import "./styles.scss";

const BunnerComponent = (props) => {
  const { title, subtitle } = props;
  //   const [btn, setBtn] = useState(false);
  return (
    <>
      <div className="Main_title">
        <h1 className="Main_title__title">{title}</h1>
        <p className="Main_title__subtitle">{subtitle}</p>
        <div className="Button">
          <ButtonComponent label="OUR SERVICES" buttonClass="MainBtnClass" />
          <ButtonComponent label="HIRE IS NOW" buttonClass="ColoredBtnClass" />
        </div>
      </div>
    </>
  );
};

export default BunnerComponent;
