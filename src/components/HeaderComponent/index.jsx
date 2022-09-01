import React from "react";
import NavBar from "../NavBar";
import Logo from "./Logo.svg";
import BurgerComponent from "../BurgerComponent";
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
      <BurgerComponent />
    </header>
  );
};

export default HeaderComponent;
