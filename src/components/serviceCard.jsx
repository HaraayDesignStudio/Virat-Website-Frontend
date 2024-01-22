import React from "react";
import "./compenents.css";

const ServiceCard = ({ image, heading, disc, func, id }) => {
  return (
    <div className="card-container-service">
      <div className="card-wrapper">
        <img src={image} alt={heading} />
        <span className="heading-card">{heading}</span>
      </div>
      <div className={`${id === 3 ? "card-sidebar3" : "card-sidebar"}`}>
        <div className="card-service-line"></div>
        <div className="card-disc">
          <span className="heading-card2">{heading}</span>
          <p className="disc-card">{disc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
