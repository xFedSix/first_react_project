import React from "react";

import "./styles.scss";

const TitleComponent = ({ title, subtitle }) => {
  return (
    <>
      <div className="headline">
        <h2 className="headline__title">{title}</h2>
        <p className="headline__subtitle">{subtitle}</p>
      </div>
    </>
  );
};

export default TitleComponent;
