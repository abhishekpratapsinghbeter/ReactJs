import React, { useState } from "react";
import "./App.css";
import Carousel from "./component/caraousel/caraousel";
import logo from "./images/gym_logo.png";
import About from "./component/about/about ";
import ReviewCarousel from "./component/reviews/reviews";
import GymPackages from "./component/packages/package";
import Services from "./component/services/services";
import Gallery from "./component/gallery/gallery";
import Contact from "./component/contact/contact";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Noble Saint Gym Logo" className="navbar-logo1" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navbar links for desktop */}
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Navbar links for mobile */}
        <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
          <li><a href="#reviews" onClick={toggleMenu}>Reviews</a></li>
          <li><a href="#packages" onClick={toggleMenu}>Packages</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="home"><Carousel /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="gallery"><Gallery /></section>
      <section id="reviews"><ReviewCarousel /></section>
      <section id="packages"><GymPackages /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;