import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Innovative IT Solutions",
      description: "Empowering businesses with scalable technology for a secure and efficient digital transformation journey.",
      icon: "fas fa-laptop-code"
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description: "Transform your business with our secure and scalable cloud solutions tailored to your needs.",
      icon: "fas fa-cloud"
    },
    {
      id: 3,
      title: "Cybersecurity Services",
      description: "Protect your organization with our comprehensive cybersecurity strategies designed to mitigate risks and enhance security.",
      icon: "fas fa-shield-alt"
    }
  ];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive IT solutions tailored to your business needs</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="service-link">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;