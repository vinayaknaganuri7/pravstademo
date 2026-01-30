import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <section className="privacy-page">
        {/* Decorative background shapes */}
        <div className="decor-shape shape-top-left"></div>
        <div className="decor-shape shape-bottom-right"></div>

        <div className="privacy-container">
          <h1>Privacy Policy</h1>

          <p>
            Pravsta Consulting (“Pravsta”, “we”, “our”, “us”) respects your privacy and is committed to protecting the personal information you share with us through our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, company name, job role, and any other information you voluntarily provide when you contact us or fill out forms on our website. We may also automatically collect non-personal information such as your IP address, browser type, device information, pages visited, and time spent on our website.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            The information we collect is used to respond to your inquiries, provide our services, improve our website and services, send business-related communications, support recruitment and resource engagement activities, and comply with legal and regulatory requirements.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to others. We may share your information only with trusted service providers who assist us in operating our website or conducting our business, when required by law or legal process, to protect our rights and safety, or with your consent.
          </p>

          <h2>4. Security Measures</h2>
          <p>
            We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or method of electronic storage is completely secure, and therefore we cannot guarantee absolute security.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website may use cookies to enhance user experience, analyze website traffic, and understand visitor behavior. You may choose to disable cookies through your browser settings if you prefer, but this may affect the functionality of certain parts of the website.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices, policies, or content of those external websites, and we encourage you to review their privacy policies before providing any personal information.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, correct, update, or request deletion of your personal information and to withdraw your consent at any time. To exercise these rights, you may contact us using the contact details provided below.
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy and to comply with legal, regulatory, and business requirements.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            If you access our website from outside India, your information may be transferred to, stored, and processed in India or other countries where we or our service providers operate, and by using our website you consent to such transfer and processing.
          </p>

          <h2>10. Compliance</h2>
          <p>
            We comply with applicable data protection laws, including the Information Technology Act, 2000 (India) and other relevant regulations, and where applicable, we also follow international data protection standards such as GDPR for users located in the European Union.
          </p>

          <h2>11. Updates</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised effective date.
          </p>

          <div className="privacy-contact">
            <p><strong>Pravsta Consulting</strong></p>
            <p>Email: <a href="mailto:info@pravsta.com">info@pravsta.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
