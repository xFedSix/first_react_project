import React from "react";

import { TITLE, IMAGES } from "./constants";

import TitleComponent from "../../components/TitleComponent";
import OurTeamMembersComponent from "../../components/OurTeamMembersComponent";

const OurTeam = () => {
  return (
    <>
      <TitleComponent
        key={TITLE.id}
        title={TITLE.title}
        subtitle={TITLE.subtitle}
      />
      <div className="Our-team-card row d-flex">
        {IMAGES.map(({ id, image }) => (
          <div
            key={id}
            className="col-lg-4 col-sm-12 d-flex align-items-center flex-column"
          >
            <img alt="img" className="team__image" src={image}></img>
          </div>
        ))}

        <OurTeamMembersComponent />
      </div>
    </>
  );
};
export default OurTeam;
