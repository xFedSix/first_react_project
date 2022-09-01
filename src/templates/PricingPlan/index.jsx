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
        <div className="row">
          {PRICECART.map(({ id, title, price, image }) => (
            <div key={id} className="col-lg-4 mb-5">
              <PricingComponent title={title} price={price} image={image} />
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default PricingPlan;
