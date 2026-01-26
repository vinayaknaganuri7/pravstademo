import React from "react";
import "./VisionMission.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VisionMission = () => {
  return (
    <>
      <Navbar />

      {/* Vision & Mission Section */}
      <section className="about-intro" style={{ marginTop: "120px" }}>
        <h2>Vision & Mission</h2>

        <p>
          To be a <strong>trusted global partner</strong>, driving digital
          transformation and innovation across the
          <strong> Automotive</strong>, <strong>IT</strong>, and
          <strong> Embedded Systems</strong> industries.
        </p>

        <p>
          We are committed to a <strong>customer-centric approach</strong>,
          ensuring quality, reliability, and excellence in execution.
          By leveraging our engineering expertise, we deliver innovative
          solutions that empower businesses worldwide.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default VisionMission;
