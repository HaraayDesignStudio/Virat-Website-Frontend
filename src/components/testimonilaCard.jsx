import React from "react";

const TestimonialsCard = ({ image, name, role, disc }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} />
      <p className="testimonial-name">
        {name}
        <br />
        <span>{role}</span>
      </p>

      <p className="testimonila-disc">{disc}</p>
    </div>
  );
};

export default TestimonialsCard;
