import React from "react";
import "./compenents.css";
import img1 from "../assets/about/14_HVAC-MEP_143280593 1.png";
import img2 from "../assets/about/picxy_DD228481 2.png";
import img3 from "../assets/about/team-1 1.png";
import img4 from "../assets/about/14_HVAC-MEP_143280593 1.png";
import img5 from "../assets/about/picxy_DD228481 2.png";
import img6 from "../assets/about/team-1 1.png";

const HorizantalScroll = () => {
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

export default HorizantalScroll;
