// src/components/InteriorSection.jsx
import React from "react";
import "./ExteriorSection.css"; // Import CSS for the layout

// Import images
import interior1 from "../assets/images/interior1.jpg";
import interior2 from "../assets/images/interior2.jpg";
import interior3 from "../assets/images/interior3.jpg";
import interior4 from "../assets/images/interior4.jpg";
import interior5 from "../assets/images/interior5.jpg";
import interior6 from "../assets/images/interior6.jpg";

const ExteriorSection = () => {
  // Array of imported images
  const images = [interior1, interior2, interior3, interior4, interior5, interior6];

  return (
    <div className="Exterior-section" id="Exterior-section">
      <h2>Exterior Design Gallery</h2>
      <div className="Exterior-grid">
        {images.map((image, index) => (
          <div className="Exterior-grid-item" key={index}>
            <img src={image} alt={`Interior ${index + 1}`} className="interior-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExteriorSection;
