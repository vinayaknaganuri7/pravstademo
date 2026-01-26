import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./EmbeddedSystems.css";

// Replace with your real images
import ecuImg from "../components/pages/images/ECU.png";
import motorImg from "../components/pages/images/Firmware.png";
import middlewareImg from "../components/pages/images/Architecture.png";

const EmbeddedSystems = () => {
  const sections = [
    {
      img: ecuImg,
      title: "Custom ECU Design",
      desc: [
        "We design application-specific controllers tailored to modern vehicle architectures:",
        "Power Seat Controllers: Intelligent memory positioning and smooth motor control.",
        "Motor Control Units: High-efficiency algorithms for various automotive actuators.",
        "Body Control Modules (BCM): Managing lighting, windows, and locking systems."
      ]
    },
    {
      img: motorImg,
      title: "Low-Level Software (Firmware)",
      desc: [
        "Reliable hardware requires a rock-solid foundation. We provide:",
        "Custom Bootloaders: Secure and fast startup sequences for OTA updates.",
        "CAN Diagnostics: Deep integration of UDS (ISO 14229) and J1939 protocols for system health monitoring.",
        "Power Management: Optimized low-power modes to preserve vehicle battery life without sacrificing performance."
      ]
    },
    {
      img: middlewareImg,
      title: "Architecture & Middleware",
      desc: [
        "Whether your project requires industry-standard frameworks or lean, custom builds:",
        "AUTOSAR: Implementation of Classic and Adaptive AUTOSAR stacks.",
        "Non-AUTOSAR: Highly optimized, 'bare-metal' or RTOS-based solutions for cost-sensitive applications.",
        "Communication Protocols: Expert implementation of CAN, LIN, FlexRay, and Automotive Ethernet."
      ]
    }
  ];

  return (
    <div className="embedded-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="embedded-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Embedded Systems & ECU Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At PRAVSTA, we specialize in the design, development, and integration of high-performance embedded systems. Our expertise lies in creating the "brains" of the vehicle—reliable Electronic Control Units (ECUs) that manage everything from passenger comfort to critical powertrain functions.
        </motion.p>
      </section>

      {/* SECTIONS */}
      {sections.map((item, index) => (
        <motion.section
          key={index}
          className={`embedded-section ${index % 2 !== 0 ? "reverse" : ""}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-image">
            <motion.img
              src={item.img}
              alt={item.title}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
          <div className="section-text">
            <h2>{item.title}</h2>
            <ul>
              {item.desc.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.section>
      ))}


      
      <Footer />
    </div>
  );
};

export default EmbeddedSystems;
