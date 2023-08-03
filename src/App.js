/* 
ctrl + p to open files: 
  - > to see all options and settings
  - @ to scroll to symbol

ctrl + d to edit multi lines

alt + click to set multiple cursors

alt + arrow to shift a line 

alt + shift + arrow to copy and shift line
*/

import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} status={404} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
