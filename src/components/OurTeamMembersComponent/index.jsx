import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { URL } from "../../templates/OurTeamMembers/constants";

const OurTeamMembersComponent = () => {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      const response = await fetch(URL);
      const responseData = await response.json();
      setCardInfo(responseData);
    };

    fetchDataFromServer();
  }, []);
  return (
    <div className="row p-4">
      <>
        {cardInfo.map(({ id, name, username, email }) => (
          <div
            key={id}
            className="col-lg-4 col-sm-12 d-flex align-items-center flex-column"
          >
            <h4>{name}</h4>
            <p>{username}</p>
            <nav>
              <Link to={"/our-team-members"}>{email}</Link>
            </nav>
          </div>
        ))}
      </>
    </div>
  );
};

export default OurTeamMembersComponent;
