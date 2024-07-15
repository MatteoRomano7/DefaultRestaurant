import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`appNavbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="appNavbar-logo">
        <img src={images.azale} alt="appLogo" id="appLogo" />
      </div>
      <ul className="appNavbar-links">
        <li className="p_opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p_opensans">
          <a href="#about">About</a>
        </li>
        <li className="p_opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p_opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p_opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="appNavbar-login">
        <a href="#login" className="p_opensans">
          Log In / Registration
        </a>
        <div />
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className="appNavbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="appNavbar-smallscreen_overlay flexCenter slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="appNavbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
            <button onClick={toggleTheme} className="theme-toggle">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
