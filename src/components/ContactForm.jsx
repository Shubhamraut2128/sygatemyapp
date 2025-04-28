import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - in real app, this would connect to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ email: '' });
  };

  return (
    <section className="section contact-form-section" id="contact-form">
      <div className="container">
        <div className="form-container">
          <h3>Ready to transform your business?</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your business email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary">Submit for IT solutions inquiry</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;