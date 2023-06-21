import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo2 from "./../Images/Vertexhubblack .png";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ThemeContext } from "./ThemeContext";

import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
//   const { toggleTheme } = useContext(ThemeContext);


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        
        <div   className="logo" style={{ height: "50%", width: "40%", marginLeft: "10px" }}>
          <img src={logo2} alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar} style={{paddingLeft:"100px"}}>
          <FontAwesomeIcon icon={faBars} shake size="lg" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
          <li>
              <NavLink to="/" onClick={handleNavLinkClick}>
                
              </NavLink>
            </li>
            <li>
              <NavLink to="/insights" onClick={handleNavLinkClick}>
                Insights
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleNavLinkClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleNavLinkClick}>
                Services
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/career" onClick={handleNavLinkClick}>
                Career
              </NavLink>
              
            </li>
            <button>Contacts</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
