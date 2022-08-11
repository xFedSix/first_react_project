import React from "react";

import Headline from "./components/Headline";
import AboutUs from "./templates/AboutUs";
import BannerComponent from "./templates/BunnerComponent";
import { ABOUT_US_DATA } from "./templates/AboutUs/constants";
import { HEADLINE } from "./components/Headline/constants";
import { BANNERCOMPONENT } from "./templates/BunnerComponent/constants";
import "./styles.scss";
const App = () => {
  return (
    <>
      {React.Children.toArray(
        BANNERCOMPONENT.map((item) => (
          <BannerComponent title={item.title} subtitle={item.subtitle} />
        ))
      )}
      {React.Children.toArray(
        HEADLINE.map((item) => (
          <Headline title={item.title} subtitle={item.subtitle} />
        ))
      )}
      <div className="about-us">
        {React.Children.toArray(
          ABOUT_US_DATA.map((item) => (
            <AboutUs
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))
        )}
      </div>
    </>
  );
};
export default App;
