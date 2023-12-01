import React from "react";
import "./header.scss";
import NavMenu from "../NavMenu/NavMenu";
import MenuIcon from "../MenuIcon/MenuIcon";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <i className="ri-planet-line"></i> Company
          </a>
          {/* <!--=============== HAMBURGER ICON ===============--> */}
          <MenuIcon />
        </div>

        {/* <!--=============== NAV MENU ===============--> */}
        <NavMenu />
      </nav>
    </header>
  );
};

export default Header;
