import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Service Pages
import Automotive from "./pages/Automotive";
import EmbeddedSystems from "./pages/EmbeddedSystems";
import DataEngineering from "./pages/DataEngineering";
import AI from "./pages/AI"; // ✅ Make sure AI.jsx exists

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

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
