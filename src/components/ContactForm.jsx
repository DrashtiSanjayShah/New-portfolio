

import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Header from './Header';
import BottomNav from "./BottomNav";

const ContactForm = () => {

  const form = useRef()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.budget) newErrors.budget = "Please select a budget range.";
    if (!formData.message.trim() || formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.sendForm(serviceID, templateID, form.current, publicKey)
.then((result) => {
  console.log(result.text);
   setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
}, (error) => {
  console.log(error.text);
}) ;
  };

  return (
    <>
    <Header />
    <div className="contact-form-container">
      <h1 className="hero-section">Let’s Work Together</h1>
      {submitted && <p className="success-message">Hi, I have received your query! I’ll get back to you soon.</p>}
      <form ref={form} autoComplete="off" onSubmit={handleSubmit}>
        <label>Name*</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email*</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>What do you need help with?*</label>
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Website">Website</option>
          <option value="Consultation">Consultation</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Other">Something else</option>
        </select>
        {errors.service && <p className="error">{errors.service}</p>}

        <label>Budget range*</label>
        <select name="budget" value={formData.budget} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Below ₹5,000">Below ₹5,000</option>
          <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
          <option value="₹10,000 – ₹20,000">₹10,000 – ₹20,000</option>
          <option value="₹20,000+">₹20,000+</option>
        </select>
        {errors.budget && <p className="error">{errors.budget}</p>}

        <label>Message*</label>
        <textarea
          name="message"
          value={formData.message}
          rows="5"
          style={{ resize: "none" }}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send Message</button>
      </form>
    </div>
   <BottomNav />
    </>
  );
};

export default ContactForm;
