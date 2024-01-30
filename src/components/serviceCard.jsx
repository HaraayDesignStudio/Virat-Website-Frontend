import React from "react";
import "./compenents.css";
import { HiArrowLongRight } from "react-icons/hi2";

const ServiceCard = ({ image, heading, disc, func, id }) => {
  return (
    <div className="card-container-service">
      <div className="card-wrapper">
        <img src={image} alt={heading} />
        <span className="heading-card">{heading}</span>
        <div className="card-circle">
        <HiArrowLongRight />
        <p>Know more</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
