import React from "react";

import AboutUs from "../../AboutUs";
import BunnerComponent from "../../BunnerComponent";
import OurServices from "../../OurServices";
import PricingPlan from "../../PricingPlan";
import OurTeam from "../../OurTeamMembers";
import Blog from "../../Blog";
import ContactUs from "../../ContactUs";

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
        <Blog />
        <ContactUs />
      </>
    </>
  );
};

export default MainPage;
