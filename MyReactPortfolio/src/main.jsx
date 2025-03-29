import React from "react";
import './index.css';
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<AboutMe />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
