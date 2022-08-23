import React from "react";
import NavBar from "../NavBar";
import CopyRights from "./copy_rights.svg";

import "./styles.scss";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__nav-bar">
        <NavBar />
      </div>
      <div>
        <img alt="copy" src={CopyRights} />
      </div>
    </footer>
  );
};

export default FooterComponent;
