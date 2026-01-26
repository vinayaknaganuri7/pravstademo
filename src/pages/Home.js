import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./Home.css";

// Images
import embeddedImage from "../components/pages/images/embedded.jpeg";
import iotImage from "../components/pages/images/iot.jpg";
import dataToolsImage from "../components/pages/images/datasci.jpeg";

// Icons
import { FaCarSide, FaServer, FaCogs } from "react-icons/fa";

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, delay } }
});

const scaleUp = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } }
});

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Navbar + Hero */}
      <Navbar />
      <Hero />

      {/* ===============================
          COMPANY INTRO (GLASS CARD)
      =============================== */}
      <motion.section
        className="company-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="company-boxes" variants={fadeUp}>
          <h2 className="gradient-text">
            PRAVSTA – Smart Engineering Solutions
          </h2>
          <hr className="divider" />

          <div className="info-box">
            <p>
              PRAVSTA is a premier engineering solution provider specializing in{" "}
              <strong>
                Automotive Embedded Engineering, IT Solutions, and Product-Based
                Services
              </strong>
              . Our mission is to deliver innovative, scalable, and
              future-ready technology solutions.
            </p>
          </div>

          <div className="info-box">
            <p>
              We partner with global Automotive, IT, and Medical Embedded
              industries including <strong>OEMs</strong> and{" "}
              <strong>Tier-1 suppliers</strong> to build high-precision,
              reliable, and efficient systems.
            </p>
          </div>

          <div className="info-box">
            <p>
              Established in 2025, PRAVSTA delivers{" "}
              <strong>
                cutting-edge engineering solutions through innovation,
                expertise, and quality-first execution
              </strong>
              . We provide end-to-end support from concept to deployment.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* ===============================
          EXPERTISE CARDS (GLASS + HOVER)
      =============================== */}
      <motion.section
        className="expertise-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          {
            icon: <FaCarSide />,
            title: "Automotive Embedded",
            desc: "Advanced embedded engineering for global automotive OEMs and Tier-1 suppliers."
          },
          {
            icon: <FaServer />,
            title: "IT Solutions",
            desc: "Custom software, IT infrastructure, cloud deployment, and digital transformation services."
          },
          {
            icon: <FaCogs />,
            title: "Product Services",
            desc: "End-to-end engineering lifecycle support for product-based systems."
          }
        ].map((card, idx) => (
          <motion.div
            key={idx}
            className="expertise-card"
            variants={fadeIn(idx * 0.2)}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
            }}
          >
            <div className="card-icon gradient-icon">{card.icon}</div>
            <h3 className="gradient-text">{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* ===============================
          IMAGE GALLERY (HOVER ZOOM)
      =============================== */}
      <section className="company-images">
        {[embeddedImage, iotImage, dataToolsImage].map((img, idx) => (
          <motion.div
            key={idx}
            className="gallery-wrapper"
            variants={scaleUp(idx * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
            }}
          >
            <img src={img} alt="Tech showcase" className="gallery-img" />
            <div className="overlay">
              <p>Tech Showcase</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
