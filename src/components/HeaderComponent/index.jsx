import React from "react";
import NavBar from "../NavBar";
import Logo from "./Logo.svg";
import "./styles.scss";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div>
        <img alt="logo" src={Logo} />
      </div>
      <div className="header__nav-bar">
        <NavBar />
      </div>
    </header>
  );
};

export default HeaderComponent;
