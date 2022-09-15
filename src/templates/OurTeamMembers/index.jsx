import React from "react";

import { TITLE } from "../../components/OurTeamMembersComponent/constants";

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
      <div className="our-team-card row d-flex">
        <OurTeamMembersComponent />
      </div>
    </>
  );
};
export default OurTeam;
