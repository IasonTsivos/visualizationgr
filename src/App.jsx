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
