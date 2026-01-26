import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./DataEngineering.css";

// Replace with real images
import dataImg from "../components/pages/images/DataEngineering.png";
import aiImg from "../components/pages/images/ArtificialIntelligence.png";
import hardwareImg from "../components/pages/images/Hardware.png";

const DataEngineering = () => {
  const sections = [
    {
      img: dataImg,
      title: "Data Engineering",
      desc: [
        "The backbone of a data-driven vehicle. We build robust pipelines that ensure your vehicle data is accurate, secure, and ready for analysis.",
        "ETL Development: Custom Extract, Transform, and Load processes to handle high-velocity sensor data.",
        "Data Analytics: Deep insights into vehicle performance, driver behavior, and system health.",
        "Data Warehouse: Scalable storage solutions for massive automotive datasets.",
        "Data Management: Ensuring data integrity, privacy, and compliance with industry standards.",
        "CloudOps: Managing cloud infrastructure to provide seamless, always-on connectivity and storage."
      ]
    },
    {
      img: aiImg,
      title: "Artificial Intelligence",
      desc: [
        "Intelligence that redefines the driving experience. We develop and validate the algorithms that allow vehicles to see, think, and react.",
        "Algorithm Development: Creating specialized logic for path planning, energy management, and ADAS.",
        "Algorithm Validation: Rigorous testing using Software-in-the-Loop (SIL) to ensure safety and accuracy.",
        "Machine Vision: Advanced image processing for object detection, lane tracking, and environment mapping.",
        "MLOps: Streamlining the machine learning lifecycle to deploy and update models via OTA updates reliably."
      ]
    },
    {
      img: hardwareImg,
      title: "Hardware & Tools",
      desc: [
        "Bridging the gap between code and the road. Our engineering team utilizes industrial-grade tools to capture and simulate real-world conditions.",
        "High-Speed Data Loggers: Capture every millisecond of CAN/LIN and Ethernet traffic.",
        "Validation Benches: Utilizing HIL (Hardware-in-the-Loop) to test AI models on real ECUs.",
        "Edge Computing: Deploying AI directly onto vehicle hardware for real-time processing."
      ]
    }
  ];

  return (
    <div className="data-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="data-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Data Engineering & Artificial Intelligence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At PRAVSTA, we combine data engineering, AI, and cutting-edge hardware to deliver intelligent, connected, and autonomous vehicle solutions.
        </motion.p>
      </section>

      {/* SECTIONS */}
      {sections.map((item, index) => (
        <motion.section
          key={index}
          className={`data-section ${index % 2 !== 0 ? "reverse" : ""}`}
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

export default DataEngineering;
