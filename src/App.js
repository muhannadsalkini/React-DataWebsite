import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} status={404} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
