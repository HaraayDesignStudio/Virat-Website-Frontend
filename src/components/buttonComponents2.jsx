import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../pages/pages.css";

const ButtonComponents2 = ({ name, onClickFun }) => {
  return (
    <div className="homepage-headtext-button transpirant" onClick={onClickFun}>
      <span className="homepage-headtext-content">
        <p>{name}</p>
      </span>
      <div className="circular-button">
        <IoIosArrowRoundForward className="homepage-headtext-icon" />
      </div>
    </div>
  );
};

export default ButtonComponents2;
