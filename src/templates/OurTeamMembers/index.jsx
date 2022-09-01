import React from "react";

import { TITLE, IMAGES } from "./constants";

import TitleComponent from "../../components/TitleComponent";
import OurTeamMembersComponent from "../../components/OurTeamMembersComponent";
import CardComponent from "../../components/CardComponent";
// import "./styles.scss";

const OurTeam = () => {
  return (
    <>
      <TitleComponent
        key={TITLE.id}
        title={TITLE.title}
        subtitle={TITLE.subtitle}
      />
      <div className="row">
        {IMAGES.map((image, id) => (
          <div key={id} className="col-4">
            <CardComponent image={image} />
          </div>
        ))}
      </div>
      <OurTeamMembersComponent />
    </>
  );
};
export default OurTeam;
