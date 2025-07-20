import React, { useState, useEffect, useRef } from "react";
import "../caraousel/caraousel1.css";
import { FaDumbbell, FaRunning, FaTrophy, FaMountain } from "react-icons/fa";

const slides = [
  { title: "Enhance Your Strength", icon: <FaDumbbell /> },
  { title: "Let’s Get Fit", icon: <FaRunning /> },
  { title: "Train Like a Pro", icon: <FaTrophy /> },
  { title: "Push Your Limits", icon: <FaMountain /> },
  { title: "Stronger Every Day", icon: <FaDumbbell /> },
  { title: "Sweat. Smile. Repeat.", icon: <FaRunning /> },
  { title: "Unleash Your Beast", icon: <FaTrophy /> },
  { title: "Discipline = Freedom", icon: <FaMountain /> },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, 10000); // Change every 10 seconds
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const getVisibleSlides = () => {
    const center = slides[currentIndex];
    const left = slides[(currentIndex - 1 + slides.length) % slides.length];
    const right = slides[(currentIndex + 1) % slides.length];
    return [left, center, right];
  };

  return (
    <div
      className="custom-carousel"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {getVisibleSlides().map((slide, i) => (
        <div key={i} className={`carousel-card ${i === 1 ? "active" : ""}`}>
          <div className="icon">{slide.icon}</div>
          <h3>{slide.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
