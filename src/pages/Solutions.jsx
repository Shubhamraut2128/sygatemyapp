import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Digital Transformation",
      description: "Revolutionize your business processes with our comprehensive digital transformation strategies. We help you leverage cutting-edge technologies to streamline operations, enhance customer experiences, and drive growth.",
      icon: "fas fa-sync-alt"
    },
    {
      id: 2,
      title: "Software Development",
      description: "Custom software solutions designed to meet your unique business requirements. Our experienced development team builds scalable, secure, and user-friendly applications that solve real-world problems.",
      icon: "fas fa-code"
    },
    {
      id: 3,
      title: "Cloud Migration",
      description: "Seamlessly transition your business to the cloud with our expert migration services. We ensure minimal disruption while maximizing the benefits of cloud infrastructure.",
      icon: "fas fa-cloud-upload-alt"
    },
    {
      id: 4,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics solutions. We help you make data-driven decisions that improve efficiency and drive business growth.",
      icon: "fas fa-chart-line"
    },
    {
      id: 5,
      title: "IoT Solutions",
      description: "Connect your business to the future with our Internet of Things (IoT) implementations. We design and deploy smart systems that enhance productivity and create new opportunities.",
      icon: "fas fa-microchip"
    },
    {
      id: 6,
      title: "IT Infrastructure Management",
      description: "Optimize your IT infrastructure with our comprehensive management services. We ensure your technology backbone is robust, secure, and scalable to support your business goals.",
      icon: "fas fa-server"
    }
  ];

  return (
    <main className="solutions-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Solutions</h1>
          <p>Comprehensive IT solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="section solutions-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>Innovative IT Solutions</h2>
            <p>Empowering businesses with scalable technology for a secure and efficient digital transformation journey</p>
          </div>
          
          <div className="solutions-grid">
            {solutions.map(solution => (
              <div className="solution-card" key={solution.id}>
                <div className="solution-icon">
                  <i className={solution.icon}></i>
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Contact us today to discuss how our solutions can help your business thrive in the digital age.</p>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;