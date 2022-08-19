import React from "react";

const PricingComponent = (props) => {
  const { title, price, subtitle } = props;
  return (
    <div className="pricing-card">
      <div className="pricing-card__head">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <div>
        <p>{subtitle}</p>
      </div>

      <div>
        <button className="button">ORDER NOW</button>
      </div>
    </div>
  );
};

export default PricingComponent;
