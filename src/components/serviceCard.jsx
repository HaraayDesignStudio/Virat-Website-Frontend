import React from "react";
import "./compenents.css";
import ButtonCom from "./buttonCom";

const ServiceCard = ({ image, heading, disc, func }) => {
  return (
    <div className="card-wrapper">
      <img src={image} alt={heading} />
      <p className="heading-card">{heading}</p>
      <p className="disc-card">{disc}</p>
      <div>
        <ButtonCom name={"About Us"} link={""} />
      </div>
    </div>
  );
};

export default ServiceCard;
