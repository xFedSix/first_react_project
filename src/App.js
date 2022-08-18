import React from "react";
import AboutUs from "./templates/AboutUs";
import BunnerComponent from "./templates/BunnerComponent";
import "./styles.scss";

const App = () => {
  return (
    <>
      <BunnerComponent 
      title="Web development project" 
      subtitle="Very suitable to support all web development projects"
       />
      <AboutUs />
    </>
  );
};

export default App;
