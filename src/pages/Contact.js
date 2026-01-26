import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-3d-page">
      <Navbar />

      <div className="contact-3d-wrapper">
        <h1 style={{ marginBottom: "30px" }}>Contact Us</h1>

        <div className="top-cards">
          <div className="neo-card">
            <h3>📞 Phone</h3>
            <p>+91 88050 17849</p>
          </div>

          <div className="neo-card">
            <h3>📧 Email</h3>
            <p className="accent">
              <a href="mailto:pavan.parlapelly@pravsta.com">
                pavan.parlapelly@pravsta.com
              </a>
            </p>
          </div>
        </div>

        <div className="neo-card large">
          <h3>🏢 Registered Office</h3>
          <p>
            PRAVSTA TECHNOLOGY PRIVATE LIMITED <br />
            4th Floor, Balaji Business Center <br />
            Pune–Mumbai Highway (NH-4) <br />
            Next to Hotel Spice Court, Baner <br />
            Pune, Maharashtra – 411045
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
