import logo from "/home/pojer/Documents/GitHub/pojerm/react-typescript-emotion/Intro-section-with-dropdown-navigation/public/logo.svg";
import hamburger from "/public/icon-menu.svg";
import "./navigation.scss";

interface NavigationProps {
  // You can add any other props you need here.
}

const Navigation = () => {
  return (
    <nav>
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="menu-container">
        <button className="menu-button" aria-label="Toggle menu">
          <img src={hamburger} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
