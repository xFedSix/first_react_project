import React from "react";

import { Outlet } from "react-router-dom";
import HeaderComponent from "../../../components/HeaderComponent";

import FooterComponent from "../../../components/FooterComponent/Index";

const Layout = () => {
  return (
    <>
      <div className="container">
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </div>
    </>
  );
};

export default Layout;
