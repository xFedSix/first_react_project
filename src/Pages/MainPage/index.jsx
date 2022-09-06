import React from "react";

import AboutUs from "../../templates/AboutUs";
import BunnerComponent from "../../templates/BunnerComponent";
import OurServices from "../../templates/OurServices";
import PricingPlan from "../../templates/PricingPlan";
import OurTeam from "../../templates/OurTeamMembers";
import Blog from "../../templates/Blog";

const MainPage = () => {
  return (
    <>
      <BunnerComponent
        title="Web development project"
        subtitle="Very suitable to support all web development projects"
      />
      <AboutUs />
      <OurServices />
      <PricingPlan />
      <OurTeam />
      <Blog />
    </>
  );
};

export default MainPage;
