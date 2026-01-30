import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TermsOfService.css";

const termsContent = [
  {
    number: 1,
    title: "Website Information",
    text: "The content on this website is provided for general informational purposes only and does not constitute professional, legal, or technical advice. While we strive to keep the information accurate, Pravsta makes no warranties regarding completeness or reliability."
  },
  {
    number: 2,
    title: "Acceptable Use",
    text: "You agree to use this website only for lawful purposes and must not introduce malware or attempt unauthorized access."
  },
  {
    number: 3,
    title: "Intellectual Property",
    text: "All intellectual property rights in the content, design, text, graphics, logos, images, and software on this website are owned by or licensed to Pravsta."
  },
  {
    number: 4,
    title: "User Submissions",
    text: "Any information you submit must be accurate and lawful and may be used in accordance with our Privacy Policy."
  },
  {
    number: 5,
    title: "Third-Party Links",
    text: "This website may contain links to third-party websites. Pravsta is not responsible for the content or policies of third-party websites."
  },
  {
    number: 6,
    title: "Limitation of Liability",
    text: "To the fullest extent permitted by law, Pravsta shall not be liable for any damages arising from your use of this website."
  },
  {
    number: 7,
    title: "Modifications",
    text: "Pravsta reserves the right to modify these Terms at any time without notice."
  },
  {
    number: 8,
    title: "Governing Law",
    text: "These Terms are governed by the laws of India."
  }
];

const TermsOfService = () => {
  return (
    <>
      <Navbar />

      <section className="tos-page">
        <div className="tos-container">
          <h1>Terms of Service</h1>

          <p>
            By accessing and using the Pravsta Consulting (“Pravsta”, “we”, “our”, “us”) website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use this website.
          </p>

          {termsContent.map((item) => (
            <div className="tos-section" key={item.number}>
              <h2>{item.number}. {item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}

          <div className="tos-contact">
            <p><strong>Pravsta Consulting</strong></p>
            <p>Email: <a href="mailto:info@pravsta.com">info@pravsta.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsOfService;
