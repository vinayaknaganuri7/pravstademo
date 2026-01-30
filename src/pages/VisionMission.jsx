import React from "react";
import "./VisionMission.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import visionImage from "../components/pages/images/Vision.png";

const VisionMission = () => {
  return (
    <>
      <Navbar />

      {/* Image */}
      <section className="vm-image-section">
        <img src={visionImage} alt="Vision and Mission" />
      </section>

      {/* Content */}
      <section className="vm-text-section">
        <h1>Vision & Mission</h1>

        <div className="vm-divider"></div>

        <div className="vm-content">
          <h2>Our Vision</h2>
          <p>
            To be a <strong>trusted global partner</strong>, driving digital
            transformation and innovation across the
            <strong> Automotive</strong>, <strong> IT</strong>, and
            <strong> Embedded Systems</strong> industries.
          </p>

          <h2>Our Mission</h2>
          <p>
            We are committed to a <strong>customer-centric approach</strong>,
            ensuring quality, reliability, and excellence in execution.
            By leveraging our engineering expertise, we deliver innovative
            solutions that empower businesses worldwide.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VisionMission;
