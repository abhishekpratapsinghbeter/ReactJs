import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> +91 87657 34696</p>
          <p><strong>Email:</strong> <a href="mailto:noblesaintfitness@gmail.com">noblesaintfitness@gmail.com</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/noblesaintfitness" target="_blank" rel="noopener noreferrer">@noblesaintgym</a></p>
          <p><strong>Address:</strong> Jagmal Ka Hata, Chak Niratul, Rajrooppur, Prayagraj, Uttar Pradesh, 211016</p>
        </div>

        <div className="map-container">
          <h2>Find Us Here</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.9522621854094!2d81.7983389751719!3d25.4398594775556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb1cf0083ebf%3A0x8c966cec89ac1eb!2sNoble%20Saint%20Gym!5e0!3m2!1sen!2sin!4v1745482858532!5m2!1sen!2sin"
            width="100%" 
            height="400" 
            style={{ border: '0' }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
