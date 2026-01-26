import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './pages/images/logo2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target)
      ) {
        closeMenus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Company Logo" className="logo-image" />
          <span className="company-name">PRAVSTA TECHNOLOGY PRIVATE LIMITED</span>
        </Link>
      </div>

      <div className="menu-button-wrapper" onClick={toggleMenu}>
        <span className="menu-icon">&#9776;</span>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <li><Link to="/" onClick={closeMenus}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenus}>About Us</Link></li>

        <li className="services-dropdown" ref={servicesRef}>
          <span className="dropdown-toggle" onClick={toggleServices}>Industries</span>
          {isServicesOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/services/automotive" onClick={closeMenus}>Automotive</Link></li>
              <li><Link to="/services/embedded-systems" onClick={closeMenus}>Embedded Systems</Link></li>
              <li><Link to="/services/data-engineering" onClick={closeMenus}>Data Engineering</Link></li>
              <li><Link to="/services/ai" onClick={closeMenus}>Artificial Intelligence</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact" onClick={closeMenus}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
