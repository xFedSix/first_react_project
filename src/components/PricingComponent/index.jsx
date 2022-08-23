import React from "react";

const PricingComponent = (props) => {
  const { title, price, image } = props;
  return (
    <div className="pricing-card">
      <div className="pricing-card__head">
        <h4>{title}</h4>

        <p>{price}</p>
      </div>
      <div>
        <img alt="img" src={image}></img>
        {/* <ul>
          <li>
            <p>{pricing1}</p>
          </li>
          <li>
            <p>{pricing2}</p>
          </li>
          <li>
            <p>{pricing3}</p>
          </li>
          <li>
            <p>{pricing4}</p>
          </li>
        </ul> */}
      </div>
      <div>
        <button className="button--large">ORDER NOW</button>
      </div>
    </div>
  );
};

export default PricingComponent;
