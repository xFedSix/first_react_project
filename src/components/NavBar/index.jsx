import React from "react";
import { Link } from "react-router-dom";

import { NAV_BAR_DATA } from "./constants";

import "./styles.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {NAV_BAR_DATA.map(({ label, id, url }) => (
          <li key={id} className="nav__link">
            <Link to={url}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
