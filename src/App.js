import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import VisionMission from "./pages/VisionMission";
import Terms from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Service Pages
import Automotive from "./pages/Automotive";
import EmbeddedSystems from "./pages/EmbeddedSystems";
import DataEngineering from "./pages/DataEngineering";
import AI from "./pages/AI";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

        {/* Service Subpages */}
        <Route path="/services/automotive" element={<Automotive />} />
        <Route path="/services/embedded-systems" element={<EmbeddedSystems />} />
        <Route path="/services/data-engineering" element={<DataEngineering />} />
        <Route path="/services/ai" element={<AI />} />
      </Routes>
    </Router>
  );
};

export default App;
