import React from 'react';
import './Navbar.css';
import Home from "../assets/icons/house-chimney.svg";
import Grad from "../assets/icons/couch.svg";
import Code from "../assets/icons/blueprint.svg";
import bc from "../assets/icons/corporate-alt.svg";
import tools from "../assets/icons/mail-plus.svg";
import Logo from "../assets/icons/logo.png"; 



const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      {/* Logo on the far left */}
      <div className="nav-logo">
        <img src={Logo} alt="Logo" className="logo-icon" />
      </div>
      
      {/* Navigation items */}
      <div className="nav-items">
        <div className="nav-item" onClick={() => handleScroll('home')}>
          <img src={Home} alt="Home Icon" className="nav-icon" />
          <span className="nav-title">Home</span>
        </div>
        <div className="nav-item" onClick={() => handleScroll('interior-section')}>
          <img src={Grad} alt="Graduation Icon" className="nav-icon" />
          <span className="nav-title">Interior Design</span>
        </div>
        <div className="nav-item" onClick={() => handleScroll('Exterior-section')}>
          <img src={Code} alt="Code Icon" className="nav-icon" />
          <span className="nav-title">Exterior Design</span>
        </div>
        <div className="nav-item" onClick={() => handleScroll('partners-section')}>
          <img src={bc} alt="Briefcase Icon" className="nav-icon" />
          <span className="nav-title">Partners</span>
        </div>
        <div className="nav-item" onClick={() => handleScroll('')}>
          <img src={tools} alt="Tools Icon" className="nav-icon" />
          <span className="nav-title">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
