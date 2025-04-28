import React from 'react';

const AboutUs = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>Empowering Businesses with IT Solutions</h2>
        </div>
        <div className="about-content">
          <p>
            At Sygate Global, we deliver innovative IT solutions that enhance security, efficiency, and productivity, 
            helping businesses thrive in the digital landscape with tailored, scalable technology for every organization.
          </p>
          <p>
            We believe that every business deserves a technological edge. Whether you're a growing startup or a global enterprise, 
            our solutions are designed to fit your needs, scale with your growth, and keep you competitive in an ever-changing digital world.
          </p>

          <div className="about-features">
            <div className="feature">
              <h3>Innovative IT Solutions</h3>
              <p>Future-Ready Technology</p>
            </div>
            <div className="feature1">
              <h3>Expertise Across Industries</h3>
              <p>
                Our team brings extensive experience in a wide range of sectors, including healthcare, finance, retail, and logistics. 
                We understand industry-specific challenges and deliver solutions that align with your goals.
              </p>
            </div>
            <div className="feature2">
              <h3>Core Services</h3>
              <ul>
                <li>Custom Software Development</li>
                <li>Cloud Computing and Migration</li>
                <li>Cybersecurity and Risk Management</li>
                <li>Big Data & Analytics</li>
                <li>IT Consulting & Digital Transformation</li>
              </ul>
            </div>
            <div className="feature3">
              <h3>Our Mission</h3>
              <p>
                To empower organizations by leveraging technology that drives growth, fosters innovation, and builds secure, 
                scalable digital ecosystems.
              </p>
            </div>
            <div className="feature4">
              <h3>Why Choose Sygate Global?</h3>
              <ul>
                <li>Client-Centric Approach</li>
                <li>Cutting-Edge Technology Stack</li>
                <li>Agile Development Practices</li>
                <li>Dedicated Support and Maintenance</li>
                <li>Proven Track Record of Success</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
