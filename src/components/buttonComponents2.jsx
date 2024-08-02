import React from "react";
import "../pages/pages.css";

const ButtonComponents2 = ({ name, onClickFun }) => {
  return (
    <div
      className="button-for-landing button-for-landing-two"
      onClick={onClickFun}
    >
      {name}
    </div>
  );
};

export default ButtonComponents2;
