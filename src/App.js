import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import OurServices from "./templates/OurServices";
import ErrorPage from "./Pages/ErrorPage";
import AboutUs from "./templates/AboutUs";
import PricingPlan from "./templates/PricingPlan";
import OurTeamMembers from "./templates/OurTeamMembers";
import MainPage from "./Pages/MainPage";
import Blog from "./templates/Blog";
import ContactUs from "./templates/ContactUs";
import "./styles.scss";
import DataFromStore from "./templates/dataFromStore";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/first_react_project" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/pricing" element={<PricingPlan />} />
          <Route path="/our-team-members" element={<OurTeamMembers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/data-from-store" element={<DataFromStore />} />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
