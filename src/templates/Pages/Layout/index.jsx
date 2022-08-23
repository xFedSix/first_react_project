import React from "react";

import { Outlet } from "react-router-dom";
import HeaderComponent from "../../../components/HeaderComponent";
import AboutUs from "../../AboutUs";
import BunnerComponent from "../../BunnerComponent";
import OurServices from "../../OurServices";
import PricingPlan from "../../PricingPlan";
import FooterComponent from "../../../components/FooterComponent/Index";

const Layout = () => {
  return (
    <>
      <>
        <HeaderComponent />
        {/* <BunnerComponent
          title="Web development project"
          subtitle="Very suitable to support all web development projects"
        />
        <AboutUs />
        <OurServices />
        <PricingPlan /> */}
        <Outlet />
        <FooterComponent />
      </>
    </>
  );
};

export default Layout;
