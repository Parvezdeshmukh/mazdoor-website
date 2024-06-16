import React, { useState } from "react";
import "../../assets/css/style.css";

const Navbar = () => {
  const [isNavbarMobile, setIsNavbarMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsNavbarMobile(!isNavbarMobile);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsNavbarMobile(false);
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* ======= Header ======= */}
      <header
        id="header"
        className={`fixed-top ${isMenuOpen ? "header-scrolled" : ""}`}
      >
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Mazdur</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
          <nav
            id="navbar"
            className={`navbar ${isNavbarMobile ? "navbar-mobile" : ""} ${
              isMenuOpen ? "navbar-hidden" : ""
            }`}
          >
            <ul>
              <li>
                <a
                  href="#hero"
                  className="nav-link scrollto active"
                  onClick={handleLinkClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="nav-link scrollto"
                  onClick={handleLinkClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="nav-link scrollto"
                  onClick={handleLinkClick}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="nav-link scrollto"
                  onClick={handleLinkClick}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#contact"
                  onClick={handleLinkClick}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="getstarted scrollto"
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  Login App
                </a>
              </li>
            </ul>
            <i
              className={`bi ${
                isMenuOpen ? "bi-x" : "bi-list"
              } mobile-nav-toggle`}
              onClick={handleToggle}
            ></i>
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </div>
  );
};

export default Navbar;

// git statu
// git add .
// commit -m "Mrer"
// git push
