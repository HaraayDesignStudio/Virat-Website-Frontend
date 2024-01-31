import React from "react";
import "./compenents.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ image, heading, disc, func, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services", {
      state: {
        head: heading,
        dis: disc,
        img: image,
      },
    });
  };
  return (
    <div className="card-container-service">
      <div className="card-wrapper">
        <img src={image} alt={heading} />
        <span className="heading-card">{heading}</span>
        <div className="card-circle" onClick={handleClick}>
          <HiArrowLongRight />
          <p>Know more</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
