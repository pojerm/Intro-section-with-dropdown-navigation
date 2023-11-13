import React, { useState } from "react";
import logo from "/home/pojer/Documents/GitHub/pojerm/react-typescript-emotion/Intro-section-with-dropdown-navigation/public/logo.svg"; // logo
import hamburger from "/public/icon-menu.svg"; // hamburger icon
import closeIcon from "/public/icon-close-menu.svg"; // x icon

import "./navigation.scss"; // css za navigation

interface NavigationProps {
  // You can add any other props you need here.
}

const Navigation = () => {
  // toggle hamburger icon
  const [showNavbar, setShowNavbar] = useState(false);

  // sa ovom funkcijom kontroliram tu hamburger ikonu
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav>
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      {/* hamburger icon close icon  */}
      <div className="menu-container">
        <button
          className="menu-button"
          onClick={handleShowNavbar}
          aria-label="Toggle menu"
          // dodano
          aria-controls="primary-navigation"
        >
          {showNavbar ? (
            <img src={closeIcon} alt="Close" />
          ) : (
            <img src={hamburger} alt="Menu" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
