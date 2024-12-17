import React from "react";
import "./Home.css";
import Arrow from "../assets/icons/arrow.svg"; // Import your arrow SVG

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  return (
    <div className="home-section" id="home">
      {/* Left Half - Interior Design */}
      <div className="home-half home-left">
        <div className="home-content">
          <div className="home-text">Interior Design</div>
          <img
            src={Arrow}
            alt="Scroll Down"
            className="home-arrow"
            onClick={() => scrollToSection("interior-section")}
          />
        </div>
      </div>

      {/* Right Half - Exterior Design */}
      <div className="home-half home-right">
        <div className="home-content">
          <div className="home-text">Exterior Design</div>
          <img
            src={Arrow}
            alt="Scroll Down"
            className="home-arrow"
            onClick={() => scrollToSection("exterior-section")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
