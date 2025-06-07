import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
