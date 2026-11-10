
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">N</span>
          <span>NEXATECH</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-contact">
          <a href="mailto:nexatech@gmail.com">Email Us</a>
        </div>
      </nav>

      <div className="contact-strip">
        <span>Building a smarter digital future</span>
        <div>
          <a href="mailto:nexatech@gmail.com">
            nexatech@gmail.com
          </a>
          <a href="tel:+14532420988">
            +1 453-242-0988
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
