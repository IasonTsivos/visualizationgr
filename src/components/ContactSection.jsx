// src/components/ContactSection.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // To show success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data
    emailjs
      .sendForm("service_6qeup32", "template_wn0u6fo", e.target, "TKjYwr_XWoxZB_ofa")
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          setStatus("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="contact-section" id="contact-section">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Use the form below to send us a message.</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactSection;
