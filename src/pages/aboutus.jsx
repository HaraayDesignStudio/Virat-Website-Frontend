import React from "react";
import img1 from "../assets/Rectangle 162.png"

const Aboutus = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-vision">
          <p className="about-vision-heading">Vision</p>
          <p className="about-vision-disc">
            Our vision is to be a global company to integrate and bring in
            international standards into our entity along with integration of
            employees and top management.
          </p>
        </div>
        <div className="about-one-img">
            <img src={img1} alt="img1" />
        </div>
        <div className="about-mission">
          <p className="about-mission-heading">Mision</p>
          <p className="about-mission-disc">
            Our mission is to be the ultimate stop for facility management
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
