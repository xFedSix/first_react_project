import React from "react";

// import { Outlet } from "react-router-dom";
import HeaderComponent from "../../../components/HeaderComponent";

import FooterComponent from "../../../components/FooterComponent/Index";

const Layout = () => {
  return (
    <>
      <>
        <HeaderComponent />
        {/* <Outlet /> */}
        <FooterComponent />
      </>
    </>
  );
};

export default Layout;
