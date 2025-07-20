import React from 'react';
import './gallery.css';

const images = [
  'https://lh3.googleusercontent.com/p/AF1QipPtF_kkokiXM2Nc9mn4a4_DI7lHEVu0b8rsSCgX=s1360-w1360-h1020',
  'https://lh3.googleusercontent.com/p/AF1QipN1uH5ja2Tm-aF4q9HN5osONgQ9tscEZ6B5tmex=s1360-w1360-h1020',
  'https://lh3.googleusercontent.com/p/AF1QipOtvPAN5zCjcceGllWjlmp3YWtR187WKJqGNmCD=w141-h101-n-k-no-nu',
  'https://lh3.googleusercontent.com/p/AF1QipMYxNNoXRnKPwoS3B-yzYLwLDb0uey36hHBvWTX=s1360-w1360-h1020',
  'https://lh3.googleusercontent.com/p/AF1QipNdigo6Q9mxn8EVCg2o3q38vf7q9YDbtGQa-np0=s1360-w1360-h1020',
  // Add more URLs here
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`gallery-${index + 1}`}
            className="gallery-img"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
