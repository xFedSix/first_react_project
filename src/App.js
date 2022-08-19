import React from "react";
import AboutUs from "./templates/AboutUs";
import BunnerComponent from "./templates/BunnerComponent";
import OurServices from "./templates/OurServices";
import PricingPlan from "./templates/PricingPlan";
import "./styles.scss";

const App = () => {
  return (
    <>
      <BunnerComponent
        title="Web development project"
        subtitle="Very suitable to support all web development projects"
      />
      <AboutUs />
      <OurServices />
      <PricingPlan />
    </>
  );
};

export default App;
