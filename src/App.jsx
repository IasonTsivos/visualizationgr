import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import InteriorSection from "./components/InteriorSection";
import ExteriorSection from "./components/ExteriorSection";
import PartnersSection from "./components/PartnersSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      {/* Title for the statistics section */}
      <h2 className="statistics-title">Visualization Gr</h2>

      {/* Company Description */}
      <p className="company-description">
        At Visualization Gr, we specialize in transforming ideas into breathtaking visuals.
        With over seven years of experience, our team of creative professionals has partnered 
        with world-renowned companies to deliver cutting-edge architectural designs and visualization services. 
        From concept to completion, we ensure every detail reflects the essence of your vision.
      </p>

      <section className="statistics-section">
        <div className="stat">
          <h1>7+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="stat">
          <h1>10+</h1>
          <p>WORLDWIDE CLIENTS</p>
        </div>
        <div className="stat">
          <h1>4+</h1>
          <p>COMPANIES TRUST</p>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Interior Section */}
      <InteriorSection />
      <div className="divider"></div>
      <ExteriorSection />

      <div className="divider"></div>

      <PartnersSection />
    </div>
  );
}

export default App;
