import React from "react";
import "../pages/pages.css";

const TestimonialsCard = ({ image, disc }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt="disc" />

      <p className="testimonila-disc">{disc}</p>
    </div>
  );
};

export default TestimonialsCard;
