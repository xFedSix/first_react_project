import React, { useState } from "react";
import NavBar from "../NavBar";
import "./styles.scss";

const BurgerComponent = () => {
  const [isActive, setActive] = useState(false);

  const openBurger = () => {
    const toggleClass = () => {
      setActive(!isActive);
    };

    toggleClass();
  };

  //   const closeMenu = () => {
  //     setActive(false);
  //   };

  return (
    <>
      <div
        className={`nav__burger ${isActive ? "nav__burger-active" : ""}`}
        onClick={openBurger}
      >
        <span className="nav__burger__icon">&nbsp;</span>
      </div>
      <div className={`header-links-container ${isActive ? "change" : ""}`}>
        <div className="header-links">
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default BurgerComponent;
