import React from 'react';

const ServicesPage = () => {
  const services = [
      {
        id: 1,
        title: "Innovative IT Solutions",
        description: "Empowering businesses with scalable technology for a secure and efficient digital transformation journey.",
        details: "Our innovative IT solutions are designed to help businesses of all sizes...",
        icon: "fas fa-laptop-code",
        backgroundImage: "/images/service1.jpg"
      },
      {
        id: 2,
        title: "Cloud Solutions",
        description: "Transform your business with our secure and scalable cloud solutions...",
        details: "Our cloud solutions include cloud migration...",
        icon: "fas fa-cloud",
        backgroundImage: "/images/service2.jpg"
      },
      {
        id: 3,
        title: "Cybersecurity Services",
        description: "Protect your organization with our comprehensive cybersecurity strategies...",
        details: "Our cybersecurity services include threat assessment...",
        icon: "fas fa-shield-alt",
        backgroundImage: "/images/service3.jpg"
      },
      {
        id: 4,
        title: "Managed IT Services",
        description: "Focus on your core business while we handle your IT infrastructure...",
        details: "Our managed IT services provide 24/7 monitoring...",
        icon: "fas fa-cogs",
        backgroundImage: "/images/service4.jpg"
      },
      {
        id: 5,
        title: "Software Development",
        description: "Custom software solutions designed to meet your unique requirements...",
        details: "Our software development services include custom application development...",
        icon: "fas fa-code",
        backgroundImage: "/images/service5.jpg"
      },
      {
        id: 6,
        title: "Data Analytics",
        description: "Harness the power of your data with our advanced analytics...",
        details: "Our data analytics services help you collect and process data...",
        icon: "fas fa-chart-bar",
        backgroundImage: "/images/service6.jpg"
      }
    ];
    

  return (
    <main className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive IT services to power your business growth</p>
        </div>
      </section>

      <section className="section services-details-section">
        <div className="container">
          <div className="section-title">
            <h2>How We Can Help Your Business</h2>
            <p>Our range of services designed to address all your IT needs</p>
          </div>
          
          <div className="services-list">
            {services.map(service => (
              <div className="service-detail-card" key={service.id}>
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p className="service-highlight">{service.description}</p>
                  <p>{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Approach</h2>
            <p>How we deliver exceptional IT services</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We start by understanding your business needs, challenges, and goals.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Assessment</h3>
              <p>Our experts analyze your current IT infrastructure and identify areas for improvement.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Strategy</h3>
              <p>We develop a tailored strategy that aligns with your business objectives.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Implementation</h3>
              <p>Our team deploys solutions efficiently with minimal disruption to your operations.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Support</h3>
              <p>We provide ongoing support and optimization to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Professional IT Solutions?</h2>
            <p>Contact us today to discuss how our services can help your business thrive.</p>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;