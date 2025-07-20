import React from 'react';
import './package.css';

const packages = [
  { label: 'Monthly', price: 900 },
  { label: 'Quarterly', price: 2600 },
  { label: 'Half-Yearly', price: 4300 },
  { label: 'Yearly', price: 7000 },
];

const GymPackages = () => {
  return (
    <section className="gym-packages">
      <h2 className="section-title">Membership Packages</h2>

      <div className="package-cards">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <h3>{pkg.label}</h3>
            <p className="price">₹{pkg.price}</p>
          </div>
        ))}
      </div>

      <div className="fees-info">
        <p><strong>📌 ₹200</strong> one-time registration fee</p>
        <p><strong>📌 ₹50</strong> trial fee (adjustable in final membership)</p>
        <p className="note">All charges are added to the selected package after registration.</p>
      </div>

      <div className="timing-info">
        <h3>🏋️ Gym Timings</h3>
        <p><strong>Monday to Saturday</strong></p>
        <p>Morning: 6:00 AM – 10:00 AM</p>
        <p>Evening: 5:00 PM – 10:00 PM</p>
      </div>
    </section>
  );
};

export default GymPackages;
