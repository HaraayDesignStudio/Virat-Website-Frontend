import React from "react";
import ButtonComponents from "./buttonComponents";
import "./compenents.css";

const ServiceCard = ({ image, heading, disc, func }) => {
  return (
    <div className="card-wrapper">
      <img src={image} alt={heading} />
      <p className="heading-card">{heading}</p>
      <p className="disc-card">{disc}</p>
      <div>
        <ButtonComponents
          className="card-button"
          name={"About Us"}
          onClickFun={func}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
