import React from "react";

import { TITLE } from "./constants";

import img1 from "./images/man.svg";
import img2 from "./images/man_2.svg";
import img3 from "./images/man_3.svg";

import TitleComponent from "../../components/TitleComponent";
import OurTeamMembersComponent from "../../components/OurTeamMembersComponent";
// import CardComponent from "../../components/CardComponent";
// import "./styles.scss";

const OurTeam = () => {
  return (
    <>
      <TitleComponent
        key={TITLE.id}
        title={TITLE.title}
        subtitle={TITLE.subtitle}
      />
      <div className="row p-4">
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
          <img alt="img" className="team__image" src={img1}></img>
        </div>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
          <img alt="img" className="team__image" src={img2}></img>
        </div>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
          <img alt="img" className="team__image" src={img3}></img>
        </div>
        <OurTeamMembersComponent />
      </div>
    </>
  );
};
export default OurTeam;
