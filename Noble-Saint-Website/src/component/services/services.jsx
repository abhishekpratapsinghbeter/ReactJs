import React from 'react';
import './services.css';
import { FaDumbbell, FaUsers, FaAppleAlt, FaChartLine, FaSoap, FaClock } from 'react-icons/fa';

const services = [
  {
    icon: <FaDumbbell />,
    title: 'Personal Training',
    description: 'One-on-one sessions with certified trainers for personalized guidance and faster results.',
  },
  {
    icon: <FaUsers />,
    title: 'Group Workouts',
    description: 'Motivating group sessions including HIIT, circuit training, and more to boost strength and stamina.',
  },
  {
    icon: <FaAppleAlt />,
    title: 'Diet & Nutrition',
    description: 'Get basic diet guidance and meal recommendations to fuel your fitness journey.',
  },
  {
    icon: <FaChartLine />,
    title: 'Fitness Assessment',
    description: 'Track your progress with regular evaluations and customized improvement strategies.',
  },
  {
    icon: <FaSoap />,
    title: 'Clean Environment',
    description: 'Hygienic and well-maintained facility with regular cleaning and sanitization.',
  },
  {
    icon: <FaClock />,
    title: 'Flexible Timing',
    description: 'Workout during our morning or evening batches: 6–10 AM & 5–10 PM (Mon–Sat).',
  },
];

const Services = () => {
  return (
    <section className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
