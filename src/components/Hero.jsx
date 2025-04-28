import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Empowering Businesses with Next-Gen IT Solutions</h1>
          <p>Innovative, Secure, and Efficient Technology for Your Business Needs.</p>
          <div className="hero-badges">
            <div c
            lassName="rating-badge">
              <span>Rated 5 Stars by Clients</span>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <Link to="/solutions" className="btn btn-primary">Explore</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;