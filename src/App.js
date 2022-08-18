import React from "react";
import AboutUs from "./templates/AboutUs";
import BunnerComponent from "./templates/BunnerComponent";
import "./styles.scss";

const App = () => {
  return (
    <>
        <BunnerComponent 
          title='Title'
          subtitle='Subtitle'
        />
        <AboutUs />
    </>
  )
};

export default App;
