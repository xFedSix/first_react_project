import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./templates/Pages/Layout";
import OurServices from "./templates/OurServices";
import ErrorPage from "./templates/Pages/ErrorPage";
import AboutUs from "./templates/AboutUs";
import PricingPlan from "./templates/PricingPlan";
import MainPage from "./templates/Pages/MainPage";

import "./styles.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/pricing" element={<PricingPlan />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
