// src/components/InteriorSection.jsx
import React, { useState } from "react";
import "./InteriorSection.css"; // Import CSS for the layout

// Import images
import interior1 from "../assets/images/interior1.jpg";
import interior2 from "../assets/images/interior2.jpg";
import interior3 from "../assets/images/interior3.jpg";
import interior4 from "../assets/images/interior4.jpg";
import interior5 from "../assets/images/interior5.jpg";
import interior6 from "../assets/images/interior6.jpg";
import sun from "../assets/icons/sun.svg";
import modern from "../assets/icons/modern.svg";
import tree from "../assets/icons/tree.svg";

const InteriorSection = () => {
  // Array of imported images
  const images = [interior1, interior2, interior3, interior4, interior5, interior6];

  const cards = [
    { title: "Modern Exterior", icon: modern },
    { title: "Bright & Sunny Spaces", icon: sun },
    { title: "Surrounded with Green", icon: tree },
  ];

  // State to handle the modal view
  const [modalImage, setModalImage] = useState(null);

  // Function to open the modal
  const openModal = (image) => {
    setModalImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="interior-section" id="Exterior-section">
      <h2>Exterior Design Gallery</h2>
      {/* Cards Section */}
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">
              <img src={card.icon} alt={`${card.title} Icon`} />
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Grid of Images */}
      <div className="interior-grid">
        {images.map((image, index) => (
          <div className="interior-grid-item" key={index}>
            <img
              src={image}
              alt={`Interior ${index + 1}`}
              className="interior-image"
              onClick={() => openModal(image)} // Open modal on click
            />
          </div>
        ))}
      </div>

      {/* Modal for viewing image */}
      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Enlarged Interior" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteriorSection;
