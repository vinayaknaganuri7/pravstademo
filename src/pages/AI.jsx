import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AI.css";

// Replace these with real images
import pathPlanningImg from "../components/pages/images/Algorithm.png";
import visionImg from "../components/pages/images/Machine.png";
import silImg from "../components/pages/images/Algorithmai.png";
import mlopsImg from "../components/pages/images/MLOps.png";

const AI = () => {
  const sections = [
    {
      img: pathPlanningImg,
      title: "Algorithm Development",
      desc: [
        "Specialized logic for a complex world. We design the high-performance 'decision engines' that define vehicle behavior.",
        "Path Planning: Developing trajectories for smooth navigation in urban and highway environments.",
        "Energy Management: AI-driven optimization to extend EV range and maximize battery life.",
        "ADAS Logic: Creating intelligent systems for Automatic Emergency Braking (AEB), Adaptive Cruise Control (ACC), and Lane Centering."
      ]
    },
    {
      img: visionImg,
      title: "Machine Vision",
      desc: [
        "The eyes of the autonomous vehicle. Our computer vision models interpret the world with superhuman precision.",
        "Object Detection & Tracking: Real-time identification of pedestrians, vehicles, and cyclists.",
        "Environmental Mapping: Processing Lidar and Camera feeds to understand complex road geometries and lane markings.",
        "Traffic Sign Recognition: Ensuring the vehicle reacts instantly to speed limits, signals, and warnings."
      ]
    },
    {
      img: silImg,
      title: "Algorithm Validation (SIL)",
      desc: [
        "Safety is not an option—it’s the standard. We utilize Software-in-the-Loop (SIL) to rigorously stress-test our AI before it ever touches a real road.",
        "Edge Case Simulation: Testing how AI reacts to extreme weather or unpredictable human behavior.",
        "Performance Benchmarking: Ensuring low-latency execution and high accuracy across all scenarios."
      ]
    },
    {
      img: mlopsImg,
      title: "MLOps (Machine Learning Operations)",
      desc: [
        "Continuous intelligence through the cloud. The vehicle’s intelligence should never be static. We provide the infrastructure for ongoing improvement.",
        "Automated Retraining: Pipelines that learn from new edge cases encountered in the field.",
        "OTA Deployment: Seamlessly pushing updated AI models to your fleet via Over-the-Air updates.",
        "Fleet Monitoring: Real-time tracking of AI performance and health across millions of miles."
      ]
    }
  ];

  return (
    <div className="ai-page">
      <Navbar />

      {/* HERO */}
      <section className="ai-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Artificial Intelligence: The Brain of the Next-Generation Vehicle
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At PRAVSTA, we don't just write code; we build the cognitive foundation of autonomous mobility. 
          Our AI solutions transform raw sensor data into split-second decisions, ensuring that every journey is safer, smarter, and more efficient.
        </motion.p>
      </section>

      {/* SECTIONS */}
      {sections.map((item, index) => (
        <motion.section
          key={index}
          className={`ai-section ${index % 2 !== 0 ? "reverse" : ""}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="ai-image">
            <motion.img
              src={item.img}
              alt={item.title}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
          <div className="ai-text">
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

export default AI;
