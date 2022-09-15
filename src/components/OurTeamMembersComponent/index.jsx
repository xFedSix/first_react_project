import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { URL } from "./constants";
import { OUR_TEAM_CARD } from "./constants";

const OurTeamMembersComponent = () => {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      const response = await fetch(URL);
      const responseData = await response.json();
      const addDataToImages = OUR_TEAM_CARD.map((item, index) => ({
        ...item,
        ...responseData[index],
      }));
      setCardInfo(addDataToImages);
    };

    fetchDataFromServer();
  }, []);

  return (
    <div className="row p-4">
      {cardInfo.map(({ id, image, name, username, email }) => (
        <div
          className="col-lg-4 col-sm-12 d-flex align-items-center flex-column"
          key={id}
        >
          <img
            alt="img"
            className="team__image col-lg-4 col-sm-12 d-flex "
            src={image}
          ></img>

          <h4>{name}</h4>
          <p>{username}</p>
          <nav>
            <Link to={"/our-team-members"}>{email}</Link>
          </nav>
        </div>
      ))}
    </div>
  );
};

export default OurTeamMembersComponent;
