import React from "react";
import "./compenents.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const FooterCom = ({ name, link, img }) => {
  const handleCLick = () => {};
  return (
    <div className="footercom">
      <div className="footercom-content">
        <img src={img} alt="image1" className="footercom-iamge" />
        <p className="footercom-name">{name}</p>
      </div>
      <div onClick={handleCLick} className="footercom-arrow">
        <IoIosArrowRoundForward className="footercom-icon" />
      </div>
    </div>
  );
};

export default FooterCom;
