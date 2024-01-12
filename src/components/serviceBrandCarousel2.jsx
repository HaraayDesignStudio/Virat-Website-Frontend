import React from "react";
import "./compenents.css";
import img1 from "../assets/brnads/2560px-JLL_logo 1.png";
import img2 from "../assets/brnads/356674 1.png";
import img3 from "../assets/brnads/CBRE_Group_logo_(till_2021) 1.png";
import img4 from "../assets/brnads/hdfc-bank-logo-removebg-preview 1.png";
import img5 from "../assets/brnads/oberoi-realty5010-removebg-preview 1.png";
import img6 from "../assets/brnads/png-transparent-dhl-hd-logo-removebg-preview 1.png";

const ServiceBrandCarousel2 = () => {
  return (
    <div className="wrapper">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img alt="slide" src={img4} />
          </div>
          <div className="slide">
            <img alt="slide" src={img5} />
          </div>
          <div className="slide">
            <img alt="slide" src={img6} />
          </div>
          <div className="slide">
            <img alt="slide" src={img2} />
          </div>
          <div className="slide">
            <img alt="slide" src={img1} />
          </div>
          <div className="slide">
            <img alt="slide" src={img3} />
          </div>
          <div className="slide">
            <img alt="slide" src={img4} />
          </div>
          <div className="slide">
            <img alt="slide" src={img5} />
          </div>
          <div className="slide">
            <img alt="slide" src={img1} />
          </div>
          <div className="slide">
            <img alt="slide" src={img2} />
          </div>
          <div className="slide">
            <img alt="slide" src={img3} />
          </div>
          <div className="slide">
            <img alt="slide" src={img4} />
          </div>
          <div className="slide">
            <img alt="slide" src={img5} />
          </div>
          <div className="slide">
            <img alt="slide" src={img6} />
          </div>
          <div className="slide">
            <img alt="slide" src={img3} />
          </div>
          <div className="slide">
            <img alt="slide" src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBrandCarousel2;
