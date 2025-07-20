import React from 'react';
import "../about/about.css";
import logo from "../../images/gym_logo.png"
const AboutNSF = () => {
    return (
      <section className="nsf-container">
        <div className="nsf-logo-wrapper">
          <img src={logo} alt="Noble Saint Fitness Logo" className="nsf-logo" />
        </div>
        <div className="nsf-content">
          <h2>About Noble Saint Gym</h2>
          <p>
            Noble Saint Gym is a modern gym in Prayagraj focused on fitness, transformation,
            and community. With personalized training programs, clean facilities, and expert
            guidance, we help members of all levels achieve their goals.
          </p>
          <p>
            Our lead trainer <strong>Aditya Pratap Singh</strong> is highly experienced and 
            dedicated to helping individuals get real results. Whether you're new or advanced, 
            you’ll find expert mentorship and tailored workouts here.
          </p>
          <p>
            Join us today and experience fitness with purpose, passion, and professionalism.
          </p>
        </div>
      </section>
    );
  };
  

export default AboutNSF;
