import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Automotive.css";

import autoImg from "../components/pages/images/automotive.png";
import ecuImg from "../components/pages/images/V-Cycle.png";
import cloudImg from "../components/pages/images/Cloud.png";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const Automotive = () => {
  return (
    <div className="auto-page">
      <Navbar />

      {/* HERO */}
      <section className="auto-hero">
        <h1>Automotive Engineering</h1>
        <p>
          End-to-end automotive engineering solutions across the complete
          <strong> V-Cycle</strong>.
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="auto-split">
        <motion.img
          src={autoImg}
          alt="Software Defined Vehicle"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        />

        <motion.div
          className="auto-content"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>V-Cycle & Software Defined Vehicle</h2>
          <p>
            We deliver automotive solutions across the entire V-Cycle, from
            system requirements and architecture to integration and validation.
            Our expertise includes Software Defined Vehicle platforms such as
            Cockpit IVI, IVE, IVC, and Telematics Control Units (TCU).
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <section className="auto-split reverse">
        <motion.img
          src={ecuImg}
          alt="Embedded ECU"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        />

        <motion.div
          className="auto-content"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Embedded ECU Development</h2>
          <p>
            We design and develop embedded ECUs including power seat controllers
            and motor controllers, integrating bootloaders, CAN diagnostics, and
            optimized power management for reliable in-vehicle performance.
          </p>
        </motion.div>
      </section>

      {/* SECTION 3 */}
      <section className="auto-split">
        <motion.img
          src={cloudImg}
          alt="Cloud & Connectivity"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        />

        <motion.div
          className="auto-content"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Connectivity, Safety & Cloud</h2>
          <p>
            Our solutions include CAN diagnostics, AACP projection, Bluetooth and
            Wi-Fi testing, functional safety, cybersecurity, AUTOSAR and
            non-AUTOSAR architectures, data loggers, cloud platforms, and modem
            integration with eSIM and 4G.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Automotive;
