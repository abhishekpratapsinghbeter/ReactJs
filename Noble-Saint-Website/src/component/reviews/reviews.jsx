// ReviewCarousel.jsx
import React, { useState, useEffect } from 'react';
import reviews from './reviews.json';
import './reviews.css';

export default function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = window.innerWidth <= 768 ? 1 : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(idx => (idx + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // pick the 3 (or 1) visible reviews
  const visible = Array.from({ length: visibleCount }).map((_, i) => 
    reviews[(activeIndex + i) % reviews.length]
  );

  return (
    <div className="review-carousel1">
      {visible.map((r, i) => (
        <div
          key={i}
          className={
            i === Math.floor(visibleCount/2)
              ? 'review-card1 active'
              : 'review-card1'
          }
        >
          <h3>{r.author_name}</h3>
          <p>{'★'.repeat(r.rating)}</p>
          <p>"{r.text}"</p>
        </div>
      ))}
    </div>
  );
}
