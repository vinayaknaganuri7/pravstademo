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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
      >
        <div className="hero-overlay">
          <h1>About PRAVSTA</h1>
          <p className="hero-description">
            <strong>PRAVSTA</strong> is a global engineering solution provider delivering
            <span> Automotive Embedded Engineering</span>,
            <span> IT Solutions</span>, and
            <span> Product-Based Services</span>.
          </p>
          <p className="hero-description">
            Driven by <strong>innovation</strong>, <strong>reliability</strong>, and a
            <strong> customer-first mindset</strong>, we help organizations achieve
            technological excellence and sustainable business transformation.
          </p>
          <p className="hero-description">
            We partner with <strong>OEMs</strong>, <strong>Tier-1 suppliers</strong>, and
            <strong> global technology leaders</strong> across the
            <strong> Automotive</strong>, <strong>IT</strong>, and
            <strong> Medical Embedded</strong> industries to drive engineering excellence worldwide.
          </p>
          <p className="hero-tagline">Where Technology Meets Excellence</p>
        </div>
      </div>

      {/* About Intro */}
      <section className="about-modern">
  <div className="about-modern-wrapper">
    <h2>Who We Are</h2>

    {/* Main Statement Card */}
    <div className="about-card main-card">
      <p>
        <strong>PRAVSTA</strong> specializes in 
        <span> Automotive Embedded Engineering</span>, 
        <span> IT Solutions</span>, and 
        <span> Product-Based Services</span>.
      </p>
    </div>

    {/* Features / Values */}
    <div className="about-cards">
      <div className="about-card feature-card">
        <i className="icon">💡</i>
        <p><strong>Innovation:</strong> Driving technology excellence and creative solutions.</p>
      </div>
      <div className="about-card feature-card">
        <i className="icon">⚙️</i>
        <p><strong>Reliability:</strong> Delivering robust, consistent engineering solutions.</p>
      </div>
      <div className="about-card feature-card">
        <i className="icon">🤝</i>
        <p><strong>Customer-Centric:</strong> Focusing on your goals and business transformation.</p>
      </div>
    </div>

    {/* Collaboration Statement */}
    <div className="about-card main-card">
      <p>
        Collaborating with <strong>OEMs</strong>, <strong>Tier-1 suppliers</strong>, and 
        <strong> technology leaders</strong>, we deliver cutting-edge solutions and sustainable transformations.
      </p>
    </div>

    {/* Tagline */}
    <p className="about-modern-tagline">Where Technology Meets Excellence</p>
      {/* Image Below Section */}
    <div className="about-modern-image">
      <img 
        src={require("../components/pages/images/core.png")} 
        alt="PRAVSTA Technology" 
      />
    </div>

  </div>
</section>


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
              <li>SDV Cockpit IVI / IVE / IVC, TCU</li>
              <li>Embedded ECUs – Power Seat, Motor Controller</li>
              <li>CAN Diagnostics, Bootloader, Power Management</li>
              <li>Functional Safety & Cybersecurity</li>
              <li>AUTOSAR & non-AUTOSAR solutions</li>
              <li>Hardware, Software & Mechanical Engineering Services</li>
              <li>Data Loggers & Cloud Services</li>
              <li>Modems – eSIM, 4G, Automation & Industrial PCs</li>
            </ul>
          </div>
        </section>

        {/* Data Science */}
        <section className="about-section reverse">
          <div className="about-image">
            <img src={dataSciImg} alt="Data Science & Hardware" />
          </div>
          <div className="about-text">
            <h2>Data Science, Engineering & Hardware</h2>
            <h3>Data Engineering</h3>
            <ul>
              <li>ETL Development, Analytics & Data Warehouse</li>
              <li>Data Management & CloudOps</li>
            </ul>
            <h3>Artificial Intelligence</h3>
            <ul>
              <li>Algorithm Development & Validation</li>
              <li>Machine Vision & MLOps</li>
            </ul>
            <h3>Hardware Expertise</h3>
            <ul>
              <li>Smart clusters, Infotainment, ECUs, Sensors</li>
              <li>PCB & RF Designs – BLE, WiFi, 4G</li>
              <li>DFMEA, PFMEA, Altium / OrCAD simulation</li>
              <li>EMI / EMC compliance – ISO16750-2, ISO7637-2, CISPR25</li>
            </ul>
          </div>
        </section>

        {/* Web & Mobile */}
        <section className="about-section">
          <div className="about-image">
            <img src={webImg} alt="Web & Mobile Development" />
          </div>
          <div className="about-text">
            <h2>Web & Mobile App Development</h2>
            <p>
              Designing, developing, and delivering robust web & mobile applications
              (Android & iOS) from idea to market-ready solutions.
            </p>
            <ul>
              <li>Product ideation & conceptualization</li>
              <li>Design, development, testing & certification</li>
              <li>Manufacturing & long-term support</li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="about-section reverse">
          <div className="about-image">
            <img src={servicesImg} alt="IT & Engineering Services" />
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
              <li>Real Estate Management – RE-FX, C4RE, IFRS16</li>
              <li>Data Migration to SAP S/4HANA (ETL – BODS / ADM)</li>
              <li>Custom Development – RAP, Fiori, UI5, BTP</li>
              <li>SAP BASIS – Consulting, ChaRM, Optimization</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutContent;
