import React from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Navbar from "./Pages/Navbar";
import {Routes, Route} from "react-router-dom"

import "./App.css";

const App = () => {

  return(
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    </div>
  )
}

export default App;
