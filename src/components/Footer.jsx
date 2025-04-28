import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Sygate Global</h2>
            <p>Empowering businesses with next-gen IT solutions.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Our Values</h3>
              <ul>
                <li>Innovate</li>
                <li>Secure</li>
                <li>Future-ready</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li><a href="mailto:info@sygateglobal.com">info@sygateglobal.com</a></li>
                <li><a href="tel:+919332575757">+91 9332575757</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;