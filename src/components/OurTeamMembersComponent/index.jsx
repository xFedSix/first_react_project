import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { URL } from "./constants";
// import { IMAGES } from "./constants";
import img1 from "./images/man.svg";
import img2 from "./images/man_2.svg";
import img3 from "./images/man_3.svg";

const OurTeamMembersComponent = () => {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      const response = await fetch(URL);
      const responseData = await response.json();
      const arr = responseData;
      arr.unshift({ image: img1, image2: img2, image3: img3 });
      setCardInfo(arr);
      console.log(arr);
    };

    fetchDataFromServer();
  }, []);
  return (
    <div className="row p-4">
      <>
        {cardInfo.map(({ id, name, username, email, image }) => (
          <div
            key={id}
            className="col-lg-4 col-sm-12 d-flex align-items-center flex-column"
          >
            <img alt="img" className="team__image" src={image}></img>
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
