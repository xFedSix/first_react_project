import React from "react";
import H1Post from "../../components/H1Post";
import AboutUs from "../AboutUs";
import Banner from "../../templates/BunnerComponent";
import { ABOUT_US_DATA } from "../AboutUs/constants";
import { H1_POST } from "../../components/H1Post/constants";
import { BANNER } from "../../templates/BunnerComponent/constants";
import "./styles.scss";
const PostPage = () => {
  return (
    <>
      {BANNER.map((item) => (
        <Banner title={item.title} subtitle={item.subtitle} />
      ))}
      {H1_POST.map((item) => (
        <H1Post title={item.title} subtitle={item.subtitle} />
      ))}
      <div className="about_us">
        {ABOUT_US_DATA.map((item) => (
          <AboutUs
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </>
  );
};

export default PostPage;
