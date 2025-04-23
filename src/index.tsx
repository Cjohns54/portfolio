import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "./screens/Box/Box";
import { HardwareProjects } from "./screens/Projects/HardwareProjects";
import { Contact } from "./screens/Contact/Contact";
import { SmartDesk } from "./screens/Projects/SmartDesk";
import "./index.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Box />} />
        <Route path="/hardware-projects" element={<HardwareProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/smart-desk" element={<SmartDesk />} />
      </Routes>
    </Router>
  </StrictMode>
);