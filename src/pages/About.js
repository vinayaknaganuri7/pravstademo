import React, { useState, useEffect } from "react";
import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Section Images
import automotiveImg from "../components/pages/images/embedded.jpeg";
import dataSciImg from "../components/pages/images/datasci.jpeg";
import webImg from "../components/pages/images/Intr2.jpeg";
import servicesImg from "../components/pages/images/sdv.jpg";
import sapImg from "../components/pages/images/sap2.jpg";

// Hero Slideshow Images
import hero1 from "../components/pages/images/cloudchip.jpg";
import hero2 from "../components/pages/images/embedded.jpeg";
import hero3 from "../components/pages/images/sdv.jpg";
import hero4 from "../components/pages/images/datasci.jpeg";

const heroImages = [hero1, hero2, hero3, hero4];

const AboutContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Banner Slideshow */}
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
      >
        <div className="hero-overlay">
          <h1>About PRAVSTA</h1>
          <p>Engineering the Future of Technology</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="about-wrapper">
        {/* Automotive */}
        <section className="about-section">
          <div className="about-image">
            <img src={automotiveImg} alt="Automotive Expertise" />
          </div>
          <div className="about-text">
            <h2>Core Expertise – Automotive</h2>
            <ul>
              <li>Solutions across V-Cycle – from requirements to validation</li>
              <li>SDV Cockpit IVI/IVE/IVC, TCU</li>
              <li>Embedded ECUs – Power Seat, Motor Controller</li>
              <li>CAN Diagnostics, Bootloader, Power Management</li>
              <li>Functional Safety & Cybersecurity</li>
              <li>AUTOSAR & non-AUTOSAR solutions</li>
              <li>Engineering Services – Hardware, Software, Mechanical</li>
              <li>Data Loggers, Cloud-Based Services</li>
              <li>Modems – eSIM, 4G; Automation & Industrial PCs</li>
            </ul>
          </div>
        </section>

        {/* Data Science */}
        <section className="about-section reverse">
          <div className="about-image">
            <img src={dataSciImg} alt="Data Science" />
          </div>
          <div className="about-text">
            <h2>Data Science, Engineering & Hardware</h2>
            <h3>Data Engineering</h3>
            <ul>
              <li>ETL Development, Data Analytics, Data Warehouse</li>
              <li>Data Management, CloudOps</li>
            </ul>
            <h3>Artificial Intelligence</h3>
            <ul>
              <li>Algorithm Development & Validation</li>
              <li>Machine Vision, MLOps</li>
            </ul>
            <h3>Hardware Expertise</h3>
            <ul>
              <li>Smart clusters, Infotainment, ECUs, Lighting, Sensors</li>
              <li>PCB & RF Designs (BLE, WiFi, 4G)</li>
              <li>DFMEA, PFMEA, Altium/OrCAD simulation</li>
              <li>EMI/EMC compliance – ISO16750-2, ISO7637-2, CISPR25</li>
            </ul>
          </div>
        </section>

        {/* Web & Mobile */}
        <section className="about-section">
          <div className="about-image">
            <img src={webImg} alt="Web & Mobile" />
          </div>
          <div className="about-text">
            <h2>Web & Mobile App Development</h2>
            <p>
              We design, develop, and deliver robust web and mobile apps
              (Android & iOS), transforming creative ideas into scalable products.
            </p>
            <ul>
              <li>Product ideation and conceptualization</li>
              <li>Design, development, testing, certification</li>
              <li>Manufacturing and product support</li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="about-section reverse">
          <div className="about-image">
            <img src={servicesImg} alt="Services" />
          </div>
          <div className="about-text">
            <h2>Services</h2>
            <ul>
              <li>Maintenance & Support</li>
              <li>Custom Software Development</li>
              <li>Cloud Solutions</li>
              <li>Cybersecurity & IT Consulting</li>
              <li>AI & Machine Learning</li>
              <li>DevOps Solutions</li>
              <li>Automation – GUI, API, CLI (Selenium, Python)</li>
            </ul>
          </div>
        </section>

        {/* SAP */}
        <section className="about-section">
          <div className="about-image">
            <img src={sapImg} alt="SAP Services" />
          </div>
          <div className="about-text">
            <h2>SAP Core Services</h2>
            <ul>
              <li>Real Estate Management (RE-FX, C4RE, IFRS16)</li>
              <li>Data Migration to SAP S/4HANA (ETL with BODS/ADM)</li>
              <li>Custom Development (RAP, Fiori, UI5, BTP)</li>
              <li>SAP BASIS – consulting, ChaRM, optimization</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutContent;
