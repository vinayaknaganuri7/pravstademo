import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* About PRAVSTA */}
        <div className="footer-col">
          <h4>Our Core Technology</h4>
          <ul>
             <li><Link to="/vision-mission">Vision & Mission</Link></li>
            <li><Link to="/about#leadership">Leadership</Link></li>
            <li><Link to="/about#our-story">Our Story</Link></li>
            <li><Link to="/about#careers">Careers</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><Link to="/services/automotive">Automotive</Link></li>
            <li><Link to="/services/embedded-systems">Embedded Systems</Link></li>
            <li><Link to="/services/data-engineering">Data Engineering</Link></li>
            <li><Link to="/services/ai">AI & Data Science</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
            <li><Link to="/Contact">Support</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/pravsta" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Address */}
        <div className="footer-col address-col">
          <p>
            <strong>📍 Address -  PRAVSTA TECHNOLOGY PRIVATE LIMITED</strong> | 4<sup>th</sup> Floor, Balaji Business Center, Pune-Mumbai Highway (NH 4), Next to Hotel Spice Court, Baner, Pune, Maharashtra – 411045
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} PRAVSTA TECHNOLOGY PRIVATE LIMITED. All rights reserved.
        <div className="footer-note">Confidential & Proprietary</div>
      </div>
    </footer>
  );
};

export default Footer;
