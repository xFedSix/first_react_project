import React from "react";
import PricingComponent from "../../components/PricingComponent";
import TitleComponent from "../../components/TitleComponent";
import { TITLE, PRICECART } from "./constants";

import "./styles.scss";

const PricingPlan = () => {
  return (
    <div className="pricing-block">
      <TitleComponent title={TITLE.title} subtitle={TITLE.subtitle} />
      <>
        <div className="pricing-cards">
          {PRICECART.map(({ id, title, price, subtitle }) => (
            <div key={id} className="pricing-card__plan">
              <PricingComponent
                title={title}
                price={price}
                subtitle={subtitle}
              />
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default PricingPlan;
