
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <main>
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>

        <footer className="footer">
          <p>© 2026 NexaTech. All Rights Reserved.</p>
          <p>Technology that moves you forward.</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
