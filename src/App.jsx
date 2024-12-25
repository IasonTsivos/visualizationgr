import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import InteriorSection from "./components/InteriorSection";
import ExteriorSection from "./components/ExteriorSection";
import PartnersSection from "./components/PartnersSection";
import ContactSection from "./components/ContactSection";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLmfY7rBCb5UirlIXkYUUfteynVHNGtk0",
  authDomain: "visualization-2013c.firebaseapp.com",
  projectId: "visualization-2013c",
  storageBucket: "visualization-2013c.firebasestorage.app",
  messagingSenderId: "1035786817358",
  appId: "1:1035786817358:web:8f23ab9e338edf6fb2581f",
  measurementId: "G-GHYVDQPH8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  const [inView, setInView] = useState({
    home: false,
    interior: false,
    exterior: false,
    partners: false,
    contact: false,
    statistics: false, // Track visibility of the statistics section
  });

  // Intersection Observer Callback Function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView((prevState) => ({
          ...prevState,
          [entry.target.id]: true,
        }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Trigger when 30% of the section is in view
    });

    // Observing each section
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      // Clean up observer on component unmount
      observer.disconnect();
    };
  }, []);

  // Counter animation function
  const CountUp = ({ start, end, duration }) => {
    const [count, setCount] = useState(start);
  
    useEffect(() => {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const increment = Math.ceil((end - start) / (duration * 1000));
        if (progress < duration * 1000) {
          setCount(Math.min(start + Math.floor(progress / (duration * 1000) * (end - start)), end));
          requestAnimationFrame(step);
        } else {
          setCount(end); // Ensure it reaches the target value
        }
      };
      requestAnimationFrame(step);
  
      return () => cancelAnimationFrame(startTime); // Cleanup on component unmount
    }, [start, end, duration]);
  
    return (
      <span>
        {count}+ {/* Display the + symbol next to the number */}
      </span>
    );
  };
  

  return (
    <div className="App">
      <Navbar />
      <Home />

      {/* Title for the statistics section */}
      <h2
        className="statistics-title fade-in-section"
        id="home"
        style={{ opacity: inView.home ? 1 : 0 }}
      >
        Visualization Gr
      </h2>

      {/* Company Description */}
      <p
        className="company-description fade-in-section"
        id="home"
        style={{ opacity: inView.home ? 1 : 0 }}
      >
        At Visualization Gr, we specialize in transforming ideas into breathtaking visuals.
        With over seven years of experience, our team of creative professionals has partnered
        with world-renowned companies to deliver cutting-edge architectural designs and visualization services.
        From concept to completion, we ensure every detail reflects the essence of your vision.
      </p>

      <section
        className="statistics-section fade-in-section"
        id="statistics"
        style={{ opacity: inView.statistics ? 1 : 0 }}
      >
        <div className="stat">
          <h1>
            {inView.statistics ? (
              <CountUp start={0} end={7} duration={2} />
            ) : (
              "0"
            )}
          </h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="stat">
          <h1>
            {inView.statistics ? (
              <CountUp start={0} end={10} duration={2} />
            ) : (
              "0"
            )}
          </h1>
          <p>WORLDWIDE CLIENTS</p>
        </div>
        <div className="stat">
          <h1>
            {inView.statistics ? (
              <CountUp start={0} end={4} duration={2} />
            ) : (
              "0"
            )}
          </h1>
          <p>COMPANIES TRUST</p>
        </div>
      </section>

      <div className="divider"></div>

      <InteriorSection />
      <div className="divider"></div>
      <ExteriorSection />

      <div className="divider"></div>

      <PartnersSection />

      <div className="divider"></div>
      <ContactSection />
    </div>
  );
}

// CountUp Component for the animation
const CountUp = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.ceil((end - start) / (duration * 1000));
      if (progress < duration * 1000) {
        setCount(Math.min(start + Math.floor(progress / (duration * 1000) * (end - start)), end));
        requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure it reaches the target value
      }
    };
    requestAnimationFrame(step);

    return () => cancelAnimationFrame(startTime); // Cleanup on component unmount
  }, [start, end, duration]);

  return <span>{count}</span>;
};

export default App;
