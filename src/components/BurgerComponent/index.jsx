import React, { useState } from "react";
import "./styles.scss";

const BurgerComponent = () => {
  const [isActive, setActive] = useState(false);

  const openBurger = () => {
    const toggleClass = () => {
      setActive(!isActive);
    };

    toggleClass();
  };

  const closeMenu = () => {
    setActive(false);
  };

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
          <nav>
            <ul>
              <li>
                <a href="/" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" onClick={closeMenu}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/our-services" onClick={closeMenu}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="/our-team-members" onClick={closeMenu}>
                  Our Team
                </a>
              </li>
              <li>
                <a href="/blog" onClick={closeMenu}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact_us" onClick={closeMenu}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BurgerComponent;
