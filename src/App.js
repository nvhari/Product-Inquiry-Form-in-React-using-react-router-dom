import "./index.css";

 // src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function ProductInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.phone) formErrors.phone = "Phone is required.";
    if (!formData.message) formErrors.message = "Message is required.";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Product Inquiry Form</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Thank you for your inquiry!</h3>
          <p>Here are the details you submitted:</p>
          <ul>
            <li><strong>Name:</strong> {formData.name}</li>
            <li><strong>Email:</strong> {formData.email}</li>
            <li><strong>Phone:</strong> {formData.phone}</li>
            <li><strong>Message:</strong> {formData.message}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductInquiryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
