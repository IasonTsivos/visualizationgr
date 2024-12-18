import React from "react";
import "./PartnersSection.css"; // Import CSS for styling
import gen from "../assets/images/gensler.png";
import perk from "../assets/images/perkins.png";
import foster from "../assets/images/foster.png";
import woods from "../assets/images/woods.png";
import bau from "../assets/images/bau.png";
import die from "../assets/images/die.png";

// List of partner logos (replace paths with your actual image paths)
const partnerLogos = [ gen, perk, foster, woods, bau, die, ];

const PartnersSection = () => {
  return (
    <div className="partners-section" id="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-grid">
        {partnerLogos.map((logo, index) => (
          <div className="partner-logo" key={index}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
