import React from "react";

import AboutUs from "../../AboutUs";
import BunnerComponent from "../../BunnerComponent";
import OurServices from "../../OurServices";
import PricingPlan from "../../PricingPlan";
import OurTeam from "../../OurTeamMembers";

const MainPage = () => {
  return (
    <>
      <>
        <BunnerComponent
          title="Web development project"
          subtitle="Very suitable to support all web development projects"
        />
        <AboutUs />
        <OurServices />
        <PricingPlan />
        <OurTeam />
      </>
    </>
  );
};

export default MainPage;
