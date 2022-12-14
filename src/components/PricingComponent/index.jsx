import React from "react";

const PricingComponent = (props) => {
  const { title, price, image } = props;
  return (
    <div className="pricing-card">
      <div className="pricing-card__head col-12">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <div>
        <img alt="img" src={image}></img>
      </div>
      <div>
        <button className="button__large">ORDER NOW</button>
      </div>
    </div>
  );
};

export default PricingComponent;
