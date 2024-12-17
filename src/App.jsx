import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import InteriorSection from "./components/InteriorSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <section className="statistics-section">
      <div className="stat">
        <h1>7+</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <div className="stat">
        <h1>4+</h1>
        <p>COMPANIES TRUST</p>
      </div>
      <div className="stat">
        <h1>20+</h1>
        <p>WORLDWIDE CLIENTS</p>
      </div>
      </section>
      
      {/* Divider */}
      <div className="divider"></div>

      {/* Interior Section */}
      <InteriorSection />
    </div>
  );
}

export default App;
