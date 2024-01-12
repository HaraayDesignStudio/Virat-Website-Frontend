import React from "react";
import image1 from "../assets/SVG.png";
import "./compenents.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const FooterCom = ({ name, link }) => {
  const handleCLick = () => {};
  return (
    <div className="footercom">
      <div className="footercom-content">
        <img src={image1} alt="image1" className="footercom-iamge" />
        <p className="footercom-name">{name}</p>
      </div>
      <div onClick={handleCLick} className="footercom-arrow">
        <IoIosArrowRoundForward className="footercom-icon" />
      </div>
    </div>
  );
};

export default FooterCom;
